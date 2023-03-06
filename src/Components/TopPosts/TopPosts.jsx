import React from 'react'
export default function TopPosts({data}) {
  return (
    <div style={{width: '300px',height: '600px',position: 'absolute',top: '2332px',left: '820px'}}>
      <img style={{width: '230px',position: 'relative',left: '-30px',top:'13px'}} id='TopPosts-img' src={data[5]?.imageurl} alt="not found"/>
      <p id='TopPosts-title-head'>{data[5]?.title}</p>
      <p id='TopPosts-class'>{data[5]?.class}</p>
      <p style={{width: '70px',height: '70px',position: 'relative',top: '-189px',left: '211px',fontSize: 'x-large',color: 'gray'}}>1</p>

      <div className='TopPosts-comp'>
        <div className='TopPosts-data-1'>
            <img id='TopPosts-imgurl'src={data[5]?.imageurl} alt={"not found"} />
            <p id='TopPosts-title'>{data[5]?.title}</p>
             
            <p id='TopPosts-cat'>{data[5]?.class}/</p>
            <p id='TopPosts-day-time'>{data[5]?.date}</p>
            <p id='TopPosts-numb'>2</p>
        </div>

        <div className='TopPosts-data-1'>
            <img id='TopPosts-imgurl'src={data[5]?.imageurl} alt={"not found"} />
            <p id='TopPosts-title'>{data[5]?.title}</p>
             
            <p id='TopPosts-cat'>{data[5]?.class}/</p>
            <p id='TopPosts-day-time'>{data[5]?.date}</p>
            <p id='TopPosts-numb'>3</p>
        </div>

        <div className='TopPosts-data-1'>
            <img id='TopPosts-imgurl'src={data[5]?.imageurl} alt={"not found"} />
            <p id='TopPosts-title'>{data[5]?.title}</p>
             
            <p id='TopPosts-cat'>{data[5]?.class}/</p>
            <p id='TopPosts-day-time'>{data[5]?.date}</p>
            <p id='TopPosts-numb'>4</p>
        </div> 
      </div>
 
    </div>
  )
}
