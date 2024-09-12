import type { Network } from '@/app/lib/definitions'
import Image from 'next/image'

export default function NetworkCard({ network }: { network: Network }) {
  return (
    <div className='grid grid-cols-[100px,1fr] gap-3 p-3'>
      <div className='w-[100px] relative'>{network.logo && <Image src={network.logo} alt={network.name} fill />}</div>
      <div className='col-start-2'>
        <h2 className='text-xl font-bold'>{network.name}</h2>
        <p className='text-sm'>{network.description}</p>
      </div>
    </div>
  )
}
