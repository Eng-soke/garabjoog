import { useState, useEffect } from 'react'
import assets from '../assets/assets'

function Hero(){
    const images = [
        assets.garabjooghero1,
        assets.garabjooghero2,
        assets.garabjoogsawir1,
        assets.garabjoogsawir4,
    ]

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [images.length])

    return (
        <section id='home' className='relative h-screen w-full overflow-hidden'>
            {/* Sliding Background Images */}
            <div className='absolute inset-0'>
                {images.map((img, i) => (
                    <div
                        key={i}
                        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                            i === index ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
            </div>

            {/* Blue Gradient Overlay */}
            <div className='absolute inset-0 bg-linear-to-r from-blue-900 via-blue-700 to-blue-500 opacity-80'></div>

            {/* Wavy Bottom Border */}
            <div className='absolute bottom-0 left-0 right-0'>
                <svg viewBox='0 0 1440 120' fill='none' xmlns='http://www.w3.org/2000/svg' className='w-full h-24'>
                    <path d='M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z' fill='white'/>
                </svg>
            </div>

            {/* Content */}
            <div className='relative z-10 h-full flex items-center'>
                <div className='container mx-auto px-6'>
                    <div className='max-w-2xl'>
                       
                        <h1 className='text-5xl md:text-4xl font-bold text-white mb-6 leading-tight'>
                        GARABJOOG WAA GACANT KU QABATA MARKAAD LIIDATO,
                        </h1>
                        <p className='text-white/90 text-lg mb-8 leading-relaxed'>
                        GarabJoog waa gacanta ku qabata markaad liidato, garabka kuu furma markaad taagero u baahato.
                        Waxay iftiin u tahay dadka baahan daryeel, deeq iyo dadnimo.
                        Halka rajada laga helo, bulshaduna ku kobocdo is–garabsi iyo naxariis.
                        </p>
                        <div className='flex flex-wrap gap-4'>
                            <button className='bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2 font-semibold'>
                                Si Dheeraad Ah U Baro
                                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                                </svg>
                            </button>
                            <button className='bg-white text-blue-600 px-8 py-4 rounded-md hover:bg-gray-100 transition-colors flex items-center gap-2 font-semibold'>
                                Nala Soo Xidhiidh
                                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2'>
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-3 h-3 rounded-full transition-all ${
                            i === index ? 'bg-white w-8' : 'bg-white/50'
                        }`}
                    />
                ))}
            </div>
        </section>
    )
}
export default Hero;