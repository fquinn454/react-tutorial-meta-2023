function Main(props){
    const mainStyle = {
        display: "inline-block",
        backgroundColor: "pink",
        minWidth: "70%",
        height:"50px"
      }
      
    return(
        <h2 style = {mainStyle} className="main">Hello from Main {props.name} </h2>
    )
}

export default Main;