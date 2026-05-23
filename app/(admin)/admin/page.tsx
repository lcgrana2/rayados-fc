import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

export default async function AdminDashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login")
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-brand-azul mb-6">Dashboard</h1>
      <p className="text-gray-700 mb-4">
        Bienvenido, {user.email}
      </p>
      <p className="text-gray-700">KPIs y métricas del sistema</p>
    </div>
  );
}
