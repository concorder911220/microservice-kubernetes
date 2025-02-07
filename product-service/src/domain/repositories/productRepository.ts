import { Product } from "../entities/product";

export interface ProductRepository {
  getAllproducts(): Promise<Product[]>;
  getproductById(id: string): Promise<Product | null>;
  createproduct(product: Omit<Product, "id">): Promise<Product>;
  updateproduct(product: Omit<Product, "id">, id: string): Promise<number[]>;
  deleteproduct(id: string): Promise<void>;
}
