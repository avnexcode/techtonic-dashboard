import type { z } from "zod";
import type {
  createProductFormSchema,
  updateProductFormSchema,
} from "../schemas";
import type { Category } from "@/features/category/types";

export type Product = {
  id: string;
  name: string;
  slug: string;
  price: string;
  image: string;
  discount: number;
  description: string;
  tokopedia_link: string;
  shopee_link: string;
  tiktok_link: string;
  category_id: string;
  created_at: Date;
  updated_at: Date;
};

export type ProductWithRelations = Product & {
  category: Category;
};

export type CreateProductFormSchema = z.infer<typeof createProductFormSchema>;
export type UpdateProductFormSchema = z.infer<typeof updateProductFormSchema>;
