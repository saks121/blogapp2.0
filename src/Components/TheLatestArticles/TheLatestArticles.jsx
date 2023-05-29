import React from 'react'
import Advertisement from '../TheLatest/AdvertisementComp/Advertisement'
 

export default function TheLatestArticles({data,title}) {
  return (
    <div>
      <h1 style={{position: 'absolute',top: '1564px',left: '185px',color: 'burlywood'}}>{title}</h1>
      <div className='TheLatestArticles-left-comp'>
        <div className='TheLatestArticles-left-data-1'>
            <img id='TheLatestArticles-left-imgurl'src={data[3]?.imageurl} alt={"not found"} />
            <p id='TheLatestArticles-left-title'>{data[5]?.title}</p>
            <p id='TheLatestArticles-left-desc'>{data[5]?.desc}</p>
            <p id='TheLatestArticles-left-cat'>{data[5]?.class}/</p>
            <p id='TheLatestArticles-left-day-time'>{data[5]?.date}</p>
        </div>

        <div className='TheLatestArticles-left-data-1'>
            <img id='TheLatestArticles-left-imgurl'src={data[3]?.imageurl} alt={"not found"} />
            <p id='TheLatestArticles-left-title'>{data[5]?.title}</p>
            <p id='TheLatestArticles-left-desc'>{data[5]?.desc}</p>
            <p id='TheLatestArticles-left-cat'>{data[5]?.class}/</p>
            <p id='TheLatestArticles-left-day-time'>{data[5]?.date}</p>
        </div>

        <div className='TheLatestArticles-left-data-1'>
            <img id='TheLatestArticles-left-imgurl'src={data[3]?.imageurl} alt={"not found"} />
            <p id='TheLatestArticles-left-title'>{data[5]?.title}</p>
            <p id='TheLatestArticles-left-desc'>{data[5]?.desc}</p>
            <p id='TheLatestArticles-left-cat'>{data[5]?.class}/</p>
            <p id='TheLatestArticles-left-day-time'>{data[5]?.date}</p>
        </div>

        <div className='TheLatestArticles-left-data-1'>
            <img id='TheLatestArticles-left-imgurl'src={data[3]?.imageurl} alt={"not found"} />
            <p id='TheLatestArticles-left-title'>{data[5]?.title}</p>
            <p id='TheLatestArticles-left-desc'>{data[5]?.desc}</p>
            <p id='TheLatestArticles-left-cat'>{data[5]?.class}/</p>
            <p id='TheLatestArticles-left-day-time'>{data[5]?.date}</p>
        </div>

        <div className='TheLatestArticles-left-data-1'>
            <img id='TheLatestArticles-left-imgurl'src={data[3]?.imageurl} alt={"not found"} />
            <p id='TheLatestArticles-left-title'>{data[5]?.title}</p>
            <p id='TheLatestArticles-left-desc'>{data[5]?.desc}</p>
            <p id='TheLatestArticles-left-cat'>{data[5]?.class}/</p>
            <p id='TheLatestArticles-left-day-time'>{data[5]?.date}</p>
        </div>
      </div>

      

      <Advertisement/>
      <h1 style={{position: 'absolute',right: '367px',top: '2250px',left: '815px',color: 'burlywood'}}>Top Posts</h1>

      

    </div>
  )
}
