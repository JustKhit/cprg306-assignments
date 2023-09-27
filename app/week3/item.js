const Item = ({ name, quantity, category }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md w-64 mb-4">
      <span className="text-gray-700 font-medium">
        Name: <span className="font-normal">{name}</span>
      </span>
      <span className="text-gray-700 font-medium block">
        Quantity: <span className="font-normal">{quantity}</span>
      </span>
      <span className="text-gray-700 font-medium block">
        Category: <span className="font-normal">{category}</span>
      </span>
    </div>
  );
};

export default Item;
