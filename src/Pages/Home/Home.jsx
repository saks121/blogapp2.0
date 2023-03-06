import React from 'react';
import HomeHeader from '../../Components/HeaderComponents/Home_Header';
import Logo from '../../Components/Logo/Logo'
import NavBar from '../../Components/NavBar/NavBar';
import '../Home/style.css';
export default function Home() {

  return (
    <div>
        <Logo />
        <NavBar />
        <HomeHeader />
    </div>
  )
}
