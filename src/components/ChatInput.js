"use client";

import { useState } from "react";

export default function ChatInput({
  onSend,
  loading,
}) {
  const [message, setMessage] = useState("");

  const submitMessage = () => {
    if (!message.trim() || loading) return;

    onSend(message.trim());
    setMessage("");
  };

  const handleKeyDown = (event) => {
    if (
      event.key === "Enter" &&
      !event.shiftKey
    ) {
      event.preventDefault();
      submitMessage();
    }
  };

  return (
    <div className="pointer-events-none absolute bottom-0 left-0 right-0">

      <div className="pointer-events-auto mx-auto w-full max-w-3xl px-4 pb-5">

        <div className="rounded-3xl border border-[#444] bg-[#2f2f2f] shadow-2xl">

          <div className="flex items-end gap-2 px-4 py-3">

            <button
              type="button"
              className="mb-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xl text-gray-300 transition hover:bg-[#424242]"
            >
              +
            </button>

            <textarea
              value={message}
              onChange={(event) =>
                setMessage(event.target.value)
              }
              onKeyDown={handleKeyDown}
              rows={1}
              disabled={loading}
              placeholder={
                loading
                  ? "GPT is thinking..."
                  : "Message GPT..."
              }
              className="max-h-40 min-h-[36px] flex-1 resize-none bg-transparent py-2 text-[15px] text-white outline-none placeholder:text-gray-500"
            />

            <button
              onClick={submitMessage}
              disabled={
                !message.trim() || loading
              }
              className={`mb-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg transition ${
                message.trim() && !loading
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-[#555] text-gray-400"
              }`}
            >
              ↑
            </button>

          </div>

          <p className="pb-2 text-center text-[11px] text-gray-500">
            GPT can make mistakes. Check important information.
          </p>

        </div>

      </div>

    </div>
  );
}