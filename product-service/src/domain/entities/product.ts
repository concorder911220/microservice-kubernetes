import { DataTypes, Model, ModelAttributes, Optional } from "sequelize";

export interface IProduct {
  id: string | null;
  productId: string;
  quantity: number;
  totalPrice: number;
  status: string;
}

export class Product
  extends Model<IProduct, Optional<IProduct, "id">>
  implements IProduct
{
  declare id: string | null;
  declare productId: string;
  declare quantity: number;
  declare totalPrice: number;
  declare status: string;
}

export const ProductModelAttributes: ModelAttributes<
  Product,
  Optional<IProduct, "id">
> = {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  productId: {
    type: DataTypes.STRING,
  },
  quantity: {
    type: DataTypes.INTEGER,
  },
  totalPrice: {
    type: DataTypes.INTEGER,
  },
  status: {
    type: DataTypes.STRING,
  },
};
