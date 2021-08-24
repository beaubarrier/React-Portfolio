import React, { useState } from 'react';

function Navbar({ currentPage, handlePageChange }) {

    const [textColor, setTextColor] = useState('#FA00FF')
    const [text, setText] = useState('beauBarrier')

    const randoColor = () => {
        var colors = ['#FA00FF', '#FFF500', '#05FF00', '#FF9900', '#00C2FF', '#FF0000', '#FF8CE6'];
        return colors[Math.floor((Math.random() * colors.length))]
    }

    const handleChangeTextColor = (e) => {
        setTextColor(randoColor)
    }
    const handleTextChangePortfolio = (e) => {
        setText('MyPortfolio')
    }
    const handleTextChangeMyStory = (e) => {
        setText(' --MyStory--')
    }
    const handleTextChangeGithub = (e) => {
        setText('-My Github-')
    }
    const handleTextChangeEmail = (e) => {
        setText('--EmailMe--')
    }
    const handleTextBack = (e) => {
        setText('beauBarrier')
    }

    return (
        <nav className="navbar">


            <div id="logo">

                <a href="#default"
                    onClick={ () => { handlePageChange('default') } }
                    onMouseOver={ () => { handleChangeTextColor() } }>

                    <p id="logoText"
                        style={ { color: textColor } }>
                        { text }
                    </p>

                </a>

                <i id="pHolderIcon"
                    className="fas fa-2x fa-user-astronaut">
                </i>

            </div>

            <div id="navLinks">

                <a href="#portfolio"
                    onClick={ () => { handlePageChange('portfolio') } } >

                    <i id="portraitIcon"
                        className="fas fa-2x  fa-portrait"
                        onMouseOver={ () => { handleChangeTextColor(); handleTextChangePortfolio(); } }
                        onMouseOut={ () => { handleTextBack() } }>
                    </i>

                </a>

                <a href="#myStory"
                    onClick={ () => { handlePageChange('myStory') } }  >

                    <i id="myStoryIcon"
                        className="fas fa-2x fa-book"
                        onMouseOver={ () => { handleChangeTextColor(); handleTextChangeMyStory(); } }
                        onMouseOut={ () => { handleTextBack() } }>
                    </i>

                </a>

                <a href="https://www.github.com/beaubarrier">

                    <i id="githubIcon"
                        className="fab fa-2x  fa-github"
                        onMouseOver={ () => { handleChangeTextColor(); handleTextChangeGithub(); } }
                        onMouseOut={ () => { handleTextBack() } }>
                    </i>

                </a>

                <a href="mailto:beaubarrier@gmail.com">

                    <i id="emailIcon"
                        className="fas fa-2x fa-at"
                        onMouseOver={ () => { handleChangeTextColor(); handleTextChangeEmail(); } }
                        onMouseOut={ () => { handleTextBack() } }>
                    </i>

                </a>

            </div>

        </nav >

    )
}

export default Navbar