import React from 'react'
import './scrollbar.css'

const Scrollbar = () => {
    let progress = document.getElementById('progressbar');
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    window.onscroll = function(){
        let progressheight = (window.pageYOffset / totalHeight) * 100;
        progress.style.height = progressheight + "%";
    }
    return(
        <>
            <div id="progressbar"></div>
            <div id="scrollpath"></div>
        </>
    );
}

export default Scrollbar;