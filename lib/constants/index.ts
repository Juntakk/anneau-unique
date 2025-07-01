export const COMPETENCE_LABELS = [
  { Présence: "presence" },
  { Inspiration: "inspiration" },
  { Persuasion: "persuasion" },
  { Athlétisme: "athletisme" },
  { Voyage: "voyage" },
  { Discrétion: "discretion" },
  { Vigilance: "vigilance" },
  { Intuition: "intuition" },
  { Fouille: "fouille" },
  { Exploration: "exploration" },
  { Guérison: "guerison" },
  { Chasse: "chasse" },
  { Chant: "chant" },
  { Courtoisie: "courtoisie" },
  { Énigmes: "enigmes" },
  { Artisanat: "artisanat" },
  { "Art de la Guerre": "art_de_la_guerre" },
  { Connaissances: "connaissances" },
] as const;

export const GROUPE_COMPETENCES = [
  { personnalité: "personnalite" },
  { déplacement: "deplacement" },
  { percéption: "perception" },
  { survie: "survie" },
  { coutume: "coutume" },
  { métier: "metier" },
] as const;

export const COMPANY_ROLES = [
  "Guide",
  "Éclaireur",
  "Chasseur",
  "Guetteur",
  "Lien de Communauté",
] as const;

export const STATUS_CONDITIONS = [
  { label: "Épuisement", key: "exhaustion" },
  { label: "Mélancolie", key: "melancholy" },
  { label: "Blessé", key: "wounded" },
] as const;
