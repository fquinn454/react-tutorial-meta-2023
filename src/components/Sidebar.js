function Sidebar(props){
    const sidebarStyle={
        display: "inline-block",
        backgroundColor: "deeppink",
        minWidth: "30%",
        height:"50px"
    }

    return(
        <h2 style={sidebarStyle} className="sidebar">Hello from Sidebar {props.name}</h2>
    )
}




export default Sidebar;