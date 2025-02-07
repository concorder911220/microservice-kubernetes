import { Product } from "@src/domain/entities/product";
import { ProductRepository } from "../../domain/repositories/productRepository";

export class ProductService {
  constructor(private productRepository: ProductRepository) {}

  async getAllproducts(): Promise<Product[]> {
    return this.productRepository.getAllproducts();
  }

  async getproductById(id: string): Promise<Product | null> {
    return this.productRepository.getproductById(id);
  }

  async createproduct(productData: Omit<Product, "id">): Promise<Product> {
    const product = this.productRepository.createproduct(productData);
    return product;
  }

  async updateproduct(
    id: string,
    productData: Omit<Product, "id">
  ): Promise<number[]> {
    const product = this.productRepository.updateproduct(productData, id);
    return product;
  }

  async deleteproduct(id: string): Promise<void> {
    return this.productRepository.deleteproduct(id);
  }
}
