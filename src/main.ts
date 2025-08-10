import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('NewsHarvester API')
    .setDescription('A comprehensive news aggregation API that extracts top stories from RSS feeds and enriches them with full content from HTML articles.')
    .setVersion('1.0')
    .addTag('spider-aggregator', 'News aggregation and content extraction endpoints')
    .addTag('news', 'News-related operations')
    .addServer('http://localhost:3000', 'Development server')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'NewsHarvester API Documentation',
  });

  await app.listen(process.env.PORT ?? 3000);

  console.log(`🚀 Application is running on: http://localhost:${process.env.PORT ?? 3000}`);
  console.log(`📚 Swagger documentation is available at: http://localhost:${process.env.PORT ?? 3000}/api`);
}
bootstrap();
