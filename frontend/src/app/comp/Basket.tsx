"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaCartArrowDown } from "react-icons/fa";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { BiChevronLeft } from "react-icons/bi";
import { GoX } from "react-icons/go";
import { GrAdd } from "react-icons/gr";
import { FiMinus } from "react-icons/fi";
import { Drawer } from "@mui/material";
import { Food } from "@/lib/types";

export type FoodItem = {
  _id: string;
  name: string;
  price: number;
  image: string;
  categoryId: {
    _id: string;
    name: string;
    __v: number;
  };
  ingeredient: string;
  __v: number;
  quantity?: number;
};

export interface CartItem extends FoodItem {
  quantity: number;
}

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Basket = ({ food }: { food: Food }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const loadCartFromLocalStorage = () => {
      try {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
          const parsedCart: CartItem[] = JSON.parse(savedCart);
          const cartWithQuantity = parsedCart.map((item) => ({
            ...item,
            quantity: item.quantity || 1,
          }));
          setCartItems(cartWithQuantity);
        }
      } catch (error) {
        console.error("Error loading cart from localStorage:", error);
        localStorage.removeItem("cart");
      }
    };

    // Only run on client-side
    if (typeof window !== "undefined") {
      loadCartFromLocalStorage();
    }
  }, []);

  // Toggle drawer
  const toggleDrawer = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  // Add item to cart
  const addToCart = (item: FoodItem) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem._id === item._id
    );

    let updatedCart: CartItem[];
    if (existingItemIndex > -1) {
      // Item exists, increase quantity
      updatedCart = cartItems.map((cartItem, index) =>
        index === existingItemIndex
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    } else {
      // New item, add to cart
      updatedCart = [...cartItems, { ...item, quantity: 1 }];
    }

    // Update state and localStorage
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Remove item from cart
  const removeFromCart = (itemToRemove: CartItem) => {
    const updatedCart = cartItems.filter(
      (item) => item._id !== itemToRemove._id
    );

    // Update state and localStorage
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Update quantity of an item in cart
  const updateQuantity = (item: CartItem, newQuantity: number) => {
    const updatedCart = cartItems.map((cartItem) =>
      cartItem._id === item._id
        ? { ...cartItem, quantity: Math.max(newQuantity, 1) }
        : cartItem
    );

    // Update state and localStorage
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <button onClick={() => toggleDrawer(true)} className="flex gap-3">
        <div>
          <StyledBadge badgeContent={cartItems.length} color="secondary">
            <FaCartArrowDown className="w-7 h-7 hover:text-[#18BA51]" />
          </StyledBadge>
        </div>
        <div className="text-[18px] font-bold hover:text-[#18BA51]">Сагс</div>
      </button>
      <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
        <div className="w-[586px] h-screen flex flex-col">
          <div className="pl-6 flex flex-col gap-4">
            <div className="flex justify-between pl-6 pt-7 items-center">
              <button onClick={() => toggleDrawer(false)}>
                <BiChevronLeft style={{ color: "black", fontSize: "30px" }} />
              </button>
              <div className="text-[20px] font-bold">Таны сагс</div>
            </div>
            <div className="w-[538px] h-[auto] max-h-[400px] overflow-y-auto border border-y-black border-x-white">
              {cartItems.length === 0 ? (
                <p className="flex justify-center p-5">Сагс хоосон байна.</p>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="flex mb-4 w-[500px] gap-6 border-b p-4 relative"
                  >
                    <div>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-[250px] h-[140px] object-cover rounded-md"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="font-bold">{item.name}</span>
                      <span className="text-[12px]">{item.ingeredient}</span>
                      <span className="text-green-500">
                        ₮{(item.price * item.quantity).toLocaleString()}
                      </span>
                      <div className="flex gap-2 items-center">
                        <button
                          onClick={() =>
                            updateQuantity(item, item.quantity - 1)
                          }
                          className="w-[45px] h-[40px] rounded-xl bg-[#18BA51] flex justify-center items-center"
                        >
                          <FiMinus className="font-bold text-white w-5 h-5" />
                        </button>
                        <div className="font-bold">{item.quantity}</div>
                        <button
                          onClick={() =>
                            updateQuantity(item, item.quantity + 1)
                          }
                          className="w-[45px] h-[40px] rounded-xl bg-[#18BA51] flex justify-center items-center"
                        >
                          <GrAdd className="font-bold text-white w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item)}
                      className="absolute top-2 right-2"
                    >
                      <GoX style={{ color: "black", fontSize: "20px" }} />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="w-[586px] h-[172px] shadow-lg flex gap-5 justify-center items-center">
            <div>
              <p className="text-[18px] text-[#5E6166]">Нийт төлөх дүн</p>
              <p className="text-[18px] text-black">
                ₮{totalPrice.toLocaleString()}
              </p>
            </div>
            <Link
              className="w-[256px] h-[48px] bg-[#18BA51] flex justify-center items-center text-white font-normal rounded-md"
              href={"/zahialga"}
            >
              Захиалах
            </Link>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Basket;
