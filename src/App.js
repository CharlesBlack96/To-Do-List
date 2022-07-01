import React, { useState } from "react";

function App() {
  const [list, setList] = useState(originalList);
  const [todo, setTodo] = useState("");

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleAdd = () => {
    const newList = list.concat({ todo, id: Math.random() });
    setList(newList);
    setTodo("");
  };

  const originalList = [
    {
      id: 23,
      todo: "wake up 6am",
    },

    {
      id: 12,
      todo: "brush teeth",
    },

    {
      id: 75,
      todo: "feed cats",
    },

    {
      id: 92,
      todo: "make smoothie",
    },

    {
      id: 67,
      todo: "make todo list for the day",
    },
  ];

  return (
    <div>
      <div>
        <input type="text" value={todo} onChange={handleChange} />
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </div>
      <ul>
        {originallist.map((item) => (
          <li key={item.id}>{item.todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
