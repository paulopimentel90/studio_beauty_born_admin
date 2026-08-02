import { useMutation, useQueryClient } from "@tanstack/react-query";

import { ProductService } from "@/services/products/ProductService";

export function useCreateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ProductService.create,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });
}