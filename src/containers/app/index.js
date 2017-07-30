import React from 'react';
import { Route, Link } from 'react-router-dom'
import HomeContainer from '../HomeContainer'
import ActorContainer from '../ActorContainer'
import MovieContainer from '../MovieContainer'

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/actor/:actor_id" component={ActorContainer} />
      <Route path="/movie/:movie_id" component={MovieContainer} />
    </main>
  </div>
)

export default App
