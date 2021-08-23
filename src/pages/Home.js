import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/home.scss'
import Main from './Main'

export default function Home() {
    return (
        <div className="home">
          <Header /> 
          <Main />
          <Footer />
        </div>
    )
}
