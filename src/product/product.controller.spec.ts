import { Test } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

describe('ProductController', () => {
  let productController: ProductController;
  let productService: ProductService;

  // beforeEach(async () => {
  //   productService = new ProductService();
  //   productController = new ProductController(productService);
  // });
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [ProductService],
    }).compile();

    productService = moduleRef.get<ProductService>(ProductService);
    productController = moduleRef.get<ProductController>(ProductController);
  });

  describe('findAll', () => {
    it('should return an array of products', async () => {
      const result = [{ name: 'mango', id: 1, price: 250 }];
      jest.spyOn(productService, 'findAll').mockImplementation(() => result);

      expect(await productController.getProductAll()).toBe(result);
    });
  });
});
