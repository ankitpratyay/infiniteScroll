const Card=({info})=>{
    console.log(info)
    return (
        <div className="Card">
           <div style={{margin:"15px", fontFamily:"georgia", backgroundColor:"aqua"}}>{info.title}</div>
           <div>{info.body}</div>
        </div>
    )
}
export default Card;