"use client";

export default function Sidebar({
  open,
  setOpen,
  newChat,
  chatHistory,
}) {
  if (!open) return null;

  return (
    <aside className="flex w-[260px] shrink-0 flex-col bg-[#171717]">

      <div className="flex h-[60px] items-center justify-between px-3">

        <button
          onClick={newChat}
          className="flex flex-1 items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-200 transition hover:bg-[#2a2a2a]"
        >
          <span className="text-lg">✦</span>
          <span className="font-semibold">GPT</span>
        </button>

        <button
          onClick={() => setOpen(false)}
          className="rounded-lg p-2 text-gray-400 transition hover:bg-[#2a2a2a] hover:text-white"
        >
          «
        </button>

      </div>

      <div className="px-2">

        <button
          onClick={newChat}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm text-gray-200 transition hover:bg-[#2a2a2a]"
        >
          <span className="text-xl">＋</span>
          <span>New chat</span>
        </button>

      </div>

      <div className="px-3 pt-2">

        <button
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-400 transition hover:bg-[#2a2a2a] hover:text-white"
        >
          <span>⌕</span>
          <span>Search chats</span>
        </button>

      </div>

      <div className="mt-5 flex-1 overflow-y-auto px-3">

        {chatHistory.length > 0 && (
          <>
            <p className="mb-2 px-2 text-xs font-semibold text-gray-500">
              Today
            </p>

            <div className="space-y-1">

              {chatHistory.map((chat) => (
                <button
                  key={chat.id}
                  className="w-full truncate rounded-lg px-3 py-2 text-left text-sm text-gray-300 transition hover:bg-[#2a2a2a]"
                >
                  {chat.title}
                </button>
              ))}

            </div>
          </>
        )}

      </div>

      <div className="border-t border-[#2f2f2f] p-3">

        <button className="flex w-full items-center gap-3 rounded-lg p-2 text-left text-sm text-gray-300 transition hover:bg-[#2a2a2a]">

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600 text-sm font-semibold">
            M
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate font-medium">
              My Account
            </p>

            <p className="text-xs text-gray-500">
              Free plan
            </p>
          </div>

          <span className="text-gray-500">
            ⋯
          </span>

        </button>

      </div>

    </aside>
  );
}