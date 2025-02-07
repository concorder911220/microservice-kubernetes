import { Request, Response } from "express";
import { productService } from "@src/application/services/productService";

export class productController {
  constructor(private productService: productService) {}

  async getAllproducts(req: Request, res: Response): Promise<void> {
    try {
      const products = await this.productService.getAllproducts();
      res.json(products);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async getproductById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const product = await this.productService.getproductById(id);
      if (!product) {
        res.status(404).send("product not found");
        return;
      }
      res.json(product);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async createproduct(req: Request, res: Response): Promise<void> {
    try {
      const product = await this.productService.createproduct(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async updateproduct(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const product = await this.productService.updateproduct(id, req.body);
      res.json(product);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async deleteproduct(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await this.productService.deleteproduct(id);
      res.status(204).send();
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}
