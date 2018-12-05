import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html,
  body,
  #___gatsby,
  #___gatsby > div {
    height: 100%;
  }
  body {
    font-size: 100%;
    font-family: 'Avenir Next', 'Roboto', sans-serif;
    background: #313131;
    line-height: 1.33;
    color: #fff;
    overflow-x: hidden;

    * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      box-sizing: border-box;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Dank Mono', sans-serif;
    font-weight: 700;
    padding-bottom: 20px;
  }

  body,
  caption,
  th,
  td,
  input,
  textarea,
  select,
  option,
  legend,
  fieldset,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size-adjust: 0.5;
  }

  #___gatsby {
    font-size: 1em;
    line-height: 1.25;
  }

  @media (min-width: 43.75em) {
    #___gatsby {
      font-size: 1em;
      line-height: 1.375;
    }
  }

  h1 {
    font-size: 2em;
    line-height: 1.25;
  }

  @media (min-width: 43.75em) {
    h1 {
      font-size: 2.5em;
      line-height: 1.125;
    }
  }

  @media (min-width: 56.25em) {
    h1 {
      font-size: 3em;
      line-height: 1.05;
    }
  }

  h2 {
    font-size: 1.625em;
    line-height: 1.15384615;
  }

  @media (min-width: 43.75em) {
    h2 {
      font-size: 2em;
      line-height: 1.25;
    }
  }

  @media (min-width: 56.25em) {
    h2 {
      font-size: 2.25em;
      line-height: 1.25;
    }
  }

  h3 {
    font-size: 1.375em;
    line-height: 1.13636364;
  }

  @media (min-width: 43.75em) {
    h3 {
      font-size: 1.5em;
      line-height: 1.25;
    }
  }

  @media (min-width: 56.25em) {
    h3 {
      font-size: 1.75em;
      line-height: 1.25;
    }
  }

  h4 {
    font-size: 1.125em;
    line-height: 1.11111111;
  }

  @media (min-width: 43.75em) {
    h4 {
      line-height: 1.22222222;
    }
  }

  blockquote {
    font-size: 1.25em;
    line-height: 1.25;
  }

  @media (min-width: 43.75em) {
    blockquote {
      font-size: 1.5em;
      line-height: 1.45833333;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    position: relative;
  }

  .video-container {
    position: relative;
    padding-bottom: calc(50% - 30px);
    padding-top: 30px;
    height: 0;
    overflow: hidden;

    iframe,
    object,
    embed {
      max-width: 854px;
      max-height: 480px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`
