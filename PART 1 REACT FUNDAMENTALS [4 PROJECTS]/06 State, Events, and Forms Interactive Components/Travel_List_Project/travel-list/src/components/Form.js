import React, { useState } from "react";

export function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (eventOBJ) => {
    eventOBJ.preventDefault();
    // if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  };
  // function handleSubmit(e) {
  //   e.preventDefault();
  // }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍</h3>
      {/* <select option={1}>1</select>
            <select option={2}>2</select>
            <select option={3}>3</select> */}
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text "
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></input>
      <button>Add</button>
    </form>
  );
}
