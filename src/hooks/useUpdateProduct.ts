import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  ProductService,
} from "@/services/products/ProductService";

import type {
  UpdateProductInput,
} from "@/types/product";


interface UpdateProductParams {

  id:string;

  product:UpdateProductInput;

}



export function useUpdateProduct(){

  const queryClient =
    useQueryClient();



  return useMutation({

    mutationFn:
      ({
        id,
        product,
      }:UpdateProductParams)=>

        ProductService.update(
          id,
          product
        ),


    onSuccess:()=>{

      queryClient.invalidateQueries({

        queryKey:[
          "products",
        ],

      });

    },

  });

}