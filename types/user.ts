export interface User {
  id: string;
  nom: string;

  culture: string;
  niveau_de_vie: string;
  avantage_culturel: string;
  vocation: string;
  part_ombre: string;
  specialites: string;
  particularite: string;

  experience: number;
  experience_totale: number;
  vaillance: number;
  sagesse: number;
  corps: number;
  corps_ameliore: number;
  coeur: number;
  coeur_ameliore: number;
  esprit: number;
  esprit_ameliore: number;

  presence: number;
  athletisme: number;
  vigilance: number;
  exploration: number;
  chant: number;
  artisanat: number;
  inspiration: number;
  voyage: number;
  intuition: number;
  guerison: number;
  courtoisie: number;
  art_de_la_guerre: number;
  persuasion: number;
  discretion: number;
  fouille: number;
  chasse: number;
  enigmes: number;
  connaissances: number;

  personnalite: number;
  deplacement: number;
  perception: number;
  survie: number;
  coutume: number;
  metier: number;

  bonus_degats: number;
  bonus_degats_distance: number;
  parade: number;
  bouclier: number;
  armure_1: string;
  casque_1: string;

  endurance: string;
  endurance_depart: string;
  fatigue: string;

  espoir: string;
  espoir_depart: string;
  ombre: string;

  epuisement: boolean;
  melancolie: boolean;
  blesse: boolean;

  communaute: string;
  points_progression: string;
  tresors: string;
  prestige: string;

  origine: string;
  guide: string;
  eclaireur: string;
  chasseur: string;
  guetteur: string;
  lien_communaute: string;
  sanctuaires: string;
  garant: string;

  createdAt: Date;
  updatedAt: Date;

  armes: Weapon[];
  equipements: Equipment[];
}
export interface Weapon {
  id: string;
  userId: string;
  index: number;

  niveau: number;
  degats: string;
  taille: string;
  blessure: string;
  nom: string;
  enc: string;
}

export interface Equipment {
  id: string;
  userId: string;
  index: number;

  type: "armure" | "casque" | "bouclier";
  nom: string;
  enc: string;
}
