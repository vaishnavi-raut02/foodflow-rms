type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const cartItems = [
  {
    id: 1,
    name: "Cheese Burger",
    price: 249,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    name: "Italian Pizza",
    price: 399,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function CartDrawer({
  isOpen,
  onClose,
}: CartDrawerProps) {

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const deliveryFee = 49;
  const taxes = 38;

  const total =
    subtotal + deliveryFee + taxes;

  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] transition duration-300 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* DRAWER */}
      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-[420px] bg-slate-950 border-l border-white/10 z-[100] transition-transform duration-500 shadow-[0_0_60px_rgba(255,115,0,0.15)] flex flex-col ${
          isOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        {/* HEADER */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">

          <div>
            <h2 className="text-3xl font-black text-white">
              Your Cart
            </h2>

            <p className="text-gray-400 mt-1">
              {cartItems.length} Items Added
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 hover:bg-orange-500 transition text-white text-xl"
          >
            ✕
          </button>

        </div>

        {/* ITEMS */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5">

          {cartItems.map((item) => (

            <div
              key={item.id}
              className="bg-white/5 border border-white/10 rounded-3xl p-4 flex gap-4"
            >

              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 rounded-2xl object-cover"
              />

              {/* INFO */}
              <div className="flex-1">

                <div className="flex items-start justify-between">

                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {item.name}
                    </h3>

                    <p className="text-orange-400 font-semibold mt-1">
                      ₹{item.price}
                    </p>
                  </div>

                  <button className="text-gray-400 hover:text-red-400 transition">
                    🗑
                  </button>

                </div>

                {/* QUANTITY */}
                <div className="flex items-center gap-3 mt-4">

                  <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition text-xl text-white">
                    -
                  </button>

                  <span className="text-lg font-bold text-white w-6 text-center">
                    {item.quantity}
                  </span>

                  <button className="w-10 h-10 rounded-xl bg-orange-500 hover:bg-orange-600 transition text-xl text-white">
                    +
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* BILLING */}
        <div className="border-t border-white/10 p-6">

          <div className="space-y-4">

            <div className="flex items-center justify-between text-gray-400">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex items-center justify-between text-gray-400">
              <span>Delivery Fee</span>
              <span>₹{deliveryFee}</span>
            </div>

            <div className="flex items-center justify-between text-gray-400">
              <span>Taxes & Charges</span>
              <span>₹{taxes}</span>
            </div>

            <div className="w-full h-px bg-white/10" />

            <div className="flex items-center justify-between text-2xl font-black text-white">
              <span>Total</span>
              <span className="text-orange-400">
                ₹{total}
              </span>
            </div>

          </div>

          {/* CHECKOUT BUTTON */}
          <button className="w-full mt-8 py-5 rounded-3xl bg-orange-500 hover:bg-orange-600 transition text-xl font-bold shadow-2xl shadow-orange-500/30">
            Proceed To Checkout →
          </button>

        </div>

      </div>
    </>
  );
}