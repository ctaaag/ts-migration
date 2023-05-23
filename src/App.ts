import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoCount from './components/TodoCount';
import Users from './components/Users';

import TodoApi from './api/TodoApi';
import { checkData } from './utils/validationCheck';

export default function App(formId:any, listId:any, userid:any) {
  this.formDiv = document.getElementById(formId);
  this.listDiv = document.getElementById(listId);
  this.userDiv = document.getElementById(userid);
  this.state = { isLoading: false, data: [] };
  this.userName = 'Ctaaag';
  this.api = new TodoApi(this.userName);

  window.addEventListener('removeAll', async () => {
    await this.api.removeAllTodo();
    await this.setfetchState();
  });

  this.todoUser = new (Users as any)({
    $userDiv: this.userDiv,
    userName: this.userName,
    api: this.api,
    onClickUser: (newUserName:any) => {
      this.setUserName(newUserName);
    },
  });

  this.todoList = new (TodoList as any)({
    $listDiv: this.listDiv,
    state: this.state,
    checkCompleted: async (todoId:any) => {
      await this.api.toggleTodo(todoId);
      await this.setfetchState();
    },
    removeTodo: async (todoId:any) => {
      await this.api.removeTodo(todoId);
      await this.setfetchState();
    },
  });

  this.todoInput = new (TodoInput as any)({
    $formDiv: this.formDiv,
    addTodo: async (newTodo:any) => {
      await this.api.addTodo(newTodo);
      await this.setfetchState();
    },
    customEvent: new CustomEvent('removeAll'),
  });

  this.todoCount = new (TodoCount as any)({
    $listDiv: this.listDiv,
    state: this.state,
  });

  this.setUserName = (nextUserName:any) => {
    this.userName = nextUserName;

    this.setfetchState();
  };

  this.setState = (newState:any) => {
    checkData(newState.data);
    this.state = newState;

    this.todoList.setState(this.state);
    this.todoCount.setState(this.state);
    this.todoUser.setState(this.userName);
  };

  this.setfetchState = async () => {
    this.setState({ ...this.state, isLoading: true });
    const newState = await this.api.getUserTodo(this.userName);

    this.setState({ ...this.state, data: newState, isLoading: false });
  };

  this.setfetchState();
}
