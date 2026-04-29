export const siteMeta = {
  name: "Bruma",
  tagline: "Vinho, cozinha sazonal e encontros sem pressa.",
  description:
    "Wine bar e restaurante autoral com cozinha sazonal, carta viva e atmosfera intimista para noites sem pressa.",
  address: "Batel · Curitiba, PR",
  hours: "Quarta a domingo · 18h às 00h",
  phone: "+55 (41) 00000-0000",
  email: "hello@webluma.tech",
  instagram: "https://instagram.com/",
  whatsapp: "https://wa.me/5541000000000",
  mapEmbed:
    "https://www.google.com/maps?q=Batel%20Curitiba%20PR&z=14&output=embed",
};

export const navigation = [
  { href: "/", label: "Início" },
  { href: "/menu", label: "Menu" },
  { href: "/contato", label: "Contato" },
];

export const heroImages = [
  {
    src: "https://images.pexels.com/photos/5083907/pexels-photo-5083907.jpeg?cs=srgb&dl=pexels-jep-gambardella-5083907.jpg&fm=jpg",
    alt: "Mesa intimista de restaurante com taças e luz quente.",
  },
  {
    src: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=pexels-vincent-rivaud-2147491-941861.jpg&fm=jpg",
    alt: "Interior de restaurante com atmosfera quente e sofisticada.",
  },
];

export const credibilityItems = [
  "Curadoria de vinhos de pequena produção",
  "Menu sazonal em ciclos curtos",
  "Ambiente desenhado para reservas intimistas",
];

export const conceptPoints = [
  "Luz baixa, madeira escura e materiais táteis.",
  "Serviço cuidadoso, cadência calma e leitura clara da experiência.",
  "Uma proposta pensada para encontro, celebração e permanência.",
];

export const experienceCards = [
  {
    title: "Carta viva",
    text: "Rótulos escolhidos em lotes curtos, com foco em textura, origem e vinhos que fazem sentido à mesa.",
  },
  {
    title: "Cozinha de estação",
    text: "Pratos precisos e sensoriais, construídos para mudar junto com o mercado.",
  },
  {
    title: "Noites sem pressa",
    text: "Cada mesa existe para sustentar conversa, ritmo e desejo de ficar.",
  },
];

export const homeMenuHighlights = [
  {
    course: "Entrada",
    title: "Brioche tostado com manteiga noisette e anchova curada",
    detail: "Salinidade delicada e final limpo.",
  },
  {
    course: "Prato da estação",
    title: "Cogumelos assados, creme de alho doce e jus reduzido",
    detail: "Terroso, aveludado e profundo.",
  },
  {
    course: "Sobremesa",
    title: "Pêra confitada, mascarpone leve e amêndoas tostadas",
    detail: "Doçura contida e calor suave.",
  },
];

export const galleryImages = [
  {
    src: "https://images.pexels.com/photos/5083907/pexels-photo-5083907.jpeg?cs=srgb&dl=pexels-jep-gambardella-5083907.jpg&fm=jpg",
    alt: "Mesa com vinho e pratos em atmosfera editorial.",
    label: "Mesa posta",
  },
  {
    src: "https://images.pexels.com/photos/5083904/pexels-photo-5083904.jpeg?cs=srgb&dl=pexels-jep-gambardella-5083904.jpg&fm=jpg",
    alt: "Close de prato e vinho em jantar sofisticado.",
    label: "Ritmo lento",
  },
  {
    src: "https://images.pexels.com/photos/5086618/pexels-photo-5086618.jpeg?cs=srgb&dl=pexels-jep-gambardella-5086618.jpg&fm=jpg",
    alt: "Taça de vinho e pratos em mesa intimista.",
    label: "Curadoria",
  },
  {
    src: "https://images.pexels.com/photos/30421116/pexels-photo-30421116.jpeg?cs=srgb&dl=pexels-isabella-mendes-107313-30421116.jpg&fm=jpg",
    alt: "Taça de vinho tinto com composição minimalista.",
    label: "Taça",
  },
  {
    src: "https://images.pexels.com/photos/30421117/pexels-photo-30421117.jpeg?cs=srgb&dl=pexels-isabella-mendes-107313-30421117.jpg&fm=jpg",
    alt: "Vinho sobre mesa de mármore clara com luz cinematográfica.",
    label: "Silêncio",
  },
  {
    src: "https://images.pexels.com/photos/17242600/pexels-photo-17242600.jpeg?cs=srgb&dl=pexels-nadin-sh-78971847-17242600.jpg&fm=jpg",
    alt: "Taça de vinho tinto com fundo desfocado e textura quente.",
    label: "Fecho",
  },
];

export const differentials = [
  {
    title: "Curadoria enxuta, assinatura forte",
    text: "A experiência parece precisa porque a seleção é pensada para profundidade.",
  },
  {
    title: "Hospitalidade íntima",
    text: "O serviço foi desenhado para reservar bem e conduzir sem ruído.",
  },
  {
    title: "Atmosfera de marca real",
    text: "Cada ponto de contato transmite a mesma leitura: desejável e sofisticado.",
  },
];

