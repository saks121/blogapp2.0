import React, { useContext } from 'react'
import { store } from '../../ContextAPI/ContextApi';
 import TopArticlesFood from './TopArticlesFood';
import TopPostsFood from './TopPostsFood';
import Logo from '../../Components/Logo/Logo';

export default function Food() {
  const [dataFood] =useContext(store);
  return (
    <div>
      <Logo />
      <TopArticlesFood dataval ={dataFood} title= {"Food"} />
      <TopPostsFood dataval={dataFood} />

       <div style={{width: '300px',height: '500px',border: '2px solid black',position: 'absolute',top: '2192px',left: '917px',textAlign:'center'}}>
        <h1 style={{position: 'relative',top: '230px'}}>Advertisement</h1>
        </div>
    </div>
  )
}
