"use client";

export default function Navbar({
  sidebarOpen,
  setSidebarOpen,
  newChat,
}) {
  return (
    <header className="flex h-[60px] shrink-0 items-center justify-between border-b border-[#2f2f2f] bg-[#212121] px-3">

      <div className="flex items-center gap-2">

        {!sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-lg p-2 text-gray-300 transition hover:bg-[#2f2f2f] hover:text-white"
          >
            ☰
          </button>
        )}

        <button
          onClick={newChat}
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-[15px] font-medium text-gray-200 transition hover:bg-[#2f2f2f]"
        >
          <span className="text-lg">✦</span>
          <span>GPT</span>
          <span className="text-xs text-gray-400">⌄</span>
        </button>

      </div>

      <div className="flex items-center gap-1">

        <button
          onClick={newChat}
          title="New chat"
          className="rounded-lg p-2 text-gray-300 transition hover:bg-[#2f2f2f] hover:text-white"
        >
          ✎
        </button>

        <button className="rounded-lg p-2 text-gray-300 transition hover:bg-[#2f2f2f] hover:text-white">
          ⋯
        </button>

      </div>

    </header>
  );
}