export const menuSections = [
  {
    name: "Pequenos pratos",
    items: [
      {
        title: "Pão de fermentação natural, manteiga batida e flor de sal",
        detail: "Abertura quente e precisa para a primeira taça.",
        price: "34",
        seasonal: false,
        image:
          "https://images.pexels.com/photos/6605214/pexels-photo-6605214.jpeg?cs=srgb&dl=pexels-alleksana-6605214.jpg&fm=jpg",
      },
      {
        title: "Beterraba assada, iogurte de cabra e folhas amargas",
        detail: "Terroso, ácido e luminoso.",
        price: "46",
        seasonal: true,
        image: "/menu/beterraba-assada.png",
      },
      {
        title: "Crudo do dia com azeite verde e casca de limão",
        detail: "Fresco, mineral e de textura limpa.",
        price: "58",
        seasonal: true,
        image: "/menu/crudo-do-dia.png",
      },
    ],
  },
  {
    name: "Pratos principais",
    items: [
      {
        title: "Arroz de cogumelos tostados e caldo reduzido",
        detail: "Camadas profundas, final aveludado.",
        price: "78",
        seasonal: true,
        image: "/menu/arroz-de-cogumelos.png",
      },
      {
        title: "Peixe do dia, ervas quentes e legumes da estação",
        detail: "Leveza precisa com estrutura gastronômica.",
        price: "92",
        seasonal: true,
        image:
          "https://images.pexels.com/photos/32973612/pexels-photo-32973612.jpeg?cs=srgb&dl=pexels-valeriya-32973612.jpg&fm=jpg",
      },
      {
        title: "Cordeiro lento, cenouras glaceadas e fundo escuro",
        detail: "Conforto, calor e permanência.",
        price: "108",
        seasonal: false,
        image:
          "https://images.pexels.com/photos/8477344/pexels-photo-8477344.jpeg?cs=srgb&dl=pexels-roman-odintsov-8477344.jpg&fm=jpg",
      },
    ],
  },
  {
    name: "Finalizações",
    items: [
      {
        title: "Pêra confitada, mascarpone leve e amêndoas tostadas",
        detail: "Doçura contida e textura aérea.",
        price: "36",
        seasonal: false,
        image:
          "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?cs=srgb&dl=pexels-ella-olsson-572949-3026808.jpg&fm=jpg",
      },
      {
        title: "Chocolate amargo, azeite e flor de sal",
        detail: "Intenso, elegante e direto.",
        price: "38",
        seasonal: false,
        image:
          "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?cs=srgb&dl=pexels-pixabay-291528.jpg&fm=jpg",
      },
    ],
  },
];

export const wineSelections = [
  {
    label: "Brancos e laranjas",
    text: "Minerais e gastronômicos, para início de noite e pequenos pratos.",
  },
  {
    label: "Tintos de textura",
    text: "Escolhidos para permanência à mesa e conversa longa.",
  },
  {
    label: "Taças da semana",
    text: "Seleção rotativa pensada para descoberta e equilíbrio.",
  },
];

export const reservations = [
  { label: "Endereço", value: siteMeta.address },
  { label: "Horários", value: siteMeta.hours },
  { label: "Formato", value: "Reservas para 2 a 8 pessoas · confirmação por WhatsApp" },
];

export const contactHighlights = [
  "Reservas para jantar e encontros intimistas",
  "Atendimento para pequenas celebrações e eventos privados",
  "Resposta por e-mail ou WhatsApp em horário comercial",
];

export const clientReviews = [
  {
    name: "Helena Prado",
    role: "Cliente frequente",
    text: "Bruma tem uma calma rara. A comida chega no ritmo certo e a noite parece durar exatamente o que deveria.",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg",
  },
  {
    name: "Mateus Alencar",
    role: "Jantar de aniversário",
    text: "Foi uma das reservas mais acertadas que já fiz. O ambiente é sofisticado sem ficar rígido.",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
  },
  {
    name: "Clara Teixeira",
    role: "Primeira visita",
    text: "A atmosfera é o diferencial. Luz, serviço, taças e cozinha trabalham juntos o tempo inteiro.",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg",
  },
  {
    name: "Ricardo Moura",
    role: "Evento intimista",
    text: "Levei amigos para uma celebração pequena e tudo pareceu resolvido com muita naturalidade.",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg",
  },
  {
    name: "Marina Kato",
    role: "Jantar a dois",
    text: "A mesa, a luz e os vinhos criam uma sensação difícil de encontrar. Tudo parece simples, mas muito bem pensado.",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?cs=srgb&dl=pexels-olly-1239291.jpg&fm=jpg",
  },
  {
    name: "Gustavo Ferraz",
    role: "Reserva de sexta",
    text: "O Bruma tem presença. Não é só comida boa, é o tipo de lugar em que a noite ganha outro ritmo.",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg",
  },
  {
    name: "Lia Campos",
    role: "Encontro com amigos",
    text: "A carta é curta do jeito certo. A equipe entende o momento da mesa e conduz sem pressa.",
    image:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-olly-733872.jpg&fm=jpg",
  },
];
