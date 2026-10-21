import { PRESETS } from "./themes";
import type { Profile } from "./types";

// Dados de exemplo (Passo 1). No Passo 4 isto passa a vir do banco de dados.
const PROFILES: Profile[] = [
  {
    handle: "marina",
    name: "Marina Lopes",
    role: "designer de dia, cinéfila à noite",
    bio: "Guardo o que me atravessa: filmes que reassisto, discos que não saem do toca-discos e lugares onde eu moraria por um tempo.",
    nowPlaying: "Alice Coltrane",
    theme: PRESETS.cine,
    collections: [
      {
        title: "Filmes que ficaram comigo",
        items: [
          { title: "Paris, Texas", subtitle: "Wim Wenders" },
          { title: "Aftersun", subtitle: "2022" },
          { title: "Amor à Flor da Pele", subtitle: "Wong Kar-wai" },
          { title: "Stalker", subtitle: "Tarkovsky" },
          { title: "Cléo das 5 às 7", subtitle: "Agnès Varda" },
        ],
      },
      {
        title: "Minha trilha sonora",
        items: [
          { title: "Africa Brasil", subtitle: "Jorge Ben" },
          { title: "Journey in Satchidananda", subtitle: "Alice Coltrane" },
          { title: "Green", subtitle: "Hiroshi Yoshimura" },
          { title: "Racional Vol. 1", subtitle: "Tim Maia" },
          { title: "Heaven or Las Vegas", subtitle: "Cocteau Twins" },
        ],
      },
      {
        title: "Mundos nos quais eu viveria",
        items: [
          { title: "Outer Wilds", subtitle: "jogo" },
          { title: "Hollow Knight", subtitle: "jogo" },
          { title: "Shadow of the Colossus", subtitle: "jogo" },
          { title: "Meu Amigo Totoro", subtitle: "Ghibli" },
          { title: "Disco Elysium", subtitle: "jogo" },
        ],
      },
      {
        title: "Imagens que me representam",
        items: [
          { title: "Névoa e concreto", subtitle: "35mm" },
          { title: "Luz de fim de tarde", subtitle: "Paquetá" },
          { title: "Janela do trem", subtitle: "2024" },
          { title: "Sombra na parede", subtitle: "Lisboa" },
        ],
      },
    ],
  },
  {
    handle: "leo",
    name: "Leo Andrade",
    role: "fotógrafo, DJ de fim de semana",
    bio: "Cor, ruído e tudo que parece verão. Colecionador de capas de disco e de viagens que deram errado do jeito certo.",
    nowPlaying: "Os Mutantes",
    theme: PRESETS.cor,
    collections: [
      {
        title: "Discos que não saem da vitrola",
        items: [
          { title: "Clube da Esquina", subtitle: "Milton e Lô" },
          { title: "Construção", subtitle: "Chico Buarque" },
          { title: "Transa", subtitle: "Caetano Veloso" },
          { title: "Ventura", subtitle: "Los Hermanos" },
        ],
      },
      {
        title: "Lugares onde deixei um pedaço",
        items: [
          { title: "Salvador", subtitle: "2019" },
          { title: "Lisboa", subtitle: "2023" },
          { title: "Tóquio", subtitle: "2024" },
          { title: "Recife", subtitle: "sempre" },
        ],
      },
      {
        title: "Filmes de verão",
        items: [
          { title: "Frances Ha", subtitle: "Noah Baumbach" },
          { title: "Moonrise Kingdom", subtitle: "Wes Anderson" },
          { title: "Encontros e Desencontros", subtitle: "Sofia Coppola" },
          { title: "Os Sonhadores", subtitle: "Bertolucci" },
        ],
      },
    ],
  },
  {
    handle: "ana",
    name: "Ana Ribeiro",
    role: "arquiteta",
    bio: "Poucas coisas, bem escolhidas. Livros, prédios e silêncio.",
    nowPlaying: "Ryuichi Sakamoto",
    theme: PRESETS.min,
    collections: [
      {
        title: "Livros que releio",
        items: [
          { title: "Elogio da Sombra", subtitle: "Tanizaki" },
          { title: "A Poética do Espaço", subtitle: "Bachelard" },
          { title: "Seis Propostas para o Próximo Milênio", subtitle: "Calvino" },
          { title: "Pedro Páramo", subtitle: "Rulfo" },
        ],
      },
      {
        title: "Arquitetura",
        items: [
          { title: "Casa de Vidro", subtitle: "Lina Bo Bardi" },
          { title: "Igreja da Luz", subtitle: "Tadao Ando" },
          { title: "MASP", subtitle: "São Paulo" },
          { title: "Casa Farnsworth", subtitle: "Mies van der Rohe" },
        ],
      },
      {
        title: "Música instrumental",
        items: [
          { title: "async", subtitle: "Ryuichi Sakamoto" },
          { title: "Sleep", subtitle: "Max Richter" },
          { title: "Ambient 1", subtitle: "Brian Eno" },
          { title: "Gymnopédies", subtitle: "Erik Satie" },
        ],
      },
    ],
  },
];

export function getProfile(handle: string): Profile | undefined {
  return PROFILES.find((p) => p.handle === handle.toLowerCase());
}

export function listProfiles(): Profile[] {
  return PROFILES;
}
