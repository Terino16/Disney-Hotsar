/* eslint-disable @next/next/no-img-element */
import logo from "../app/favicon.ico"
import React from "react";
import {
  ChartPieIcon,
  FilmIcon,
  FireIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  TvIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "../app/api/auth/[...nextauth]/options";

const Navbar = async () => {
  const session = await getServerSession(options);
  return (
    <div className="h-screen fixed max-w-[15%] bg-darkblue flex flex-col items-center justify-between p-5 z-[10] ">
      <div>
        <Link href="/" >
        <img
          src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1656431456/web-images/logo-d-plus.svg"
          className="w-[50px] text-white"
          alt="Icon"
        />
        </Link>
      </div>
      <div className="flex flex-col items-center justify-between min-h-[400px] ">
        {session ? (
          <Link href="/api/auth/signout?callbackUrl=/">
            <div className="flex items-center justify-between  relative group">
              <img
                src={session.user.image}
                height={20}
                width={23}
                className="text-gray-300 hover:text-white cursor-pointer rounded-full"
                alt="Image"
              />
              <p className="absolute left-[50px] p-1 bg-transparent text-white border-none font-semibold text-xl opacity-0 group-hover:opacity-100">
                Logout
              </p>
            </div>
          </Link>
        ) : (
          <Link href="/api/auth/signin">
            <div className="flex items-center justify-between  relative group">
              <UserCircleIcon
                width={23}
                className="text-gray-300 hover:text-white cursor-pointer"
              />
              <p className="absolute left-[50px] p-1 bg-transparent text-white border-none font-semibold text-xl opacity-0 group-hover:opacity-100">
                Login
              </p>
            </div>
          </Link>
        )}

        <Link href="/Search">
          <div className="flex items-center justify-between  relative group">
            <MagnifyingGlassIcon
              width={23}
              className="text-gray-300 hover:text-white cursor-pointer"
            />
            <p className="absolute left-[50px] p-1 bg-transparent text-white border-none font-semibold text-xl opacity-0 group-hover:opacity-100">
              Search
            </p>
          </div>
        </Link>


        <Link href="/">
        <div className="flex items-center justify-between  relative group">
          <HomeIcon width={23} className="text-gray-300 hover:text-white" />
          <p className="absolute  left-[50px] p-1 bg-transparent text-white border-none font-semibold text-xl  opacity-0 group-hover:opacity-100">
            Home
          </p>
        </div>
        </Link>

        <Link href="/Television">
        <div className="flex items-center justify-between  relative group">
          <TvIcon width={23} className="text-gray-300 hover:text-white" />
          <p className="absolute  left-[50px] p-1 bg-transparent text-white border-none font-semibold text-xl opacity-0 group-hover:opacity-100">
            Television
          </p>
          </div>
        </Link>

        <Link href="/Movies">
        <div className="flex items-center justify-between  relative group">
          <FilmIcon width={23} className="text-gray-300 hover:text-white" />
          <p className="absolute  left-[50px] p-1 bg-transparent text-white border-none font-semibold text-xl opacity-0 group-hover:opacity-100">
            Movies
          </p>
          </div>
        </Link>

        <Link href="/Trending">
        <div className="flex items-center justify-between  relative group">
          <FireIcon width={23} className="text-gray-300 hover:text-white" />
          <p className="absolute  left-[50px] p-1 bg-transparent text-white border-none font-semibold text-xl opacity-0 group-hover:opacity-100 ">
            Trending
          </p>
          </div>
        </Link>
      </div>

      <div>
        <Link href="">
          <div className="relative group">
            <ChartPieIcon
              width={23}
              className="text-gray-300 hover:text-white cursor-pointer"
            />
            <p className="absolute  top-[-10px] left-[50px] p-1 bg-transparent text-white border-none font-semibold text-xl opacity-0 group-hover:opacity-100">
              Settings
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;


