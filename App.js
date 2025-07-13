import React from "react";

export default function OrganicStoreUI() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start py-8">
      <div className="w-[1200px] bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-4 border-b">
          <div className="text-2xl font-serif font-bold text-green-900">widgo</div>
          <div className="text-3xl font-serif font-semibold text-green-800">Organic</div>
          <div className="flex gap-2">
            <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition">Order Now</button>
            <button className="p-2 rounded hover:bg-gray-100">
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {/* icon */}
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path stroke="currentColor" strokeWidth="2" d="M8 12l2 2 4-4" />
              </svg>
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
            alt="Organic Foods"
            className="w-full h-56 object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 to-black/10 flex flex-col justify-center items-center">
            <div className="text-white text-4xl font-serif font-semibold drop-shadow-lg">Organic Foods</div>
            <div className="mt-4 flex gap-4">
              <button className="bg-white/80 text-green-900 px-4 py-2 rounded shadow hover:bg-white">Order Now</button>
              <button className="bg-green-700 text-white px-4 py-2 rounded shadow hover:bg-green-800">Order Now</button>
            </div>
          </div>
          {/* Shop Local Side Card */}
          <div className="absolute top-6 right-10 bg-white/95 shadow-lg rounded-xl p-4 w-72">
            <div className="font-semibold text-gray-800 mb-2">Shop Local</div>
            <div className="text-gray-500 text-sm mb-3">Organic Food Producers. Discover incredible stores near you and buy awesome products directly from reliable organic shops.</div>
            <div className="flex gap-2">
              <button className="bg-green-700 text-white px-3 py-1 rounded hover:bg-green-800 text-sm">Add to Cart</button>
              <button className="border px-3 py-1 rounded text-sm text-gray-700 hover:bg-gray-100">Save for Later</button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-8 px-8 pt-8 pb-4 text-lg font-semibold text-gray-700">
          <div className="cursor-pointer hover:text-green-700">Fruits & Vegetables</div>
          <div className="cursor-pointer hover:text-green-700">Dairy & Eggs</div>
          <div className="cursor-pointer hover:text-green-700">Grans & Legumes</div>
        </div>

        {/* Product Grid */}
        <div className="px-8 pb-8 grid grid-cols-3 gap-8">
          {/* Product cards */}
          {[
            {
              img: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
              title: "Crutta Tid Guqtals",
              price: "$560 / ct",
              tag: "Latin & Districts",
              btn: "Shop Now",
              rating: 4.5,
            },
            {
              img: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
              title: "Flier Foo Exey",
              price: "$320 / ct",
              tag: "Dairy & Eggs",
              btn: "See now",
              rating: 4.7,
            },
            {
              img: "https://images.unsplash.com/photo-1523987355523-c7b5b0723cbe?auto=format&fit=crop&w=400&q=80",
              title: "Organic Pamfey",
              price: "$280 / ct",
              tag: "New Arrival",
              btn: "Shop Now",
              rating: 5,
            },
            {
              img: "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=400&q=80",
              title: "Soret Cün Ülge",
              price: "$180 / ct",
              tag: "Producers",
              btn: "See now",
              rating: 4.3,
            },
          ].map((product, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-4 flex flex-col">
              <img src={product.img} alt={product.title} className="h-32 w-full object-cover rounded-lg mb-3" />
              <div className="font-semibold text-gray-800">{product.title}</div>
              <div className="text-sm text-gray-500 mb-1">{product.tag}</div>
              <div className="font-bold text-green-700 mb-2">{product.price}</div>
              <div className="flex items-center gap-1 text-yellow-500 text-sm mb-2">
                {"★".repeat(Math.round(product.rating))}{"☆".repeat(5 - Math.round(product.rating))}
              </div>
              <button className="mt-auto bg-green-700 text-white px-3 py-1 rounded hover:bg-green-800 text-sm">{product.btn}</button>
            </div>
          ))}
        </div>

        {/* Shop Local & Checkout */}
        <div className="px-8 pb-8 flex gap-8">
          {/* Shop Local */}
          <div className="flex-1 grid grid-cols-3 gap-4">
            {["Avocado Oil", "Organic Coconut", "Berry Jam"].map((name, i) => (
              <div key={i} className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
                <div className="h-16 w-16 bg-gray-100 rounded-full mb-2"></div>
                <div className="font-semibold text-sm text-gray-800 mb-1">{name}</div>
                <button className="bg-green-700 text-white px-3 py-1 rounded hover:bg-green-800 text-xs">Shop Now</button>
              </div>
            ))}
          </div>
          {/* Checkout */}
          <div className="w-64 bg-white rounded-xl shadow p-4">
            <div className="font-semibold mb-2">Checkout</div>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>Easy Returns</li>
              <li>Secure Checkout</li>
              <li>Direct Producer</li>
              <li>Express Delivery</li>
              <li>Authentic Products</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}