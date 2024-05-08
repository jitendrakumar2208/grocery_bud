import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import "./AddGrocery.css";
import GroceryData from "./GroceryData";

function AddGrocery() {
  const [inputdata, setInputData] = useState("");
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("grocery-list") || [])
  );
  const updateLocalStorage = (arr) => {
    localStorage.setItem("grocery-list", JSON.stringify(arr));
  };
  const handleAdd = () => {
    if (inputdata.trim() == "") {
      toast.error("Please insert grocery item", {
        position: "top-center",
      });
      return;
    }
    let newArr = [...data, { id: uuidv4(), item: inputdata, isChecked: false }];
    setData(newArr);
    setInputData("");
    updateLocalStorage(newArr);
    toast.success("You added a grocery!!!");
  };

  const deleteListItem = (id) => {
    let newarr = data.filter((ele) => ele.id !== id);
    setData(newarr);
    updateLocalStorage(newarr);
    toast.success("Deleted list item");
  };

  const checkOurItem = (id) => {
    const newFilteredArr = data.map((item) => {
      if (item.id === id) {
        item.isChecked = !item.isChecked;
      }
      return item;
    });

    setData(newFilteredArr);
    updateLocalStorage(newFilteredArr);
  };

  return (
    <div className="container">
      <div>
        <p>
          <span className="title">Grocery Bud</span>
        </p>
        <input
          type="text"
          value={inputdata}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      {data.map((element, index) => {
        return (
          <GroceryData
            key={index}
            id={element.id}
            item={element.item}
            isChecked={element.isChecked}
            checkedFunc={checkOurItem}
            delFunc={deleteListItem}
          />
        );
      })}
    </div>
  );
}

export default AddGrocery;
