import Header from '../components/Header'
import Footer from '../components/Footer'
import assets from '../assets/assets'

const contactOptions = [
    {
        title: 'Visit Our Office',
        description: 'Daljirka Dahsoon Road, Hargeisa, Somalia',
        icon: (
            <svg className='w-6 h-6 text-blue-600' fill='none' stroke='currentColor' strokeWidth={1.8} viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zm0 0c-4 0-7 3-7 7v2h14v-2c0-4-3-7-7-7z' />
            </svg>
        ),
    },
    {
        title: 'Call Us Anytime',
        description: '+252 61 612 1314',
        icon: (
            <svg className='w-6 h-6 text-blue-600' fill='none' stroke='currentColor' strokeWidth={1.8} viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.5 1.2L8 10.5a11.05 11.05 0 005.5 5.5l1.12-2.24a1 1 0 011.2-.5l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.7 21 3 14.3 3 6V5z' />
            </svg>
        ),
    },
    {
        title: 'Email Support',
        description: 'hello@garabjoog.org',
        icon: (
            <svg className='w-6 h-6 text-blue-600' fill='none' stroke='currentColor' strokeWidth={1.8} viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M4 4h16a2 2 0 012 2v1l-10 6L2 7V6a2 2 0 012-2zm0 5v9h16V9' />
            </svg>
        ),
    },
]

const officeHours = [
    { day: 'Monday - Friday', time: '08:00 AM - 06:00 PM' },
    { day: 'Saturday', time: '09:00 AM - 02:00 PM' },
    { day: 'Sunday', time: 'Emergency Support Only' },
]

