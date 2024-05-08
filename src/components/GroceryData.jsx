import React from "react";

const GroceryData = ({ id, item, isChecked, checkedFunc, delFunc }) => {
  const handleDel = () => {
    delFunc(id);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex" }}>
        <input
          type="checkbox"
          defaultChecked={isChecked}
          onClick={() => checkedFunc(id)}
        />
        <p style={{ textDecoration: isChecked ? "line-through" : "" }}>
          {item}
        </p>
      </div>
      <button onClick={handleDel}>Delete</button>
    </div>
  );
};

export default GroceryData;
