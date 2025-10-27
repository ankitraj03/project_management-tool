import React from 'react'
import Navbar from '../components/layout/Navbar'
import Hero from '../components/layout/Hero'
import Prelogin from '../components/layout/prelogin/Prelogin'
import PreNav from '../components/layout/prelogin/PreNav'

function Home() {
    return (
        <>
            {/* <Navbar /> */}
            {/* <PreNav/> */}
            <Hero/>
            <Prelogin/>
        </>
    )
}

export default Home