import { useEffect, useState } from 'react';
import Input from './Input';
import TodoList from './TodoList';
import useTodos from '../hooks/useTodos';

function App() {
  const { todoItems, addItem, removeItem, toggleCheck } = useTodos([]);

  const [quote, setQuote] = useState('');

  useEffect(() => {
    const quoteUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';
    fetch('https://strojcek.ftp.sh/api/cors/?url=' + encodeURIComponent(quoteUrl))
      .then((r) => r.json())
      .then((quote) => setQuote(quote.quoteText + ' — ' + quote.quoteAuthor));
  }, []);

  return (
    <div className="App">
      <div id="content">
        <h2>Your To Do</h2>
        <Input addItem={addItem} />
        <TodoList items={todoItems} removeItem={removeItem} toggleCheck={toggleCheck} />
        <div className="remainingText">Your remaining todos: {todoItems.filter((i) => !i.checked).length}</div>
        <div className="quote">{quote}</div>
      </div>
    </div>
  );
}

export default App;
