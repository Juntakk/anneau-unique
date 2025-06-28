import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      nom: 'Varr',
      culture: 'Nain des Monts de Fer',
      niveau_de_vie: 'Modeste',
      avantage_culturel: 'Robustesse',
      vocation: 'Guerrier',
      part_ombre: 'Avarice',
      specialites: 'Forge, Endurance',
      particularite: 'Barbe luxuriante',

      experience: 0,
      experience_totale: 0,
      vaillance: 1,
      sagesse: 1,
      corps: 2,
      corps_ameliore: 2,
      coeur: 1,
      coeur_ameliore: 1,
      esprit: 1,
      esprit_ameliore: 1,

      presence: 0,
      athletisme: 1,
      vigilance: 1,
      exploration: 0,
      chant: 0,
      artisanat: 2,
      inspiration: 0,
      voyage: 0,
      intuition: 1,
      guerison: 0,
      courtoisie: 1,
      art_de_la_guerre: 2,
      persuasion: 0,
      discretion: 0,
      fouille: 0,
      chasse: 1,
      enigmes: 0,
      connaissances: 1,

      personnalite: 1,
      deplacement: 1,
      perception: 1,
      survie: 0,
      coutume: 1,
      metier: 1,

      bonus_degats: 1,
      bonus_degats_distance: 0,
      parade: 2,
      bouclier: 1,
      armure_1: 'Armure de cuir',
      casque_1: 'Casque nain',

      endurance: '12',
      endurance_depart: '10',
      fatigue: '0',

      espoir: '8',
      espoir_depart: '8',
      ombre: '0',

      epuisement: false,
      melancolie: false,
      blesse: false,

      communaute: 'Compagnie de la Pierre',
      points_progression: '0',
      tresors: 'Hache ancestrale',
      prestige: '1',

      origine: 'Monts de Fer',
      guide: 'Durin',
      eclaireur: 'Thrain',
      chasseur: 'Dwalin',
      guetteur: 'Balin',
      lien_communaute: 'Confrérie de la Forge',
      sanctuaires: 'Erebor',
      garant: 'Thorin',

      armes: {
        create: [
          {
            index: 1,
            niveau: 2,
            degats: '1d8',
            taille: 'grande',
            blessure: '5',
            enc: '2',
          },
          {
            index: 2,
            niveau: 1,
            degats: '1d6',
            taille: 'moyenne',
            blessure: '3',
            enc: '1',
          },
          {
            index: 3,
            niveau: 1,
            degats: '1d4',
            taille: 'petite',
            blessure: '2',
            enc: '1',
          },
        ],
      },
      equipements: {
        create: [
          {
            index: 1,
            type: 'armure',
            nom: 'Armure de cuir',
            enc: '3',
          },
          {
            index: 2,
            type: 'casque',
            nom: 'Casque en fer',
            enc: '1',
          },
          {
            index: 3,
            type: 'bouclier',
            nom: 'Bouclier rond',
            enc: '2',
          },
        ],
      },
    },
  });

  console.log('Seeded user:', user.nom);
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
