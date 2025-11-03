import Button from "./ui/Button";
import { FaPlus, FaRegTrashAlt, FaPencilAlt } from "react-icons/fa";
import DialogModal from "./ui/DialogModal";
import { useState } from "react";

const Card = ({ item, isToday, onSave, data }) => {
  const [title, setTitle] = useState("");
  const [showAddButton, setShowAddButton] = useState(true);
  const [description, setDescription] = useState("");
  const mealName = [
    { id: "breakfast", title: "Breakfast" },
    { id: "lunch", title: "Lunch" },
    { id: "dinner", title: "Dinner" }
  ];

  function handleSave(type) {
    onSave({ title, description, date: item.key, meal: type });
    setTitle("");
    setDescription("");
  }

  return (
    <div
      className={`rounded-lg ${
        isToday ? "border-2 border-green-500" : "border border-gray-300"
      }`}
    >
      <div
        className={`text-center p-2 ${
          isToday
            ? "bg-green-500 text-white rounded-t-sm"
            : "bg-green-50 rounded-t-lg"
        } `}
        onClick={() => setShowAddButton((prev) => !prev)}
      >
        <div>{item.day}</div>
        <div className="text-2xl font-semibold">{item.date}</div>
      </div>
      <div className="p-4 grid gap-5">
        {mealName.map((meal) => (
          <div key={meal.id} className="grid gap-2">
            <div className="uppercase text-xs font-bold text-gray-500">
              {meal.title}
            </div>
            {data?.[item.key]?.[meal.id]?.length && (
              <div className="grid gap-1">
                {data?.[item.key]?.[meal.id].map((m, i) => (
                  <div className="shadow p-1 rounded-sm grid gap-1 group">
                    <div key={meal + m.title + i} className="flex">
                      {i + 1}.
                      <div className="ml-1 break-all">
                        <div>{m.title}</div>
                        <div className="text-sm text-gray-500">
                          {m.description}
                        </div>
                      </div>
                    </div>
                    <div className="justify-center hidden group-hover:flex gap-2">
                      <Button type="icon">
                        <FaPencilAlt className="size-3" />
                      </Button>
                      <Button type="icon">
                        <FaRegTrashAlt className="size-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {showAddButton && (
              <DialogModal
                title={`Add ${meal}`}
                description={`Planning for ${item.day}, ${item.month} ${item.date}`}
                onSave={() => handleSave(meal.id)}
                button={
                  <Button type="plain">
                    <FaPlus />
                    Add
                  </Button>
                }
              >
                <div className="grid gap-3 py-5">
                  <div>
                    <label htmlFor="meal-name">Meal Name</label>
                    <input
                      id="meal-name"
                      type="text"
                      placeholder="e.g., Scrambled eggs with toast"
                      value={title}
                      required
                      onInput={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="description">Description (optional)</label>
                    <textarea
                      id="description"
                      placeholder="Add notes, ingredients, or instructions"
                      value={description}
                      onInput={(e) => setDescription(e.target.value)}
                    />
                  </div>
                </div>
              </DialogModal>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
