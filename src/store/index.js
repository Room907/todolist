import { writable, get } from "svelte/store";
// get(todos) === $todos
export const todos = writable([])

export function saveStorage() {
  // https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage
  //can save only str 
  localStorage.setItem('todos', JSON.stringify(get(todos)))
}