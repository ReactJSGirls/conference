import { createGlobalStyle } from 'styled-components'
import typography from './css/type.js'
import reset from './css/reset.js'
import font from 'circular-std'

export default createGlobalStyle`
${font}
${reset}
${typography}

body {
  font-family: 'CircularStd', 'Roboto', sans-serif;
  background: #FFFFFF;
  line-height: 1.33;
  color: #41495D;
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
  font-family: 'CircularStd', sans-serif;
  font-weight: 600;
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
