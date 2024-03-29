import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root{
    --transition: all 0.25s ease-in-out;

    --bg-loading-color: rgb(2,12,27);
    --bg-color: rgb(10, 25, 47);  // 40, 44, 52
    --bg-low-opacity-color: rgba(10, 25, 47, 0.8);
    --bg-brightest-light-color: rgb(35, 53, 84);
    --bg-brighter-light-color: rgb(17, 34, 64);
    --bg-lighter-color: rgb(23, 42, 69);
    --bg-lightest-color: rgb(48, 60, 85);
    --shadow-color: rgba(2,12,27,0.7);
    --text-color-extra-white: rgb(230 241 255);
    --text-color-white: rgb(204,214,246);
    --text-color-light-grey: rgb(168, 178, 209);
    --text-color-grey: rgb(136,146,176);

    --accent-color: rgb(100, 255, 218);
    --accent-glow-color: rgba(100,255,218,0.1);

    --font-sans-serif: 'Roboto', 'San Francisco', 'Helvetica Neue', -apple-system, sans-serif;
    --font-monospace: "Roboto Mono", "SF Mono", "Fira Mono", monospace;

    --border-radius: 4px;
  }
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body{
    height: 100%;
    width: 100%;
  }
  html{
    background-color: var(--bg-color);
  }
  body{
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    -webkit-text-size-adjust: none;
    background-color: var(--bg-loading-color);
    color: var(--text-color-grey);
    font-size: 17px;
    line-height: 1.5;
    font-family: var(--font-sans-serif);
    counter-reset: section section-link;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media screen and (max-width: 480px) {
      font-size: 16px;
    }
  }
  ul, ol{
    list-style: none;
    margin: 0;
  }
  a{
    text-decoration: none;

    &:hover {
      color: var(--accent-color);
    }
  }

  ::selection{
    background-color: var(--text-color-grey);
    color: var(--text-color-white);
  }

  html.sr .sr{
    visibility: hidden;
  }

  // CSSTransition
  .fade{
    &-enter{
      opacity: 0;
    }
    &-enter-active{
      opacity: 1;
      transition: opacity 300ms ease-in-out;
    }
    &-enter-done{
      transition-delay: 0s !important;
    }
    &up{
      &-enter{
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;
      }
      &-enter-active{
        opacity: 1;
        transform: translateY(0px);
        transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;
      }
      &-enter-done{
        transition-delay: 0s !important;
      }
    }
    &down{
      &-enter{
        opacity: 0;
        transform: translateY(-20px);
        transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;
      }
      &-enter-active{
        opacity: 1;
        transform: translateY(0px);
        transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;
      }
      &-enter-done{
        transition-delay: 0s !important;
      }
    }
  }
`;