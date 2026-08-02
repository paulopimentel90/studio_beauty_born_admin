import { supabase } from "@/services/supabase/client";

const BUCKET_NAME = "products";

export class ProductStorageService {
  static async upload(file: File): Promise<string> {
    const extension = file.name.split(".").pop();

    const fileName = `${crypto.randomUUID()}.${extension}`;

    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(fileName, file);

    if (error) {
      throw error;
    }

    const {
      data: { publicUrl },
    } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(fileName);

    return publicUrl;
  }

  static async removeByUrl(
    imageUrl: string
  ): Promise<void> {
    if (!imageUrl) {
      return;
    }

    const fileName = imageUrl.split("/").pop();

    if (!fileName) {
      return;
    }

    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .remove([fileName]);

    if (error) {
      throw error;
    }
  }
}