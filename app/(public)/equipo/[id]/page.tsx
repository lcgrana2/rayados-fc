export default function JugadorPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-brand-azul mb-6">Ficha del Jugador</h1>
      <p className="text-gray-700">ID del jugador: {params.id}</p>
    </div>
  );
}
