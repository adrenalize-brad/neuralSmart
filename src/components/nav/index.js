import React, { useState, useEffect } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { MdAccountCircle, MdOutlinePhoneAndroid } from 'react-icons/md'
import { FaLaptopCode, FaBook, FaHome, FaBriefcase, FaShoppingCart, FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa'
import { IoMdRocket } from 'react-icons/io'
import { IoBuild } from 'react-icons/io5'

const Nav = ({ context, open, navLogo }) => {

    const [ display, setDisplay ] = useState('mobile');

    useEffect(() => {
        if(context.display.width <= 1000){
            setDisplay('mobile')
        }
        else{
            setDisplay('desktop')
        }
    }, [ context ])

    const [ navbarHeight, setNavbarHeight ] = useState(80)
    const [ navbarTop, setNavbarTop ] = useState(0)

    useEffect(() => {
        if(display === 'mobile'){
            setNavbarHeight(80);
            setNavbarTop(0);
        }
        else{
            setNavbarHeight(context.display.height - 30);
            setNavbarTop(15);
        }
    }, [ context, display ])

    const [ menuStyle, setMenuStyle ] = useState({})

    useEffect(() => {
        if(display === 'mobile' && document.getElementById('navbar') !== null){
            setMenuStyle({
                height: context.display.height - document.getElementById('navbar').offsetHeight - 30,
                top: document.getElementById('navbar').offsetHeight + 15
            })
           
        }
        else if(display !== 'mobile' && document.getElementById('navbar') !== null && document.getElementById('avatar') !== null){
            setMenuStyle({
                height: context.display.height - (document.getElementById('avatar').offsetHeight * 2),
                top: (context.display.height / 2) + document.getElementById('avatar').offsetHeight - 30
            })
        }
    },[ context, display ])

    let navClass;
    let navTransition;
    let menuLinkClass;
    let menuLinkTransition;

    const [ menuLinksOpen, setMenuLinksOpen ] = useState(display === 'mobile' ? false : true)

    if(display === 'mobile'){
        navClass = 'mobileNav'
        menuLinkClass = 'mobileLinks'
        if(open === true){
            navTransition = 'mobileNavOpen'
            if(menuLinksOpen === true){
                menuLinkTransition = 'mobileLinksOpen'
            }
            else{
                menuLinkTransition = 'mobileLinksClosed'
            }
        }
        else{
            navTransition = 'mobileNavClosed'
        }
    }
    else{
        navClass = 'desktopNav'
        menuLinkClass = 'desktopLinks'
        menuLinkTransition = ''
        if(open === true){
            navTransition = 'desktopNavOpen'
        }
        else{
            navTransition = 'desktopNavClosed'
        }
    }

    return(

        <div id="navbar" className={`glass flex absolute z-20 ${navClass} ${navTransition}`} style={{height: navbarHeight, top: navbarTop}}>
  
            <div id="avatar" className={`${display !== 'mobile' ? '-ml-1 mt-3 mb-2' : ''} cursor-pointer`}>
                { display === 'mobile' ?
                    <div className="flex flex-col mx-3">
                        <h1 className="text-white text-4xl leading-none transform translate-y-2">neural</h1>
                        <h3 className="text-blue-600 leading-none tracking-tight font-bold text-xs">Smart Technologies</h3>
                    </div>
                    
                :
                    <GatsbyImage image={navLogo} className="w-full h-full transform scale-90"/>
                }
            </div>    

            <div id="menu" className={`${menuLinkClass} ${menuLinkTransition}`} style={menuStyle}>
                <button className={`nav-link`}>
                    <FaHome className={`${'home' === 'home' ? `nav-icon-selected` : `text-white`} nav-icon text-4xl`} />
                    <p className={`${'home' === 'home' ? 'nav-text-selected': 'font-medium'} nav-text`}>Home</p>
                </button>
                <button className="nav-link transform translate-x-1">
                    <FaShoppingCart className={`${'products' === 'products' ? `nav-icon-selected` : `text-white`} nav-icon text-3xl`}/>
                    <p className={`${'products' === 'products' ? 'nav-text-selected': 'font-medium'} nav-text`}>Products</p>
                </button>
                <button className="nav-link">
                    <FaLaptopCode className={`${'services' === 'services' ? `nav-icon-selected` : `text-white`} nav-icon text-4xl`}/>
                    <p className={`${'services' === 'services' ? 'nav-text-selected': 'font-medium'} nav-text`}>Services</p>
                </button>
                <button className="nav-link transform translate-x-1">
                    <FaBook className={`${'resources' === 'resources' ? `nav-icon-selected` : `text-white`} nav-icon text-3xl`}/>
                    <p className={`${'resources' === 'resources' ? 'nav-text-selected': 'font-medium'} nav-text`}>Resources</p>
                </button>
                <button className="nav-link">
                    <MdAccountCircle className={`${'about' === 'about' ? `nav-icon-selected` : `text-white`} nav-icon text-4xl`} />
                    <p className={`${'about' === 'about' ? 'nav-text-selected': 'font-medium'} nav-text`}>About Us</p>
                </button>
                <button className="nav-link">
                    <MdOutlinePhoneAndroid className={`${'contact' === 'contact' ? `nav-icon-selected` : `text-white`} nav-icon text-4xl`}/>
                    <p className={`${'contact' === 'contact' ? 'nav-text-selected': 'font-medium'} nav-text`}>Contact</p>
                </button>   
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center mb-3">
                    <p className="text-white font-semibold mb-1">On Social.</p>
                    <div className="flex flex-row items-center">
                        <FaFacebookF className="sharing-icon hover:text-blue-600" />
                        <FaInstagram className="sharing-icon hover:text-red-300" />
                        <FaLinkedinIn className="sharing-icon hover:text-blue-500" />
                        <FaTwitter className="sharing-icon hover:text-blue-300" />
                    </div>
                </div>
            </div> 

            { display === 'mobile' ?
                <div 
                    onClick={() => setMenuLinksOpen(menuLinksOpen === true ? false : true)}
                    className="relative flex flex-col h-12 w-12 ml-auto mr-4 cursor-pointer"
                >
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 h-1 rounded-lg shadow-md transform transition duration-150 ease-in-out ${menuLinksOpen === true ? '-translate-y-1/2 rotate-45 bg-blue-600 w-8' : '-translate-y-3 bg-gray-100 bg-opacity-75 w-12' }` } />
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1 rounded-lg shadow-md transform transition duration-75 ease-in-out ${menuLinksOpen === true ? 'scale-0' : 'bg-gray-100 bg-opacity-75 w-12' }` } />
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 h-1 rounded-lg shadow-md transform transition duration-150 ease-in-out ${menuLinksOpen === true ? '-translate-y-1/2 -rotate-45 bg-blue-600 w-8' : 'translate-y-2 bg-gray-100 bg-opacity-75 w-12' }` } />
                </div>
            : 
                null 
            } 

        </div>
    )
}

export default Nav