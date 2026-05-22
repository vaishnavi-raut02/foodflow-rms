import {
  createContext,
  useContext,
  useState,
  
} from "react";
import type { ReactNode } from "react";

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

  removeItem: (id: number) => void;

  totalItems: number;

  totalPrice: number;
};

const CartContext =
  createContext<CartContextType | null>(null);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // ADD ITEM
  const addToCart = (
    item: Omit<CartItem, "quantity">
  ) => {

    setCartItems((prev) => {

      const existing = prev.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existing) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        );
      }

      return [
        ...prev,
        {
          ...item,
          quantity: 1,
        },
      ];
    });
  };

  // INCREASE
  const increaseQuantity = (id: number) => {

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // DECREASE
  const decreaseQuantity = (id: number) => {

    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // REMOVE
  const removeItem = (id: number) => {

    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  // TOTAL ITEMS
  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  // TOTAL PRICE
  const totalPrice = cartItems.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {

  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}