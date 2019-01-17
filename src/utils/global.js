import { createGlobalStyle } from 'styled-components'
import typography from './css/type.js'
import reset from './css/reset.js'
import font from 'circular-std'

export default createGlobalStyle`
${font}
${reset}
${typography}

html, body {
    height: 100%;
    width: 100vw;
    overflow-x: hidden;
}

body {
  font-family: 'CircularStd', 'Roboto', sans-serif;
  background: #FFFFFF;
  color: #41495D;

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    line-height: 1.5;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'CircularStd', sans-serif;
  font-weight: 600;
  line-height: 1.2;
  padding-bottom: 20px;

  span {
      line-height: 1.2;
  }

}

.gm-style-mtc, .gm-svpc, .gmnoprint, .gm-fullscreen-control {
  display: none;
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
