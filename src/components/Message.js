"use client";

export default function Message({
  role,
  content,
}) {
  const isUser = role === "user";

  return (
    <div className="mb-6 flex w-full gap-4">

      <div className="shrink-0">

        {isUser ? (

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold">
            M
          </div>

        ) : (

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
            ✦
          </div>

        )}

      </div>

      <div className="min-w-0 flex-1 pt-1">

        <div className="mb-1 text-sm font-semibold">
          {isUser ? "You" : "GPT"}
        </div>

        <div className="whitespace-pre-wrap text-[15px] leading-7 text-gray-200">
          {content}
        </div>

      </div>

    </div>
  );
}