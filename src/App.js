import React from 'react';
import SearchBar from './containers/SearchBar';
import Cards from './containers/Cards';
const regeneratorRuntime = require("regenerator-runtime");

const App = () => {
  return (
    <div className="row center-xs">
      <div className="col-xs-6">
        <div className="box">
          <SearchBar />
        </div>
        <div className="box" style={{ display: 'flex', flexWrap: 'wrap' }}>
            <Cards />
        </div>
      </div>
    </div>
  )
}

export default App;
