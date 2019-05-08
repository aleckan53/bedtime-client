import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import Api from './api'
import Route from './components/Route'
import Nav from './components/Nav'
import {
  Auth, Editor, Home, LandingPage, Story, NotFound
} from '../'


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      stories: [],
      error: null,
    }
  }

  componentDidMount() {
    Api.getStoriesList()
      .then(stories => this.setState({stories}))
      .catch(error => this.setState({error}))
  }

  render() {
    return (
      <div className='App'>
        <Route path='/app' component={Nav}/>
        <main>
          <Switch>
            <Route path='/app/story/:id' component={Story} stories={this.state.stories}/>
            <Route path='/app/auth' component={Auth}/>
            <Route path='/app/editor' component={Editor}/>
            <Route path='/app' component={Home} stories={this.state.stories}/>
            <Route exact path='/' component={LandingPage}/>
            <Route component={NotFound}/>
          </Switch>
        </main>
      </div>
    )
  }

}