import { Injectable } from '@nestjs/common';
import { ProductDTO } from './dto/product.dto';

@Injectable()
export class ProductService {
  private products: ProductDTO[] = [
    { name: 'mango', id: 1, price: 250 },
    { name: 'mango2', id: 2, price: 350 },
    { name: 'mango3', id: 3, price: 450 },
  ];
  findAll(): ProductDTO[] {
    return this.products;
  }

  findById(id: number) {
    return this.products.find((p) => p.id === id);
  }

  findByCondition(predicate: (product: ProductDTO) => boolean) {
    return this.products.filter((p) => predicate(p));
  }
}
