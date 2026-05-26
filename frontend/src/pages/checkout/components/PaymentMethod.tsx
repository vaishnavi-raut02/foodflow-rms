export default function PaymentMethod({
  paymentMethod,
  setPaymentMethod,
}: any) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-3">Payment Method</h2>

      <label className="block mb-2">
        <input
          type="radio"
          checked={paymentMethod === "COD"}
          onChange={() => setPaymentMethod("COD")}
        />
        <span className="ml-2">Cash on Delivery</span>
      </label>

      <label className="block">
        <input
          type="radio"
          checked={paymentMethod === "ONLINE"}
          onChange={() => setPaymentMethod("ONLINE")}
        />
        <span className="ml-2">Online Payment</span>
      </label>
    </div>
  );
}