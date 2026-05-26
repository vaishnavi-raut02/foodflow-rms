export default function AddressForm({ address, setAddress }: any) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-3">Delivery Details</h2>

      <input
        className="w-full border p-2 mb-2 rounded"
        placeholder="Full Name"
        value={address.name}
        onChange={(e) =>
          setAddress({ ...address, name: e.target.value })
        }
      />

      <input
        className="w-full border p-2 mb-2 rounded"
        placeholder="Phone Number"
        value={address.phone}
        onChange={(e) =>
          setAddress({ ...address, phone: e.target.value })
        }
      />

      <textarea
        className="w-full border p-2 rounded"
        placeholder="Full Address"
        value={address.addressLine}
        onChange={(e) =>
          setAddress({ ...address, addressLine: e.target.value })
        }
      />
    </div>
  );
}