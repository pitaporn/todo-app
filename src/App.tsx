import { useState } from "react";
import "./App.css";
//import { TodoItem } from "./interfaces";
import AddItemComponent from "./components/AddItemComponent";
import ListItem from "./components/ListItem";

type TodoItem = {
  message: string;
  done: boolean;
};

function App() {
  const [message, setMessage] = useState<string>("");
  const [list, setList] = useState<TodoItem[]>([]);

  function onSubmit() {
    setList([...list, { message, done: false }]);
    setMessage("");
  }

  function onChecked(item: TodoItem) {
    setList([
      ...list.filter((i) => i !== item),
      { message: item.message, done: !item.done },
    ]);
  }

  return (
    <>
      <h1>To do list</h1>
      <AddItemComponent
        message={message}
        setMessage={setMessage}
        onClick={onSubmit}
      />

      <div>
        {list.map((item, index) => (
          <div key={index}>
            <ListItem<TodoItem> item={item} onChange={onChecked} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
