import { css } from 'styled-components';

const AnimationStyles =  css`
    .fade-in-enter {
    opacity: 0;
    }
    .fade-in-enter-active {
    opacity: 1;
    transition: opacity 2000ms;
    }
    .fade-in-enter-done {
    opacity: 1;
    transition: opacity 2000ms;
    }
    .fade-in-exit {
    opacity: 1;
    }
    .fade-in-exit-active {
    opacity: 0;
    transition: opacity 2000ms;
    }
    .fade-in-exit-done {
    opacity: 0;
    transition: opacity 2000ms;
    }
`;

export default AnimationStyles;
