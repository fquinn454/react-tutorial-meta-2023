function Header(props){
    const headerStyle = {
        color: "navy",
        backgroundColor: "yellow",
        lineHeight: "3",
        paddingLeft: "20px"
      }


    return(
        <h1 style = {headerStyle} className={props.color}>Hello from Header, {props.name}!</h1>
    )
}


export default Header;