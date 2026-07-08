import type {
  Award,
  GalleryItem,
  Location,
  MenuCategory,
  MenuItem,
  MenuTab,
} from "../lib/types";

export const BRAND = {
  name: "Fogo e Farinha",
  tagline: "Brasa lenta, massa viva.",
  manifesto:
    "Na brasa tudo demora — e é assim que deve ser. Carne maturada, fogo de lenha e massa que respira 48 horas antes de ir ao forno.",
};

export const MENU_TABS: MenuTab[] = [
  { id: "burgers", label: "Burgers" },
  { id: "pizzas", label: "Pizzas" },
  { id: "sides", label: "Sides" },
  { id: "doces", label: "Doces" },
];

export const MENU: Record<MenuCategory, MenuItem[]> = {
  burgers: [
    {
      id: "b1",
      name: "Boi na Brasa",
      description:
        "Pão de fermentação natural, blend 120g maturado 21 dias, queijo da serra, cebola caramelizada no ácido e maionese defumada.",
      price: "R$ 38",
      tags: ["Maturado 21d", "Pão natural"],
      category: "burgers",
      highlight: true,
    },
    {
      id: "b2",
      name: "Porco ao Fumo",
      description:
        "Costela suína braseada 8h, molho barbecue de cerveja preta, repolho roxo e fatias de maçã verde.",
      price: "R$ 34",
      tags: ["8h brasa", "Doce/salgado"],
      category: "burgers",
    },
    {
      id: "b3",
      name: "Cogumelo & Alecrim",
      description:
        "Mix de cogumelos salteados no azeite de alecrim, queijo brie derretido e redução de vinho da casa.",
      price: "R$ 32",
      tags: ["Veggie", "Alecrim"],
      category: "burgers",
    },
    {
      id: "b4",
      name: "Linguiça da Fazenda",
      description:
        "Linguiça artesanal toscana, pimenta dedo-de-moça, queijo coalho e chimichurri verde.",
      price: "R$ 35",
      tags: ["Artesanal", "Apimentado"],
      category: "burgers",
    },
    {
      id: "b5",
      name: "Fraldinha Defumada",
      description:
        "Fraldinha defumada na lenha, ovo caipira frito, bacon crocante e molho de rosmarinho.",
      price: "R$ 40",
      tags: ["Defumada", "Ovo caipira"],
      category: "burgers",
      highlight: true,
    },
  ],
  pizzas: [
    {
      id: "p1",
      name: "Lenha & Sal",
      description:
        "Molho de tomate san Marzano, mozzarella de búfala, flor de sal e azeite verde da casa.",
      price: "R$ 46",
      tags: ["Búfala", "Flor de sal"],
      category: "pizzas",
      highlight: true,
    },
    {
      id: "p2",
      name: "Carbonara da Pedra",
      description:
        "Creme de ovos, guanciale, pecorino e pimenta moída na hora — assada direto na pedra.",
      price: "R$ 52",
      tags: ["Sem molho", "Pecorino"],
      category: "pizzas",
    },
    {
      id: "p3",
      name: "Funghi & Timo",
      description:
        "Três cogumelos, timo fresco, cebola confitada e fios de mel de eucalipto.",
      price: "R$ 48",
      tags: ["Veggie", "Mel"],
      category: "pizzas",
    },
    {
      id: "p4",
      name: "Calabresa da Lenha",
      description:
        "Calabresa caseira, pimenta calabresa, cebola roxa e azeitonas pretas.",
      price: "R$ 44",
      tags: ["Apimentado", "Caseira"],
      category: "pizzas",
    },
    {
      id: "p5",
      name: "Doce de Leite & Banana",
      description:
        "Base branca, doce de leite argentino, banana prata grelhada e canela.",
      price: "R$ 42",
      tags: ["Doce", "Canela"],
      category: "pizzas",
      highlight: true,
    },
  ],
  sides: [
    {
      id: "s1",
      name: "Batata na Brasa",
      description:
        "Batatas asterix assadas na brasa, sal grosso e molho de alho defumado.",
      price: "R$ 19",
      tags: ["Brasa", "Alho"],
      category: "sides",
    },
    {
      id: "s2",
      name: "Coração de Frango",
      description:
        "Espeto de coração, limão cravo e molho de pimenta da casa.",
      price: "R$ 22",
      tags: ["Espeto", "Apimentado"],
      category: "sides",
    },
    {
      id: "s3",
      name: "Pão de Lenha",
      description:
        "Pão da casa aquecido no forno a lenha, requeijão de coroa e manteiga temperada.",
      price: "R$ 16",
      tags: ["Forno", "Requeijão"],
      category: "sides",
      highlight: true,
    },
    {
      id: "s4",
      name: "Polenta Cremosa",
      description:
        "Polenta amarela cremosa, queijo parmesão e gotas de azeite defumado.",
      price: "R$ 18",
      tags: ["Cremosa", "Parmesão"],
      category: "sides",
    },
  ],
  doces: [
    {
      id: "d1",
      name: "Brigadeiro Quente",
      description:
        "Brigadeiro de colher servido quente, com raspas de chocolate 70% e flor de sal.",
      price: "R$ 17",
      tags: ["Quente", "70%"],
      category: "doces",
      highlight: true,
    },
    {
      id: "d2",
      name: "Banoffe da Lenha",
      description:
        "Banana caramelizada na brasa, doce de leite e merengue queimado.",
      price: "R$ 19",
      tags: ["Caramelo", "Merengue"],
      category: "doces",
    },
    {
      id: "d3",
      name: "Petit Gâteau",
      description:
        "Massa de chocolate amargo, centro líquido e sorvete de baunilha da casa.",
      price: "R$ 21",
      tags: ["Chocolate", "Sorvete"],
      category: "doces",
    },
    {
      id: "d4",
      name: "Romeu e Julieta",
      description:
        "Queijo minas frescal grelhado, goiabada cremosa e pimenta rosa.",
      price: "R$ 16",
      tags: ["Goiabada", "Pimenta rosa"],
      category: "doces",
    },
  ],
};

