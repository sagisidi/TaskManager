import {ADD_TO_DO_LIST_TASK,
		ADD_DOING_LIST_TASK} from '../constants';


const listState = {
	mylistTodo:[],
	mylistDoing:[],
	mylistDone:[],
	projectListTodo:[],
	projectListDoing:[],
	projectListDone:[]
}

 const changeTaskList = (state=listState,action={}) => {
	switch(action.type){
		case ADD_TO_DO_LIST_TASK:
			return Object.assign({},state,{mylistTodo:state.mylistTodo.concat(action.payload)})
		case ADD_DOING_LIST_TASK:
			return Object.assign({},state,{mylistDoing:state.mylistDoing.concat(action.payload)})				
		default :
		return state;
	}

}

export default changeTaskList;