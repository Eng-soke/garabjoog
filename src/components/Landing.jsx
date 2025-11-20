import assets from '../assets/assets'

const featureList = [
    {
        title: 'Adeegga Bulshada',
        description: 'Waxaan bixinaa adeegyo bulsho oo dheeri ah oo loogu talagalay qoysaska iyo dadka baahan.',
        icon: (
            <svg className='w-6 h-6 text-blue-500' fill='none' stroke='currentColor' strokeWidth={1.6} viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
            </svg>
        ),
    },
    {
        title: 'Qorshaha Taageerada',
        description: 'Waxaan sameynaa qorshayaal gaar ah oo loogu talagalay qoysaska iyo dhalinyarada dhibaateysan.',
        icon: (
            <svg className='w-6 h-6 text-blue-500' fill='none' stroke='currentColor' strokeWidth={1.6} viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M3 3v18h18M7 13l3 3 7-7' />
            </svg>
        ),
    },
    {
        title: 'Maamulka Kooxda',
        description: 'Kooxda GarabJoog waxay ka shaqaysaa si wanaagsan oo isku duuban si ay u gaaraan ujeedada.',
        icon: (
            <svg className='w-6 h-6 text-blue-500' fill='none' stroke='currentColor' strokeWidth={1.6} viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M5 8a4 4 0 118 0v1a4 4 0 11-8 0V8zM19 11h-2a4 4 0 00-4 4v3h10v-3a4 4 0 00-4-4z' />
            </svg>
        ),
    },
    {
        title: 'Abaalmarinta',
        description: 'Waxaan helnay abaalmariin badan oo ka timid bulshada iyo hay\'adaha caalamiga ah.',
        icon: (
            <svg className='w-6 h-6 text-blue-500' fill='none' stroke='currentColor' strokeWidth={1.6} viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M12 6l2 4 4 .5-3 3 .7 4.5-3.7-2-3.7 2 .7-4.5-3-3 4-.5 2-4z' />
            </svg>
        ),
    },
]

const benefitCards = [
    {
        title: 'Hay\'ad Aamin Ah',
        description: 'GarabJoog waa hay\'ad aamin ah oo bulshada ku kalsoon tahay. Waxaan ka shaqeynaa muddo dheer oo aan u taageerno qoysaska.',
        icon: (
            <svg className='w-6 h-6 text-blue-500' fill='none' stroke='currentColor' strokeWidth={1.6} viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
            </svg>
        ),
    },
    {
        title: 'Taageero Goor Kasta',
        description: 'Waxaan bixinaa taageero goor kasta oo loo baahan yahay. Qoysaska iyo dhalinyarada waxay helaan garab iyo rajo.',
        icon: (
            <svg className='w-6 h-6 text-blue-500' fill='none' stroke='currentColor' strokeWidth={1.6} viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M12 8c-1.657 0-3 1.343-3 3v2m0 4h6m-3 0v4m5-4a5 5 0 10-10 0' />
            </svg>
        ),
    },
    {
        title: 'Qorshaha Isbeddelaya',
        description: 'Waxaan sameynaa qorshayaal isbeddelaya oo loogu talagalay baahiyaha kala duwan ee qoysaska iyo bulshada.',
        icon: (
            <svg className='w-6 h-6 text-blue-500' fill='none' stroke='currentColor' strokeWidth={1.6} viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M3 10h18M8 6h8m-9 8h10m-6 4h2' />
            </svg>
        ),
    },
    {
        title: 'Taageero Degdeg Ah 24/7',
        description: 'Waxaan bixinaa taageero degdeg ah maalin kasta iyo habeen kasta. Kooxdeena waxay ka shaqeysaa si ay u gaaraan qoysaska.',
        icon: (
            <svg className='w-6 h-6 text-blue-500' fill='none' stroke='currentColor' strokeWidth={1.6} viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M17 8h2a2 2 0 012 2v4a2 2 0 01-2 2h-2m-4 0h-4v4l-4-4H5a2 2 0 01-2-2v-4a2 2 0 012-2h2' />
            </svg>
        ),
    },
]

