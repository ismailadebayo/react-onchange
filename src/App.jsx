import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Ismail");
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState();
  const [book, setBook] = useState("Quran");
  const [shipping, setShipping] = useState("delivery");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  function handleQuantityChange(e) {
    setQuantity(e.target.value);
  }

  function handleMessageChange(e) {
    setMessage(e.target.value);
  }

  function handleBookChange(e) {
    setBook(e.target.value);
  }

  function handleShippingChange(e) {
    setShipping(e.target.value);
  }

  return (
    <div className="block">
      <div>
        <input type="text" value={name} onChange={handleNameChange} id="name" />
        <h2>Name: {name} </h2>
      </div>
      <div>
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          id="name"
        />
        <h2>Quantity: {quantity} </h2>
      </div>
      <div>
        <textarea
          name="quantity"
          value={message}
          onChange={handleMessageChange}
          id="quantity"
          cols="50"
          rows="10"
          placeholder="Enter delivery instruction"
        ></textarea>
        <h2>Quantity: {message} </h2>
      </div>
      <div>
        <select value={book} onChange={handleBookChange}>
          <option value="Sahih Bukhari">Sahih Bukhari</option>
          <option value="Sahih Muslim">Sahih Muslim</option>
          <option value="abu dawud">Abu Dawud</option>
          <option value="tirmidhi">Tirmidhi</option>
        </select>
        <h2>Book: {book}</h2>
      </div>
      <div>
        <label htmlFor="pickup">
          <input
            type="radio"
            value="Pick up"
            checked={shipping === "Pick up"}
            onChange={handleShippingChange}
          />
          Pick up
        </label>
        <label htmlFor="delivery">
          <input
            type="radio"
            value="delivery"
            checked={shipping === "delivery"}
            onChange={handleShippingChange}
          />
          Delivery
        </label>
       </div>
      <p>Shipping:{shipping}</p>
    </div>
  );
}

export default App;
