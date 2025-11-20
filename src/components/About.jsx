import assets from '../assets/assets'
function About(){
    return (
        <section id='about' className='py-20 bg-white'>
            <div className='container mx-auto px-6'>
                <div className='grid md:grid-cols-2 gap-12 items-center'>
                    {/* Left Side - Image */}
                    <div className='relative'>
                        <div className='relative z-10'>
                            <img 
                                src={assets.garabjoogsawir2} 
                                alt='Team collaboration' 
                                className='rounded-lg shadow-2xl w-full'
                            />
                            {/* Play Button Overlay */}
                            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                <button className='w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg'>
                                    <svg className='w-10 h-10 text-white ml-1' fill='currentColor' viewBox='0 0 24 24'>
                                        <path d='M8 5v14l11-7z'/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        {/* Decorative Blue Shapes */}
                        <div className='absolute -left-8 -bottom-8 w-32 h-32 bg-blue-100 rounded-full opacity-50 -z-10'></div>
                        <div className='absolute -right-4 -top-4 w-24 h-24 bg-blue-200 rounded-full opacity-30 -z-10'></div>
                    </div>

                    {/* Right Side - Content */}
                    <div>
                        <span className='text-blue-600 text-sm font-semibold uppercase tracking-wider mb-4 block'>
                            KU SAABSAN GARABJOOG
                        </span>
                        <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight'>
                            Waxaan Ka Taageerno Qoysaska Iyo Bulshada
                        </h2>
                        <p className='text-gray-600 text-lg mb-8 leading-relaxed'>
                            GarabJoog waa hay\'ad bulsho oo u taageerta qoysaska iyo dadka baahan. Waxaan bixinaa daryeel, deeq, iyo taageero aasaasiga ah si ay u helaan nolol wanaagsan iyo mustaqbal fiican. Halka rajada laga helo, bulshaduna ku kobocdo is-garabsi iyo naxariis.
                        </p>

                        {/* Features List */}
                        <ul className='space-y-4 mb-8'>
                            {[
                                'Taageero Qoysaska Baahan',
                                'Fursado Waxbarasho Iyo Shaqo',
                                'Daryeel Caafimaad Iyo Deeq'
                            ].map((item, index) => (
                                <li key={index} className='flex items-center gap-3'>
                                    <div className='w-6 h-6 bg-blue-600 rounded flex items-center justify-center shrink-0'>
                                        <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                                        </svg>
                                    </div>
                                    <span className='text-gray-700 text-lg'>{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Stats Box */}
                        <div className='bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-8 inline-flex items-center gap-4'>
                            <div className='w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center'>
                                <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                                </svg>
                            </div>
                            <div>
                                <div className='text-3xl font-bold text-blue-600'>6,561+</div>
                                <div className='text-gray-600'>Qoysaska La Taageeray</div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className='flex flex-wrap gap-4 items-center'>
                            <button className='bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2 font-semibold'>
                                Si Dheeraad Ah U Baro
                                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                                </svg>
                            </button>
                            <div className='flex items-center gap-3 text-gray-700'>
                                <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center'>
                                    <svg className='w-6 h-6 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                                    </svg>
                                </div>
                                <div>
                                    <div className='text-sm text-gray-500'>Nala Soo Wac Hadda</div>
                                    <div className='text-lg font-semibold'>+252 61 612 1314</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;

