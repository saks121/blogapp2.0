import React, { useContext } from 'react'
import '../HeaderComponents/style.css';
import { store } from '../../ContextAPI/ContextApi'; 
import HomeRender from './HomeRender';
import TheLatestRender from '../TheLatest/TheLatestRender';
import TheLatestStories from '../TheLatestStories/TheLatestStories'; 
import TheLatestArticles from '../TheLatestArticles/TheLatestArticles';
import TopPosts from '../TopPosts/TopPosts';
import TheArticlesBot from '../TheLatestAriclesBottomComp/TheArticlesBot';
export default function Home_Header() {
    const [dataval] =useContext(store);
    console.log("Data fetched :",dataval[0]);

  return (  
        <>
         <HomeRender data={dataval} />

         <TheLatestRender data={dataval} />

         <TheLatestStories data={dataval} />

         <TheLatestArticles data={dataval} title={"The Latest Articles"} />

         <TopPosts data={dataval} />

         <TheArticlesBot data={dataval} />
          
        </>
            
             

  )
}
