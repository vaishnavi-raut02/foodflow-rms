import { useState } from "react";
import { useCart } from "../context/CartContext";

type FoodItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  type: string;
};

type Props = {
  food: FoodItem;
  onClose: () => void;
};

export default function FoodModal({
  food,
  onClose,
}: Props) {

  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  return (
    <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex items-center justify-center p-6">

      {/* MODAL */}
      <div className="relative bg-slate-900 border border-white/10 rounded-[40px] overflow-hidden max-w-5xl w-full grid lg:grid-cols-2 shadow-[0_0_80px_rgba(255,115,0,0.15)] animate-in fade-in zoom-in duration-300">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-50 w-12 h-12 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 hover:bg-orange-500 transition text-xl"
        >
          ✕
        </button>

        {/* IMAGE SECTION */}
        <div className="relative h-[350px] lg:h-full overflow-hidden">

          <img
            src={food.image}
            alt={food.name}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          {/* PRICE */}
          <div className="absolute top-6 left-6 px-5 py-3 rounded-full bg-orange-500 text-white font-bold shadow-xl shadow-orange-500/30">
            ₹{food.price}
          </div>

          {/* TYPE */}
          <div
            className={`absolute bottom-6 left-6 px-4 py-2 rounded-full text-sm font-semibold ${
              food.type === "Veg"
                ? "bg-green-500/20 text-green-400"
                : "bg-red-500/20 text-red-400"
            }`}
          >
            {food.type}
          </div>

        </div>

        {/* CONTENT */}
        <div className="p-10 flex flex-col justify-between">

          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 mb-6">
              ⭐ Bestseller Item
            </div>

            <h2 className="text-5xl font-black leading-tight">
              {food.name}
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mt-6">
              {food.description}
            </p>

            {/* EXTRA INFO */}
            <div className="grid grid-cols-2 gap-4 mt-10">

              <div className="bg-white/5 border border-white/10 rounded-3xl p-5">
                <p className="text-gray-400 text-sm">
                  Delivery Time
                </p>

                <h4 className="text-2xl font-bold mt-2">
                  25 mins
                </h4>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-5">
                <p className="text-gray-400 text-sm">
                  Ratings
                </p>

                <h4 className="text-2xl font-bold mt-2">
                  4.9 ★
                </h4>
              </div>

            </div>

          </div>

          {/* BOTTOM ACTIONS */}
          <div className="mt-12">

            {/* QUANTITY */}
            <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-3xl p-4">

              <span className="text-lg font-semibold">
                Quantity
              </span>

              <div className="flex items-center gap-4">

                <button
                  onClick={() =>
                    setQuantity((prev) =>
                      prev > 1 ? prev - 1 : 1
                    )
                  }
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition text-2xl"
                >
                  -
                </button>

                <span className="text-2xl font-bold w-10 text-center">
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity((prev) => prev + 1)
                  }
                  className="w-12 h-12 rounded-2xl bg-orange-500 hover:bg-orange-600 transition text-2xl"
                >
                  +
                </button>

              </div>

            </div>

            {/* ADD BUTTON */}
            <button className="w-full mt-6 py-5 rounded-3xl bg-orange-500 hover:bg-orange-600 transition text-xl font-bold shadow-2xl shadow-orange-500/30">

              Add {quantity} Item
              {quantity > 1 ? "s" : ""}

              {" "}• ₹{food.price * quantity}

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}