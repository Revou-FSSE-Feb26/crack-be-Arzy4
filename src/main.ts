import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

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

  // For Swagger API Documentation
  const config = new DocumentBuilder()
    .setTitle('CRACK EV Charging API')
    .setDescription('API documentation for the CRACK EV Charging System')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
      'access-token', // This name will be used in the Swagger UI
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  // Nest read/check PORT inside .env
  const port = configService.get<number>("PORT", 3001);

  // The backend starts listening if PORT=3001 > localHost:3001 becomes available
  await app.listen(port);

  // Showed in terminal if the backend start successfully 
  console.log(`Voltra API is running on http://localhost:${port}/api`);
}
bootstrap();
