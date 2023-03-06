import React from 'react'
 export default function TheLatestStories({data}) {

  return (
    <div>
        <h1 style={{color: 'burlywood',position: 'absolute',left: '176px',top:'1126px'}}>The Latest Stories</h1>
        <hr style={{width: '957px', color: 'darkgrey',top: '1192px',position: 'absolute',left: '182px'}}></hr>
        <div className='TheLatest'>
            <div className='comp-TheLatest-Articles'>
                <p id='TheLatest-articles-comp-title'>{data[4]?.title}</p>
                <p id='TheLatest-articles-comp-desc'>{data[4]?.desc}</p>
                <p id='TheLatest-articles-comp-cat'>{data[4]?.class}</p>
                <p id='TheLatest-articles-comp-daytime'>{data[4]?.daytime}</p>
            </div>
            <hr style={{height: '278px',color: 'darkgrey',top: '57px',position: 'absolute',left: '198px'}}/>

            <div className='comp-TheLatest-Article'>
                <p id='TheLatest-articles-comp-title'>{data[4]?.title}</p>
                <p id='TheLatest-articles-comp-desc'>{data[4]?.desc}</p>
                <p id='TheLatest-articles-comp-cat'>{data[4]?.class}</p>
                <p id='TheLatest-articles-comp-daytime'>{data[4]?.daytime}</p>
            </div>
            <hr style={{height:'278px', color: 'darkgrey',top: '57px',position: 'absolute',left: '-121px'}}/>

            <div className='comp-TheLatest-Article'>
                 <p id='TheLatest-articles-comp-title'>{data[4]?.title}</p>
                <p id='TheLatest-articles-comp-desc'>{data[4]?.desc}</p>
                <p id='TheLatest-articles-comp-cat'>{data[4]?.class}</p>
                <p id='TheLatest-articles-comp-daytime'>{data[4]?.daytime}</p>
            </div>
            <hr/>
             
        </div>
    </div>
  )
}
