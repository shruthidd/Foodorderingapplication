import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { UseDispatch, useDispatch } from "react-redux";
const ItemList = ({ items }) => {
  //  console.log(items)
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <>
      <div>
        {items.map((item) => (
          <div

          data-testid = "fooditems"
            key={item.card.info.id}
            className="m-2 p-2  border-gray-200 border-b-2 text-left flex justify-between  "
          >
            <div className="w-9/12  ">
              <div className="py-2 ">
                <span>{item.card.info.name}</span>
                <span>
                  {" "}
                  - ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-3">
              <div className="absolute">
                <button
                  className=" mx-16 bg-black text-white shadow-lg  m-auto"
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
              <img
                src={CDN_URL + item.card.info.imageId}
                alt=""
                className="w-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default ItemList;
