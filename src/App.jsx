import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import Header from "./components/Header";
import Card from "./components/Card";
import Button from "./components/ui/Button";
import { useState } from "react";

const App = () => {
  dayjs.extend(weekOfYear);
  const [mealData, setMealData] = useState({});

  const currentWeek = dayjs().week();
  const startOfWeek = dayjs().startOf("week");
  const endOfWeek = dayjs().endOf("week");
  // const id = crypto.randomUUID().split("-")[0];
  const weekDates = Array.from({ length: 7 }, (_, i) => ({
    // id,
    id: crypto.randomUUID().split("-")[0],
    fullDate: startOfWeek.add(i, "day").format("YYYY-MM-DD"),
    key: startOfWeek.add(i, "day").format("YYYYMMDD"),
    day: startOfWeek.add(i, "day").format("ddd"),
    month: startOfWeek.add(i, "day").format("MMM"),
    date: startOfWeek.add(i, "day").format("DD")
    // data: {
    //   breakfast: { title: "Breakfast", description: "Breakfast" },
    //   lunch: { title: "Lunch", description: "Lunch" },
    //   dinner: { title: "Dinner", description: "Dinner" }
    // }
  }));

  const isActive = (date) => {
    return date === dayjs().format("YYYY-MM-DD");
  };

  const onSave = (payload = {}) => {
    setMealData((prev) => {
      return {
        ...prev,
        [payload.date]: {
          [payload.meal]: [
            ...(prev?.[payload.date]?.[payload.meal] || []),
            {
              id: crypto.randomUUID().split("-")[0],
              title: payload.title,
              description: payload.description
            }
          ]
        }
      };
    });
  };
  // console.log("🚀 ~ App ~ onSave", mealData);

  return (
    <div>
      <Header />
      <div className="flex items-center justify-between max-w-7xl mx-auto py-8 px-4">
        <div>
          <div className="text-2xl font-bold text-foreground">
            Week {currentWeek} : {startOfWeek.format("MMM DD")} -{" "}
            {endOfWeek.format("MMM DD")}
          </div>
          <div className="text-gray-500">Plan your weekly meals</div>
        </div>
        <Button type="outline">Shipping List</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-7 gap-4 max-w-7xl mx-auto mb-5 px-4">
        {weekDates.map((item) => (
          <Card
            key={item.date}
            item={item}
            data={mealData}
            isToday={isActive(item.fullDate)}
            onSave={onSave}
          >
            asd{item}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default App;
