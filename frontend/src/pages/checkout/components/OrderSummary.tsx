export default function OrderSummary({
  items,
  subtotal,
  deliveryFee,
  total,
  onPlaceOrder,
}: any) {
  return (
    <div className="bg-white p-4 rounded-lg shadow sticky top-4">
      <h2 className="text-lg font-semibold mb-3">Order Summary</h2>

      <div className="space-y-2">
        {items.map((item: any) => (
          <div key={item.id} className="flex justify-between text-sm">
            <span>
              {item.name} × {item.quantity}
            </span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}
      </div>

      <hr className="my-3" />

      <div className="text-sm space-y-1">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Delivery</span>
          <span>₹{deliveryFee}</span>
        </div>

        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
      </div>

      <button
        onClick={onPlaceOrder}
        className="w-full mt-4 bg-green-600 text-white py-2 rounded"
      >
        Place Order
      </button>
    </div>
  );
}