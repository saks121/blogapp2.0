// import React, { useContext } from 'react'
import '../TopArticles/style.css';
// import { store } from '../../ContextAPI/ContextApi';

 export default function TopArticles({dataval,title}) {
    // const [dataval] =useContext(store);
    console.log("Bollywood data",dataval);
   return (
     <div>
        <h1 style={{position: 'absolute',top: '163px',left: '70px',color: 'burlywood',fontSize:'40px'}}>{title}</h1>
        <div className='TopArticles-left-comp' >
            {dataval.filter((item)=>item.cat ==='Bollywood').map((data,index)=>{
                console.log("B data:",data);
                return(
                    <div className='TopArticles-left-data-1' key={index}>
                        <img id='TopArticles-left-imgurl'src={data?.imageurl} alt={"not found"} />
                        <p id='TopArticles-left-title'>{data?.title}</p>
                        <p id='TopArticles-left-cat'>{data?.cat}</p>
                        <p id='TopArticles-left-desc'>{data?.desc}</p>
                        
                     
                    </div>
                );

            })}

        </div>


        <h1 style={{position: 'absolute',right: '367px',top: '481px',left: '881px',color: 'burlywood',width: '175px',zIndex: '2'}}>Top Posts</h1>
        
     </div>
   )
 }
 