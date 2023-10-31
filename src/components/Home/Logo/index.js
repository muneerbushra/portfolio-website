import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/sideimg.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()
 

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

  
    gsap
    .timeline()
    .to(bgRef.current, {
      duration: 1,
      opacity: 1,
    })
    .from(outlineLogoRef.current, {
      drawSVG: 0,
      duration: 10,
    })

  gsap.fromTo(
    solidLogoRef.current,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      delay: 4,
      duration:4,
    }
  )
}, [])

  return (
    <div className="logo-container "  ref={bgRef} >
      <img
        className="solid-logo animate__animated animate__bounce"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
       
      />

    </div>
  )
}

export default Logo