import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
    return (
        <div className='w-full  px-10 py-10 md:py-32  grid place-items-center bg-zinc-800' >
            <div className='w-11/12 lg:w-225 flex items-center justify-between'>
                <p className='text-white font-semibold uppercase tracking-wide '>&copy; Copyright {new Date().getFullYear()}</p>
                <div className='flex gap-3 text-2xl justify-center transition-transform text-white'>
                    <a href="https://www.facebook.com/kittspk/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className='hover:scale-110 ' />
                    </a>
                    <a href="https://www.instagram.com/ksuphakyy/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className=' hover:scale-110 ' />
                    </a>
                    <a href="https://github.com/biskitsx" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className=' hover:scale-110 ' />
                    </a>
                    <a href="https://www.linkedin.com/in/suphakit-s/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className=' hover:scale-110 ' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer