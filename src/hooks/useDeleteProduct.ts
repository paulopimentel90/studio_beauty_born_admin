import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  ProductService,
} from "@/services/products/ProductService";

import {
  ProductStorageService,
} from "@/services/storage/ProductStorageService";


import type {
  Product,
} from "@/types/product";


export function useDeleteProduct() {

  const queryClient =
    useQueryClient();



  return useMutation({

    mutationFn:
      async (
        product: Product
      ) => {


        if (
          product.image_url
        ) {

          await ProductStorageService.removeByUrl(
            product.image_url
          );

        }



        await ProductService.delete(
          product.id
        );


      },


    onSuccess: () => {

      queryClient.invalidateQueries({

        queryKey: [
          "products",
        ],

      });

    },


  });

}