import type {
  TextareaHTMLAttributes,
} from "react";


interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {

  label?: string;

  error?: string;

}



export function Textarea({
  label,
  error,
  className = "",
  ...props
}: TextareaProps) {


  return (

    <div
      className="
        flex
        flex-col
        gap-2
      "
    >


      {label && (

        <label
          className="
            text-sm
            font-medium
            text-stone-700
          "
        >
          {label}
        </label>

      )}



      <textarea

        className={`

          min-h-28

          w-full

          rounded-2xl

          border
          border-stone-200

          bg-white

          px-4
          py-3

          text-stone-800

          placeholder:text-stone-400

          outline-none

          resize-none

          transition-all


          focus:border-[#b98276]


          focus:ring-4


          focus:ring-[#b98276]/10


          ${className}

        `}

        {...props}

      />



      {error && (

        <span
          className="
            text-sm
            text-red-500
          "
        >
          {error}
        </span>

      )}


    </div>

  );

}