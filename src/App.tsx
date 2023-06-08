import { useState } from "react";
import "./App.css";
import AddItemComponent from "./components/AddItemComponent";
import ListItem from "./components/ListItem";
import TodoInterfaces from "./interfaces/ToDoInterfaces";

function App() {
  const [list, setList] = useState<TodoInterfaces[]>([]);

  function onSubmit(message: string) {
    setList([...list, { message, done: false }]);
  }

  function onChecked(item: TodoInterfaces) {
    setList([
      ...list.filter((i) => i !== item),
      { message: item.message, done: !item.done },
    ]);
  }

  return (
    <>
      <h1>To do list</h1>
      <AddItemComponent onClick={onSubmit} />

      <div>
        {list.map((item, index) => (
          <div key={index}>
            <ListItem item={item} onChange={onChecked} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
