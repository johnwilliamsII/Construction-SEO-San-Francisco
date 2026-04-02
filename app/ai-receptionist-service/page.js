import AIReceptionistClient from './_client'

export const metadata = {
  title: 'AI Receptionist for Contractors | contractorseosanfrancisco.com',
  description:
    'Our AI receptionist for contractors answers calls 24/7, qualifies leads, and books jobs. Never miss an inbound call from a Bay Area homeowner again.',
  alternates: { canonical: '/ai-receptionist-service/' },
}

export default function AIReceptionistPage() {
  return <AIReceptionistClient />
}
