import { Card ,CardDescription,CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex items-center justify-center'>
      <Card>
        <CardHeader>
          <CardTitle>Teste</CardTitle>
          <CardDescription>Teste descrição do componete Card</CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}
