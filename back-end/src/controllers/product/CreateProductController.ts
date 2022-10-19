import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
 async handle(req: Request, res: Response) {
  const { name, price, description, category_id } = req.body;
  const createProductService = new CreateProductService();

  if (!name) throw new Error("Name is required!");
  if (!price) throw new Error("Price is required!");
  if (!description) throw new Error("Description is required!");
  if (!category_id) throw new Error("Category id is required!");
  if (!req.file) throw new Error("Photo is required!");
  else {
    const { originalname, filename: banner } = req.file;

    const product = await createProductService.execute({
      name,
      price,
      description,
      banner,
      category_id
    });

    return res.json(product);
  }
 }
}

export { CreateProductController }