// import { Switch, Route, Link } from 'react-router-dom'
// import Home from './main/Home'
// import About from './main/About'
// import NoMatch from './main/NoMatch'

// const Main = () => (
//   <div>
//     <Link to="/">Home</Link>
//     <Link to="/about">About</Link>
//     <Switch>
//       <Route exact path="/" component={Home} />
//       <Route path="/about" component={About} />
//       <Route component={NoMatch} />
//     </Switch>
//   </div>
// )

// export default Main

// app.js
import React from 'react'
import { Link, Route, Switch, useLocation } from 'react-router-dom'

const About = () => <div>You are on the about page</div>
const Home = () => <div>You are home</div>
const NoMatch = () => <div>No match</div>

export const LocationDisplay = () => {
  const location = useLocation()

  return <div data-testid="location-display">{location.pathname}</div>
}

export const Main = () => (
  <div>
    <Link to="/">Home</Link>

    <Link to="/about">About</Link>

    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>

    <LocationDisplay />
  </div>
)
