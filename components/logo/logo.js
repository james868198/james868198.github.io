import React, { useState } from 'react';
import styled from 'styled-components';

const LogoContainer = styled.span`

svg #logo-j rect{
    fill: ${(props => props.theme === 'dark'? '#ffffff':'#000000')};
}

svg #font-j {
    fill: ${(props => props.theme === 'dark'? '#000000':'#ffffff')};
}

svg #blank {
    fill: ${(props => props.theme === 'dark'? '#ffffff':'#000000')};
}
`

function Logo({theme}) {
    if (!theme)
        return

    return (
       <LogoContainer theme={theme}>
        <svg width="30" height="30" viewBox="0 0 144 144" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="logo-j">
                <rect width="144" height="144" rx="4" fill="black"/>
                <path id="font-j" d="M34.6 128.64L38.12 114.72C41 115.467 43.8267 116.16 46.6 116.8C49.3733 117.333 52.04 117.76 54.6 118.08C57.2667 118.293 59.6667 118.4 61.8 118.4C66.6 118.4 70.6 117.707 73.8 116.32C77.1067 114.827 79.56 112.373 81.16 108.96C82.76 105.547 83.56 101.067 83.56 95.52V35.68H41.8V20H101.48V99.2C101.48 106.773 100.253 113.12 97.8 118.24C95.3467 123.36 91.56 127.2 86.44 129.76C81.32 132.32 74.7067 133.6 66.6 133.6C63.2933 133.6 59.7733 133.387 56.04 132.96C52.4133 132.64 48.7867 132.107 45.16 131.36C41.5333 130.613 38.0133 129.707 34.6 128.64Z" fill="white"/>
                <rect id="blank" x="57" y="60" width="71" height="16" fill="black"/>
            </g>
        </svg>
       </LogoContainer> 
    )
    
}

export default Logo;