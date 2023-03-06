import React from 'react'
import '../HeaderComponents/style.css';
export default function HomeRender({data}) {
    console.log("IMgurl:",data[0]?.imageurl+"title:",data[0]?.title+"cat:",data[0]?.category+"date:",data[0]?.date);

    return (
    <div>
        <>
            <img id='img-head-comp' src={data[0]?.imageurl} alt={"img not found"} />
            <p id='home-title'>{data[0]?.title}</p>
            <p id='home-cat'>{data[0]?.category}</p>
            <p id='home-date'>{data[0]?.date}</p>
        </>

        <>
            <img id='img-head-comp-side-1' src={data[1]?.imageurl} alt={"img not found"} />
            <p id='home-side-1-title'>{data[1]?.title}</p>
            <p id='home-side-1-cat'>{data[1]?.category}</p>
            <p id='home-side-1-date'>{data[1]?.date}</p>
        </>

        <>
            <img id='img-head-comp-side-2' src={data[2]?.imageurl} alt={"img not found"} />
            <p id='home-side-2-title'>{data[2]?.title}</p>
            <p id='home-side-2-cat'>{data[2]?.category}</p>
            <p id='home-side-2-date'>{data[2]?.date}</p>
        </>
      
    </div>

  )
}
