import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Register from './pages/register';
import Login from './pages/login';
import HomePage from './pages/dashboard';
import EditGame from './pages/editGame';
import EditQuestion from './pages/editQuestion';
import PlayJoin from './pages/playJoin';
import GamePage from './pages/playGame';
import AdminResults from './pages/adminResults';

// This React App is a web-based game-quiz web application.
// It allows people to sign up accounts to create and manage
// the quiz games to be that are to be played. Other players
// may then play the games through a separate page dedicated
// to facilitating the games. Game admins and players are then
// able to view the results of the game in separate pages.
// Admins get to view a leaderboard of the game, as well as
// the percentage of players that got each question correct and
// the average time spent on each question. This data appears
// in the form of a graph.
//
// Written by Daryl Chang (z5078401)
function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/edit/game/:quizId" element={<EditGame />} />
        <Route path="/edit/game/:quizId/question/:questionId" element={<EditQuestion />}/>
        <Route path="/edit/game/:sessionId/results" element={<AdminResults />}></Route>
        <Route exact path="/play/game/" element={<PlayJoin />} />
        <Route path="/play/game/:sessionId" element={<PlayJoin />} />
        <Route path="/playing/player/:playerId" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
