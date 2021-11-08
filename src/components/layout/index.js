import React, { useContext, useEffect, useState } from "react"
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'
import { MdAccountCircle, MdOutlinePhoneAndroid } from 'react-icons/md'
import { FaLaptopCode, FaBook, FaHome, FaBriefcase, FaShoppingCart, FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa'
import { IoMdRocket } from 'react-icons/io'
import { IoBuild } from 'react-icons/io5'
import { Context } from '../../context'
import Nav from '../nav'

const Layout = ({ children }) => {

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

  const bgImage = getImage(imageData.backgroundImage)
  const avImage = getImage(imageData.avatarImage)

  const [ open, setOpen ] = useState(true)

  let context = useContext(Context)

  const [ wrapperHeight, setWrapperHeight ] = useState(0) 
  const [ wrapperWidth, setWrapperWidth ] = useState(0) 
  const [ wrapperTop, setWrapperTop ] = useState(0) 
  const [ wrapperLeft, setWrapperLeft ] = useState(0) 

  useEffect(() => {
    if(document.getElementById('navbar') !== null){
        if(context.display.width <= 1000){
            setWrapperHeight(context.display.height - document.getElementById('navbar').offsetHeight - 30);
            setWrapperWidth(context.display.width - 15);
            setWrapperTop(document.getElementById('navbar').offsetHeight + 15);
            setWrapperLeft(0);
        }
        else{
            setWrapperHeight(context.display.height - 30);
            setWrapperWidth(context.display.width - document.getElementById('navbar').offsetWidth - 30);
            setWrapperTop(15);
            setWrapperLeft(document.getElementById('navbar').offsetWidth + 15);
        }
      }
  })


  return(

    <div className="fixed w-full h-full">

        <BgImage image={bgImage} className="fixed w-full h-full"/>

        <Nav
            context={context}
            open={open}
            navLogo={avImage}
        />

        <div
            id="pageWrapper" 
            style={{height: wrapperHeight, width: wrapperWidth, top: wrapperTop , left: wrapperLeft}} 
            className={`glass absolute ${ context.display.width <= 1000 ? 'rounded-r-lg' : 'rounded-lg'}`}
        >
            {children}
        </div>

    </div>
    
  )
}

export default Layout