function Landing(){
    return (
        <>
            <section className='py-20 bg-white'>
                <div className='container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center'>
                    {/* Left imagery */}
                    <div className='relative flex flex-col gap-6'>
                        <div className='grid grid-cols-2 gap-4'>
                            <img
                                src={assets.garabjoogsawir2}
                                alt='Family meeting'
                                className='rounded-3xl shadow-2xl object-cover w-full h-64'
                            />
                            <div className='flex flex-col gap-4'>
                                <img
                                    src={assets.garabjoogsawir3}
                                    alt='Team discussion'
                                    className='rounded-3xl shadow-xl object-cover w-full h-30 md:h-32'
                                />
                                <img
                                    src={assets.garabjoogsawir4}
                                    alt='Friendly chat'
                                    className='rounded-3xl shadow-xl object-cover w-full h-32 md:h-36'
                                />
                            </div>
                        </div>
                        <div className='absolute -bottom-6 -left-6 w-28 h-28 bg-blue-600 text-white rounded-full flex flex-col items-center justify-center shadow-2xl'>
                            <span className='text-2xl font-bold'>12+</span>
                            <span className='text-xs text-center px-3 leading-tight'>Sannadood Taageero</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <span className='inline-flex items-center gap-2 text-sm font-semibold text-blue-500 uppercase tracking-widest mb-4'>
                            <span className='w-3 h-3 rounded-sm bg-blue-500'></span>
                            Ku Saabsan GarabJoog
                        </span>
                        <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
                            Waxaan Bixinaa Taageero Wanaagsan Oo Loo Baahan Yahay
                        </h2>
                        <p className='text-gray-600 mb-8 leading-relaxed'>
                            GarabJoog waa hay\'ad bulsho oo u taageerta qoysaska iyo dadka baahan. Waxaan bixinaa daryeel, deeq, iyo taageero aasaasiga ah si ay u helaan nolol wanaagsan iyo mustaqbal fiican.
                        </p>

                        <div className='grid sm:grid-cols-2 gap-6 mb-10'>
                            {featureList.map((item) => (
                                <div key={item.title} className='flex items-start gap-4 p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow'>
                                    <div className='w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center'>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-semibold text-gray-900'>{item.title}</h3>
                                        <p className='text-sm text-gray-500 mt-1'>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='flex flex-wrap items-center gap-6'>
                            <button className='bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors'>
                                Si Dheeraad Ah U Baro
                            </button>
                            <div className='text-2xl font-semibold text-gray-900 italic'>GarabJoog</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Features section */}
            <section className='py-20 bg-blue-50/50'>
                <div className='container mx-auto px-6 text-center'>
                    <span className='inline-flex px-4 py-2 rounded-full text-sm font-semibold bg-white text-blue-500 shadow mb-4'>
                        Waxyaabaha Naga Muuqda
                    </span>
                    <h3 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                        GarabJoog Wuxuu Kuu Bixiyaa Mustaqbal Wanaagsan
                    </h3>
                    <p className='text-gray-600 max-w-2xl mx-auto mb-12'>
                        Waxaan ka shaqeynaa si ay qoysaska iyo dhalinyarada u helaan taageero, fursado waxbarasho, iyo daryeel caafimaad. Halka rajada laga helo, bulshaduna ku kobocdo is-garabsi iyo naxariis.
                    </p>

                    <div className='grid gap-6 lg:grid-cols-4 md:grid-cols-2'>
                        {benefitCards.map((card, index) => (
                            <div
                                key={card.title}
                                className='bg-white rounded-2xl p-6 shadow-lg text-left relative overflow-hidden border border-blue-100'
                            >
                                <span className='absolute top-4 right-6 text-4xl font-bold text-blue-100'>
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <div className='w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4'>
                                    {card.icon}
                                </div>
                                <h4 className='text-lg font-semibold text-gray-900 mb-2'>{card.title}</h4>
                                <p className='text-sm text-gray-500 leading-relaxed'>
                                    {card.description}
                                </p>
                                <span className='block h-1 w-12 bg-blue-500 rounded-full mt-6'></span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Landing

