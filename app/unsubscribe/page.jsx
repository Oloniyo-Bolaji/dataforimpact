"use client";

import { useState } from "react";

export default function UnsubscribePage() {
  const [status, setStatus] = useState("");

  const handleUnsubscribe = async () => {
    setStatus("loading");
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (!token) {
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      {status === "idle" && (
        <>
          <p className="mb-4">Are you sure you want to unsubscribe?</p>
          <button
            onClick={handleUnsubscribe}
            className="px-6 py-2 bg-[#00274d60] text-white rounded-lg hover:bg-[#00274d] transition"
          >
            Unsubscribe
          </button>
        </>
      )}

      {status === "loading" && <p>Processing your request...</p>}

      {status === "success" && (
        <p className="text-green-600 font-medium">
          ✅ You have been unsubscribed successfully.
        </p>
      )}

      {status === "error" && (
        <p className="text-red-600 font-medium">
          ❌ Invalid or expired unsubscribe link.
        </p>
      )}
    </div>
  );
}
