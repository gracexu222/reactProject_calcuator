import React, { useState } from "react";

function SelectAllForm() {
  const items = ["Item1", "Item2", "Item3"];

  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedItems(items);
    } else {
      setSelectedItems([]);
    }
  };

  const handleItemChange = (event, item) => {
    if (event.target.checked) {
      setSelectedItems((prevSelected) => [...prevSelected, item]);
    } else {
      setSelectedItems((prevSelected) =>
        prevSelected.filter((i) => i !== item)
      );
    }
  };

  // check if all items are selected
  const areAllItemsSelected =
    items.length > 0 && selectedItems.length === items.length;
  return (
    <div>
      <h2>Select items</h2>
      <label>
        <input
          type="checkbox"
          checked={areAllItemsSelected}
          onChange={handleSelectAll}
        />
        Select All
      </label>
      <hr />
      {items.map((item, index) => (
        <label key={index}>
          <input
            type="checkbox"
            checked={selectedItems.includes(item)}
            onChange={(e) => handleItemChange(e, item)}
          />
          {item}
        </label>
      ))}
    </div>
  );
}

export default SelectAllForm;
