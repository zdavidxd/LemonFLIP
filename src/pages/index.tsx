// src/pages/index.tsx
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>LemonFLIP — Lemon SMP Casino</title>
      </Head>
      <main className="min-h-screen bg-white text-gray-900 p-8">
        <header className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-lemon mb-2">LemonFLIP</h1>
          <p className="text-lg text-gray-600">Virtual-coin casino for Lemon SMP — play Slots, Dice, Crash and more.</p>
        </header>

        <section className="mt-10 max-w-4xl mx-auto">
          <a href="/lobby" className="inline-block bg-lemon text-black px-6 py-3 rounded-lg font-semibold">Enter the Lobby</a>
        </section>
      </main>
    </>
  )
}
