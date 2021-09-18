import React from 'react';

const NavBar = () =>{

    let imgurl =
        "https://www.actualidadiphone.com/wp-content/uploads/2016/07/pokemon-pikachu-go.jpg.webp"
    

    return(
    <nav>
        <div />
        <div>
            <img 
            src = {imgurl}
            alt = "Logo Pokemon"
            className ="navbar-image"
            />
        </div>
        <div >❤</div>
    </nav>
    )
}

export default NavBar;