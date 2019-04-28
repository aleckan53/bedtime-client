import React from 'react'
import Story from './components/Story'
import Stack from './components/Stack'
import { Switch, Route } from 'react-router-dom'

const Home = props => {
  return (
    <section>
      <Switch>
        <Route
          path={`/home/story/:id`}
          render={(routerProps) => <Story data={props.stories} {...routerProps}/>}
        />
        <Route 
          exact
          path={`${props.match.path}/`}
          render={() => <Stack data={props.stories}/>}
        />
      </Switch>
    </section>
  )
}

export default Home