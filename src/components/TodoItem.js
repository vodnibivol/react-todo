const TodoItem = ({ checked, content, toggleCheck, removeItem }) => {
  const handleCheck = () => {
    toggleCheck();
  };

  const handleDelete = () => {
    removeItem();
  };

  return (
    <div className={`todo-item ${checked ? 'checked' : ''}`}>
      <div className="checkbox" onClick={handleCheck}></div>
      <div className="content">{content}</div>
      <div className="remove" onClick={handleDelete}></div>
    </div>
  );
};

export default TodoItem;
