import Header from '../components/Header'
import Footer from '../components/Footer'
import assets from '../assets/assets'

const featureCards = [
    {
        title: 'Taageero Wanaagsan',
        description: 'Waxaan bixinaa taageero wanaagsan oo loogu talagalay qoysaska iyo dadka baahan.',
        icon: (
            <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' strokeWidth={1.8} viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3m0-6V4m0 10v6m0 0H9m3 0h3M5 8h2a2 2 0 012 2v0a2 2 0 01-2 2H5v6m14-6h-2a2 2 0 01-2-2v0a2 2 0 012-2h2V6m0 10v2a2 2 0 01-2 2h-2' />
            </svg>
        ),
        accent: 'from-orange-500 to-red-500'
    },
    {
        title: 'Baaritaanka Baahiyaha',
        description: 'Waxaan sameynaa baaritaan gaar ah oo loogu talagalay baahiyaha qoysaska iyo bulshada.',
        icon: (
            <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' strokeWidth={1.8} viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M3 3v18h18M7 13l4 4 6-8' />
            </svg>
        ),
        accent: 'from-gray-900 to-black'
    },
    {
        title: 'Kooxda Xirfadlaha',
        description: 'Kooxdeena waxay ka kooban tahay xirfadlayaal khibrad u leh oo ka shaqeeya si ay u gaaraan qoysaska.',
        icon: (
            <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' strokeWidth={1.8} viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M17 20h5v-2a4 4 0 00-4-4h-1m-4 6v-2a4 4 0 014-4h0a4 4 0 014-4V4a4 4 0 00-4-4h-6a4 4 0 00-4 4v6a4 4 0 014 4h0a4 4 0 014 4v2m-8 0h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5z' />
            </svg>
        ),
        accent: 'from-orange-500 to-red-500'
    }
]

function AboutPage(){
    return (
        <div className='bg-white min-h-screen'>
            <Header />

            {/* Hero Banner */}
            <section className='relative h-[420px] w-full overflow-hidden'>
                <img 
                    src={assets.garabjooghero2}
                    alt='About hero'
                    className='absolute inset-0 w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-black/40'></div>
                <div className='absolute inset-0 flex flex-col justify-center'>
                    <div className='container mx-auto px-6 flex flex-col items-center text-center'>
                        <span className='inline-flex items-center gap-2 text-sm text-white uppercase tracking-[0.3em] mb-4'>
                            <span className='w-12 h-[2px] bg-white'></span>
                            Ku Saabsan
                        </span>
                        <h1 className='text-5xl md:text-6xl font-bold text-white'>Ku Saabsan GarabJoog</h1>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className='py-16 md:py-20 bg-white'>
                <div className='container mx-auto px-6 grid md:grid-cols-2 gap-12 items-start'>
                    <div>
                        <span className='inline-flex items-center text-xs font-semibold tracking-widest uppercase text-orange-500 bg-orange-50 px-4 py-2 rounded-full mb-6'>
                            Ku Saabsan
                        </span>
                        <h2 className='text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6'>
                            <span className='text-orange-500'>Hordhaca</span> Uu <br className='hidden md:block' /> GarabJoog U Yahay!
                        </h2>
                        <p className='text-gray-600 text-lg leading-relaxed'>
                            GarabJoog waa gacanta ku qabata markaad liidato, garabka kuu furma markaad taagero u baahato. Waxay iftiin u tahay dadka baahan daryeel, deeq iyo dadnimo.
                        </p>
                    </div>
                    <div className='space-y-6 text-gray-600 leading-relaxed'>
                        <p>
                            Halka rajada laga helo, bulshaduna ku kobocdo is-garabsi iyo naxariis. Waxaan ka shaqeynaa si ay qoysaska iyo dhalinyarada u helaan taageero, fursado waxbarasho, iyo daryeel caafimaad.
                        </p>
                        <p>
                            Waxaan bixinaa adeegyo kala duwan oo loogu talagalay qoysaska iyo dadka baahan. Kooxdeena waxay ka shaqeysaa si ay u gaaraan qoysaska dhammaan goobaha dalka.
                        </p>
                    </div>
                </div>

                {/* Feature Cards */}
                <div className='container mx-auto px-6 mt-12 grid lg:grid-cols-3 gap-6'>
                    {featureCards.map((card) => (
                        <div key={card.title} className='bg-white shadow-xl rounded-2xl p-6 flex items-start gap-4 border border-gray-100'>
                            <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${card.accent} flex items-center justify-center shadow-lg`}>
                                {card.icon}
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold text-gray-900 mb-2'>{card.title}</h3>
                                <p className='text-gray-500 text-sm leading-relaxed'>{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Media Section */}
            <section className='pb-20'>
                <div className='container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center'>
                    <div className='rounded-3xl overflow-hidden shadow-2xl'>
                        <img 
                            src={assets.garabjoogsawir2}
                            alt='Team collaboration'
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <div className='relative'>
                        <div className='rounded-3xl overflow-hidden shadow-2xl'>
                            <img 
                                src={assets.garabjoogsawir3}
                                alt='Creative team'
                                className='w-full h-full object-cover'
                            />
                        </div>
                        <button className='absolute inset-0 m-auto w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center shadow-xl hover:bg-orange-600 transition-colors'>
                            <svg className='w-10 h-10 text-white ml-1' viewBox='0 0 24 24' fill='currentColor'>
                                <path d='M8 5v14l11-7z' />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default AboutPage;

