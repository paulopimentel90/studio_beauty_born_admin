import {
  Controller,
  useForm,
} from "react-hook-form";

import {
  useEffect,
} from "react";

import {
  zodResolver,
} from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

import { ProductImageUpload } from "./ProductImageUpload";

import {
  productSchema,
  type ProductFormData,
} from "@/utils/validators/product.schema";


interface ProductFormProps {

  onSubmit: (
    data: ProductFormData
  ) => void | Promise<void>;

  isSubmitting?: boolean;

  submitLabel?: string;

  defaultValues?: Partial<ProductFormData>;

  previewUrl?: string;

}



export function ProductForm({

  onSubmit,

  isSubmitting = false,

  submitLabel = "Salvar",

  defaultValues,

  previewUrl,

}: ProductFormProps) {


  const {
    register,
    handleSubmit,
    control,
    reset,
    formState:{
      errors,
    },

  } = useForm<ProductFormData>({

    resolver:
      zodResolver(productSchema),

    defaultValues,

  });



  useEffect(() => {

    reset(defaultValues);

  }, [
    defaultValues,
    reset,
  ]);



  return (

    <form

      onSubmit={
        handleSubmit(onSubmit)
      }

      className="
        space-y-5
      "

    >


      <Controller

        name="image"

        control={control}

        render={({field}) => (

          <ProductImageUpload

            value={
              field.value
            }

            previewUrl={
              previewUrl
            }

            onChange={
              field.onChange
            }

          />

        )}

      />



      <Input

        label="Nome"

        {...register("name")}

        error={
          errors.name?.message
        }

      />



      <Input

        label="Categoria"

        {...register("category")}

        error={
          errors.category?.message
        }

      />



      <Textarea

        label="Descrição"

        {...register("description")}

        error={
          errors.description?.message
        }

      />



      <Input

        label="Preço"

        type="number"

        step="0.01"

        {...register(
          "price",
          {
            valueAsNumber:true,
          }
        )}

        error={
          errors.price?.message
        }

      />



      <Input

        label="Quantidade"

        type="number"

        {...register(
          "quantity",
          {
            valueAsNumber:true,
          }
        )}

        error={
          errors.quantity?.message
        }

      />



      <Button

        type="submit"

        disabled={
          isSubmitting
        }

        className="
          w-full
        "

      >

        {
          isSubmitting
            ? "Salvando..."
            : submitLabel
        }


      </Button>


    </form>

  );

}