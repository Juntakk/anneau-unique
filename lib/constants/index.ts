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
  { label: "Guide", field: "guide" },
  { label: "Éclaireur", field: "eclaireur" },
  { label: "Chasseur", field: "chasseur" },
  { label: "Guetteur", field: "guetteur" },
  { label: "Lien de Communauté", field: "lien_communaute" },
] as const;

export const STATUS_CONDITIONS = [
  { label: "Épuisement", key: "epuisement" },
  { label: "Mélancolie", key: "melancolie" },
  { label: "Blessé", key: "blesse" },
] as const;
