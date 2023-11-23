const FilterBtn = ({ filterCategory, handleFilter }) => {
  return (
    <>
      <div className="flex items-center justify-center gap-5 py-5">
        {filterCategory.map((cat, i) => (
          <button
            onClick={() => handleFilter(cat)}
            key={i}
            className="border w-28 py-1 rounded-full capitalize hover:bg-slate-500 hover:text-white"
          >
            {cat}
          </button>
        ))}
      </div>
    </>
  );
};

export default FilterBtn;
