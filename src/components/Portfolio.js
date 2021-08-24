import React from "react";
import ImageGallery from 'react-image-gallery';
import portItem1 from './images/Group7.png'
import portItem2 from './images/Group8.png'
function Portfolio() {


    return (
        <div className="main">
            <div id="mainLabel">
                <p>Portfolio</p>
            </div>
            <div id="galleryWindow">
                <div id="imgs">
                    <img id="img1" src={ portItem1 } />

                    <img id="img2" src={ portItem2 } />
                </div>

            </div>
        </div>
    )








}


export default Portfolio