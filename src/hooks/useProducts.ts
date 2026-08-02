import { useQuery } from "@tanstack/react-query";

import { ProductService } from "@/services/products/ProductService";

export function useProducts() {
  return useQuery({
    queryKey: ["products"],

    queryFn: ProductService.findAll,
  });
}