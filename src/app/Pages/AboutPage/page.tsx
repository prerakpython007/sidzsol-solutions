import { GlobeDemo } from '@/app/components/Globe'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

const page = () => {
  return (
    <div className='bg-black pb-8'>
        <div className='flex items-center justify-center pt-10'>
            <h1 className={`${spaceGrotesk.className} text-7xl font-thin text-white`}>About Us</h1>
        </div>
        <GlobeDemo/>
        
    </div>
  )
}

export default page
