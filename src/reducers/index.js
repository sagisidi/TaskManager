import {combineReducers} from 'redux';
import changeTaskList from './reducer_tasks.js';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
	lists:changeTaskList,
	form:formReducer
});


export default rootReducer;
