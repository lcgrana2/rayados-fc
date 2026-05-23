import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-azul to-brand-rojo text-white py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">
              Sitio Oficial
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Bienvenidos a Rayados FC
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              La mística de un club profesional llevada a la cancha de fútbol 5. Acompaña a Rayados FC en los torneos más competitivos de Bogotá.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-brand-azul hover:bg-white/90 font-semibold">
                <Link href="/partidos">
                  Ver Calendario
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/historia">
                  Nuestra Historia
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 px-4 bg-brand-gris">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-brand-azul/20 hover:border-brand-azul/40 transition-colors">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-brand-azul mb-2">Próximo Partido</h3>
                <p className="text-gray-600">Consulta el calendario oficial y no te pierdas ningún encuentro.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-brand-rojo/20 hover:border-brand-rojo/40 transition-colors">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-brand-rojo mb-2">Noticias</h3>
                <p className="text-gray-600">Mantente al día con las últimas noticias del club.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-brand-azul/20 hover:border-brand-azul/40 transition-colors">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-brand-azul mb-2">Hinchada</h3>
                <p className="text-gray-600">Únete a la comunidad más apasionada del fútbol.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
