const Ui = ({ items }) => {
  return (
    <>
      <div className="my-5 border py-2">
        {items.map((item, i) => (
          <div
            className="flex flex-row items-center justify-between gap-6"
            key={i}
          >
            <h2>Name: {item.name} </h2>
            <h2>Category: {item.category} </h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Ui;
