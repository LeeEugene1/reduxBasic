// console.log('hi')->index.js에서 import
import {createStore} from 'redux';

const initialState = {
    counter:0,
    text:'',
    list:[]
}

// action type 정의
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'
const CHANGE_TEXT = 'CHANGE_TEXT'
const ADD_TO_LIST = 'ADD_TO_LIST'

// action type을 활용해 action을 만들어주는 action생성함수생성
const increase = () => ({
    type:INCREASE,
});

const decrease = () =>({
    type:DECREASE,
});

const changeText = text =>({
    type:CHANGE_TEXT,
    text
});

const addToList = item =>({
    type:ADD_TO_LIST,
    item
});

function reducer(state = initialState, action){
    switch(action.type){
        case INCREASE :
            return{
                ...state,
                counter:state.counter+1
            };
        case DECREASE :
            return{
                ...state,
                counter:state.counter-1
            }
        case CHANGE_TEXT:
            return{
                ...state,
                text:action.text
            }
        case ADD_TO_LIST:
            return{
                ...state,
                list:state.list.concat(action.ltem)
            }
        default:
            return state;
    }
}

const store = createStore(reducer);//store생성
console.log(store.getState())//현 store안에 상태조회 initialState 객체내용뜸
//이제 구독과 dispatch를 해보자

// store에 구독
const listener = () => {
    const state = store.getState();
    console.log(state)
}

// listener함수를 store에 구독하기
const unsubscribe = store.subscribe(listener);

// 구독해지
// unsubscribe();

// 엑션dispatch
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕'));
store.dispatch(addToList({
    id:1,text:'wow'
}))
//이제 액션이 dispatch할때마다 콘솔에 현재상태가 출력된다.(왜냐면 구독했으니까 subscribe함수호출)