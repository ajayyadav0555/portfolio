import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'
import ProfileModal from './ProfileModal';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => setIsOpen(!isOpen);
    useEffect(() => {
        const handleScroll = () => {
            const isCrolled = window.screen > 10;
            setScrolled(true);
        }
        window.addEventListener("scroll", handleScroll)
        return () => removeEventListener("scroll", handleScroll)
    }, [])
    return (
       <>
        <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled  "}`}>
            <div className='inner'>
                <a href="#hero" className='logo flex items-center gap-2'>
                    <div className="relative inline-block h-12 w-12">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px]">
                            <div className="h-full w-full rounded-full bg-white">
                                <img
                                    src="/images/ajay.png"
                                    alt="Ajay Yadav"
                                    className="h-full w-full rounded-full object-cover"
                                    onClick={toggleModal}
                                />
                            </div>
                        </div>
                    </div>
                </a>
                <nav className='desktop'>
                    <ul>
                        {navLinks.map(({ name, link }) => (
                            <li key={name} className='group'>
                                <a href={link}><span>{name}</span><span className='underline' /></a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a href="#contact" className='contact-btn group'>
                    <div className='inner'>
                        <span>Conatct me</span>
                    </div>
                </a>
            </div>
        </header>
        {isOpen && <ProfileModal isOpen={isOpen} onClose={toggleModal} />}
       </>
    )
}

export default Navbar
Navbar