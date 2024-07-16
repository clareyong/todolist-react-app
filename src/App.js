import { useState } from 'react';

function TodoItem({ value, onChange }) {
  function completedItem() {
    const [itemComplete, setItemComplete] = useState(Array())
  
  
  }
  return (
    <div className="todo-item">
      <input type="checkbox" name={value} onChange={onChange}></input>
      <label for={value}>{value}</label>
    </div>
  );
}

function TodoList() {
  const [todoItems, setTodoItems] = useState(Array());
  function addItem(formData) {
    const item = formData.get("item");
    setTodoItems([...todoItems, item]);
  }
  // TODO: checklisted item will be grayed out
  // TODO: checklisted item should stay at the bottom
  // TODO: allow rearranging list
  // TODO: allow delete item
  // TODO: add flag
  return (
    <>
    <form action={addItem}>
      <input name="item" />
      <button type="submit">Add task</button>
    </form>
    <div className="todo-list">
      {todoItems.map(item => (<TodoItem value={item} />))}
    </div>
    </>
   
  );
}

export default function List() {
  console.log('test');
  return (
    <>
      <TodoList />
    </>
  );
};
