import React, { useContext } from 'react'
import { store } from '../../ContextAPI/ContextApi';
 import TopArticlesH from './TopArticlesH';
import TopPostsH from './TopPostsH';
 export default function Hollywood() {
  const [dataHollywood] =useContext(store);
  return (
    <div>
      <TopArticlesH dataval ={dataHollywood} title= {"Hollywood"} />
      <TopPostsH dataval={dataHollywood} />

       <div style={{width: '300px',height: '500px',border: '2px solid black',position: 'absolute',top: '2192px',left: '917px',textAlign:'center'}}>
        <h1 style={{position: 'relative',top: '230px'}}>Advertisement</h1>
        </div>  
    </div>
  )
}
