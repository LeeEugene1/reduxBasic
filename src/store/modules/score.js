//퀴즈 정답 ? 점수획득 : 점수획득실패
//상태:사용자의 현재 score
//액션:퀴즈를 풀때마다 (정답 ? 점수++ : 점수)


//액션타입(문자열)
const CHECK_CORRECT = "score/CHECK_CORRECT"
const NEXT_PAGE = "score/NEXT_PAGE"
const RESET = "score/RESET"


//액션 생성 함수
export function check({isCorrect}){
    return{
        type:CHECK_CORRECT,
        payload:{isCorrect}
    }
}

export function next(){
    return{
        type:NEXT_PAGE,
    }
}

export function reset(){
    return{
        type:RESET,
    }
}

// const quizs = [
//     {
//         q:'대한민국의 수도는?',
//         a:[
//             {
//                 text:'서울',
//                 isCorrect:true,
//             },
//             {
//                 text:'부산',
//                 isCorrect:false,
//             },            {
//                 text:'인천',
//                 isCorrect:false,
//             },
//         ]
//     },
// ]

//초기상태
const initialState = {
    score:0,
    page:0,//0:intro, 1~n:quiz page(quizs.length), n+1:last page(quizs.length+1)
    quizs:[
        {
            q:'대한민국의 수도는?',
            a:[
                {
                    text:'서울',
                    isCorrect:true,
                },
                {
                    text:'부산',
                    isCorrect:false,
                },            {
                    text:'인천',
                    isCorrect:false,
                },
            ]
        },
        {
            q:'미국의 수도는?',
            a:[
                {
                    text:'시카고',
                    isCorrect:false,
                },
                {
                    text:'뉴욕',
                    isCorrect:false,
                },            {
                    text:'워싱턴DC',
                    isCorrect:true,
                },
            ]
        },        
    ]
}


//그외 다양한 상태와액션을 추가할수있다.
//상태:사용자가 응답한 정답목록
//액션:정답목록에하나하나추가

//reducer
export default function score(state = initialState, action){
    switch (action.type){
        case CHECK_CORRECT:
            return{
                ...state,
                score:action.payload.isCorrect 
                ? state.score + 10 : state.score
            }
        case NEXT_PAGE:
            return{
                ...state,
                page:state.page + 1
            }
        case RESET:
            return{
                ...state,
                score:0,
                page:0,
            }
        default:
            return state;
    }
}