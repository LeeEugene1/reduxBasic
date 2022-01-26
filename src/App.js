import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { PinkButton } from './components/PinkButton'
import { next,reset } from './store/modules/score'
import { Quiz } from './components/Quiz'

function App() {
  //tree구조
  const page = useSelector(state => state.score.page)
  const quiz = useSelector(state => state.score.quizs)
  const score = useSelector(state => state.score.score)
  const dispatch = useDispatch()
  //quiz.length 는 2이고 마지막페이지는 2+1이된다.
  return (
    <>
    {page === 0 && (
      <div>
        <h1>나라별 수도 퀴즈</h1>
        <h2>진정한 수도 고인물도 100점을 받기 힘듭니다.</h2>
        <PinkButton text="테스트시작" clickEvent={()=>{
          dispatch(next())
        }}/>
      </div>
    )}
    {quiz.length >= page && page > 0 && (
      <div>
        <Quiz/>
      </div>
    )}
    {quiz.length < page && (
      <div>
        <h1>당신의 수도 퀴즈 점수는</h1>
        <div>{score}</div>
        <PinkButton text="다시 테스트" 
        clickEvent={()=>{
          dispatch(reset())
        }}/>
      </div>
    )}  
    </>
  );
}

export default App;
