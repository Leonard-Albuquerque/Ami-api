# Prisma Seed

Este diretório contém o arquivo de seed para popular o banco de dados com dados iniciais.

## Como usar

### Executar o seed

```bash
# Na pasta ami-api
npx prisma db seed
```

### O que o seed cria

O seed irá criar:

**3 Categorias:**
- Roupas Fitness
- Acessórios
- Conjuntos

**8 Produtos:**
1. Legging Fitness Premium - R$ 89,90
2. Top Fitness Strappy - R$ 59,90
3. Conjunto Fitness Completo - R$ 139,90
4. Short Fitness Cintura Alta - R$ 69,90
5. Top Fitness Nadador - R$ 54,90
6. Legging Fitness Estampada - R$ 94,90
7. Conjunto Premium Fitness - R$ 159,90
8. Top Fitness Cropped - R$ 49,90

Todos os produtos incluem:
- Imagens do Cloudinary (as 3 URLs fornecidas são reutilizadas entre os produtos)
- Descrições detalhadas
- Tamanhos disponíveis (P, M, G, GG)
- Cores variadas
- Estoque

### Imagens utilizadas

As seguintes URLs de imagens do Cloudinary são utilizadas nos produtos:
- https://res.cloudinary.com/dmecrsjtv/image/upload/v1763430478/rivdkvf4crm8ix3tontl.jpg
- https://res.cloudinary.com/dmecrsjtv/image/upload/v1763430478/bwwzrdr6bh2vq2pxsh1p.jpg
- https://res.cloudinary.com/dmecrsjtv/image/upload/v1763428216/j0ig832cfun1f9itrus1.jpg

### Notas importantes

- O seed limpa os dados existentes antes de criar novos (deleteMany)
- Certifique-se de que o banco de dados está configurado e acessível
- As migrações devem estar aplicadas antes de executar o seed
