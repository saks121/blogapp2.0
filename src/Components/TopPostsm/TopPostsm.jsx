import '../TopPostsm/style.css';

export default function TopPostsmm({dataval,title}) {
    
  return (
    <div>
        <div style={{width: '420px',height: '600px',position: 'absolute',top: '257px',left: '857px'}}>
        <img style={{width: '152px',position: 'relative',left: '-108px',top: '13px'}} id='TopPostsm-img' src={dataval[6]?.imageurl} alt="not found"/>
        <p id='TopPostsm-title-head'>{dataval[6]?.title}</p>
        <p id='TopPostsm-class'>{dataval[6]?.cat}</p>
        <p style={{width: '70px',height: '70px',position: 'relative',top: '-326px',left: '330px',fontSize: '80px',color: 'gray'}}>1</p>

        <div className='TopPostsm-comp' >
            {dataval.filter((item)=>item.cat ==='Bollywood').map((item,index)=>{
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
