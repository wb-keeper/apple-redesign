import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { selectBasketItems } from "@/redux/basketSlice";

function signIn() {}

const Header = () => {
  const session = false;
  const items = useSelector(selectBasketItems);
  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#e7ecee] p-4">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100">
            <Image src="/logo.png" alt="" fill objectFill="contain" />
          </div>
        </Link>
      </div>
      <div className="hidden  flex-1 items-center justify-center space-x-8 md:flex">
        <a className="headerLink">Product</a>
        <a className="headerLink">Explore</a>
        <a className="headerLink">Support</a>
        <a className="headerLink">Business</a>
      </div>
      <div className="flex items-center gap-x-4 md:w-1/5">
        <MagnifyingGlassIcon className="headerIcon" />
        <Link href="/checkout">
          <div className="relative cursor-pointer">
            {items.length > 0 && (
              <span
                className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500
          to-violet-500 text-[10px] text-white"
              >
                {items.length}
              </span>
            )}
            <ShoppingBagIcon className="headerIcon" />
          </div>
        </Link>
        {session ? (
          <div className="w-[32px] h-[32px] relative">
            <Image
              src="https://images.unsplash.com/photo-1516726817505-f5ed825624d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="avatar"
              className="cursor-pointer rounded-full w-full h-full"
              fill
            />
          </div>
        ) : (
          <UserIcon className="headerIcon" onClick={() => signIn()} />
        )}
      </div>
    </header>
  );
};

export default Header;
