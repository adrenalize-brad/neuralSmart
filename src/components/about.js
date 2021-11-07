import React from 'react'
import Typewriter from 'typewriter-effect';

const About = () => {
    return(
        <div className="page-wrapper flex flex-col">
            <div className="page-header">
                <Typewriter 
                    options={{ delay: 50, }}
                    onInit={(typewriter) => {
                        typewriter.typeString('About Us ')
                        .start();
                    }}
                />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <p className="text-white text-lg">This page is currently undergoing some renovations. Check back soon!</p>
            </div>
        </div>
    )
}

export default About