import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiPackage,
  FiSettings,
} from "react-icons/fi";


const menuItems = [
  {
    label: "Dashboard",
    path: "/",
    icon: FiHome,
  },
  {
    label: "Produtos",
    path: "/products",
    icon: FiPackage,
  },
  {
    label: "Configurações",
    path: "/settings",
    icon: FiSettings,
  },
];


export function Sidebar() {

  return (
    <aside
      className="
        w-64
        min-h-screen
        border-r
        bg-white
        p-6
      "
    >

      <div className="mb-10">

        <h1 className="
          text-xl
          font-bold
        ">
          Born Studio
        </h1>

        <p className="
          text-sm
          text-gray-500
        ">
          Admin Panel
        </p>

      </div>


      <nav className="space-y-2">

        {menuItems.map((item) => {

          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({isActive}) =>
                `
                flex
                items-center
                gap-3
                px-3
                py-2
                rounded-lg
                transition

                ${
                  isActive
                  ? "bg-black text-white"
                  : "text-gray-600 hover:bg-gray-100"
                }
                `
              }
            >

              <Icon size={18}/>

              {item.label}

            </NavLink>
          );

        })}

      </nav>

    </aside>
  );
}