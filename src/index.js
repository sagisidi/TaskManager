import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import Routes from './routes';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt,faPlus } from '@fortawesome/free-solid-svg-icons'
import './styles/index.css';
import * as serviceWorker from './serviceWorker';

library.add(faPencilAlt,faPlus)

const storeCreate = applyMiddleware(thunkMiddleware)(createStore);

ReactDOM.render(<Provider store={storeCreate(reducers)}>
						<Routes />
 				</Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


