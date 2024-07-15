function TodoItem({ value, onChange }) {
  return (
    <div className="todo-item">
      <input type="checkbox" name={value} onchange={onChange}></input>
      <label for={value}>{value}</label>
    </div>
  );
}

function TodoList({ items }) {
  const todoItems = ["shower", "eat", "sleep"];
  // TODO: Add form how to add to the todolist
  // TODO: allow rearranging list
  // TODO: checklisted item should stay at the bottom and will be grayed out
  // TODO: allow delete item
  // TODO: add flag
  return (
    <div className="todo-list">
      {todoItems.map(item => (<TodoItem value={item} />))}
    </div>
  );
}

export default function Game() {
  return (
    <>
      <TodoList />
    </>
  );
};
