import { createGlobalStyle } from 'styled-components'
import dank from './css/dank-mono.js'
import typography from './css/type.js'
import reset from './css/reset.js'

export default createGlobalStyle`
${dank}
${reset}
${typography}

body {
  font-family: 'Avenir Next', 'Roboto', sans-serif;
  background: #140e35;
  line-height: 1.33;
  color: #fff;
  overflow-x: hidden;

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
}

.gm-style-mtc, .gm-svpc, .gmnoprint, .gm-fullscreen-control {
  display: none;
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
