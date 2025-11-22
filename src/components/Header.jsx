import { NavLink, Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import assets from '../assets/assets'

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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [location.pathname])

    useEffect(() => {
        // Close mobile menu when route changes
        setMobileMenuOpen(false)
    }, [location.pathname])

    const textColor = scrolled ? 'text-gray-900' : 'text-white'
    const headerBg = scrolled ? 'bg-white/95 shadow-md' : 'bg-gray-400'

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${headerBg} backdrop-blur`}>
                <div className='container mx-auto px-6 py-4'>
                    <div className='flex justify-between items-center'>
                        {/* Logo */}
                        <div className='flex items-center gap-2'>
                            <Link to='/' className={`text-2xl font-bold transition-colors duration-300 ${textColor} hover:text-blue-600`}>
                                <img src={assets.logo} className='w-24 h-12' alt='GarabJoog Logo' />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
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

                        {/* Right side actions - Desktop */}
                        <div className='hidden md:flex items-center gap-4'>
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

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`md:hidden ${textColor} hover:text-blue-500 transition-colors`}
                            aria-label='Open menu'
                        >
                            {mobileMenuOpen ? (
                                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                                </svg>
                            ) : (
                                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className='fixed inset-0 z-40 md:hidden'>
                    {/* Backdrop */}
                    <div 
                        className='absolute inset-0 bg-black/50'
                        onClick={() => setMobileMenuOpen(false)}
                    ></div>
                    
                    {/* Menu Panel */}
                    <div className='absolute top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform'>
                        <div className='flex flex-col h-full'>
                            {/* Menu Header */}
                            <div className='flex items-center justify-between p-6 border-b border-gray-200'>
                                <h2 className='text-xl font-bold text-gray-900'>Menu</h2>
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className='text-gray-500 hover:text-gray-900'
                                    aria-label='Close menu'
                                >
                                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                                    </svg>
                                </button>
                            </div>

                            {/* Menu Items */}
                            <nav className='flex-1 overflow-y-auto p-6'>
                                <ul className='space-y-4'>
                                    {navItems.map((item) => (
                                        <li key={item.label}>
                                            {item.external ? (
                                                <a
                                                    href={item.to}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className='block py-3 px-4 text-gray-900 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium'
                                                >
                                                    {item.label}
                                                </a>
                                            ) : (
                                                <NavLink
                                                    to={item.to}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className={({ isActive }) =>
                                                        `block py-3 px-4 rounded-lg transition-colors font-medium ${
                                                            isActive
                                                                ? 'bg-blue-600 text-white'
                                                                : 'text-gray-900 hover:bg-blue-50 hover:text-blue-600'
                                                        }`
                                                    }
                                                >
                                                    {item.label}
                                                </NavLink>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            {/* Menu Footer Actions */}
                            <div className='p-6 border-t border-gray-200 space-y-3'>
                                <button className='w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-semibold'>
                                    Taageero Ka Hel
                                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                                    </svg>
                                </button>
                                <button className='w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 font-medium'>
                                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                                    </svg>
                                    Raadi
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default Header;