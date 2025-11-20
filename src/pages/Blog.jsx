import Header from '../components/Header'
import Footer from '../components/Footer'
import assets from '../assets/assets'

const featuredPost = {
    title: 'How Digital Innovation is Redefining Community Impact',
    excerpt:
        'Discover how grassroots organizations leverage modern technology and data-driven decisions to deliver smarter, faster support for the people who need it most.',
    author: 'Amina Yusuf',
    date: 'Nov 18, 2025',
    readTime: '6 min read',
    image: assets.garabjoogsawir3,
    tag: 'Featured Story',
}

const blogPosts = [
    {
        title: 'Building a Culture of Continuous Innovation',
        excerpt: 'From collaborative workspaces to inclusive leadership, here are five proven ways to nurture creativity inside mission-driven teams.',
        author: 'Mohamed Abdi',
        date: 'Nov 12, 2025',
        readTime: '4 min read',
        tag: 'Leadership',
        image: assets.garabjooghero1,
    },
    {
        title: 'How Data Helps Us Personalize Support Programs',
        excerpt: 'We dive into the analytics stack that powers our decisions and explore practical methods to translate numbers into meaningful action.',
        author: 'Safia Ali',
        date: 'Oct 29, 2025',
        readTime: '7 min read',
        tag: 'Data & Impact',
        image: assets.garabjooghero2,
    },
    {
        title: 'The Future of Hybrid Community Events',
        excerpt: 'Blending in-person relationships with virtual reach creates inclusive experiences. These are our lessons from a year of hybrid events.',
        author: 'Hassan Warsame',
        date: 'Oct 15, 2025',
        readTime: '5 min read',
        tag: 'Community',
        image: assets.garabjoogsawir1,
    },
    {
        title: 'Design Systems that Scale with Your Mission',
        excerpt: 'Consistent design languages empower volunteers and staff to move faster. Learn how we built ours without slowing down delivery.',
        author: 'Idil Ahmed',
        date: 'Sep 30, 2025',
        readTime: '8 min read',
        tag: 'Product Design',
        image: assets.garabjoogsawir4,
    },
]

const categories = ['All', 'Technology', 'Community', 'Leadership', 'Impact', 'Stories']

function Blog() {
    return (
        <div className='bg-gray-50 min-h-screen'>
            <Header />

            <section className='pt-36 pb-16 bg-gradient-to-r from-blue-900 to-blue-600 text-white'>
                <div className='container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center'>
                    <div>
                        <span className='inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] mb-4'>
                            <span className='w-12 h-[2px] bg-white/70'></span>
                            Wararka
                        </span>
                        <h1 className='text-4xl md:text-5xl font-bold mb-6'>
                            Fikradaha, Sheekooyinka & Qorshayaasha Bulshada GarabJoog
                        </h1>
                        <p className='text-white/80 text-lg leading-relaxed mb-8'>
                            Ka soco maqaalada fikradaha leh, cusbooneysiinta saamaynta, iyo casharada kooxdeena markaan sameynayno xalalka mustaqbalka wanaagsan.
                        </p>
                        <div className='flex flex-wrap gap-3'>
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                                        category === 'All' ? 'bg-white text-blue-700' : 'bg-white/10 text-white hover:bg-white/20'
                                    } transition-colors`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className='bg-white/10 backdrop-blur p-6 rounded-3xl border border-white/30 shadow-xl'>
                        <p className='text-sm uppercase tracking-widest text-white/70 mb-2'>{featuredPost.tag}</p>
                        <h2 className='text-2xl font-semibold mb-4'>{featuredPost.title}</h2>
                        <p className='text-white/80 mb 6'>{featuredPost.excerpt}</p>
                        <div className='flex items-center justify-between text-sm text-white/80'>
                            <div>
                                <p className='font-semibold'>{featuredPost.author}</p>
                                <p>
                                    {featuredPost.date} • {featuredPost.readTime}
                                </p>
                            </div>
                            <button className='px-5 py-2 bg-white text-blue-700 rounded-full font-semibold hover:bg-blue-100 transition-colors'>
                                Read Story
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-16'>
                <div className='container mx-auto px-6 grid lg:grid-cols-3 gap-10'>
                    <div className='lg:col-span-2 space-y-8'>
                        {blogPosts.map((post) => (
                            <article key={post.title} className='bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-1 transition-transform'>
                                <div className='h-64 overflow-hidden'>
                                    <img src={post.image} alt={post.title} className='w-full h-full object-cover' />
                                </div>
                                <div className='p-8'>
                                    <span className='text-xs font-semibold uppercase tracking-widest text-blue-500'>{post.tag}</span>
                                    <h3 className='text-2xl font-bold text-gray-900 mt-3 mb-4'>{post.title}</h3>
                                    <p className='text-gray-600 leading-relaxed mb-6'>{post.excerpt}</p>
                                    <div className='flex items-center justify-between text-sm text-gray-500'>
                                        <div>
                                            <p className='font-semibold text-gray-800'>{post.author}</p>
                                            <p>
                                                {post.date} • {post.readTime}
                                            </p>
                                        </div>
                                        <a href='#' className='text-blue-600 font-semibold hover:underline'>
                                            Continue Reading →
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                    <aside className='space-y-8'>
                        <div className='bg-white rounded-2xl shadow-lg p-6'>
                            <h4 className='text-lg font-semibold mb-4'>Trending Topics</h4>
                            <div className='flex flex-wrap gap-3'>
                                {['Youth Empowerment', 'UI/UX', 'Fundraising', 'Women in Tech', 'Education'].map((topic) => (
                                    <span
                                        key={topic}
                                        className='px-4 py-1 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-blue-500 hover:text-blue-600 cursor-pointer'
                                    >
                                        #{topic}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className='bg-blue-600 text-white rounded-2xl p-6 shadow-lg'>
                            <h4 className='text-xl font-semibold mb-2'>Weekly Insights</h4>
                            <p className='text-white/80 text-sm mb-4'>
                                Join 5,000+ readers receiving curated stories and resources every Friday.
                            </p>
                            <form className='space-y-3'>
                                <input
                                    type='email'
                                    placeholder='Enter your email'
                                    className='w-full px-4 py-3 rounded-full text-gray-800 focus:outline-none'
                                />
                                <button
                                    type='submit'
                                    className='w-full bg-white text-blue-700 font-semibold py-3 rounded-full hover:bg-blue-50 transition-colors'
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>

                        <div className='bg-white rounded-2xl shadow-lg p-6'>
                            <h4 className='text-lg font-semibold mb-4'>Editor’s Picks</h4>
                            <div className='space-y-4'>
                                {blogPosts.slice(0, 3).map((post) => (
                                    <div key={post.title} className='flex items-start gap-3'>
                                        <div className='w-16 h-16 rounded-lg overflow-hidden flex-shrink-0'>
                                            <img src={post.image} alt={post.title} className='w-full h-full object-cover' />
                                        </div>
                                        <div>
                                            <p className='text-sm font-semibold text-gray-900 leading-snug'>{post.title}</p>
                                            <p className='text-xs text-gray-500'>
                                                {post.date} • {post.readTime}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Blog


