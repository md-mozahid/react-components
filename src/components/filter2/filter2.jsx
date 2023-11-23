import { useState } from "react";
import { subject } from "./data";
import Ui from "./ui";
import FilterBtn from "./filterBtn";

const Filter = () => {
  // tore data from data
  const [items, setItems] = useState(subject);
  // filter category
  const filterCategory = [...new Set(subject.map((cat) => cat.category))];

  // handleFilter
  const handleFilter = (currCat) => {
    const filterItem = subject.filter((item) => {
      return item.category === currCat;
    });
    setItems(filterItem);
  };

  return (
    <div className="max-w-md mx-auto py-5">
      <h1 className="text-2xl uppercase">Filtering</h1>
      <FilterBtn filterCategory={filterCategory} handleFilter={handleFilter} />
      <Ui items={items} />
    </div>
  );
};

export default Filter;
