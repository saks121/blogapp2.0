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
        imageurl:"https://www.microsoft.com/en-us/security/blog/wp-content/uploads/2022/12/CyberSignals_Blog-header-1200x800-1.jpg",
        title:"Trivy-Operator — Improve Container Runtime Security",
        desc:"Security Von: Thomas Rudrof The Trivy-Operator is a powerful tool that can help to improve the runtime security of your Kubernetes cluster by automatically scanning your container images for known",
        cat:"Technology"
      }
      ,
      {
        id:'3',
        imageurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMgKvr237JCnf8n9QQ7fhOFOiAV-70AneFf5qnTYUE1_77pW-0pQdCuTzltNGSiGVOWtk&usqp=CAU",
        title:"How to Secure Your Company with a Passwordless Login?",
        desc:"Cyber Security is amongst the top priorities for most businesses these days. And placing so much focus on security is certainly warranted given the complex cyber threat landscape...2 March 2023",
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
        imageurl:"https://img.freepik.com/free-vector/cyber-security-concept_23-2148532223.jpg",
        title:"PII Scanning: How to Ensure Customer Trust and Protect Your Business",
        desc:" In a recent study, 84% of respondents indicated their concern over how their data is collected, and about privacy measures taken for their data security. They also voiced the...29 January 2023",
        cat:"Technology"
      }
      ,
      {
        id:'7',
        imageurl:"https://hub.packtpub.com/wp-content/uploads/2018/03/Sentiment-Analysis-Tw.png",
        title:"How Sentiment Analysis can work on Twitter",
        desc:"Buttons On TwitterCustom navigation is now made available to Twitter Blue Users on iOS Twitter Blue has finally begun letting Android users modify the app’s",
        cat:"Technology"
      }
      ,
      {
        id:'1',
        imageurl:"https://detailed.com/images/run-eat-repeat.jpg",
        title:"Run Eat Repeat",
        desc:"Run Eat Repeat is a site which covers running, recipes, weight loss and lifestyle topics through it's articles and podcast series.",
        cat:"Fitness"
      }
      ,
      {
        id:'2',
        imageurl:"https://detailed.com/images/born-fitness.jpg",
        title:"Breaking Muscle",
        desc:"BreakingMuscle provides advice and information on fitness, workouts and healthy eating, as well as selling coaching tutorials.",
        cat:"Fitness"
      }
      ,
      {
        id:'3',
        imageurl:"https://detailed.com/images/muscle-and-fitness.jpg",
        title:"Muscle and Fitness",
        desc:"Muscle and Fitness provides it's readers with practical workout and nutrition advice that they can follow to get in better shape.",
        cat:"Fitness"
      }
      ,
      {
        id:'4',
        imageurl:"https://detailed.com/images/fit-bottomed.jpg",
        title:"Fit Bottomed Girls",
        desc:"Fit Bottomed Girls provides articles on podcasts featuring health information and workout advice, the site also features fat-loss coaching.",
        cat:"Fitness"
      }
      ,
      {
        id:'5',
        imageurl:"https://detailed.com/images/fitbit.jpg",
        title:"Fitbit Blog",
        desc:"Fitbit.com provides advice, help and inspiration for those looking to reach fitness and health goals, the site also supplies it's own Fitbit products",
        cat:"Fitness"
      }
      ,
      {
        id:'6',
        imageurl:"https://detailed.com/images/get-healthy.jpg",
        title:"Get Healthy U",
        desc:"Get Healthy U provides guides on how to maintain a happy and healthy life, as well as having an E-Course for it's audience to improve their health.",
        cat:"Fitness"
      }
      ,
      {
        id:'7',
        imageurl:"https://detailed.com/images/tony.jpg",
        title:"Tony Gentilcore",
        desc:"Tony Gentilcore teaches people how to increase their physical capabilities through articles on the site, coaching and programmes he offers and a number of products for sale.",
        cat:"Fitness"
      }
      ,
      {
        id:'1',
        imageurl:"https://influencermarketinghub.com/wp-content/uploads/2018/06/Love-and-Lemons-Healthy-whole-food-vegan-and-v.png.webp",
        title:"Love and Lemons",
        desc:"Love and Lemons has been created by Jeanine Donofrio and her husband, Jack Mathews (“#1 taste-tester”). The blog’s name comes from the fact that Jeanine loves seasonal food, often finished off with a squeeze of lemon.",
        cat:"Food"
      }
      ,
      {
        id:'2',
        imageurl:"https://cookieandkate.com/images/2023/02/basque-cheesecake-recipe-3-550x824.jpg",
        title:"Foolproof Basque Cheesecake",
        desc:"Behold, my favorite luscious dessert! This cheesecake recipe hails from the Basque region of Spain—specifically, from a restaurant called La Viña, where fresh cheesecakes line the walls and smell like heaven.Honestly, I’m not sure why this cheesecake (tarta de queso in Spanish) is called Basque cheesecake over here.",
        cat:"Food"
      }
      ,
      {
        id:'3',
        imageurl:"https://cookieandkate.com/images/2021/05/homemade-caesar-salad-768x1158.jpg",
        title:"Homemade Caesar Salad",
        desc:"Raise your hand if you love a good Caesar salad. (Me! I do!) I have many favorite salads, but Caesar salad has been a favorite for as long as I can remember. A great Caesar salad hits a satisfying balance between fresh and crisp, and creamy and cheesy.",
        cat:"Food"
      }
      ,
      {
        id:'4',
        imageurl:"https://influencermarketinghub.com/wp-content/uploads/2018/06/Minimalist-Baker.jpg.webp",
        title:"Minimalist Baker",
        desc:"Minimalist Baker is one of those sites where the name says it all. It shares plant-based recipes requiring 10 ingredients or less, 1 bowl, or 30 minutes or less to prepare. It publishes a new recipe every three days, with a mixture of savory and sweet dishes.Dana Shultz is the recipe developer and blogger.",
        cat:"Food"
      }
      ,
      {
        id:'5',
        imageurl:"https://influencermarketinghub.com/wp-content/uploads/2018/06/Green-Kitchen-Stories.jpg.webp",
        title:"Green Kitchen Stories",
        desc:"Green Kitchen Stories features healthy vegetarian recipes by the Swedish-based couple, David Frenkiel and Luise Vindahl. Luise describes herself as the hippie-health-minded one, while David considers himself a vegetarian, food stylist, and photographer.David and Luise chose the name for their blog to represent their efforts to come up with healthy",
        cat:"Food"
      }
      ,
      {
        id:'6',
        imageurl:"https://influencermarketinghub.com/wp-content/uploads/2018/06/Sprouted-Kitchen-Google-Chrome-2022-12-21-10.50..jpg.webp",
        title:"Sprouted Kitchen",
        desc:"Partners, Sara Forte & Hugh Forte, work together to create Sprouted Kitchen. The site is as much about Hugh’s sumptuous food porn photography as it is about Sara’s mouth-watering recipes.They firmly believe in the benefits of eating seasonally.",  
        cat:'Food'
      }  
      , 

      {
        id:'7',
        imageurl:"https://pinchofyum.com/cdn-cgi/image/width=360,height=360,fit=crop/wp-content/uploads/salmon-burgers-on-a-plate.jpg",
        title:"Yummy Salmon Burgers",
        desc:"These salmon burgers are THE YUMMIEST! and made with just five ingredients. The best for a quick + easy high protein lunch or dinner.",
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
