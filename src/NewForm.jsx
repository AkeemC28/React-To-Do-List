import { useState } from "react";

export function NewForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form" autocomplete="off">
      <div className="form-row">
        <h2 htmlFor="item" className='addTask'>New Item</h2>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn"><strong>Add</strong></button>
    </form>
  );
}
