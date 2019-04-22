import React,{Component} from 'react';
import TaskList from '../TaskList/TaskList';
import {connect} from 'react-redux';
import {addTaskAction} from '../../actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from 'react-modal';
import {Field,reduxForm } from 'redux-form';

import '../../styles/ListTasks.css';
import {ADD_TO_DO_LIST_TASK,ADD_DOING_LIST_TASK} from '../../constants';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')


const mapStateToProps = (state) =>{

	return {
	mylistTodo:state.lists.mylistTodo,
	mylistDoing:state.lists.mylistDoing,
	mylistDone:state.lists.mylistDone,
	projectListTodo:state.lists.projectListTodo,
	projectListDoing:state.lists.projectListDoing,
	projectListDone:state.lists.projectListDone
	}

}

const mapDispatchToProps = (dispatch) =>{
	return {
		addTask:(data,listText) =>{
			const obj={
				name:document.getElementById('taskUser').value,
				dueDate:document.getElementById('taskDueDate').value,
				title:document.getElementById('taskTitle').value,
				id:1
			};
						debugger;
				dispatch(addTaskAction(obj,listText))

		},
	}

}


class ListTaskList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      headTitle:'New Task',
      listText:ADD_TO_DO_LIST_TASK,
      taskId:0,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
    const today = new Date().toISOString().split('T')[0];
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  submitForm(){
  	//
  	debugger;

  }
	render() {
		const {fields:{title,user,date},handleSubmit} = this.props;
		console.log(this.props.fields[0]);
		const {modalIsOpen,headTitle,listText,lastTask} = this.state;
		const {mylistTodo,mylistDoing,mylistDone} = this.props;
		return (
				<div className="allTasks">
		        

					<h1> My Tasks </h1>
					<div className="ListTaskList" >
						

						<TaskList tasks={mylistTodo} header={"TO DO"}/>
						<TaskList tasks={mylistDoing} header={"DOING"}/>
						<TaskList tasks={mylistDone} header={"DONE"}/>
						<button onClick={this.openModal}>Add new task</button>

					</div>
					<h1> Project Tasks </h1>
					<div className="ListTaskList" >
						
						<TaskList tasks={mylistTodo} header={"TO DO"}/>
						<TaskList tasks={mylistDoing} header={"DOING"}/>
						<TaskList tasks={mylistDone} header={"DONE"}/>
						<button onClick={this.openModal}>Add new task</button>
	    				

					</div>
		        <Modal
		          isOpen={modalIsOpen}
		          onAfterOpen={this.afterOpenModal}
		          onRequestClose={this.closeModal}
		          style={customStyles}
		          contentLabel="Example Modal"

		        >

		          <h2 ref={subtitle => this.subtitle = subtitle}>{headTitle}</h2>
				   <form onSubmit={handleSubmit} >
				    <div className="group">      
				      <Field component="input" type="text" name="taskTitle" id="taskTitle" />
				      <span className="bar"></span>
				      <label>Task Title:</label>
				    </div>		          
				    <div className="group">      
				      <Field component="input" type="date" name="duedate" id="taskDueDate"  />
				      <label>Due date</label>
				    </div>	
				    <div className="group">      
				      <Field component="input" type="text" name="taskUser" id="taskUser"  />
				      <span className="bar"></span>
				      <label>Name</label>
				    </div>		
		          <button type="submit" className="taskbutton" onClick={()=>this.props.addTask(lastTask,listText)}>add task <FontAwesomeIcon icon="plus" /></button>

		          </form>
		          <button className="taskbutton" onClick={this.closeModal}>close</button>

		        </Modal>
				</div>
		)
	}
}



ListTaskList =  connect(mapStateToProps,mapDispatchToProps)(ListTaskList);

export default reduxForm({
    form: 'addNewTask' 
})(ListTaskList);
