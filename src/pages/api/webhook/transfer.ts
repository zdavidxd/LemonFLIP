// src/pages/api/webhook/transfer.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import crypto from 'crypto'

export const config = {
  api: {
    bodyParser: true,
  },
}

function verifySignature(body: any, signature: string | string[] | undefined) {
  const secret = process.env.WEBHOOK_SECRET || ''
  if (!secret || !signature) return false
  const computed = crypto.createHmac('sha256', secret).update(JSON.stringify(body)).digest('hex')
  return computed === signature
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const signature = req.headers['x-webhook-signature']
  if (!verifySignature(req.body, signature)) {
    return res.status(401).json({ error: 'Invalid signature' })
  }

  const { type, depositId, minecraftName, amount } = req.body
  if (!type || !minecraftName || typeof amount !== 'number') {
    return res.status(400).json({ error: 'Missing fields' })
  }

  // TODO: Wire Prisma client to update DB. For now, we log and return success.
  console.log('Webhook received:', { type, depositId, minecraftName, amount })

  // Example response:
  return res.status(200).json({ ok: true })
}
