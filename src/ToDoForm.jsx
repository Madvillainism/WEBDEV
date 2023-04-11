import { useState } from "react";

export function ToDoForm({ onSubmit }) {
  const [item, setItem] = useState("");

  function itemAdd(e) {
    e.preventDefault();
    if (item === "") return;
    onSubmit(item);
    setItem("");
  }

  return (
    <form onSubmit={itemAdd} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">Nuevo Item: </label>
        <input
          value={item}
          type="text"
          id="item"
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
      </div>
      <button className="btn">Añadir</button>
    </form>
  );
}
