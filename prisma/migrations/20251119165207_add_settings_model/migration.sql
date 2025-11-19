-- CreateTable
CREATE TABLE "Settings" (
    "id" SERIAL NOT NULL,
    "whatsapp" TEXT,
    "instagram" TEXT,
    "tiktok" TEXT,
    "defaultWhatsappMessage" TEXT,
    "storeBanner" TEXT,
    "additionalSettings" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Settings_pkey" PRIMARY KEY ("id")
);
