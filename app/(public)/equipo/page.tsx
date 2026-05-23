import { createClient } from '@/lib/supabase/server'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

type Jugador = {
  id: string
  nombre: string
  apodo: string | null
  dorsal: number
  posicion: string
  bio: string | null
  activo: boolean
}

const posicionMap: Record<string, string> = {
  POR: 'Portero',
  DEF: 'Defensa',
  MED: 'Mediocampista',
  DEL: 'Delantero',
}

// Forzar a Next.js a nunca cachear esta página y consultar Supabase en cada F5
export const dynamic = 'force-dynamic';

export default async function EquipoPage() {
  const supabase = await createClient()

  const { data: jugadores, error } = await supabase
    .from('jugadores')
    .select('*')
    .eq('activo', true)
    .order('dorsal', { ascending: true })

  if (error) {
    console.error('Error fetching jugadores:', error)
  }

  const jugadoresActivos = jugadores as Jugador[] | null

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-brand-azul mb-2">Nuestro Equipo</h1>
        <p className="text-gray-600 text-lg">Conoce a los jugadores que representan al Rayados FC</p>
      </div>

      {!jugadoresActivos || jugadoresActivos.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 px-4">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-brand-azul/10 flex items-center justify-center">
              <svg className="w-10 h-10 text-brand-azul" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-brand-azul mb-2">Nómina en preparación</h2>
            <p className="text-gray-600">Estamos preparando la nómina para el próximo torneo</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {jugadoresActivos.map((jugador) => (
            <Card key={jugador.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="bg-brand-azul text-white pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-white mb-1">
                      {jugador.nombre}
                    </CardTitle>
                    {jugador.apodo && (
                      <p className="text-blue-200 text-sm italic">&quot;{jugador.apodo}&quot;</p>
                    )}
                  </div>
                  <Badge 
                    className="bg-brand-rojo text-white border-0 text-lg font-bold px-3 py-1 h-10 w-10 flex items-center justify-center rounded-full"
                  >
                    {jugador.dorsal}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-4">
                  <Badge variant="secondary" className="mb-3">
                    {posicionMap[jugador.posicion] || jugador.posicion}
                  </Badge>
                </div>
                {jugador.bio && (
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {jugador.bio}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
