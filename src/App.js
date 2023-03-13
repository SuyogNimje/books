import React from 'react'

import './line.css';

const App = () => {
  return (
    <>
     <div id='wrapper_1'>
      <div>Trending Subject</div>
      <div>
        <input type="text" placeholder="Search Subject"/>
      </div>
      <div>Javascript</div>
      <div>Harry Potter</div>
      <div>Indian History</div>
      <div>Cryto currency</div>
      <div>Criminal Law</div>
      </div>  

      {/* <div className="line1">
       <div className="verticle-line"></div>
      </div> */}

      <div id='wrapper_2'>
        <input type="text" placeholder="Search Book By Titles or By Author" id='search1' />
        <button type="submit"><i class="fa fa-search"></i></button>
      </div>
  
      
    </>
  )
}

export default App