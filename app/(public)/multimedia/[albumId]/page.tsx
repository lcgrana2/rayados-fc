export default function AlbumPage({ params }: { params: { albumId: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-brand-azul mb-6">Álbum</h1>
      <p className="text-gray-700">ID del álbum: {params.albumId}</p>
    </div>
  );
}
