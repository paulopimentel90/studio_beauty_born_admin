interface BadgeProps {
  status: "active" | "inactive";
}

export function Badge({
  status,
}: BadgeProps) {

  const styles = {
    active:
      "bg-green-100 text-green-700",

    inactive:
      "bg-gray-100 text-gray-600",
  };


  return (
    <span
      className={`
        px-3
        py-1
        rounded-full
        text-xs
        font-medium
        ${styles[status]}
      `}
    >
      {status === "active"
        ? "Ativo"
        : "Inativo"}
    </span>
  );
}