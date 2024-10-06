import React from 'react'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'
import Contact from '../components/Contact/Contact'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Contact />
        </div>
    )
}
