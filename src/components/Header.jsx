import { NavLink, Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const navItems = [
    { label: 'Bogga Hore', to: '/' },
    { label: 'Ku Saabsan', to: '/about' },
    { label: 'Adeegyada', to: '/#services', external: true },
    { label: 'Wararka', to: '/blog' },
    { label: 'Nala Soo Xidhiidh', to: '/contact' },
]

function Header(){
    const location = useLocation()
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [location.pathname])

    const textColor = scrolled ? 'text-gray-900' : 'text-white'
    const headerBg = scrolled ? 'bg-white/95 shadow-md' : 'bg-gray-400'

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${headerBg} backdrop-blur`}>
            <div className='container mx-auto px-6 py-4'>
                <div className='flex justify-between items-center'>
                    {/* Logo */}
                    <div className='flex items-center gap-2'>
                        <Link to='/' className={`text-2xl font-bold transition-colors duration-300 ${textColor} hover:text-blue-600`}>
                            GARABJOOG
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className='hidden md:flex items-center gap-8'>
                        {navItems.map((item) =>
                            item.external ? (
                                <a key={item.label} href={item.to} className={`${textColor} hover:text-blue-500 transition-colors`}>
                                    {item.label}
                                </a>
                            ) : (
                                <NavLink
                                    key={item.label}
                                    to={item.to}
                                    className={({ isActive }) =>
                                        `transition-colors ${isActive ? 'text-blue-500' : `${textColor} hover:text-blue-500`}`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            ),
                        )}
                    </nav>

                    {/* Right side actions */}
                    <div className='flex items-center gap-4'>
                        <button className={`${textColor} hover:text-blue-500 transition-colors`}>
                            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                            </svg>
                        </button>
                        <button className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2'>
                            Taageero Ka Hel
                            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;