import React, { useContext } from 'react'
import '../HeaderComponents/style.css';
import { store } from '../../ContextAPI/ContextApi';
import Poster from './PosterComp'
export default function Home_Header(props) {

    const [dataval]=useContext(store);
    console.log("Dataval",dataval[0]);
  return (  
        <>
            <Poster styleClass={'img-head-comp'} data={dataval[0]} />

            <div >
                <img id='img-head-comp-side-1' src={"https://wallpapersafari.com/image/nature-wallpaper-1080p.jpg"}></img>
                <p id='home-side-1-title'>The Sound cloud.You loved is zoom</p>
                <p id='home-side-1-cat'>Travel/</p>
                <p id='home-side-1-date'>{props.date}</p>

            </div>

            <div >
                <img id='img-head-comp-side-2'src={"https://us.123rf.com/450wm/thvideo/thvideo2209/thvideo220903012/191917684-abstract-autumn-mountain-landscape-scene-background-illustration.jpg?ver=6"}></img>
                <p id='home-side-2-title'>The Sound cloud.You loved is zoom</p>
                <p id='home-side-2-cat'>Travel/</p>
                <p id='home-side-2-date'>{props.date}</p>
            </div>  
        </>

  )
}
