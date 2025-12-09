import { useAppDispatch } from "../redux/hooks";
import { addToCart, removeFromCart } from "../redux/slice/cartSlice";

export default function Home() {
  const dispatch = useAppDispatch();

  const sampleProduct = {
    id: 1,
    name: "XYZ Laptop",
    price: 59999,
    qty: 1,
  };

  return (
    <div className="p-6 h-full">
      <h2 className="text-2xl mb-4">Products</h2>

      <div className="border p-4 rounded-lg shadow w-60">
        <h3 className="text-xl font-semibold">{sampleProduct.name}</h3>
        <p className="text-gray-600">₹ {sampleProduct.price}</p>

        <div className="flex gap-2 mt-4">
          <button
            onClick={() => dispatch(addToCart(sampleProduct))}
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            Add
          </button>

          <button
            onClick={() => dispatch(removeFromCart(sampleProduct.id))}
            className="bg-red-600 text-white px-3 py-1 rounded"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
