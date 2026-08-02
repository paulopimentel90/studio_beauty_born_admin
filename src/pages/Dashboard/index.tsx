// export function DashboardPage() {
//   return (
//     <main className="min-h-screen bg-slate-100 flex items-center justify-center">
//       <h1 className="text-5xl font-bold">
//         Born Beauty Studio - Admin
//       </h1>
//     </main>
//   );
// }


import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function DashboardPage() {

  return (
    <main className="min-h-screen bg-gray-100 p-10">

      <Card>

        <h1 className="text-2xl font-bold mb-4">
          Born Studio Admin
        </h1>

        <Button>
          Novo Produto
        </Button>

      </Card>

    </main>
  );
}