const companyLinks = ['Ku Saabsan', 'Adeegyada', 'Bulshada', 'Tilmaamaha']
const supportLinks = ['Xarunta Caawinta', 'Nala Soo Xidhiidh', 'Warbaahinta', 'Talooyinka']
const resourceLinks = ['Kursaska', 'Noqo Macallin', 'Adeeg', 'Dhammaan']

const socialIcons = [
    {
        label: 'Facebook',
        path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
    },
    {
        label: 'Twitter',
        path: 'M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7.48v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
    },
    {
        label: 'Instagram',
        path: 'M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm8 5a4 4 0 100 8 4 4 0 000-8zm5.5-.5a1 1 0 10-2 0 1 1 0 002 0z',
    },
    {
        label: 'LinkedIn',
        path: 'M4 4a2 2 0 11.001 4.001A2 2 0 014 4zm0 5h4v12H4zM10 9h4v2h.06C15 9.5 17 8 19.5 8 24 8 24 11 24 15.5V21h-4v-4.5c0-1.5 0-3.5-2-3.5s-2.5 1.6-2.5 3.5V21h-4z',
    },
    {
        label: 'GitHub',
        path: 'M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.48 0-.23-.01-.85-.01-1.67-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.13-1.53-1.13-1.53-.92-.64.07-.63.07-.63 1.02.07 1.55 1.07 1.55 1.07.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.13-4.55-5 0-1.1.39-2 1.03-2.71-.1-.26-.45-1.31.1-2.72 0 0 .84-.27 2.75 1.02A9.24 9.24 0 0112 6.8c.85.01 1.7.12 2.5.35 1.9-1.29 2.74-1.02 2.74-1.02.55 1.41.2 2.46.1 2.72.64.71 1.03 1.61 1.03 2.71 0 3.88-2.33 4.74-4.56 4.99.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83 0 .26.18.58.69.48A10.29 10.29 0 0022 12.26C22 6.58 17.52 2 12 2z',
    },
]

function FooterColumn({ title, items }) {
    return (
        <div>
            <h4 className='text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4'>{title}</h4>
            <ul className='space-y-2 text-gray-500 text-sm'>
                {items.map((item) => (
                    <li key={item} className='hover:text-blue-600 transition-colors cursor-pointer'>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

function Footer() {
    return (
        <footer className='bg-white border-t border-gray-100 mt-20'>
            <div className='container mx-auto px-6 py-12 grid gap-8 md:grid-cols-5'>
                <div className='md:col-span-2'>
                    <div className='flex items-center gap-3 mb-4'>
                        <div className='w-10 h-10 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center font-bold'>
                            G
                        </div>
                        <div>
                            <p className='text-lg font-semibold text-gray-900'>GarabJoog</p>
                            <p className='text-sm text-gray-500'>Taageero, Rajo & Fursad</p>
                        </div>
                    </div>
                    <p className='text-sm text-gray-500 mb-4 pr-4'>
                        GarabJoog waa gacanta ku qabata markaad liidato, garabka kuu furma markaad taagero u baahato. Waxay iftiin u tahay dadka baahan daryeel, deeq iyo dadnimo.
                    </p>
                    <div className='flex gap-3'>
                        {socialIcons.map((icon) => (
                            <a
                                key={icon.label}
                                href='#'
                                aria-label={icon.label}
                                className='w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-600 transition-colors'
                            >
                                <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
                                    <path d={icon.path} />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>

                <FooterColumn title='Company' items={companyLinks} />
                <FooterColumn title='Support' items={supportLinks} />
                <FooterColumn title='Links' items={resourceLinks} />

                <div>
                    <h4 className='text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4'>Nala Soo Xidhiidh</h4>
                    <div className='space-y-3 text-gray-500 text-sm'>
                        <div className='flex items-center gap-2'>
                            <span className='w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center'>
                                <svg className='w-4 h-4' fill='none' stroke='currentColor' strokeWidth={1.8} viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L7.88 11.53a11.042 11.042 0 005.516 5.516l1.143-2.362a1 1 0 011.21-.502l4.493 1.498A1 1 0 0120 16.28V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                                </svg>
                            </span>
                            <span>+252 61 612 1314</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center'>
                                <svg className='w-4 h-4' fill='none' stroke='currentColor' strokeWidth={1.8} viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='M16 12H8m8 4H8m8-8H8m12-2H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z' />
                                </svg>
                            </span>
                            <span>info@garabjoog.org</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='border-t border-gray-100'>
                <div className='container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between text-xs text-gray-500 gap-4'>
                    <p>© Xuquuqda Dhammaan waxay leeyihiin GarabJoog. Dhammaan xuquuqaha way ka ilaaliyaan.</p>
                    <div className='flex gap-4'>
                        <span className='hover:text-blue-600 cursor-pointer'>Siyaasadda Arrimaha Khaaska</span>
                        <span className='hover:text-blue-600 cursor-pointer'>Shuruudaha Isticmaalka</span>
                        <span className='hover:text-blue-600 cursor-pointer'>Sharci</span>
                        <span className='hover:text-blue-600 cursor-pointer'>Khariidada Bogga</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer


