import {useState} from 'react';

function ModeToggler(){
    let [style, setStyle] = useState({backgroundColor:'white', color:'black'});

    const handleClick = () => {
        if(style.backgroundColor === 'white'){
            setStyle({backgroundColor:'black', color:'white'});
        }
        else{
            setStyle({backgroundColor:'white', color:'black'});
        }
    }   

    
    return(
        <div>
            <h1 style={style}>This heading can change mode!</h1>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}


export default ModeToggler;