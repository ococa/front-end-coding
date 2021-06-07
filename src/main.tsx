import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const ele = (
  <div>hhhhhh1</div>
)

console.log('ele', ele)
// window.ele1 = ele;
// window.ele2 = App;
// window.ele3 = <App></App>;
//   window.React1 = React;
//

ReactDOM.render(
  <React.StrictMode>
    { ele }
  </React.StrictMode>,
  document.getElementById('root')
)
