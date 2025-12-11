import { useState } from "react";
import Form from "./Component/Form";
import ItemCard from "./Component/Itemcard";

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const clearAll = () => {
    setItems([]);
  };

  return (
    <div>
      <Form addItem={addItem} />

      <h2>Items List</h2>

      {items.length === 0 && <p>No items added yet.</p>}

      {items.map((item, index) => (
        <ItemCard
          key={index}
          item={item}
          index={index}
          deleteItem={deleteItem}
        />
      ))}

      {items.length > 0 && (
        <button onClick={clearAll} style={{ marginTop: "20px" }}>
          Clear All
        </button>
      )}
    </div>
  );
};

export default App;
