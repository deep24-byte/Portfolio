import './index.scss';
import React from 'react'
import { useEffect, useState } from 'react'
import developer from '../../assets/images/dj.png'
import {Link} from 'react-router-dom'
import AnimatedLetters from '../AnimatedLatters';
import Loader from 'react-loaders';
// import Logo from '../Logo';


const   Home = () =>{
    const [letterClass,setLetterClass] = useState('text-animate')
    const nameArray = ['e','e','p']
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']

    useEffect(() => {
		const timer = setTimeout(() => {
			setLetterClass('text-animate-hover');
		}, 4000);
		return () => clearTimeout(timer);
	}, []);

    return( 
        <>
            <div className="container home-page">
                <div className='text-zone'>

                    <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} -12`}>i,</span>
                    <br /> 
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={developer} alt="develope" />

                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}/>  

                    <br />

                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={22}/> 

                    </h1>
                    
                    <h2>Frontend Developer / Java</h2>

                    <Link to="/contact" className='flat-button' >CONTACT ME</Link>
                </div>
                
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Home;