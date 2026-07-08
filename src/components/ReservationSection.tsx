import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE } from "../lib/motion";
import { LOCATIONS } from "../data/fakeData";

const STEPS = ["Data", "Horário", "Pessoas", "Seus dados", "Obs"] as const;
const TIMES = ["18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"];

interface FormState {
  date: string;
  time: string;
  people: number;
  name: string;
  phone: string;
  email: string;
  notes: string;
  location: string;
}

const EMPTY: FormState = {
  date: "",
  time: "",
  people: 2,
  name: "",
  phone: "",
  email: "",
  notes: "",
  location: LOCATIONS[0].name,
};

export default function ReservationSection() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(EMPTY);
  const [done, setDone] = useState(false);

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const canAdvance =
    (step === 0 && form.date) ||
    (step === 1 && form.time) ||
    (step === 2 && form.people > 0) ||
    (step === 3 && form.name && form.phone) ||
    step === 4;

  const next = () => {
    if (step < STEPS.length - 1) setStep((s) => s + 1);
    else setDone(true);
  };
  const back = () => {
    if (done) {
      setDone(false);
      setStep(0);
      setForm(EMPTY);
      return;
    }
    if (step > 0) setStep((s) => s - 1);
  };

  return (
    <section id="reservar" className="bg-charcoal px-6 py-24 text-cream md:px-10 md:py-32">
      <div className="mx-auto max-w-2xl">
        <span className="eyebrow mb-5">Reserve sua mesa</span>
        <h2 className="text-h2 font-extrabold text-cream">
          Um lugar à <span className="text-amber">brasa.</span>
        </h2>

        {/* progresso */}
        {!done && (
          <div className="mt-8 flex gap-2">
            {STEPS.map((s, i) => (
              <div key={s} className="flex-1">
                <div
                  className={`h-1 rounded-full transition-colors duration-300 ${
                    i <= step ? "bg-amber" : "bg-line-on-charcoal"
                  }`}
                />
                <span className="mt-2 block font-mono text-label uppercase tracking-[0.14em] text-muted-on-charcoal">
                  {i + 1}. {s}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* card */}
        <div className="mt-10 rounded-3xl border border-line-on-charcoal bg-charcoal-soft/60 p-8 md:p-10">
          <AnimatePresence mode="wait">
            {done ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: EASE.expo }}
              >
                <p className="font-mono text-label uppercase tracking-[0.18em] text-amber">
                  Reserva confirmada
                </p>
                <h3 className="mt-3 text-h3 font-bold text-cream">
                  Te esperamos, {form.name.split(" ")[0] || "chef"}!
                </h3>
                <dl className="mt-6 space-y-3 text-body text-muted-on-charcoal">
                  <Row k="Local" v={form.location} />
                  <Row k="Data" v={form.date || "—"} />
                  <Row k="Horário" v={form.time} />
                  <Row k="Pessoas" v={`${form.people}`} />
                  {form.notes && <Row k="Obs" v={form.notes} />}
                </dl>
                <button onClick={back} className="btn-clip mt-8 text-cream">
                  <span>Fazer outra reserva</span>
                  <span aria-hidden>↺</span>
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: EASE.springSoft }}
              >
                {/* passo 0 — data + local */}
                {step === 0 && (
                  <div className="space-y-6">
                    <Field label="Unidade">
                      <select
                        value={form.location}
                        onChange={(e) => set("location", e.target.value)}
                        className="w-full bg-transparent text-h4 font-bold text-cream outline-none"
                      >
                        {LOCATIONS.map((l) => (
                          <option key={l.name} value={l.name} className="bg-charcoal">
                            {l.name}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Data">
                      <input
                        type="date"
                        value={form.date}
                        onChange={(e) => set("date", e.target.value)}
                        className="w-full bg-transparent text-h4 font-bold text-cream outline-none [color-scheme:dark]"
                      />
                    </Field>
                  </div>
                )}

                {/* passo 1 — horário */}
                {step === 1 && (
                  <Field label="Horário">
                    <div className="flex flex-wrap gap-2">
                      {TIMES.map((t) => (
                        <button
                          key={t}
                          onClick={() => set("time", t)}
                          className={`rounded-full border px-4 py-2.5 font-mono text-body transition-colors ${
                            form.time === t
                              ? "border-amber bg-amber text-charcoal"
                              : "border-line-on-charcoal text-cream hover:border-amber"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </Field>
                )}

                {/* passo 2 — pessoas */}
                {step === 2 && (
                  <Field label="Quantas pessoas?">
                    <div className="flex items-center gap-6">
                      <button
                        onClick={() => set("people", Math.max(1, form.people - 1))}
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-line-on-charcoal text-h4 text-cream hover:border-amber"
                        aria-label="Diminuir"
                      >
                        −
                      </button>
                      <span className="text-h1 font-extrabold text-amber">{form.people}</span>
                      <button
                        onClick={() => set("people", Math.min(20, form.people + 1))}
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-line-on-charcoal text-h4 text-cream hover:border-amber"
                        aria-label="Aumentar"
                      >
                        +
                      </button>
                    </div>
                  </Field>
                )}

                {/* passo 3 — dados */}
                {step === 3 && (
                  <div className="space-y-6">
                    <Field label="Seu nome">
                      <input
                        value={form.name}
                        onChange={(e) => set("name", e.target.value)}
                        placeholder="Como podemos te chamar?"
                        className="w-full bg-transparent text-h4 font-bold text-cream outline-none placeholder:text-muted-on-charcoal/50"
                      />
                    </Field>
                    <Field label="Telefone">
                      <input
                        value={form.phone}
                        onChange={(e) => set("phone", e.target.value)}
                        placeholder="(11) 99999-0000"
                        className="w-full bg-transparent text-h4 font-bold text-cream outline-none placeholder:text-muted-on-charcoal/50"
                      />
                    </Field>
                    <Field label="E-mail">
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                        placeholder="voce@email.com"
                        className="w-full bg-transparent text-h4 font-bold text-cream outline-none placeholder:text-muted-on-charcoal/50"
                      />
                    </Field>
                  </div>
                )}

                {/* passo 4 — observações */}
                {step === 4 && (
                  <Field label="Alguma observação?">
                    <textarea
                      value={form.notes}
                      onChange={(e) => set("notes", e.target.value)}
                      rows={4}
                      placeholder="Alergias, comemoração, preferência de mesa..."
                      className="w-full resize-none bg-transparent text-body text-cream outline-none placeholder:text-muted-on-charcoal/50"
                    />
                  </Field>
                )}

                {/* navegação */}
                <div className="mt-10 flex items-center justify-between">
                  <button
                    onClick={back}
                    disabled={step === 0}
                    className="font-mono text-label uppercase tracking-[0.16em] text-muted-on-charcoal transition-colors enabled:hover:text-cream disabled:opacity-30"
                  >
                    ← Voltar
                  </button>
                  <button
                    onClick={next}
                    disabled={!canAdvance}
                    className="btn-clip text-cream disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <span>{step === STEPS.length - 1 ? "Confirmar reserva" : "Continuar"}</span>
                    <span aria-hidden>→</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-label uppercase tracking-[0.16em] text-amber">
        {label}
      </span>
      {children}
    </label>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-line-on-charcoal pb-3">
      <dt className="font-mono text-label uppercase tracking-[0.14em] text-muted-on-charcoal">
        {k}
      </dt>
      <dd className="text-right text-cream">{v}</dd>
    </div>
  );
}
