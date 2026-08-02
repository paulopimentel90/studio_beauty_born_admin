import { FiBell } from "react-icons/fi";


export function Header(){

  return (

    <header
      className="
        h-16
        border-b
        bg-white
        flex
        items-center
        justify-between
        px-8
      "
    >

      <h2 className="
        font-semibold
      ">
        Dashboard
      </h2>


      <button>

        <FiBell size={20}/>

      </button>


    </header>

  );

}