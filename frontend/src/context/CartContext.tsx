import {
  createContext,
  useContext,
  useState,
} from "react";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

/* ---------------- TYPES ---------------- */

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];

  addToCart: (item: Omit<CartItem, "quantity">) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;

  totalItems: number;
  subtotal: number;

  proceedToCheckout: () => void;
};

/* ---------------- CONTEXT ---------------- */

const CartContext = createContext<CartContextType | null>(null);

/* ---------------- PROVIDER ---------------- */

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const navigate = useNavigate();

  /* ---------------- ADD TO CART ---------------- */
  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.id === item.id);

      if (existing) {
        return prev.map((p) =>
          p.id === item.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  };

  /* ---------------- INCREASE ---------------- */
  const increaseQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  /* ---------------- DECREASE ---------------- */
  const decreaseQuantity = (id: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  /* ---------------- REMOVE ---------------- */
  const removeFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  /* ---------------- CLEAR ---------------- */
  const clearCart = () => {
    setCartItems([]);
  };

  /* ---------------- TOTAL ITEMS ---------------- */
  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  /* ---------------- SUBTOTAL ---------------- */
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  /* ---------------- CHECKOUT NAVIGATION ---------------- */
  const proceedToCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty 🚫");
      return;
    }

    navigate("/checkout");
  };

  /* ---------------- PROVIDER ---------------- */
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        totalItems,
        subtotal,
        proceedToCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

/* ---------------- HOOK ---------------- */

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}