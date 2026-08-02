import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import toast from "react-hot-toast";

import { useProducts } from "@/hooks/useProducts";

import type { Product } from "@/types/product";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

import { ProductModal } from "@/components/products/ProductModal";
import { ProductStats } from "@/components/products/ProductStats";
import { ProductTable } from "@/components/products/ProductTable";


export function ProductsPage() {


  const {
    data: products,
    isLoading,
    error,
  } = useProducts();



  const [isModalOpen, setIsModalOpen] =
    useState(false);



  const [selectedProduct, setSelectedProduct] =
    useState<Product>();



  function handleCreate() {

    setSelectedProduct(undefined);

    setIsModalOpen(true);

  }



  function handleEdit(
    product: Product
  ) {

    setSelectedProduct(product);

    setIsModalOpen(true);

  }



  function handleDelete(
    product: Product
  ) {

    toast(
      product.name
    );

  }



  function handleCloseModal() {

    setSelectedProduct(undefined);

    setIsModalOpen(false);

  }



  if (isLoading) {

    return (

      <div
        className="
          flex
          min-h-40
          items-center
          justify-center
          text-stone-500
        "
      >

        Carregando produtos...

      </div>

    );

  }



  if (error) {

    return (

      <div
        className="
          flex
          min-h-40
          items-center
          justify-center
          text-red-500
        "
      >

        Erro ao carregar produtos.

      </div>

    );

  }



  return (

    <div
      className="
        space-y-8
      "
    >


      <div
        className="
          flex
          flex-col
          gap-5
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >


        <div>

          <h1
            className="
              text-4xl
              font-semibold
              tracking-tight
              text-stone-800
            "
          >
            Produtos
          </h1>



          <p
            className="
              mt-2
              text-stone-500
            "
          >
            Gerencie os produtos do cardápio
          </p>


        </div>



        <Button
          onClick={handleCreate}
        >

          <FiPlus
            className="
              mr-2
            "
          />

          Novo Produto

        </Button>


      </div>




      <ProductStats
        products={
          products ?? []
        }
      />





      <Card
        className="
          overflow-hidden
          p-0
        "
      >

        <ProductTable

          products={
            products ?? []
          }

          onEdit={
            handleEdit
          }

          onDelete={
            handleDelete
          }

        />


      </Card>





      <ProductModal

        open={
          isModalOpen
        }

        product={
          selectedProduct
        }

        onClose={
          handleCloseModal
        }

      />



    </div>

  );

}