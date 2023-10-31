import { Link } from 'react-router-dom';
import Logo from './Logo';
import './index.scss';
import LogoTitle from '../../assets/images/mylogo.png'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/index ';
import Loader from 'react-loaders';
const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['u','s', 'h', 'r', 'a']
    const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r','.'
      ]
    
      useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
      
        return () => {
        clearTimeout(timeoutId);
        };
      }, []);
      
    return (
<>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img  src={LogoTitle} alt="developer" />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray}
                    idx={15}/>
                    
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray}
                    idx={21}/>
                </h1>
                <h2>Frontend Developer / Javascript Expert</h2>
                <Link to='/contact' className='flat-button'>Contact me</Link>
            </div>
           <Logo />
        </div>

        <Loader type='pacman' />
 </>
    );
}
export default Home;