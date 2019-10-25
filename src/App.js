import React, {useEffect} from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.scss';
import Public from './router/Public';
import Private from './router/Private';

function App() {

  return (
    <div className="App">
      <Public/>
      <Private/>
    </div>
  );
}

export default App;
