import React, { useState } from 'react';

function Navbar({ currentPage, handlePageChange }) {

    const [textColor, setTextColor] = useState('#FA00FF')

    const randoColor = () => {
        var colors = ['#FA00FF', '#FFF500', '#05FF00', '#FF9900', '#00C2FF', '#FF0000', '#FF8CE6'];
        return colors[Math.floor((Math.random() * colors.length))]
    }

    const handleChangeTextColor = (e) => {
        setTextColor(randoColor)
    }

    return (
        <nav className="navbar">

            {/* <Logo /> */ }
            <div id="logo">

                <a href="#default"
                    onClick={ () => { handlePageChange('default') } }
                    onMouseOver={ () => { handleChangeTextColor() } }>

                    <p id="logoText" style={ { color: textColor } }>beauBarrier</p></a>

                <i id="pHolderIcon" className="fas fa-2x fa-user-astronaut"></i>

            </div>

            <div id="navLinks">

                <a href="#portfolio" onClick={ () => { handlePageChange('portfolio') } } ><i id="portraitIcon" className="fas fa-2x  fa-portrait" onMouseOver={ () => { handleChangeTextColor() } }></i></a>

                <a href="#myStory" onClick={ () => { handlePageChange('myStory') } }  > <i id="myStoryIcon" className="fas fa-2x fa-book" onMouseOver={ () => { handleChangeTextColor() } }></i></a>

                <a href="https://www.github.com/beaubarrier"><i id="githubIcon" className="fab fa-2x  fa-github" onMouseOver={ () => { handleChangeTextColor() } }></i></a>

                <a href="mailto:beaubarrier@gmail.com"><i id="emailIcon" className="fas fa-2x fa-at" onMouseOver={ () => { handleChangeTextColor() } }></i></a>

            </div>

        </nav >
    )
}

export default Navbar