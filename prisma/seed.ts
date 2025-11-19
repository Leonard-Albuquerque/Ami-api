import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // Clear existing data
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.settings.deleteMany();

  console.log('🗑️  Cleared existing data');

  // Create Categories
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: 'Roupas Fitness',
        description: 'Roupas confortáveis e estilosas para seus treinos',
      },
    }),
    prisma.category.create({
      data: {
        name: 'Acessórios',
        description: 'Acessórios essenciais para complementar seu look fitness',
      },
    }),
    prisma.category.create({
      data: {
        name: 'Conjuntos',
        description: 'Conjuntos completos para facilitar sua escolha',
      },
    }),
  ]);

  console.log('✅ Created categories:', categories.length);

  // Image URLs provided
  const imageUrls = [
    'https://res.cloudinary.com/dmecrsjtv/image/upload/v1763430478/rivdkvf4crm8ix3tontl.jpg',
    'https://res.cloudinary.com/dmecrsjtv/image/upload/v1763430478/bwwzrdr6bh2vq2pxsh1p.jpg',
    'https://res.cloudinary.com/dmecrsjtv/image/upload/v1763428216/j0ig832cfun1f9itrus1.jpg',
  ];

  // Create Products
  const products = await Promise.all([
    prisma.product.create({
      data: {
        name: 'Legging Fitness Premium',
        category: 'Roupas Fitness',
        price: 89.90,
        stock: 25,
        images: [imageUrls[0], imageUrls[1]],
        image: imageUrls[0],
        description: 'Legging de alta compressão com tecnologia anti-suor. Perfeita para treinos intensos e yoga.',
        sizes: 'P, M, G, GG',
        colors: 'Preto, Azul Marinho, Vinho',
      },
    }),
    prisma.product.create({
      data: {
        name: 'Top Fitness Strappy',
        category: 'Roupas Fitness',
        price: 59.90,
        stock: 30,
        images: [imageUrls[1], imageUrls[2]],
        image: imageUrls[1],
        description: 'Top com alças cruzadas nas costas, oferece suporte médio e muito estilo para seus treinos.',
        sizes: 'P, M, G',
        colors: 'Rosa, Preto, Branco',
      },
    }),
    prisma.product.create({
      data: {
        name: 'Conjunto Fitness Completo',
        category: 'Conjuntos',
        price: 139.90,
        stock: 15,
        images: [imageUrls[2], imageUrls[0]],
        image: imageUrls[2],
        description: 'Conjunto completo com legging e top combinando. Tecido respirável e secagem rápida.',
        sizes: 'P, M, G, GG',
        colors: 'Preto, Cinza, Verde Militar',
      },
    }),
    prisma.product.create({
      data: {
        name: 'Short Fitness Cintura Alta',
        category: 'Roupas Fitness',
        price: 69.90,
        stock: 20,
        images: [imageUrls[0], imageUrls[2]],
        image: imageUrls[0],
        description: 'Short de cintura alta que modela e valoriza suas curvas. Ideal para corrida e treinos funcionais.',
        sizes: 'P, M, G, GG',
        colors: 'Preto, Azul, Rosa',
      },
    }),
    prisma.product.create({
      data: {
        name: 'Top Fitness Nadador',
        category: 'Roupas Fitness',
        price: 54.90,
        stock: 35,
        images: [imageUrls[1], imageUrls[0]],
        image: imageUrls[1],
        description: 'Top estilo nadador com suporte reforçado. Perfeito para treinos de alta intensidade.',
        sizes: 'P, M, G',
        colors: 'Preto, Branco, Coral',
      },
    }),
    prisma.product.create({
      data: {
        name: 'Legging Fitness Estampada',
        category: 'Roupas Fitness',
        price: 94.90,
        stock: 18,
        images: [imageUrls[2], imageUrls[1]],
        image: imageUrls[2],
        description: 'Legging com estampa exclusiva e tecnologia de compressão. Destaque-se na academia!',
        sizes: 'P, M, G, GG',
        colors: 'Estampado Floral, Estampado Geométrico, Tie Dye',
      },
    }),
    prisma.product.create({
      data: {
        name: 'Conjunto Premium Fitness',
        category: 'Conjuntos',
        price: 159.90,
        stock: 12,
        images: [imageUrls[0], imageUrls[1], imageUrls[2]],
        image: imageUrls[0],
        description: 'Conjunto premium com acabamento diferenciado. Inclui legging e top de alta performance.',
        sizes: 'P, M, G, GG',
        colors: 'Preto Premium, Nude, Marsala',
      },
    }),
    prisma.product.create({
      data: {
        name: 'Top Fitness Cropped',
        category: 'Roupas Fitness',
        price: 49.90,
        stock: 40,
        images: [imageUrls[1], imageUrls[2]],
        image: imageUrls[1],
        description: 'Top cropped moderno e confortável. Ideal para treinos leves e yoga.',
        sizes: 'P, M, G',
        colors: 'Branco, Preto, Lilás',
      },
    }),
  ]);

  console.log('✅ Created products:', products.length);

  // Create Settings
  const settings = await prisma.settings.create({
    data: {
      whatsapp: 'https://wa.me/5511999999999',
      instagram: 'https://instagram.com/ami_fitness',
      tiktok: 'https://tiktok.com/@ami_fitness',
      defaultWhatsappMessage: 'Olá! Gostaria de saber mais sobre este produto.',
      storeBanner: 'https://res.cloudinary.com/dmecrsjtv/image/upload/v1763430478/rivdkvf4crm8ix3tontl.jpg',
      additionalSettings: {
        storeName: 'AMI Fitness',
        storeDescription: 'Roupas fitness de alta qualidade',
        contactEmail: 'contato@amifitness.com'
      }
    }
  });

  console.log('✅ Created settings');
  console.log('🎉 Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
