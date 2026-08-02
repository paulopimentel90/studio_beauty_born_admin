import type { ReactNode } from "react";

import { Card } from "./Card";

interface StatCardProps {
  title: string;
  value: number;
  icon: ReactNode;
}

export function StatCard({
  title,
  value,
  icon,
}: StatCardProps) {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>
        </div>

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-gray-100
            text-gray-700
          "
        >
          {icon}
        </div>
      </div>
    </Card>
  );
}