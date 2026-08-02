export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  quantity: number;
  image_url: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface CreateProductInput {
  name: string;
  category: string;
  description: string;
  price: number;
  quantity: number;
  image_url?: string;
  is_active?: boolean;
}

export interface UpdateProductInput
  extends Partial<CreateProductInput> {}