export const ABOUT = {
  eyebrow: "Nossa fornalha",
  title: "Tudo começa no fogo.",
  paragraphs: [
    "O forno a lenha foi assentado à mão no centro da casa. É ele que dita o ritmo: a massa descansa 48 horas, o blend de carne matura 21 dias e nada vai ao prato sem antes conversar com a brasa.",
    "Somos uma hamburgueria e pizzaria artesanal antes de tudo — sem atalhos, sem concentrado, sem pressa. Cada disco de pizza é esticado no momento; cada hambúrguer, selado na chapa que vive sobre o carvão.",
    "A mesa é compartilhada, o ruído é de casa cheia e o cheiro é sempre de lenha queimando. Esse é o nosso lugar.",
  ],
  stats: [
    { value: "48h", label: "Maturação da massa" },
    { value: "21d", label: "Maturação da carne" },
    { value: "380°", label: "Forno a lenha" },
  ],
};

export const GALLERY: GalleryItem[] = [
  { id: "g1", title: "Disco aberto", kind: "foto", caption: "Pizza esticada à mão no balcão de mármore.", tone: "amber" },
  { id: "g2", title: "Brasa viva", kind: "foto", caption: "Lenha de primeira e carvão controlado.", tone: "graphite" },
  { id: "g3", title: "Boi na Brasa", kind: "foto", caption: "O burger assinatura, selado na chapa.", tone: "amber" },
  { id: "g4", title: "Mesa compartilhada", kind: "foto", caption: "A sala lotada no fim de semana.", tone: "graphite" },
  { id: "g5", title: "Doce quente", kind: "foto", caption: "Brigadeiro servido ainda fumegando.", tone: "amber" },
  { id: "g6", title: "Forno antigo", kind: "foto", caption: "Pedra vulcânica assentada à mão.", tone: "graphite" },
  { id: "g7", title: "Comer & Beber", kind: "premio", caption: "Eleita uma das 10 melhores pizzarias artesanais de 2025.", tone: "amber" },
  { id: "g8", title: "Veja São Paulo", kind: "premio", caption: "Botelho do Ano — hamburgueria de bairro, 2024.", tone: "graphite" },
  { id: "g9", title: "Guia 4 Queijos", kind: "premio", caption: "Top 3 em forno a lenha da cidade, 2026.", tone: "amber" },
];

export const AWARDS: Award[] = [
  { org: "Comer & Beber", title: "Top 10 pizzarias artesanais", year: "2025" },
  { org: "Veja São Paulo", title: "Botelho do Ano — hamburgueria de bairro", year: "2024" },
  { org: "Guia 4 Queijos", title: "Top 3 em forno a lenha", year: "2026" },
];

export const LOCATIONS: Location[] = [
  {
    name: "Fogo e Farinha — Vila",
    neighborhood: "Vila Madalena",
    address: "Rua Girassol, 412 — São Paulo, SP",
    hours: "Ter–Dom · 18h–24h",
    phone: "+55 11 3456-7890",
    mapUrl: "https://maps.app.goo.gl/fogoevila",
  },
  {
    name: "Fogo e Farinha — Baixo",
    neighborhood: "Boa Vista",
    address: "Av. Rio Branco, 88 — Recife, PE",
    hours: "Qua–Dom · 17h–23h30",
    phone: "+55 81 3322-1100",
    mapUrl: "https://maps.app.goo.gl/fogoebaixo",
  },
  {
    name: "Fogo e Farinha — Litoral",
    neighborhood: "Praia de Tramandaí",
    address: "Av. Beira-Mar, 1500 — Tramandaí, RS",
    hours: "Qui–Dom · 12h–23h",
    phone: "+55 51 99888-2200",
    mapUrl: "https://maps.app.goo.gl/fogolitoral",
  },
];

export const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/fogefarinha" },
  { label: "TikTok", href: "https://tiktok.com/@fogefarinha" },
  { label: "WhatsApp", href: "https://wa.me/551134567890" },
];
