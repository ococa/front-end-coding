// import React from 'react';
import React from '../package/React';
import ReactDOM from '../package/ReactDom';

// function Home() {
//   return <div>hhhh dome</div>
// }

class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor props', this.props);
  }
  componentWillMount() {
    console.log('componentWillMount props', this.props);
  }

  componentWillReceiveProps(props) {
    console.log('componentWillReceiveProps props', props);
  }

  componentDidMount() {
    console.log('componentDidMount props', this.props);
  }

  shouldComponentUpdate() {

  }

  componentWillUpdate() {

  }

  componentDidUpdate() {

  }

  render() {
    console.log('render props', this.props);
    return <div>123
      <div
        style={{ color : 'red' }}
        className={'123'}
      >
        123
      </div>
    </div>
  }
}

const a = (
  <div
    style={{ color : 'red' }}
    className={'123'}
  >
    123
  </div>
)


ReactDOM.render(<Home name={'123'}/>, document.getElementById('root'))
