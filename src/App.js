import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/about'>
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
