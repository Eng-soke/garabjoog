import assets from '../assets/assets'

const missionItems = [
    {
        title: 'Aragtida',
        description: 'Waxaan rabnaa inaan noqono halka rajada laga helo, halka qoysaska iyo dhalinyarada ay helaan taageero, daryeel, iyo fursado waxbarasho iyo shaqo.',
        iconPath: 'M12 4l4 4-4 4-4-4 4-4zm0 8l4 4-4 4-4-4 4-4z'
    },
    {
        title: 'Ujeedada',
        description: 'Ujeedadeena waa inaan taageerno qoysaska iyo dadka baahan, waxaan bixinaa daryeel, deeq, iyo dadnimo si ay u helaan nolol wanaagsan.',
        iconPath: 'M5 12l2-2 3 3 7-7 2 2-9 9-5-5z'
    },
    {
        title: 'Ujeedada',
        description: 'Waxaan rabnaa in bulshada ay kobocdo is-garabsi iyo naxariis, halka qof walba uu helo garab iyo rajo uu ku tiirsan karo.',
        iconPath: 'M12 6v6l4 2'
    }
]

const mosaicImages = [
    { src: assets.garabjooghero1, className: 'top-0 left-1/3 w-28 h-28 md:w-36 md:h-36' },
    { src: assets.garabjoogsawir1, className: 'top-1/3 left-0 w-32 h-32 md:w-40 md:h-40' },
    { src: assets.garabjoogsawir4, className: 'top-1/3 right-2 w-36 h-36 md:w-48 md:h-48' },
    { src: assets.garabjooghero2, className: 'bottom-0 left-1/3 w-32 h-32 md:w-44 md:h-44' }
]

function Mission(){
    return (
        <section id='mission' className='py-20 bg-gray-50 overflow-hidden'>
            <div className='container mx-auto px-6'>
                <div className='grid lg:grid-cols-2 gap-16 items-center'>
                    {/* Mission Content */}
                    <div>
                        <span className='inline-flex items-center gap-2 text-sm font-semibold text-teal-600 uppercase tracking-widest mb-4'>
                            <span className='w-10 h-[2px] bg-teal-400'></span>
                            Ujeedadeena
                        </span>
                        <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
                            Waxaan Dhiseynaa Aragti, Ujeedo Iyo Ujeedada
                        </h2>
                        <p className='text-gray-600 text-lg mb-10 leading-relaxed'>
                            Waxaan ka shaqeynaa si ay qoysaska iyo dhalinyarada u helaan garab, rajo, iyo fursado. Ujeedadeena waa in bulshada ay kobocdo is-garabsi iyo naxariis, halka qof walba uu helo taageero uu ku tiirsan karo.
                        </p>

                        <div className='space-y-8'>
                            {missionItems.map((item) => (
                                <div key={item.title} className='flex items-start gap-5'>
                                    <div className='relative w-14 h-14 shrink-0'>
                                        <div className='absolute inset-0 rotate-45 border border-teal-200 rounded-xl flex items-center justify-center bg-white shadow-sm'>
                                            <svg className='w-5 h-5 text-teal-500 -rotate-45' fill='none' stroke='currentColor' strokeWidth={1.8} viewBox='0 0 24 24'>
                                                <path d={item.iconPath} strokeLinecap='round' strokeLinejoin='round' />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-semibold text-gray-900 mb-2'>{item.title}</h3>
                                        <p className='text-gray-600 leading-relaxed'>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mission Imagery */}
                    <div className='relative h-[420px]'>
                        <div className='absolute -top-6 -right-10 w-52 h-52 bg-linear-to-b from-gray-200 to-gray-100 rounded-[48px] rotate-45 opacity-70'></div>
                        <div className='absolute -bottom-10 -left-6 w-24 h-24 bg-teal-200 rounded-full opacity-50'></div>
                        <div className='absolute -top-10 left-8 w-10 h-10 border border-teal-300 rounded-full opacity-60'></div>

                        {mosaicImages.map((image, index) => (
                            <div key={index} className={`absolute ${image.className}`}>
                                <div className='w-full h-full rotate-45 rounded-[32px] overflow-hidden shadow-2xl bg-white'>
                                    <img 
                                        src={image.src} 
                                        alt='Mission visual' 
                                        className='w-full h-full object-cover -rotate-45 scale-125' 
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mission;

