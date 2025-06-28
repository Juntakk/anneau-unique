-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "culture" TEXT NOT NULL,
    "niveau_de_vie" TEXT NOT NULL,
    "avantage_culturel" TEXT NOT NULL,
    "vocation" TEXT NOT NULL,
    "part_ombre" TEXT NOT NULL,
    "specialites" TEXT NOT NULL,
    "particularite" TEXT NOT NULL,
    "experience" INTEGER NOT NULL,
    "experience_totale" INTEGER NOT NULL,
    "vaillance" INTEGER NOT NULL,
    "sagesse" INTEGER NOT NULL,
    "corps" INTEGER NOT NULL,
    "corps_ameliore" INTEGER NOT NULL,
    "coeur" INTEGER NOT NULL,
    "coeur_ameliore" INTEGER NOT NULL,
    "esprit" INTEGER NOT NULL,
    "esprit_ameliore" INTEGER NOT NULL,
    "presence" INTEGER NOT NULL,
    "athletisme" INTEGER NOT NULL,
    "vigilance" INTEGER NOT NULL,
    "exploration" INTEGER NOT NULL,
    "chant" INTEGER NOT NULL,
    "artisanat" INTEGER NOT NULL,
    "inspiration" INTEGER NOT NULL,
    "voyage" INTEGER NOT NULL,
    "intuition" INTEGER NOT NULL,
    "guerison" INTEGER NOT NULL,
    "courtoisie" INTEGER NOT NULL,
    "art_de_la_guerre" INTEGER NOT NULL,
    "persuasion" INTEGER NOT NULL,
    "discretion" INTEGER NOT NULL,
    "fouille" INTEGER NOT NULL,
    "chasse" INTEGER NOT NULL,
    "enigmes" INTEGER NOT NULL,
    "connaissances" INTEGER NOT NULL,
    "personnalite" INTEGER NOT NULL,
    "deplacement" INTEGER NOT NULL,
    "perception" INTEGER NOT NULL,
    "survie" INTEGER NOT NULL,
    "coutume" INTEGER NOT NULL,
    "metier" INTEGER NOT NULL,
    "bonus_degats" INTEGER NOT NULL,
    "bonus_degats_distance" INTEGER NOT NULL,
    "parade" INTEGER NOT NULL,
    "bouclier" INTEGER NOT NULL,
    "armure_1" TEXT NOT NULL,
    "casque_1" TEXT NOT NULL,
    "endurance" TEXT NOT NULL,
    "endurance_depart" TEXT NOT NULL,
    "fatigue" TEXT NOT NULL,
    "espoir" TEXT NOT NULL,
    "espoir_depart" TEXT NOT NULL,
    "ombre" TEXT NOT NULL,
    "epuisement" BOOLEAN NOT NULL,
    "melancolie" BOOLEAN NOT NULL,
    "blesse" BOOLEAN NOT NULL,
    "communaute" TEXT NOT NULL,
    "points_progression" TEXT NOT NULL,
    "tresors" TEXT NOT NULL,
    "prestige" TEXT NOT NULL,
    "origine" TEXT NOT NULL,
    "guide" TEXT NOT NULL,
    "eclaireur" TEXT NOT NULL,
    "chasseur" TEXT NOT NULL,
    "guetteur" TEXT NOT NULL,
    "lien_communaute" TEXT NOT NULL,
    "sanctuaires" TEXT NOT NULL,
    "garant" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Weapon" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "index" INTEGER NOT NULL,
    "niveau" INTEGER NOT NULL,
    "degats" TEXT NOT NULL,
    "taille" TEXT NOT NULL,
    "blessure" TEXT NOT NULL,
    "enc" TEXT NOT NULL,

    CONSTRAINT "Weapon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Equipment" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "index" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "enc" TEXT NOT NULL,

    CONSTRAINT "Equipment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_nom_key" ON "User"("nom");

-- CreateIndex
CREATE UNIQUE INDEX "Weapon_userId_index_key" ON "Weapon"("userId", "index");

-- CreateIndex
CREATE UNIQUE INDEX "Equipment_userId_index_key" ON "Equipment"("userId", "index");

-- AddForeignKey
ALTER TABLE "Weapon" ADD CONSTRAINT "Weapon_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Equipment" ADD CONSTRAINT "Equipment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
