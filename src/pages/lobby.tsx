// src/pages/lobby.tsx
import Head from 'next/head'

export default function Lobby() {
  const games = [
    { id: 'slots', name: 'Slots' },
    { id: 'dice', name: 'Dice' },
    { id: 'crash', name: 'Crash' },
    { id: 'roulette', name: 'Roulette' },
    { id: 'coinflip', name: 'Coin Flip' },
    { id: 'mines', name: 'Mines' },
  ]
  return (
    <>
      <Head>
        <title>Lobby — LemonFLIP</title>
      </Head>
      <main className="min-h-screen p-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Game Lobby</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map(g => (
            <a key={g.id} href={`/game/${g.id}`} className="p-6 border rounded-lg hover:shadow">
              <h3 className="text-xl font-semibold">{g.name}</h3>
              <p className="text-sm text-gray-500 mt-2">Click to play</p>
            </a>
          ))}
        </div>
      </main>
    </>
  )
}
