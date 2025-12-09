import { useAppSelector } from "../redux/hooks";

export default function CartButton() {
  const items = useAppSelector((state) => state.cart.items);
  const totalQty = items.reduce((acc, item) => acc + item.qty, 0);

  return (
    <button className="bg-blue-600 px-4 py-2 rounded text-white">
      Cart ({totalQty})
    </button>
  );
}
