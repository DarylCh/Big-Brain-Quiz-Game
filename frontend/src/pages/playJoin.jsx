import React from 'react';
import { useParams } from 'react-router-dom';
import JoinBar from '../components/JoinBar';
import Helmet from 'react-helmet';

// This page allows the player to sign into a game as required by 2.4.1
const PlayJoin = () => {
  const { sessionId } = useParams();
  return (
    <>
      <Helmet bodyAttributes={{ style: 'background-color : #fafafa' }} />
      <main>
        <JoinBar sessionId={sessionId}/>
      </main>
    </>
  )
}

export default PlayJoin;
