import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      nom: 'varr',
      culture: '',
      niveau_de_vie: '',
      avantage_culturel: '',
      vocation: '',
      part_ombre: '',
      specialites: '',
      particularite: '',

      experience: 0,
      experience_totale: 0,
      vaillance: 0,
      sagesse: 0,
      corps: 0,
      corps_ameliore: 0,
      coeur: 0,
      coeur_ameliore: 0,
      esprit: 0,
      esprit_ameliore: 0,

      presence: 0,
      athletisme: 0,
      vigilance: 0,
      exploration: 0,
      chant: 0,
      artisanat: 0,
      inspiration: 0,
      voyage: 0,
      intuition: 0,
      guerison: 0,
      courtoisie: 0,
      art_de_la_guerre: 0,
      persuasion: 0,
      discretion: 0,
      fouille: 0,
      chasse: 0,
      enigmes: 0,
      connaissances: 0,

      personnalite: 0,
      deplacement: 0,
      perception: 0,
      survie: 0,
      coutume: 0,
      metier: 0,

      bonus_degats: 0,
      bonus_degats_distance: 0,
      parade: 0,
      bouclier: 0,
      armure_1: '',
      casque_1: '',

      endurance: '0',
      endurance_depart: '0',
      fatigue: '0',

      espoir: '',
      espoir_depart: '0',
      ombre: '0',

      epuisement: false,
      melancolie: false,
      blesse: false,

      communaute: '0',
      points_progression: '0',
      tresors: '0',
      prestige: '0',

      origine: '',
      guide: 'Nori',
      eclaireur: 'Raenvild & Wilda',
      chasseur: 'Yorick & Varr',
      guetteur: 'Firiel',
      lien_communaute: '',
      sanctuaires: '',
      garant: '',

      armes: {
        create: [
          {
            index: 1,
            niveau: 0,
            degats: '',
            taille: '',
            blessure: '0',
            enc: '0',
          },
          {
            index: 2,
            niveau: 0,
            degats: '',
            taille: '',
            blessure: '0',
            enc: '0',
          },
          {
            index: 3,
            niveau: 0,
            degats: '',
            taille: '',
            blessure: '0',
            enc: '0',
          },
        ],
      },
      equipements: {
        create: [
          {
            index: 1,
            type: '',
            nom: '',
            enc: '0',
          },
          {
            index: 2,
            type: '',
            nom: '',
            enc: '',
          },
          {
            index: 3,
            type: '',
            nom: '',
            enc: '',
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
