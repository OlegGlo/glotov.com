// import Box from '@/components/box'

import EmailBar from '../components/EmailBar'
import LinksBar from '../components/LinksBar'
import IntroSection from '../components/IntroSection'
import AboutSection from '../components/AboutSection'

import Image from 'next/image'

export default function Home() {
  return (
    <main className='inline-flex'>
        <LinksBar />
        <div className='overflow-y-scroll scroll-snap-y-mandatory max-h-screen max-h-[100vh] w-full'>
            <IntroSection />
            <AboutSection />
            
        </div>
        <EmailBar />
    </main>
  )
}
