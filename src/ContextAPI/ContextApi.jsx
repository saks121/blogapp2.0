import { createContext, useState } from 'react';
import React from 'react';
export const store = createContext();

export default function ContextApi(props) {

    const[data, setData] =useState([
         
      {
        id:"img-head-comp",
        imageurl:"https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg.webp",
        title:"Title of vertical gallery",
        category:"Travel",
        date:"September 17 2021"
      }
      ,
      {
        id:"img-head-comp-side-1",
        imageurl:"https://assets.hongkiat.com/uploads/100-absolutely-beautiful-nature-wallpapers-for-your-desktop/blue-sea-sunset.jpg",
        title:"The Sound cloud.You loved is zoom",
        class:"Travel",
        date:"August 23 2020"
      }
      ,
      {
        id:"img-head-comp-side-2",
        imageurl:"https://us.123rf.com/450wm/thvideo/thvideo2209/thvideo220903012/191917684-abstract-autumn-mountain-landscape-scene-background-illustration.jpg?ver=6",
        title:"The Sound cloud.You loved is zoom",
        class:"Travel",
        date:"August 23 2020"
      }
      ,
      {
        id:"img-head-comp-side-2",
        imageurl:"https://static.wixstatic.com/media/bb1bd6_bff16ec17b254ea9a802558f14af75e0~mv2.png/v1/fit/w_1000%2Ch_608%2Cal_c%2Cq_80,enc_auto/file.jpg",
        title:"Joshua Tree overnight Adventure",
        desc:"Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces",
        class:"Travel",
        date:"August 21 2020" 
      }
      ,
      {
        imageurl:"https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__340.jpg",
        title:"Catch waves with an adventure guide",
        desc:"Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination.It has a plethora of temples and palaces Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist",
        class:"TECH",
        daytime:"/TODAY AT 11:54"
      }
      ,
      {
        imageurl:"https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg",
        desc:"Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination.It has a plethora of temples and palaces",
        title:"Catch waves with an adventure guide",
        class:"Travel",
        date:"August 21 2020"
      }
      ,
      {
        id:'1',
        imageurl:"https://m.media-amazon.com/images/M/MV5BMjI2Njg2Y2EtZjgwMC00ZGVkLWJmMWYtYjVhYjk2ZTkwNWE1XkEyXkFqcGdeQXVyMTMxMjA5NDU1._V1_UY209_CR13,0,140,209_AL_.jpg",
        title:"KGF:Chapter 2",
        desc:"In the blood-soaked Kolar Gold Fields, Rocky's name strikes fear into his foes. While his allies look up to him, the government sees him as a threat to law and order. Rocky must battle threats from all sides for unchallenged supremacy.",
        cat:"Bollywood"
      }
      ,
      {
        id:'2',
        imageurl:"https://m.media-amazon.com/images/M/MV5BMDRiOWNjYjUtMDI0ZC00MDMyLTkwZDItNTU5NWQ1NjEyNGYxXkEyXkFqcGdeQXVyMTIyNzY0NTMx._V1_UX140_CR0,0,140,209_AL_.jpg",
        title:"Vikaram",
        desc:"A high-octane action film where a special investigator is assigned a case of serial Killings, he finds the case is not what it seems to be and leading down this path is only going to end in a war between everyone involved.",
        cat:"Bollywood"
      }
      ,
      {
        id:'3',
        imageurl:"https://m.media-amazon.com/images/M/MV5BYmY2ZDUxNzUtYWZlYy00MThhLWI5NjktZDhjZTU3MDY5YTM3XkEyXkFqcGdeQXVyNTYxMDgzODI@._V1_UY209_CR13,0,140,209_AL_.jpg",
        title:"Drishyam 2",
        desc:"A gripping tale of an investigation and a family which is threatened by it. Will Vijay Salgaonkar be able to protect his family this time?",
        cat:"Bollywood"
      }
      ,
      {
        id:'4',
        imageurl:"https://m.media-amazon.com/images/M/MV5BYTZjNzI1ZTItOTE5Ny00MjBjLWE1NjUtOWRkZWVkOTk2OTZmXkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_UY209_CR8,0,140,209_AL_.jpg",
        title:"Monica O My Darling!",
        desc:"A slick robotics expert joins a murderous plot after a passionate affair takes a sudden turn, but nothing not even death , is what it seems to be.",
        cat:"Bollywood"
      }
      ,
      {
        id:'5',
        imageurl:"https://m.media-amazon.com/images/M/MV5BZjY2MmI1ZWItNmU0Yy00NTdkLWJiYmQtNzFlZWNlMzkxZTZjXkEyXkFqcGdeQXVyNjkwOTg4MTA@._V1_UY209_CR13,0,140,209_AL_.jpg",
        title:"Brahamastra Part 1:Shiva",
        desc:"This is the story of Shiva who sets out in search of love and self-discovery. During his journey, he has to face many evil forces that threaten our existence.",
        cat:"Bollywood"
      }
      ,
      {
        id:'6',
        imageurl:"https://m.media-amazon.com/images/M/MV5BN2YzNjU4MTYtMzY5OS00ODg0LTkxMTUtNjg0YjRkYzI5ZWJjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY209_CR8,0,140,209_AL_.jpg",
        title:"RunWay 34",
        desc:"Inspired by true incidents,'Runway 34' revolves around Captain Vikrant Khanna played by Ajay Devgn, a flying prodigy, whose flight takes a mysterious course after take-off from an international destination.",
        cat:"Bollywood"
      }
      ,
      {
        id:'7',
        imageurl:"https://m.media-amazon.com/images/M/MV5BMGNmNDIyNmItOTU4MC00ZmQzLWI2ODQtODhmOTZlMmY0M2E1XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_UY209_CR13,0,140,209_AL_.jpg",
        title:"Doctor G",
        desc:"Uday Gupta finds himself as the lone male resident in the Gynaecology department. His reluctance leads to chaos, confusion, comedy and eventually, great camaraderie with his fellow classmates.",
        cat:"Bollywood"
      }
      ,
      {
        id:'8',
        imageurl:"https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_UY209_CR0,0,140,209_AL_.jpg",
        title:" The Batman",
        desc:"When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
        cat:"Hollywood"
      }
      ,
      {
        id:'9',
        imageurl:"https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_UY209_CR0,0,140,209_AL_.jpg",
        title:"Dr.Strange:Madness in Multiverse",
        desc:"Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse. They seek help from Wanda the Scarlet Witch, Wong and others.",
        cat:"Hollywood"
      }
      ,
      {
        id:'10',
        imageurl:"https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR0,0,140,209_AL_.jpg",
        title:"Thor:Love and Thunder",
        desc:"Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.",
        cat:"Hollywood"
      }
      ,
      {
        id:'11',
        imageurl:"https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_UY209_CR0,0,140,209_AL_.jpg",
        title:"TopGun: Maverick",
        desc:"After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.",
        cat:"Hollywood"
      }
      ,
      {
        id:'12',
        imageurl:"https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UY209_CR0,0,140,209_AL_.jpg",
        title:"Wakanda Forever",
        desc:"The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.",
        cat:"Hollywood"
      }
      ,
      {
        id:'13',
        imageurl:"https://m.media-amazon.com/images/M/MV5BMzVlMmY2NTctODgwOC00NDMzLWEzMWYtM2RiYmIyNTNhMTI0XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_UY209_CR0,0,140,209_AL_.jpg",
        title:"The Northman",
        desc:"A young Viking prince is on a quest to avenge his father's murder.",
        cat:"Hollywood"
      }
      ,
      {
        id:'14',
        imageurl:"https://m.media-amazon.com/images/M/MV5BMDU2ZmM2OTYtNzIxYy00NjM5LTliNGQtN2JmOWQzYTBmZWUzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR0,0,140,209_AL_.jpg",
        title:"Bullet Train",
        desc:"Five assassins aboard a swiftly-moving bullet train find out that their missions have something in common.",
        cat:"Hollywood"
      }
      ,
      {
        id:'1',
        imageurl:"https://miro.medium.com/v2/resize:fill:224:224/1*0VhLltgTyknnjFA8ryOoBA.jpeg",
        title:"Ignited at Microsoft Ignite After Party Sri Lanka-2022",
        desc:"After being selected as Microsoft Learn Student Ambassador, which was one of my dreams after entering university, my first visit to Microsoft, Sri Lanka was for the After party of Microsoft ignite 2022, and the ignition in knowledge and memories I got after attending the event is what I’m going to share in this blog.",
        cat:"Technology"
      }
      ,
      {
        id:'2',
        imageurl:"https://miro.medium.com/v2/resize:fill:112:112/1*-YH-yO8TuLLwZ3YRc0iv4A.jpeg",
        title:"Trivy-Operator — Improve Container Runtime Security",
        desc:"Security Von: Thomas Rudrof The Trivy-Operator is a powerful tool that can help to improve the runtime security of your Kubernetes cluster by automatically scanning your container images for known",
        cat:"Technology"
      }
      ,
      {
        id:'3',
        imageurl:"",
        title:"",
        desc:"",
        cat:"Technology"
      }
      ,
      {
        id:'4',
        imageurl:"https://miro.medium.com/v2/resize:fill:112:112/0*dHvsaBEANvgVY83_",
        title:"Image and Video Processing in Python",
        desc:"Image and Video Processing in Python .Python is an awesome language, and its not just me who’s saying it. Since python is so easy to use and its become easier to write more and more libraries, adding functionality to python has become very easy",
        cat:"Technology"
      }
      ,
      {
        id:'5',
        imageurl:"https://miro.medium.com/v2/resize:fill:112:112/0*CLkCe3UyQRlXff3o",
        title:"5 Must-Use Tactics To Secure Your Password",
        desc:"5 Must-Use Tactics To Secure Your Password .User-generated passwords are memorable but may be quickly decrypted. Passwords are for your security. Therefore, all of your online accounts and bank accounts ask you to create a secure",
        cat:"Technology"
      }
      ,
      {
        id:'6',
        imageurl:"https://miro.medium.com/v2/resize:fill:112:112/1*vbx6LCH6Z1UChTlovJoC9w.jpeg",
        title:"Some Tips for Newbie Software Developers",
        desc:"Some Tips for Newbie Software Developers .This article is for anyone new to the field of software development. The article mainly contains some of my tips to make the software development and learning process related to the software development",
        cat:"Technology"
      }
      ,
      {
        id:'1',
        imageurl:"https://miro.medium.com/v2/resize:fill:112:112/1*XoL5iwT2n1S5Fcl29iIUyA.jpeg",
        title:"Android Users Can Now Pay To Remove Spaces Buttons On Twitter",
        desc:"Buttons On TwitterCustom navigation is now made available to Twitter Blue Users on iOS Twitter Blue has finally begun letting Android users modify the app’s",
        cat:"Technology"
      }
      ,
      {
        id:'1',
        imageurl:"",
        title:"",
        desc:"",
        cat:"Fitness"
      }
      ,
      {
        id:'1',
        imageurl:"",
        title:"",
        desc:"",
        cat:"Fitness"
      }
      ,
      {
        id:'1',
        imageurl:"",
        title:"",
        desc:"",
        cat:"Fitness"
      }
      ,
      {
        id:'1',
        imageurl:"",
        title:"",
        desc:"",
        cat:"Fitness"
      }
      ,
      {
        id:'1',
        imageurl:"",
        title:"",
        desc:"",
        cat:"Fitness"
      }
      ,
      {
        id:'1',
        imageurl:"",
        title:"",
        desc:"",
        cat:"Fitness"
      }
      ,
      {
        id:'1',
        imageurl:"",
        title:"",
        desc:"",
        cat:"Fitness"
      }
      ,
      {
        id:'1',
        imageurl:"",
        title:"",
        desc:"",
        cat:"Food"
      }
      ,
      {
        id:'1',
        imageurl:"",
        title:"",
        desc:"",
        cat:"Food"
      }
      ,
      {
        id:'1',
        imageurl:"",
        title:"",
        desc:"",
        cat:"Food"
      }
      ,
      {
        id:'1',
        imageurl:"",
        title:"",
        desc:"",
        cat:"Food"
      }
      ,
      {
        id:'1',
        imageurl:"",
        title:"",
        desc:"",
        cat:"Food"
      }
      ,
      {
        id:'1',
        imageurl:"",
        title:"",
        desc:"",
        cat:"Food"
      }
      ,
      {
        id:'1',
        imageurl:"",
        title:"",
        desc:"",
        cat:"Food"
      }
    ]);


    
  return (
    <div>
      <store.Provider value={[data,setData]}>
        {props.children}
      </store.Provider>

    </div>
  
  );
}
