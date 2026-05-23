export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-brand-azul text-brand-blanco min-h-screen">
        <div className="p-4">
          <h1 className="text-xl font-bold mb-6">Admin Panel</h1>
          <nav className="space-y-2">
            <a href="/admin" className="block py-2 px-4 hover:bg-brand-rojo rounded">Dashboard</a>
            <a href="/admin/jugadores" className="block py-2 px-4 hover:bg-brand-rojo rounded">Jugadores</a>
            <a href="/admin/partidos" className="block py-2 px-4 hover:bg-brand-rojo rounded">Partidos</a>
            <a href="/admin/torneos" className="block py-2 px-4 hover:bg-brand-rojo rounded">Torneos</a>
            <a href="/admin/noticias" className="block py-2 px-4 hover:bg-brand-rojo rounded">Noticias</a>
            <a href="/admin/multimedia" className="block py-2 px-4 hover:bg-brand-rojo rounded">Multimedia</a>
            <a href="/admin/patrocinadores" className="block py-2 px-4 hover:bg-brand-rojo rounded">Patrocinadores</a>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
