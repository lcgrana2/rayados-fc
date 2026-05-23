export default function PartidoPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-brand-azul mb-6">Ficha del Partido</h1>
      <p className="text-gray-700">ID del partido: {params.id}</p>
    </div>
  );
}
