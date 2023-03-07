import React, { useContext } from 'react'
import { store } from '../../ContextAPI/ContextApi';
import TopArticlesT from './TopArticlesT';
import TopPostsT from './TopPostsT';
import Logo from '../../Components/Logo/Logo';

export default function Technology() {
  const [dataTechnology] =useContext(store);
  return (
    <div>
      <Logo/>
      <TopArticlesT dataval ={dataTechnology} title= {"Technology"} />
      <TopPostsT dataval={dataTechnology} />

       <div style={{width: '300px',height: '500px',border: '2px solid black',position: 'absolute',top: '2192px',left: '917px',textAlign:'center'}}>
        <h1 style={{position: 'relative',top: '230px'}}>Advertisement</h1>
        </div>
    </div>
  )
}
