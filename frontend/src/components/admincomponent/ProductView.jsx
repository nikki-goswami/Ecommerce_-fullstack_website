'use client'

import React, { useState } from "react";

export default function ProductView({ product,path }) {
  const [open, setOpen] = useState(false);

  if (!product) return null;

  return (
    <>
      {/* View Button */}
      <button
        onClick={() => setOpen(true)}
        className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm"
      >
        Viewproduct
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          {/* Modal */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-[90%] md:w-[450px] rounded-xl p-5 relative"
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 text-xl"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={path}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg"
            />

            {/* Name */}
            <h2 className="text-xl font-semibold mt-4">
              {product.name}
            </h2>

            {/* Description */}
            <p className="text-sm text-gray-500 mt-1">
              {product.description}
            </p>

            {/* Price */}
            <div className="flex items-center gap-3 mt-3">
              <span className="text-lg font-bold text-green-600">
                ₹{product.final_price}
              </span>
              <span className="line-through text-gray-400">
                ₹{product.original_price}
              </span>
            </div>

            {/* Colors */}
            {product.color_id?.length > 0 && (
              <div className="flex gap-2 mt-4">
                {product.color_id.map((color) => (
                  <div
                    key={color._id}
                    title={color.name}
                    className="w-6 h-6 rounded-full border"
                    style={{ backgroundColor: color.code }}
                  ></div>
                ))}
              </div>
            )}

            {/* Category */}
            <p className="text-sm mt-3 text-gray-600">
              Category:{" "}
              <span className="font-medium">
                {product.category_id?.name}
              </span>
            </p>

            {/* Brand */}
            <p className="text-sm text-gray-600">
              Brand:{" "}
              <span className="font-medium">
                {product.brand_id?.name}
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
