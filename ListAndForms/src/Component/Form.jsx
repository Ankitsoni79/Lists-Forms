import { useState } from "react";

const Form = ({ addItem }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !category || !desc) {
      alert("All fields are required");
      return;
    }

    addItem({ title, category, desc });

    setTitle("");
    setCategory("");
    setDesc("");

    // success message for 2 seconds
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div>
      <h2>Add Item</h2>
      {success && <p style={{ color: "green" }}>Item added successfully!</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="text"
          placeholder="Description" 
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
