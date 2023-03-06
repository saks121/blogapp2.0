import React from 'react'

export default function TheArticlesBot({data}) {
  return (
    <div>
      <div className='TheArticles-bot'>
        <img id='TheLAtestArticles-bot-img'src={data[0].imageurl} alt="notfount" />
        <p style={{position: 'relative',top: '1745px',fontSize: '27px',left: '-200px',color: 'whitesmoke'}}>{data[0]?.title}</p>
        <p style={{position: 'relative',top: '1745px',fontSize: '13px',left: '-244px',color: 'whitesmoke'}}>{data[0]?.category}</p>
        <p style={{position: 'relative',top: '1715px',fontSize: '13px',left: '-159px',color: 'whitesmoke'}}>{data[0]?.date}</p>
      </div>
    </div>
  )
}
