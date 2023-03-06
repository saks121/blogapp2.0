
const Poster = ({data, styleClass}) => {
    return( 
    <div>
        <img id={styleClass}src={ data?.imgurl} alt='not found'></img>
        <p id='home-title'>{data?.title}</p>
        <p id='home-cat'>{data?.category}/</p>
        <p id='home-date'>{data?.date}</p>
    </div>)
}

export default Poster;