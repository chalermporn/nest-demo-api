import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { PrimaModule } from './prima/prima.module';
import { ProductModule } from './product/product.module';
import { AuthorsModule } from './authors/authors.module';

@Module({
  imports: [ProductModule, BooksModule, PrimaModule, AuthorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
