import React, { useContext, useEffect, useState } from "react"
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'
import { MdAccountCircle, MdOutlinePhoneAndroid } from 'react-icons/md'
import { FaLaptopCode, FaBook, FaHome, FaBriefcase, FaShoppingCart, FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa'
import { IoMdRocket } from 'react-icons/io'
import { IoBuild } from 'react-icons/io5'
import { MainDisplay, MenuDisplay, MenuItemWrapper } from '../styles/components'
import { Context } from '../context'
import Home from '../components/home'
import Contact from '../components/contact'
import About from '../components/about'
import Services from '../components/services'
import Resources from '../components/resources'
import Products from '../components/products'
import Portfolio from '../components/portfolio'


const Index = () => {

  const context = useContext(Context);

  const imageData = useStaticQuery(graphql`
      query {
        backgroundImage: file(relativePath: {eq: "background.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 100, 
              placeholder: BLURRED,
            )
          }
        },
        avatarImage: file(relativePath: {eq: "neuralLogo.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 100, 
              placeholder: BLURRED,
            )
          }
        }
      }
  `);

  let browserType = context.display;

  const bgImage = getImage(imageData.backgroundImage)
  const avImage = getImage(imageData.avatarImage)

  
  const [ display, setDisplay ] = useState('home');
  const [ mainDisplay, setMainDisplay ] = useState('closed')
  const [ typeToggle, setTypeToggle ] = useState('Business')
  const [ menuToggle, setMenuToggle ] = useState(browserType === 'mobile' ? false : true)
  const [ menuItemToggle, setMenuItemToggle ] = useState(browserType === 'mobile' ? false : true)

  useEffect(() => {
    if(browserType === 'mobile'){
      setMenuItemToggle(false)
    }
    else if(browserType === 'desktop'){
      setMenuItemToggle(true);
    }
  }, [ browserType ])

  useEffect(() => {
    if(browserType === 'mobile'){
      setMenuItemToggle(false)
    }
  }, [ display ])

  const toggleMain = (toggleType, toggleDisplay, toggleMainDisplay, toggleMenu) => {
    setDisplay(null)
    setTimeout(function(){ setDisplay(`${toggleDisplay}`); }, 250);
    setMenuToggle(toggleMenu);
    setMainDisplay(`${toggleMainDisplay}`)
    setTypeToggle(`${toggleType}`)
  }

  const TypeToggler = () => {
    return(
      <div className="flex flex-row items-center absolute top-0 right-0">
        <button 
          className={`typeToggler bg-black rounded-bl-lg ${typeToggle === 'Business' ? 'bg-opacity-90': 'bg-opacity-10'}`}
          onClick={ () => setTypeToggle('Business')}
        >
          <IoBuild className="text-xl mr-2"/>
          <h2>Business</h2>
        </button>
        <button 
          className={`typeToggler bg-black ${typeToggle === 'Pleasure' ? 'bg-opacity-90': 'bg-opacity-10'}`}
          onClick={ () => setTypeToggle('Pleasure')}
        >
          <IoMdRocket className="text-xl mr-2 transform rotate-45"/>
          <h2>Pleasure</h2>
        </button>
      </div>
    )
  }
  
  return (
    <div className="fixed w-full h-full">

      <BgImage image={bgImage} className="fixed w-full h-full"/>

      <MenuDisplay menuToggle={menuToggle} browserType={browserType} display={mainDisplay} className="glass flex flex-col">

        <div id="avatar" onClick={() => toggleMain(null,'home','closed', false)} className={`z-30 relative flex flex-row items-center justify-center p-1 cursor-pointer ${browserType === 'mobile' ? '': null}`}>
          { browserType === 'mobile' ?
            <div className="flex flex-col items-center absolute top-16 left-0 mx-3">
              <h1 className="text-white text-4xl leading-none transform translate-y-2">neural</h1>
              <h3 className="text-blue-600 leading-none tracking-tight font-bold text-xs">Smart Technologies</h3>
            </div>
            
          :
            <GatsbyImage image={avImage} className="w-full h-full avatarImg"/>
          }
        </div>
        
        <MenuItemWrapper menuToggle={menuItemToggle} browserType={browserType} id="menu" className={`${browserType === 'mobile' ? 'rounded-r-lg pl-2 bg-black bg-opacity-90' : 'pl-1'} flex flex-col mx-auto`}>
          <div className={`${browserType === 'mobile' ? '' : 'relative mt-auto'}`}>
          <button className="nav-link" onClick={() => (setDisplay('home'))}>
            <FaHome className={`${display === 'home' ? `nav-icon-selected` : `text-white`} nav-icon text-4xl`} />
            <p className={`${display === 'home' ? 'nav-text-selected': 'font-medium'} nav-text`}>Home</p>
          </button>
          <button className="nav-link transform translate-x-1" onClick={() => (setDisplay('products'))}>
            <FaShoppingCart className={`${display === 'products' ? `nav-icon-selected` : `text-white`} nav-icon text-3xl`}/>
            <p className={`${display === 'products' ? 'nav-text-selected': 'font-medium'} nav-text`}>Products</p>
          </button>
          <button className="nav-link" onClick={() => (setDisplay('services'))}>
            <FaLaptopCode className={`${display === 'services' ? `nav-icon-selected` : `text-white`} nav-icon text-4xl`}/>
            <p className={`${display === 'services' ? 'nav-text-selected': 'font-medium'} nav-text`}>Services</p>
          </button>
          <button className="nav-link transform translate-x-1" onClick={() => (setDisplay('portfolio'))}>
            <FaBriefcase className={`${display === 'portfolio' ? `nav-icon-selected` : `text-white`} nav-icon text-3xl`}/>
            <p className={`${display === 'portfolio' ? 'nav-text-selected': 'font-medium'} nav-text `}>Portfolio</p>
          </button>
          <button className="nav-link transform translate-x-1" onClick={() => (setDisplay('resources'))}>
            <FaBook className={`${display === 'resources' ? `nav-icon-selected` : `text-white`} nav-icon text-3xl`}/>
            <p className={`${display === 'resources' ? 'nav-text-selected': 'font-medium'} nav-text`}>Resources</p>
          </button>
          <button className="nav-link" onClick={() => (setDisplay('about'))}>
            <MdAccountCircle className={`${display === 'about' ? `nav-icon-selected` : `text-white`} nav-icon text-4xl`} />
            <p className={`${display === 'about' ? 'nav-text-selected': 'font-medium'} nav-text`}>About Us</p>
          </button>
          <button className="nav-link" onClick={() => (setDisplay('contact'))}>
            <MdOutlinePhoneAndroid className={`${display === 'contact' ? `nav-icon-selected` : `text-white`} nav-icon text-4xl`}/>
            <p className={`${display === 'contact' ? 'nav-text-selected': 'font-medium'} nav-text`}>Contact</p>
          </button>
          </div>
          <div className="flex flex-col items-center mt-auto mb-3 -ml-4">
          <p className="text-white font-semibold mb-1">On Social.</p>
          <div className="flex flex-row items-center">
            <FaFacebookF className="sharing-icon hover:text-blue-600" />
            <FaInstagram className="sharing-icon hover:text-red-300" />
            <FaLinkedinIn className="sharing-icon hover:text-blue-500" />
            <FaTwitter className="sharing-icon hover:text-blue-300" />
          </div>
        </div>
        </MenuItemWrapper>


          { browserType === 'mobile' ?
            <div 
              onClick={() => setMenuItemToggle(menuItemToggle === true ? false : true)}
              className="flex flex-col h-12 w-12 absolute right-4 top-20 cursor-pointer"
            >
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 h-1 rounded-lg shadow-md transform transition duration-500 ease-in-out ${menuItemToggle === true ? '-translate-y-1/2 rotate-45 bg-blue-600 w-8' : '-translate-y-3 bg-black bg-opacity-75 w-12' }` } />
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1 rounded-lg shadow-md transform transition duration-500 ease-in-out ${menuItemToggle === true ? 'scale-0' : 'bg-black bg-opacity-75 w-12' }` } />
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 h-1 rounded-lg shadow-md transform transition duration-500 ease-in-out ${menuItemToggle === true ? '-translate-y-1/2 -rotate-45 bg-blue-600 w-8' : 'translate-y-2 bg-black bg-opacity-75 w-12' }` } />
            </div>
          : null }

      </MenuDisplay>

      <MainDisplay browserType={browserType} display={mainDisplay} className="glass">

          { mainDisplay === 'open' ?

            <>
              { display === 'home' ?
                  <Home typeToggle={typeToggle} typeToggler={browserType === 'mobile' ? null : <TypeToggler/>} />
                : display === 'products' ?
                  <Products typeToggle={typeToggle} typeToggler={browserType === 'mobile' ? null : <TypeToggler/>} />
                : display === 'services' ?
                  <Services typeToggle={typeToggle} typeToggler={browserType === 'mobile' ? null : <TypeToggler/>} />
                : display === 'portfolio' ?
                  <Portfolio typeToggle={typeToggle} typeToggler={browserType === 'mobile' ? null : <TypeToggler/>} />
                : display === 'resources' ?
                  <Resources />
                : display === 'about' ?
                  <About/>
                : display === 'contact' ?
                  <Contact/>
                :
                  null
              }
            </>
                      
          :

            <div className="landing w-full h-full">
              <div className="flex flex-col items-center w-full h-full">
                <h1 className="text-white text-7xl md:text-8xl italic mt-auto transform md:scale-95">
                  neural
                </h1>
                <h2 className="font-subheader font-bold text-xl md:text-2xl tracking-wider text-blue-500 uppercase transform md:scale-110 -translate-y-4 pb-3 border-b border-gray-800">
                  Smart Technologies
                </h2>
                <p className="font-headers text-white text-2xl md:text-4xl my-auto transform scale-95">
                  Pick your passion:
                </p>
                <div className="flex flex-col md:flex-row items-center my-auto w-full h-full p-2">
                  <button 
                    className="w-full h-1/2 m-2 md:w-1/3 flex flex-col items-center justify-center my-2 mx-auto px-4 py-3 cursor-pointer text-gray-100 bg-gray-900 hover:bg-gray-100 hover:text-gray-900 bg-opacity-60 rounded-lg shadow-lg" 
                    onClick={() => toggleMain('Business', 'home', 'open', true) } 
                  >
                    <IoBuild className="text-7xl md:text-5xl mb-2"/>
                    <h2 className="text-3xl md:text-2xl">Business</h2>
                  </button> 
                  <button 
                    className="w-full h-1/2 md:w-1/3 flex flex-col items-center justify-center my-auto mx-auto px-4 py-3 cursor-pointer text-gray-100 bg-gray-900 hover:bg-gray-100 hover:text-gray-900 bg-opacity-60 rounded-lg shadow-lg" 
                    onClick={ () => toggleMain('Pleasure', 'home', 'open', true) } >
                    <IoMdRocket className="text-7xl md:text-5xl mb-2 transform rotate-45"/>
                    <h2 className="text-3xl md:text-2xl">Pleasure</h2>
                  </button> 
                </div>         
              </div>
            </div>

          }

        </MainDisplay>

    </div>
  ) 
};

export default Index;
