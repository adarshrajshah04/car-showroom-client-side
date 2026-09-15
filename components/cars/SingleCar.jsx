"use client";
import React, { useEffect, useState } from "react";
import axiosNew from "@/utils/axiosNew";
import Image from "next/image";
import Link from "next/link";

const SingleCar = ({ id }) => {
  const [singleData, setSingleData] = useState({});
  useEffect(() => {
    axiosNew.get(`/product/${id}`).then((res) => {
      setSingleData(res.data);
    });
  }, [id]);

  return (
    <div className="h-fit w-full flex justify-between items-center ">
      <div className="w-[65%]">
        <div className="relative  h-[60vh] bg-red-100 rounded-2xl overflow-hidden">
          <Image
            alt={singleData.title}
            src={singleData.thumbnail}
            fill
            className="object-cover object-center"
          ></Image>
        </div>
      </div>
      <div className="w-[33%] ml-15">
        <h3 className="text-5xl font-bold mb-5">{singleData.title}</h3>
        <h3 className="text-4xl">₹ {singleData.price}</h3>
        <div className="flex items-center mt-5 gap-1">
          <p className="text-mid-text ">Rating:</p>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={
                star <= Math.round(singleData.rating)
                  ? "text-yellow-400"
                  : "text-gray-500"
              }
            >
              ★
            </span>
          ))}
        </div>
        <p className="text-mid-text/60 mt-7">{singleData.description}</p>

        <div className="rounded-2xl border border-border/40 hover:border-border/80  bg-card p-7 mt-10">
          <h3 className="text-2xl font-bold text-light-text">
            Book a private viewing
          </h3>

          <p className="mt-3 text-dark-text">
             Experience the <span className="text-light-text">{singleData.title}</span>{" "}
    in person at our showroom.
          </p>

          <Link href={`/collection/${id}/private-view-form`} className="inline-block mt-6 rounded-full bg-light-text px-6 py-3 text-primary transition hover:scale-105">
            Book a viewing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCar;
