import {
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";

import { Badge } from "@/components/ui/Badge";

import type { Product } from "@/types/product";


interface ProductTableProps {

  products: Product[];

  onEdit: (product: Product) => void;

  onDelete: (product: Product) => void;

}



const currencyFormatter =
  new Intl.NumberFormat(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL",
    }
  );



export function ProductTable({

  products,

  onEdit,

  onDelete,

}: ProductTableProps) {


  if (products.length === 0) {

    return (

      <div
        className="
          py-20
          text-center
        "
      >

        <p
          className="
            text-stone-400
          "
        >
          Nenhum produto cadastrado.
        </p>

      </div>

    );

  }



  return (

    <div
      className="
        overflow-x-auto
      "
    >

      <table
        className="
          w-full
        "
      >

        <thead>

          <tr
            className="
              text-left
              text-sm
              text-stone-400
            "
          >

            <th className="p-4">
              Produto
            </th>

            <th>
              Categoria
            </th>

            <th>
              Preço
            </th>

            <th>
              Estoque
            </th>

            <th>
              Status
            </th>

            <th
              className="
                text-center
              "
            >
              Ações
            </th>

          </tr>

        </thead>



        <tbody>

          {products.map((product) => (

            <tr

              key={product.id}

              className="
                border-t
                border-stone-100
                transition
                hover:bg-stone-50
              "

            >

              <td className="p-4">

                <div
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >

                  {product.image_url ? (

                    <img

                      src={product.image_url}

                      alt={product.name}

                      className="
                        h-12
                        w-12
                        rounded-2xl
                        object-cover
                      "

                    />

                  ) : (

                    <div

                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        bg-stone-100
                        text-xs
                        text-stone-400
                      "

                    >
                      IMG
                    </div>

                  )}



                  <span
                    className="
                      font-medium
                      text-stone-800
                    "
                  >
                    {product.name}
                  </span>


                </div>


              </td>


              <td
                className="
                  text-stone-600
                "
              >
                {product.category}
              </td>


              <td
                className="
                  font-medium
                  text-stone-700
                "
              >

                {currencyFormatter.format(product.price)}

              </td>


              <td>
                {product.quantity}
              </td>


              <td>

                <Badge

                  status={
                    product.is_active
                      ? "active"
                      : "inactive"
                  }

                />

              </td>



              <td>

                <div
                  className="
                    flex
                    justify-center
                    gap-2
                  "
                >

                  <button

                    onClick={() =>
                      onEdit(product)
                    }

                    className="
                      rounded-xl
                      p-2
                      text-stone-500
                      transition
                      hover:bg-stone-100
                      hover:text-[#b98276]
                    "

                  >

                    <FiEdit2 size={18}/>

                  </button>



                  <button

                    onClick={() =>
                      onDelete(product)
                    }

                    className="
                      rounded-xl
                      p-2
                      text-stone-400
                      transition
                      hover:bg-red-50
                      hover:text-red-500
                    "

                  >

                    <FiTrash2 size={18}/>

                  </button>


                </div>


              </td>


            </tr>

          ))}

        </tbody>


      </table>


    </div>

  );

}