import {
  FiAlertTriangle,
  FiBox,
  FiCheckCircle,
  FiXCircle,
} from "react-icons/fi";

import { StatCard } from "@/components/ui/StatCard";

import type { Product } from "@/types/product";


interface ProductStatsProps {
  products: Product[];
}


const LOW_STOCK_LIMIT = 5;


export function ProductStats({
  products,
}: ProductStatsProps) {


  const totalProducts =
    products.length;


  const activeProducts =
    products.filter(
      (product) =>
        product.is_active
    ).length;


  const inactiveProducts =
    totalProducts - activeProducts;


  const lowStockProducts =
    products.filter(
      (product) =>
        product.quantity <= LOW_STOCK_LIMIT
    ).length;



  return (

    <div
      className="
        grid
        gap-5
        sm:grid-cols-2
        xl:grid-cols-4
      "
    >

      <StatCard
        title="Total de Produtos"
        value={totalProducts}
        icon={
          <div
            className="
              rounded-2xl
              bg-[#b98276]/10
              p-3
              text-[#b98276]
            "
          >
            <FiBox size={22}/>
          </div>
        }
      />


      <StatCard
        title="Produtos Ativos"
        value={activeProducts}
        icon={
          <div
            className="
              rounded-2xl
              bg-green-50
              p-3
              text-green-600
            "
          >
            <FiCheckCircle size={22}/>
          </div>
        }
      />


      <StatCard
        title="Produtos Inativos"
        value={inactiveProducts}
        icon={
          <div
            className="
              rounded-2xl
              bg-stone-100
              p-3
              text-stone-500
            "
          >
            <FiXCircle size={22}/>
          </div>
        }
      />


      <StatCard
        title="Estoque Baixo"
        value={lowStockProducts}
        icon={
          <div
            className="
              rounded-2xl
              bg-amber-50
              p-3
              text-amber-600
            "
          >
            <FiAlertTriangle size={22}/>
          </div>
        }
      />


    </div>

  );
}