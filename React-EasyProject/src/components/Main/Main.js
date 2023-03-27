import React from 'react'
import './Main.css'
import cv_pic from '../../assets/images/cv_pic.png'
import Twitter from '../../assets/icons/Twitter.png'
import Facebook from '../../assets/icons/Facebook.png'
import Instagram from '../../assets/icons/Instagram.png'
import GitHub from '../../assets/icons/GitHub.png'
import email from '../../assets/icons/email.png'
import linkedin from '../../assets/icons/linkedin.png'


export default function Main() {
  return (
    <div className='general'>
    <div className='container'>
           <div className='card'>
    <img alt='girl' className='girl' src={cv_pic} />
    </div>
    <div className='part1'>
    <div className='name'>
        <h1>Laura Smith</h1>
        <h4>Frontend Developer</h4>
        <p className='website'>laurasmith.website</p>
    </div>
    <div className='media'>
        <button className='btn1'><img alt='email' className='email' src={email}></img>Email</button>
        <button className='btn2'><img alt='link' className='link' src={linkedin}></img>LinkedIn</button>
    </div>
    <div className='info'>
    <div className='details'>
        <h3>About</h3>
        <p className='p1'>I am a frontend developer with a particular interest<br/> in making things simple and automating daily<br/> tasks. I try to keep up with security and best<br/> practices, and am always looking for new things to<br/> learn.</p>
        <h3>Interests</h3>
        <p className='p1'>Food expert. Music scholar. Reader. Internet<br/> fanatic. Bacon buff. Entrepreneur. Travel geek. Pop<br/> culture ninja. Coffee fanatic.</p>
        </div>
        </div>
        </div>
        <div className='part2'>
    <div className='contacts'>
    <img alt='twitter' className='twitter' src={Twitter} />
    <img alt='facebook' className='facebook' src={Facebook} />
    <img alt='instagram' className='instagram' src={Instagram} />
    <img alt='github' className='github' src={GitHub} />
    </div>
    </div>
    </div>
    </div>
  )
}
