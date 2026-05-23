export default function NoticiaDetallePage({ params }: { params: { slug: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-brand-azul mb-6">Detalle de Noticia</h1>
      <p className="text-gray-700">Slug: {params.slug}</p>
    </div>
  );
}
