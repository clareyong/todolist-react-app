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
