import React,{Component} from 'react';
import '../../styles/Task.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactCSSTransitionGrroup from 'react-addons-css-transition-group';


class  TaskList extends Component {

		addList(data){
			return (
						<div>

							<li key={`task_${data.id}`} className="taskCard">

								<div className="taskdata">
									<span>{data.title}</span>
									<span>{data.dueDate}</span>
								</div>
								<div className="taskdata">
									<span>{data.name}</span>
									<span><FontAwesomeIcon icon="pencil-alt" /></span>
								</div>

							</li>
						</div>
				)
		}

		render(){

			return(
				<div className="list"> 
					<h1>{this.props.header}</h1>
					<ul>
						{this.props.tasks.map(this.addList)}
					</ul>
				</div>
			)
		}

	

	


}


export default TaskList;