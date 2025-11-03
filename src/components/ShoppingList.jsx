import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import Button from "./ui/Button";
import DialogModal from "./ui/DialogModal";

const ShoppingList = () => {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("shoppingList");
    return saved ? JSON.parse(saved) : [];
  });

  const handleAddItem = () => {
    setItems((prev) => [...prev, ""]);
  };

  const handleDeleteItem = (index) => {
    setItems((prev) => {
      return prev.filter((_, i) => i !== index);
    });
    localStorage.setItem("shoppingList", JSON.stringify(items));
  };

  const handleChangeItem = (index, value) => {
    setItems((prev) => {
      const newItems = [...prev];
      newItems[index] = value;
      return newItems;
    });
    localStorage.setItem("shoppingList", JSON.stringify(items));
  };

  return (
    <>
      <DialogModal
        button={<Button type="outline">Shipping List</Button>}
        title="Shopping List"
      >
        <div className="grid gap-3 py-5">
          {/* <label htmlFor="meal-name">Meal Name</label> */}
          <div className="grid gap-3">
            <div className="max-h-[500px] overflow-auto grid gap-3">
              {items.map((item, index) => (
                <div className="flex gap-4">
                  <input
                    key={index}
                    id="meal-name"
                    type="text"
                    placeholder="e.g., Scrambled eggs with toast"
                    defaultValue={item}
                    required
                    onChange={(e) => handleChangeItem(index, e.target.value)}
                  />
                  <div onClick={() => handleDeleteItem(index)}>
                    <Button
                      type="icon"
                      className="size-10 rounded-xl hover:border-red-500"
                    >
                      <FaRegTrashAlt className="size-3 text-red-500" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div onClick={handleAddItem}>
              <Button>Add</Button>
            </div>
          </div>
        </div>
      </DialogModal>
    </>
  );
};

export default ShoppingList;
