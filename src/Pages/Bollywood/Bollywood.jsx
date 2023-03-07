import { useContext } from 'react'
import TopArticles from '../../Components/TopArticles/TopArticles'
import TopPostsmm from '../../Components/TopPostsm/TopPostsm'
import { store } from '../../ContextAPI/ContextApi';
import Logo from '../../Components/Logo/Logo';
export default function Bollywood() {
  const [data] =useContext(store);
  return (
    <div>
      <Logo/>
      <TopArticles dataval ={data} title= {"Bollywood"} />
      <TopPostsmm dataval={data} />

       <div style={{width: '300px',height: '500px',border: '2px solid black',position: 'absolute',top: '2192px',left: '917px',textAlign:'center'}}>
        <h1 style={{position: 'relative',top: '230px'}}>Advertisement</h1>
        </div>    

    </div>
  )
}
