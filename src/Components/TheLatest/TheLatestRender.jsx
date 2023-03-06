import React from 'react'
import TitleComp from '../TitleComp/TitleComp'
import '../TheLatest/Style.css';
export default function TheLatestRender({data}) {
  return (
    <div>
        <TitleComp data={'The Latest'} />
        <div className='TheLatest'>
            <div className='comp-TheLatest'>
                <img id='TheLatest-comp-img'src={data[3]?.imageurl} alt={'not found'}/>
                <p id='TheLatest-comp-title'>{data[3]?.title}</p>
                <p id='TheLatest-comp-desc'>{data[3]?.desc}</p>
                <p id='TheLatest-comp-cat'>{data[3]?.class}/</p>
                <p id='TheLatest-comp-date'>{data[3]?.date}</p>
            </div>

            <div className='comp-TheLatest'>
                <img id='TheLatest-comp-img'src={data[4]?.imageurl} alt={'not found'}/>
                <p id='TheLatest-comp-title'>{data[3]?.title}</p>
                <p id='TheLatest-comp-desc'>{data[3]?.desc}</p>
                <p id='TheLatest-comp-cat'>{data[3]?.class}/</p>
                <p id='TheLatest-comp-date'>{data[3]?.date}</p>
            </div>

            <div className='comp-TheLatest'>
                <img id='TheLatest-comp-img'src={data[5]?.imageurl} alt={'not found'}/>
                <p id='TheLatest-comp-title'>{data[3]?.title}</p>
                <p id='TheLatest-comp-desc'>{data[3]?.desc}</p>
                <p id='TheLatest-comp-cat'>{data[3]?.class}/</p>
                <p id='TheLatest-comp-date'>{data[3]?.date}</p>
            </div>
             
        </div>
    </div>
  )
}
