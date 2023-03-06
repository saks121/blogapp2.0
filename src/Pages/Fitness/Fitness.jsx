import React, { useContext } from 'react'
import { store } from '../../ContextAPI/ContextApi';
import TopArticlesF from './TopArticlesF';
import TopPostsF from './TopPostsF';
export default function Fitness() {
  const [dataFitness] =useContext(store);
  return (
    <div>
      <TopArticlesF dataval ={dataFitness} title= {"Hollywood"} />
      <TopPostsF dataval={dataFitness} />

       <div style={{width: '300px',height: '500px',border: '2px solid black',position: 'absolute',top: '2192px',left: '917px',textAlign:'center'}}>
        <h1 style={{position: 'relative',top: '230px'}}>Advertisement</h1>
        </div>
    </div>
  )
}
