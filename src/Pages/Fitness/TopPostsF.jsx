import '../Fitness/style.css';
import React from 'react'

export default function TopPostsF({dataval}) {
  return (
    <div>
      <div style={{width: '420px',height: '600px',position: 'absolute',top: '257px',left: '857px'}}>
        <img style={{width: '254px',position: 'relative',left: '-64px',top: '15px'}} id='TopPostsm-img' src={dataval[27]?.imageurl} alt="not found"/>
        <p style={{position: 'relative',top: '-17px',left: '-96px',fontSize: '22px',color: 'coral'}}>{dataval[27]?.title}</p>
        <p style={{width: '70px',height: '70px',position: 'relative',top: '-326px',left: '330px',fontSize: '80px',color: 'gray'}}>1</p>

        <div className='TopPostsm-comp' >
            {dataval.filter((item)=>item.cat ==='Fitness').map((item,index)=>{
                return(
                    <div className='TopPostsm-data-1' key={index}>
                        <img id='TopPostsm-imgurl'src={item?.imageurl} alt={"not found"} />
                        <p id='TopPostsm-title'>{item?.title}</p>
             
                        <p id='TopPostsm-cat'>{item?.cat}</p>
                        <p id='TopPostsm-day-time'>{item?.desc}</p>
                     </div>
                );
            })}
        </div>


    </div>
    </div>
  )
}
