import type {
  ButtonHTMLAttributes,
} from "react";


interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {

  variant?: 
    | "primary"
    | "secondary"
    | "danger";

}



export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {


  const variants = {


    primary:
      `
      bg-[#b98276]
      text-white
      hover:bg-[#a87064]
      shadow-sm
      `,


    secondary:
      `
      bg-stone-100
      text-stone-700
      hover:bg-stone-200
      `,


    danger:
      `
      bg-red-500
      text-white
      hover:bg-red-600
      `,

  };



  return (

    <button

      className={`
        px-5
        py-2.5
        rounded-2xl
        font-medium
        transition-all
        duration-200

        hover:scale-[1.02]

        disabled:opacity-50
        disabled:cursor-not-allowed

        ${variants[variant]}

        ${className}
      `}

      {...props}

    >

      {children}

    </button>

  );

}