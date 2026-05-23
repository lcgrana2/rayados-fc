export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-brand-gris">
      {/* Header */}
      <header className="bg-brand-azul text-brand-blanco">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">Rayados FC</h1>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-brand-azul text-brand-blanco mt-auto">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center">© 2026 Rayados FC. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
