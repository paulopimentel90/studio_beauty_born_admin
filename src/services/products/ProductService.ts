import { supabase } from "@/services/supabase/client";
import type {
  Product,
  CreateProductInput,
  UpdateProductInput,
} from "@/types/product";

export class ProductService {
  static async findAll(): Promise<Product[]> {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("name", {
        ascending: true,
      });

    if (error) throw error;

    return data;
  }

  static async findById(
    id: string
  ): Promise<Product> {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;

    return data;
  }

  static async create(
    product: CreateProductInput
  ): Promise<Product> {
    const { data, error } = await supabase
      .from("products")
      .insert(product)
      .select()
      .single();

    if (error) throw error;

    return data;
  }

  static async update(
    id: string,
    product: UpdateProductInput
  ): Promise<Product> {
    const { data, error } = await supabase
      .from("products")
      .update(product)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    return data;
  }

  static async delete(
    id: string
  ): Promise<void> {
    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", id);

    if (error) throw error;
  }
}