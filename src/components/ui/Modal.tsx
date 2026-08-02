import {
  useEffect,
  type ReactNode,
} from "react";

import {
  FiX,
} from "react-icons/fi";


interface ModalProps {

  open: boolean;

  title: string;

  children: ReactNode;

  onClose: () => void;

  closeOnBackdrop?: boolean;

  closeOnEscape?: boolean;

  isClosable?: boolean;

}



export function Modal({

  open,

  title,

  children,

  onClose,

  closeOnBackdrop = true,

  closeOnEscape = true,

  isClosable = true,

}: ModalProps) {



  useEffect(() => {


    if (
      !open ||
      !closeOnEscape ||
      !isClosable
    ) {

      return;

    }



    function handleKeyDown(
      event: KeyboardEvent
    ) {


      if (
        event.key === "Escape"
      ) {

        onClose();

      }

    }



    window.addEventListener(
      "keydown",
      handleKeyDown
    );



    return () => {

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

    };


  }, [
    open,
    closeOnEscape,
    isClosable,
    onClose,
  ]);



  if (!open) {

    return null;

  }



  return (

    <div

      className="
        fixed
        inset-0
        z-50

        flex
        items-center
        justify-center

        bg-stone-900/30

        backdrop-blur-sm

        p-4
      "

      onClick={() => {

        if (
          closeOnBackdrop &&
          isClosable
        ) {

          onClose();

        }

      }}

    >



      <div

        className="
          w-full

          max-w-lg

          rounded-3xl

          bg-white

          p-8

          shadow-[0_20px_50px_rgb(0,0,0,0.08)]
        "

        onClick={(event) =>
          event.stopPropagation()
        }

      >



        <div
          className="
            mb-8

            flex

            items-center

            justify-between
          "
        >


          <h2

            className="
              text-2xl

              font-semibold

              text-stone-800
            "

          >

            {title}

          </h2>



          {isClosable && (

            <button

              type="button"

              onClick={onClose}

              className="
                rounded-full

                p-2

                text-stone-400

                transition

                hover:bg-stone-100

                hover:text-stone-700
              "

            >

              <FiX size={20}/>

            </button>

          )}


        </div>



        {children}


      </div>


    </div>

  );

}