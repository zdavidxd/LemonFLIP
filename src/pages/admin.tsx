// src/pages/admin.tsx
import Head from 'next/head'

export default function Admin() {
  return (
    <>
      <Head>
        <title>Admin — LemonFLIP</title>
      </Head>
      <main className="min-h-screen p-8">
        <h2 className="text-2xl font-bold">Admin Panel (placeholder)</h2>
        <p className="mt-4 text-gray-600">You will be able to configure deposit presets, manage admins, and audit transactions here.</p>
      </main>
    </>
  )
}
