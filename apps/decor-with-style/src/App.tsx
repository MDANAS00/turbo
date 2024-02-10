import { Route, Router } from 'wouter'
import Homepage from './pages/homepage'

function App() {

  return (
    <Router>
      <Route path='/' component={Homepage}/>
    </Router>
  )
}

export default App
