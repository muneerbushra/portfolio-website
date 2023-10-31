import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters/index '
import {useState, useEffect } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('service_tyatab6', 'template_bushra', form.current, '4wtqBgsWPgt8Ngchu')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => {
        clearTimeout(timeoutId);
        };
      }, []);
    return(
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                     idx={15} />
                </h1>
                <p>
                    I am interested in freelance opportunities - especially on ambitious
                    or large projects. However, if you have any other requests or
                    questions, don't hesitate to contact me using below form either.
                </p>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input placeholder="Name" type="text" name="user_name" required />
                            </li>

                            <li className='half'>
                                <input placeholder="Email" type="email" name="user_email" required />
                            </li>

                            <li>
                            <textarea placeholder="Message" name="message" required></textarea>
                            </li>

                            <li>
                            <input type="submit" className="flat-button" value="SEND" />
                            </li>

                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Bushra Munir
                <br />
                Pakistan,
                <br/>
                Rawalpindi, 46000 <br />
                <span>bushramuneer2003@gmail.com</span>

            </div>
            <div className='map-wrap'>
                <MapContainer center={[33.582471, 73.092175]}  zoom={13}>
                    <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                    <Marker position={[33.582471, 73.092175]}>
                        <Popup>I live here!</Popup>
                    </Marker>
                </MapContainer>

            </div>

        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Contact