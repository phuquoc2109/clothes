import React from 'react'
import Footer from './Footer'
import Header from './Header'
import '../styles/home.css'
import Main from '../pages/Main'

export default function Home() {
    return (
        <div className="home">
          <Header /> 
          <Main />
          <Footer />
        </div>
    )
}
