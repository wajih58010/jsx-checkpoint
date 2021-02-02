import logo from './logo.svg';
import './App.css';
import JSXImage from './assets/jsx-src.png'

function App() {
  return (
    <div className="App">
       <p className="title red">wajih gabtni</p>
       <img
        className="react-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
        alt="logo react"
      />
      <br />

      
      <img src="jsx.png" alt="" style={{ width: "20%" }} />
      <br /><br /><br />
      <img src={JSXImage} alt="" style={{ width: "20%" }} />

      
    </div>
  );
}

export default App;
