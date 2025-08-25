"use client";

import React, { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubscribing(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await res.json();

      alert(result.message || result.error);

      if (result.success) {
        setEmail("");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubscribing(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center gap-[10px]"
    >
      <h4 className="text-[#008080] font-bold">Suscribe to our newsletter</h4>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        className="input sm:w-[250px] w-full h-[50px] rounded-[10px] placeholder:text-[13px] outline-0 caret-[#edeef2] text-[#edeef2] p-[5px] box-border"
      />
      <button
        type="submit"
        disabled={subscribing}
        className={`w-[150px] rounded-[15px] p-[8px] text-[14px] text-white transition
    ${
      subscribing
        ? "bg-[#00808050] cursor-not-allowed opacity-60"
        : "bg-[#00808090] hover:bg-[#008080] cursor-pointer"
    }
  `}
      >
        {subscribing ? "Subscribing..." : "Subscribe"}
      </button>
    </form>
  );
};

export default NewsLetter;
