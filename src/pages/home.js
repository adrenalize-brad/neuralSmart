import React from 'react'
import Typewriter from 'typewriter-effect';

const Home = ({ typeToggle, typeToggler }) => {
    return(
        <div className="page-wrapper flex flex-col">
            <div className="page-header">
                
                {typeToggler}
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {typeToggle === 'Business' ?
                    <p className="text-white text-lg"></p>
                :
                    <p className="text-white text-lg"></p>
                }
            </div>
        </div>
    )
}

export default Home