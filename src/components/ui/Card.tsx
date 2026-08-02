import type {
  HTMLAttributes,
} from "react";


interface CardProps
  extends HTMLAttributes<HTMLDivElement> {}



export function Card({

  children,

  className = "",

  ...props

}: CardProps) {


  return (

    <div

      className={`
        bg-white

        rounded-3xl

        border
        border-stone-100

        shadow-[0_8px_30px_rgb(0,0,0,0.04)]

        p-6

        ${className}
      `}

      {...props}

    >

      {children}

    </div>

  );

}