import { ProductRepository } from "@src/domain/repositories/productRepository";
import { Product, ProductModelAttributes } from "@src/domain/entities/product";
import { BaseRepo } from "@src/domain/repositories/BaseRepo";
import { ModelStatic, Sequelize } from "sequelize";

export class productRepositoryImpl
  extends BaseRepo
  implements ProductRepository
{
  private productInstance: ModelStatic<Product>;

  constructor(sequelize: Sequelize) {
    super("products", Product, ProductModelAttributes, sequelize);

    this.productInstance = sequelize.define(
      "products",
      ProductModelAttributes,
      {
        tableName: "products",
        modelName: "products",
        timestamps: false,
        charset: "utf8mb4",
        collate: "utf8mb4_bin",
      }
    );
  }

  async getAllproducts(): Promise<Product[]> {
    const result = await this.productInstance.findAll();
    return result;
  }

  async getproductById(id: string): Promise<Product | null> {
    const result = await this.productInstance.findByPk(id);
    return result;
  }

  async createproduct(product: Omit<Product, "id">): Promise<Product> {
    const result = await this.productInstance.create(product);
    return result;
  }

  async updateproduct(
    product: Omit<Product, "id">,
    id: string
  ): Promise<number[]> {
    if (!id) {
      throw new Error("product id is required!");
    }
    const result = await this.productInstance.update(product, {
      where: {
        id: id,
      },
    });
    return result;
  }

  async deleteproduct(id: string): Promise<void> {
    await this.productInstance.destroy({
      where: {
        id,
      },
    });
  }
}
