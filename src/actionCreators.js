export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const GET_TODOS = "GET_TODOS";

const proxyUrl = 'https://aqueous-dusk-74983.herokuapp.com/';
const targetUrl = 'https://tiagocosta-todo.herokuapp.com';
const APIURL = '/api/todos/';

function handleTodos(data) {
  debugger;
  return {
    type: GET_TODOS,
    data
  };
}

function handleAdd(todo) {
  debugger;
  return {
    type: ADD_TODO,
    todo
  };
}

function handleRemove(id) {
  debugger;
  return {
    type: REMOVE_TODO,
    id
  };
}

export function getTodos() {
  debugger;
  return dispatch => {
     return fetch(proxyUrl + targetUrl + APIURL)
      .then(res => res.json())
      .then(data => dispatch(handleTodos(data)))
      .catch(err => console.log("SOMETHING WENT WRONG!", err));
  };
}

export function addTodo(task) {
  debugger;
  return dispatch => {
    return fetch(proxyUrl + targetUrl + APIURL, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({ name: task })
    })
      .then(res => res.json())
      .then(data => dispatch(handleAdd(data)))
      .catch(err => console.log("SOMETHING WENT WRONG", err));
  };
}

export function removeTodo(id) {
  debugger;
  return dispatch => {
    return fetch(proxyUrl + targetUrl + APIURL + id, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => dispatch(handleRemove(id)))
      .catch(err => console.log("SOMETHING WENT WRONG", err));
  };
}
