import { Route, Router } from 'wouter'
import ProjectTemp from './component/ProjectTemp'
import Homepage from './pages/homepage'

function App() {

  return (
    <Router>
      <Route path='/' component={Homepage}/>
      <Route path='/projects/:name' component={ProjectTemp}/>
    </Router>
  )
}

export default App
