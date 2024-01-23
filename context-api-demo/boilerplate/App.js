import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// src/App.js
import React, { useContext } from 'react';
import { MyContext, MyContextProvider } from './MyContext';

function App() {
  const { data, updateData } = useContext(MyContext);

  return (
    <div className="App">
      <h1>Context API Demo</h1>
      <p>Data from Context: {data}</p>
      <button onClick={() => updateData('New Value')}>Update Data</button>
    </div>
  );
}

function AppWithContext() {
  return (
    <MyContextProvider>
      <App />
    </MyContextProvider>
  );
}

export default AppWithContext;

