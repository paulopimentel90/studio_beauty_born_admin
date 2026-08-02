import { useEffect, useState } from "react";
import { FiImage, FiUpload, FiX } from "react-icons/fi";

interface ProductImageUploadProps {
  value?: File;
  previewUrl?: string;
  onChange: (file?: File) => void;
}

export function ProductImageUpload({
  value,
  previewUrl,
  onChange,
}: ProductImageUploadProps) {
  const [preview, setPreview] = useState<string>();

  useEffect(() => {
    if (value) {
      const objectUrl = URL.createObjectURL(value);

      setPreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }

    setPreview(previewUrl);
  }, [value, previewUrl]);

  function handleSelectFile(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    onChange(file);
  }

  function handleRemoveImage() {
    onChange(undefined);
  }

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium">
        Imagem
      </label>

      {preview ? (
        <div className="relative">
          <img
            src={preview}
            alt="Preview do produto"
            className="
              h-56
              w-full
              rounded-xl
              border
              object-cover
            "
          />

          <button
            type="button"
            onClick={handleRemoveImage}
            className="
              absolute
              right-3
              top-3
              rounded-full
              bg-white
              p-2
              shadow
              transition
              hover:bg-red-50
            "
          >
            <FiX />
          </button>
        </div>
      ) : (
        <label
          className="
            flex
            h-56
            w-full
            cursor-pointer
            flex-col
            items-center
            justify-center
            gap-3
            rounded-xl
            border-2
            border-dashed
            border-gray-300
            transition
            hover:border-black
          "
        >
          <FiImage
            size={42}
            className="text-gray-400"
          />

          <span className="font-medium">
            Escolha uma imagem
          </span>

          <span className="text-sm text-gray-500">
            JPG, PNG ou WEBP
          </span>

          <div
            className="
              mt-2
              flex
              items-center
              gap-2
              rounded-lg
              bg-black
              px-4
              py-2
              text-white
            "
          >
            <FiUpload />

            Selecionar
          </div>

          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleSelectFile}
          />
        </label>
      )}

      {preview && (
        <label
          className="
            flex
            cursor-pointer
            items-center
            justify-center
            rounded-lg
            border
            py-2
            transition
            hover:bg-gray-100
          "
        >
          Trocar imagem

          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleSelectFile}
          />
        </label>
      )}
    </div>
  );
}