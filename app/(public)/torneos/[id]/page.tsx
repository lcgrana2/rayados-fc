export default function TorneoPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-brand-azul mb-6">Detalle del Torneo</h1>
      <p className="text-gray-700">ID del torneo: {params.id}</p>
    </div>
  );
}
