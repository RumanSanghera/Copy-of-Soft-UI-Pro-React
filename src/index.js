import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Testimonals from './views/testimonals'
import FAQ from './views/f-a-q'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Testimonals} exact path="/testimonals" />
        <Route component={FAQ} exact path="/f-a-q" />
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
