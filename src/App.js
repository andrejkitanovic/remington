import React from 'react'
import './App.scss'

import Login from './containers/Login/Login'
import Main from './containers/Main/Main'

import Pocetna from './containers/views/Pocetna/Pocetna'
import TVKanali from './containers/views/TVKanali/TVKanali'
import Filmovi from './containers/views/Filmovi/Filmovi'
import Serije from './containers/views/Serije/Serije'

import SingleFilm from './containers/views/SingleFilm/SingleFilm'

import SingleSerie from './containers/views/SingleSerie/SingleSerie'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Main>
            <Route path="/film/:id" component={SingleFilm} />
            <Route path="/serija/:id" component={SingleSerie} />
            <Route path="/home" component={Pocetna} />
            <Route path="/tv-kanali" component={TVKanali} />
            <Route path="/filmovi" component={Filmovi} />
            <Route path="/serije" component={Serije} />
          </Main>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
