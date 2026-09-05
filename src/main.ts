import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  // For allowing access values inside .env (e.g retrieving port)
  const configService = app.get(ConfigService);

  // To ensure the routes are from voltra-backend API
  app.setGlobalPrefix("api");

  // Enabling CORS to allow request coming from frontend
  app.enableCors({
    origin: configService.get<string>(
      "FRONTEND_URL",
      "http://localhost:3000",
    ),
    credentials: true, // Allow the browsers to send cookies, JWT cookies, session cookies
  });

  // NestJS automatically validates incoming requests
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Nest read/check PORT inside .env
  const port = configService.get<number>("PORT", 3001);

  // The backend starts listening if PORT=3001 > localHost:3001 becomes available
  await app.listen(port);

  // Showed in terminal if the backend start successfully 
  console.log(`Voltra API is running on http://localhost:${port}/api`);
}
bootstrap();
