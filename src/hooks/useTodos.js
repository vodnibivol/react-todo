import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from './useLocalStorage';


const useTodos = (defaultValue) => {
  const [todoItems, setTodoItems] = useLocalStorage('react-todo-items', defaultValue);

  const addItem = (content) => {
    const newList = [...todoItems, { content: content, checked: false, key: uuidv4() }];
    setTodoItems(newList);
  };

  const removeItem = (key) => {
    setTodoItems(todoItems.filter((item) => item.key !== key));
  };

  const toggleCheck = (key) => {
    setTodoItems(todoItems.map((item) => (item.key === key ? { ...item, checked: !item.checked } : item)));
  };

  return { todoItems, setTodoItems, addItem, removeItem, toggleCheck };
};

export default useTodos;