function Contact() {
    return (
        <div className='bg-gray-50 min-h-screen'>
            <Header />

            {/* Hero */}
            <section className='pt-36 pb-16 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white relative overflow-hidden'>
                <img
                    src={assets.garabjoogsawir2}
                    alt='Team collaborating'
                    className='absolute inset-0 w-full h-full object-cover opacity-10'
                />
                <div className='absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-700/80 to-blue-500/80'></div>
                <div className='relative container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center'>
                    <div>
                        <span className='inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] mb-4'>
                            <span className='w-12 h-[2px] bg-white/70'></span>
                            Nala Soo Xidhiidh
                        </span>
                        <h1 className='text-4xl md:text-5xl font-bold mb-5'>
                            Waxaan Halkan Nahay Si Aan U Dhageysano, U Taageerno & U Wada Shaqeyno
                        </h1>
                        <p className='text-white/80 text-lg leading-relaxed mb-8'>
                            Nala soo xidhiidh kooxdeena si aad u hesho iskaashiga, su\'aalaha warbaahinta, barnaamijyada iskaa wax u qabso, ama caawinta bulshada. Waxaan ka jawaabeynaa dhammaan farriimaha 24 saacadood gudahood maalmaha shaqada.
                        </p>
                        <div className='flex flex-wrap gap-4'>
                            <button className='bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-100 transition-colors'>
                                Talk to our team
                            </button>
                            <button className='border border-white/60 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors'>
                                View FAQs
                            </button>
                        </div>
                    </div>
                    <div className='bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/40 shadow-2xl'>
                        <h3 className='text-2xl font-semibold mb-4'>Quick Support</h3>
                        <p className='text-white/80 mb-6'>
                            “GarabJoog thrives because of the people who reach out with ideas. Whether you’re seeking assistance or eager to
                            collaborate, our inbox is always open.”
                        </p>
                        <div className='space-y-4 text-white/90 text-sm'>
                            {contactOptions.map((option) => (
                                <div key={option.title} className='flex items-start gap-3'>
                                    <div className='w-10 h-10 rounded-full bg-white/20 flex items-center justify-center'>
                                        {option.icon}
                                    </div>
                                    <div>
                                        <p className='font-semibold'>{option.title}</p>
                                        <p>{option.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Cards */}
            <section className='py-16'>
                <div className='container mx-auto px-6 grid gap-6 md:grid-cols-3'>
                    {contactOptions.map((option) => (
                        <div key={option.title} className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100'>
                            <div className='w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4'>
                                {option.icon}
                            </div>
                            <h4 className='text-xl font-semibold text-gray-900 mb-2'>{option.title}</h4>
                            <p className='text-gray-600'>{option.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Form & Info */}
            <section className='pb-16'>
                <div className='container mx-auto px-6 grid lg:grid-cols-3 gap-10 items-start'>
                    <div className='bg-white rounded-3xl p-8 shadow-xl lg:col-span-2'>
                        <p className='text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3'>Send us a message</p>
                        <h3 className='text-3xl font-bold text-gray-900 mb-6'>Let’s start a conversation</h3>
                        <form className='grid gap-6'>
                            <div className='grid md:grid-cols-2 gap-6'>
                                <div>
                                    <label className='text-sm font-medium text-gray-700'>Full Name</label>
                                    <input
                                        type='text'
                                        className='mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                        placeholder='Your name'
                                    />
                                </div>
                                <div>
                                    <label className='text-sm font-medium text-gray-700'>Email Address</label>
                                    <input
                                        type='email'
                                        className='mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                        placeholder='name@email.com'
                                    />
                                </div>
                            </div>
                            <div className='grid md:grid-cols-2 gap-6'>
                                <div>
                                    <label className='text-sm font-medium text-gray-700'>Phone Number</label>
                                    <input
                                        type='tel'
                                        className='mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                        placeholder='+252 61 612 1314'
                                    />
                                </div>
                                <div>
                                    <label className='text-sm font-medium text-gray-700'>Topic</label>
                                    <select className='mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500'>
                                        <option>Partnership</option>
                                        <option>Volunteer</option>
                                        <option>Press & Media</option>
                                        <option>General Inquiry</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className='text-sm font-medium text-gray-700'>Message</label>
                                <textarea
                                    rows='5'
                                    className='mt-2 w-full rounded-3xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    placeholder='How can we help you?'
                                ></textarea>
                            </div>
                            <button className='bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors'>
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div className='bg-blue-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden'>
                        <div className='absolute inset-0 opacity-10'>
                            <img src={assets.garabjooghero1} alt='' className='w-full h-full object-cover' />
                        </div>
                        <div className='relative'>
                            <h4 className='text-2xl font-semibold mb-4'>Operational Hours</h4>
                            <ul className='space-y-4 mb-8'>
                                {officeHours.map((item) => (
                                    <li key={item.day} className='flex justify-between border-b border-white/10 pb-2'>
                                        <span>{item.day}</span>
                                        <span className='font-semibold text-white'>{item.time}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className='bg-white/10 rounded-2xl p-5 space-y-4'>
                                <div>
                                    <p className='text-sm uppercase tracking-widest text-white/70'>Emergency Hotline</p>
                                    <p className='text-2xl font-bold'>+252 61 612 1314</p>
                                </div>
                                <p className='text-white/80 text-sm'>
                                    Available 24/7 for urgent community support or safeguarding concerns. Don’t hesitate to call if someone needs immediate
                                    assistance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='pb-20'>
                <div className='container mx-auto px-6'>
                    <div className='bg-white rounded-3xl shadow-xl overflow-hidden'>
                        <div className='h-80'>
                            <iframe
                                title='GarabJoog Location'
                                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.108095119401!2d44.20186101528955!3d9.562729193079728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164727d36d59a7c9%3A0x9d77eb4128bd5b79!2sHargeisa!5e0!3m2!1sen!2sso!4v1700000000000!5m2!1sen!2sso'
                                width='100%'
                                height='100%'
                                style={{ border: 0 }}
                                allowFullScreen=''
                                loading='lazy'
                                referrerPolicy='no-referrer-when-downgrade'
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Contact


