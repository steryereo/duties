import React, { useEffect, useState } from 'react';

import getInitialData from './getInitialData';

import './app.css';

function App() {
  const [initState, setInitState] = useState({})
  const [thisMonthDuties, setThisMonthDuties] = useState({})

  useEffect(() => {
    const initData = getInitialData()
    setInitState(initData)
    setThisMonthDuties(initData.lastMonthDuties)
  }, [])

  const {duties} = initState

  if (!duties) return null

  return (
    <div className="container mx-auto">
      <ul className="list-none">
        {duties.map((duty => (
          <li key={duty}><span>{duty}:</span><span>{thisMonthDuties[duty]}</span></li>
        )))}
      </ul>

    </div>
  )
}

export default App;
