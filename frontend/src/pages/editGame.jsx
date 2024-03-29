import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchGameInfo } from '../components/GameFeed';
import BackButton from '../components/BackButton';
import AdminNavBar from '../components/AdminNavBar';
import EditGameDetsPanel from '../components/EditGameDets';
import QuestionFeed from '../components/QuestionFeed';

// This page allows the user to edit the game as required by 2.2.2
const EditGame = () => {
  const token = localStorage.getItem('token');
  const { quizId } = useParams();
  const [questions, setQuestions] = React.useState([]);

  // This useEffect calls for questions to be acquired from the backend
  React.useEffect(async () => {
    await getQuestion(quizId, token);
  }, []);

  // This function gets the question details from the backend
  const getQuestion = async (quizId, token) => {
    setQuestions([]);
    console.log(questions);
    const gameInfo = await fetchGameInfo(quizId, token);
    setQuestions(gameInfo.questions);
  }

  return (
    <>
      <header>
        <nav>
          <AdminNavBar></AdminNavBar>
        </nav>
      </header>
      <main>
        <BackButton address={'/home'}>Hello</BackButton>
        <EditGameDetsPanel quizId={quizId} token={token}/>
        <QuestionFeed quizId={quizId} token={token}></QuestionFeed>
      </main>
    </>
  )
}

export default EditGame;
