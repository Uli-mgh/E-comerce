import {
  Controller,
  Post,
  Get,
  Body,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Post()
  createProduct(
    @Body('name') name: string,
    @Body('price') price: string,
    @Body('description') description?: string,
  ) {
    return this.productsService.createProduct();
  }
}
