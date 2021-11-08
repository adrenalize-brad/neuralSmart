import React, { useState, useEffect } from 'react'
import Typewriter from 'typewriter-effect';
import { toast } from "react-toastify"

const formSent = () => {
    toast("Message Sent", {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: false,
        progress: undefined,
        className: "custom-toast success-toast",
      });
  };

  const formError = (error) => {
    toast(`${error} is required.`, {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: false,
        progress: undefined,
        className: "custom-toast failed-toast",
      });
  };

const Contact = () => {

    const [ contactName, setContactName ] = useState('')
    const [ contactEmail, setContactEmail ] = useState('')
    const [ contactMessage, setContactMessage ] = useState('')

    const [ nameClass, setNameClass ] = useState(null);
    const [ emailClass, setEmailClass ] = useState(null);
    const [ messageClass, setMessageClass ] = useState(null)

    const sendForm = () => {
        if(contactName.length === 0){
            formError('Name')
            setNameClass('outline-red')
        }
        else if(contactEmail.length === 0){
            formError('Email')
            setEmailClass('outline-red')
        }
        else if(contactMessage.length === 0){
            formError('Message')
            setMessageClass('outline-red')
        }
        else{
            setContactName('')
            setContactEmail('')
            setContactMessage('')
            formSent();
        }
    }

    console.log(messageClass);

    return(
        <div className="page-wrapper flex flex-col">
            <div className="page-header">
                
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 flex flex-col items-center">
                <div className="flex flex-col w-full mt-2 mb-1">
                    <label
                        for="contactName"
                        className="font-headers mr-2 text-3xl text-white mt-auto"
                    >
                        Name
                    </label>
                    <input 
                        type="text" 
                        name="contactName"
                        className={`w-full text-xl px-2 py-1 font-subheader rounded-md outline-solid ${nameClass}`}
                        placeholder="Your Name"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        onFocus={() => setNameClass('outline-grey')}
                        onBlur={() => setNameClass('outline-none')}
                    />
                </div>
                <div className="flex flex-col w-full mt-2 mb-1">
                    <label
                        for="contactEmail"
                        className="font-headers mr-2 text-3xl text-white mt-auto"
                    >
                        Email
                    </label>
                    <input 
                        type="text" 
                        name="contactEmail"
                        className={`w-full text-xl px-2 py-1 font-subheader rounded-md outline-solid ${emailClass}`}
                        placeholder="Your Email"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        onFocus={() => setEmailClass('outline-grey')}
                        onBlur={() => setEmailClass('outline-none')}
                    />
                </div>
                <div className="flex flex-col w-full mt-2 mb-1">
                    <label
                        for="contactMessage"
                        className="font-headers mr-2 text-3xl text-white mt-auto"
                    >
                        Message
                    </label>
                    <textarea 
                        name="contactMessage"
                        rows="10"
                        style={{ resize: 'none' }}
                        className={`w-full text-xl px-2 py-1 font-subheader rounded-md outline-solid ${messageClass}`}
                        placeholder="Your Message"
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        onFocus={() => setMessageClass('outline-grey')}
                        onBlur={() => setMessageClass('outline-none')}
                    />
                </div>

                <button 
                    className="text-center font-headers text-3xl mt-5 px-4 py-2 bg-black bg-opacity-20 text-white rounded-md hover:shadow-md hover:bg-opacity-60"
                    onClick={() => sendForm()}
                >
                    Submit
                </button>
            </div>
        </div>
    )
}

export default Contact