// import React, {component} from 'react';
import React from 'react';
import Header from './Header.js';

function App() {
  return (
    <div>
      {/* <div className="header">
        Phone Directory
      </div> */}
      <Header/>
      <button>Add</button>
      <div>
        <span>Name</span><br/>
        <span>Phone</span>
      </div>
    </div>
  );
}

export default App;
