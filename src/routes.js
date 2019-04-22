import React,{Component} from 'react';
import {BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import App from './App';
import Notmatch from './components/Notmatch/Notmatch';
import ListTaskList from './components/ListTaskList/ListTaskList'


class Routes extends Component {


    render() {
        return (
        		<Router>
	                <Switch>
	                    <Route exact path='/' component={ App } />
	                    <Route path='/project' component={ListTaskList} />
	                    <Route component={Notmatch} />
	                </Switch>
				</Router>

        );
    }
};

export default Routes;