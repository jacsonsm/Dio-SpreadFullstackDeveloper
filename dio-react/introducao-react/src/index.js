import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// class Appp extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       clock: 1000,
//       copo: 'agua'
//     }
//   }
//   alterarCopo = () => {
//     this.setState({
//       copo: 'refrigerante'
//     })
//     //this.state.copo = 'refrigerante'
//   }
//   render() {
//     const { clock, copo } = this.state
//     return (
//       <div>
//         <h2>{clock}</h2>
//         <button onClick={() => this.alterarCopo()}>{copo}</button>
//       </div>
//     )
//   }
// }
const element = <h1>'Digital Innovation'</h1>
const element2 = <h2>Teste renderizando elementos</h2>

function sum(a, b) {
  //return a + b
  alert(a + b)
}

function primeiroJSX() {
  return (
    <div className='teste'>
      Instrodução ao React
      {/*  */}
      <h1>Soma: {sum(10, 20)}</h1>

      <div>
        {element}
        {element2}
      </div>
      <h2><Button onClick={() => sum(10, 20)} name="teste soma" /></h2>


    </div>

  )
}


const App = () => {
  return (
    <div className="App">
      {primeiroJSX()}
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)