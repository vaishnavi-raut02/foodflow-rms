import { useCart } from "../context/CartContext";

type Props = {
  onClick: () => void;
};

export default function GlobalCartButton({
  onClick,
}: Props) {

  const {
    totalItems,
    totalPrice,
  } = useCart();

  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">

      <button
        onClick={onClick}
        className="bg-orange-500 hover:bg-orange-600 transition shadow-2xl shadow-orange-500/30 rounded-3xl px-6 py-4 flex items-center gap-4"
      >

        <div className="text-left">

          <p className="text-sm text-white/80">
            {totalItems} Items
          </p>

          <h4 className="font-bold text-lg">
            ₹{totalPrice}
          </h4>

        </div>

        <div className="w-px h-10 bg-white/20" />

        <div className="font-semibold">
          View Cart →
        </div>

      </button>

    </div>
  );
}