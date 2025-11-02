import TodoItem from './TodoItem';

const TodoList = ({ items, removeItem, toggleCheck }) => {
  return (
    <div className="items-list">
      {items.map((item) => {
        return (
          <TodoItem
            checked={item.checked}
            content={item.content}
            key={item.key}
            removeItem={() => removeItem(item.key)}
            toggleCheck={() => toggleCheck(item.key)}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
