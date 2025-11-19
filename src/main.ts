import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: (origin, callback) => {
      // Permite requests sem origin (tools/server-to-server)
      if (!origin) return callback(null, true);

      const allowedOrigins = new Set([
        'http://localhost:8080', // dev
        'http://localhost:5173', // Vite local
        'https://flow-my-threads.vercel.app/', // domínio principal (exemplo)
      ]);

      try {
        const url = new URL(origin);
        const hostname = url.hostname;

        // Permite qualquer subdomínio em vercel.app (preview deployments)
        if (hostname.endsWith('.vercel.app')) return callback(null, true);
      } catch (e) {
        // se origin não for uma URL válida, faz fallback para comparar string
      }

      if (allowedOrigins.has(origin)) return callback(null, true);

      // rejeita explicitamente outras origens
      return callback(new Error('CORS policy: origin not allowed'), false);
    },
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    exposedHeaders: ['Content-Type', 'Cache-Control'],
  });

  // Enable global validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`🚀 Application is running on: http://localhost:${port}`);
}
bootstrap();
