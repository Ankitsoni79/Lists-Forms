const ItemCard = ({ item, index, deleteItem }) => {
  return (
    <div className="card">
      <h3>{item.title}</h3>
      <p><b>Category:</b> {item.category}</p>
      <p><b>Info:</b> {item.desc}</p>

      <button onClick={() => deleteItem(index)}>Delete</button>
    </div>
  );
};

export default ItemCard;
