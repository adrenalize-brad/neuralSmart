import React from 'react'
import Typewriter from 'typewriter-effect';

const Products = ({ typeToggle, typeToggler }) => {
    return(
        <div className="page-wrapper flex flex-col">
            <div className="page-header">
                <Typewriter 
                    options={{ delay: 50, }}
                    onInit={(typewriter) => {
                        typewriter.typeString('Products ')
                        .start();
                    }}
                />
                {typeToggler}
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {typeToggle === 'Business' ?
                    <p className="text-white text-lg">This page is currently undergoing some renovations. Check back soon!</p>
                :
                    <p className="text-white text-lg">This page is currently undergoing some renovations. Check back soon!</p>
                }
            </div>
        </div>
    )
}

export default Products