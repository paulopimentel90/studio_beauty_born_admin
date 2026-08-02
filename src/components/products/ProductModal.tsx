import toast from "react-hot-toast";

import { Modal } from "@/components/ui/Modal";

import { ProductForm } from "./ProductForm";

import { useCreateProduct } from "@/hooks/useCreateProduct";
import { useUpdateProduct } from "@/hooks/useUpdateProduct";

import { ProductStorageService } from "@/services/storage/ProductStorageService";

import type {
  ProductFormData,
} from "@/utils/validators/product.schema";

import type {
  Product,
} from "@/types/product";


interface ProductModalProps {

  open: boolean;

  onClose: () => void;

  product?: Product;

}



export function ProductModal({
  open,
  onClose,
  product,
}: ProductModalProps) {


  const {
    mutateAsync: createProduct,
    isPending: isCreating,
  } = useCreateProduct();



  const {
    mutateAsync: updateProduct,
    isPending: isUpdating,
  } = useUpdateProduct();



  const isSubmitting =
    isCreating || isUpdating;



  async function handleSubmit(
    data: ProductFormData
  ) {

    let uploadedImageUrl: string | undefined;



    try {


      let imageUrl =
        product?.image_url ?? undefined;



      const oldImageUrl =
        product?.image_url;



      /*
        Faz upload somente
        quando uma nova imagem
        foi selecionada
      */
      if (data.image) {


        uploadedImageUrl =
          await ProductStorageService.upload(
            data.image
          );


        imageUrl =
          uploadedImageUrl;

      }



      const payload = {

        name: data.name,

        category: data.category,

        description: data.description,

        price: data.price,

        quantity: data.quantity,

        image_url: imageUrl,

        is_active:
          product?.is_active ?? true,

      };



      if (product) {


        await updateProduct({

          id: product.id,

          product: payload,

        });



        /*
          Só remove a imagem antiga
          depois que o update
          confirmou sucesso
        */
        if (
          data.image &&
          oldImageUrl
        ) {

          await ProductStorageService.removeByUrl(
            oldImageUrl
          );

        }



        toast.success(
          "Produto atualizado com sucesso!"
        );


      } else {


        await createProduct(
          payload
        );


        toast.success(
          "Produto criado com sucesso!"
        );

      }



      onClose();



    } catch (error) {


      console.error(
        "Erro ao salvar produto:",
        error
      );



      /*
        Caso upload tenha acontecido,
        mas o banco falhou,
        remove imagem órfã
      */
      if (
        uploadedImageUrl
      ) {

        try {

          await ProductStorageService.removeByUrl(
            uploadedImageUrl
          );

        } catch {

          console.error(
            "Erro ao remover imagem órfã."
          );

        }

      }



      toast.error(
        "Erro ao salvar produto."
      );

    }

  }



  return (

    <Modal

      open={open}

      title={
        product
          ? "Editar Produto"
          : "Novo Produto"
      }

      onClose={onClose}

    >

      <ProductForm

        onSubmit={
          handleSubmit
        }

        isSubmitting={
          isSubmitting
        }


        submitLabel={
          product
            ? "Atualizar Produto"
            : "Criar Produto"
        }



        defaultValues={

          product
            ? {

                name:
                  product.name,

                category:
                  product.category,

                description:
                  product.description,

                price:
                  product.price,

                quantity:
                  product.quantity,

              }

            : undefined

        }



        previewUrl={
          product?.image_url ?? undefined
        }

      />

    </Modal>

  );

}