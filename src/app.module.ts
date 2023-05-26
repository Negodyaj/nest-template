import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductService } from './products/product.service';
import { ProductsController } from './products/products.controller';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { BlogController } from './blog/blog.controller';
import { BlogService } from './blog/blog.service';

@Module({
  imports: [AuthModule],
  controllers: [
    AppController,
    ProductsController,
    UsersController,
    BlogController,
  ],
  providers: [AppService, ProductService, UsersService, BlogService],
})
export class AppModule {}
