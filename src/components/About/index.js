import './index.scss'
import AnimatedLetters from '../AnimatedLetters/index '
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faGitAlt, faHtml5, faJsSquare, faCss3, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About =() =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    
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
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} 
                    strArray={['A',  'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>
                I'm a passionate web developer with a creative knack for crafting digital experiences that captivate and engage. With a keen eye for design and a 
                strong foundation in front-end and back-end technologies, I thrive on turning ideas into functional, visually stunning websites.
                </p>
                <p>
                I'm dedicated to staying current with the ever-evolving web 
                landscape, constantly honing my skills in HTML, CSS, JavaScript, and various frameworks.
                </p>
                <p>
                My goal is to not only write clean, efficient code but also to ensure a seamless 
                user experience. I love solving complex problems,collaborating with teams, and making the internet a more beautiful and functional place, one line of code at a 
                time.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#dd0031'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
                    </div>
                </div>
            </div>

        </div>
        <Loader type='pacman' />
        </>
    )
}
export  default About