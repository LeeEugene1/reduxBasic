import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {BlueButton} from './BlueButton'
import {check, next} from '../store/modules/score'

//quiz component:quiz from initialState, answer, button
export function Quiz(){
    const dispatch = useDispatch()
    const quiz = useSelector(state => state.score.quizs)
    const page = useSelector(state => state.score.page)

    return (
        <>
            <h1>{quiz[page - 1].q}</h1>
            {quiz[page - 1].a.map(item=>{
                return(
                    <BlueButton 
                    key={item.text} 
                    text={item.text} 
                    clickEvent={()=>{
                        //정답체크
                        dispatch(check(item.isCorrect))
                        //다음페이지 이동
                        dispatch(next())
                    }}/>
                )
            })}
        </>
    )
}