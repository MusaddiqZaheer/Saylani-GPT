"use client";

import Message from "./Message";
import ChatInput from "./ChatInput";

export default function ChatArea({
  messages,
  onSend,
  loading,
}) {
  return (
    <div className="chat-background relative flex min-h-0 flex-1 flex-col">

      <div className="flex-1 overflow-y-auto">

        {messages.length === 0 ? (

          <div className="flex min-h-full items-center justify-center px-4 pb-24">

            <div className="text-center">

              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#424242] bg-[#2a2a2a] text-2xl">
                ✦
              </div>

              <h1 className="text-3xl font-semibold tracking-tight text-white">
                How can I help you today?
              </h1>

              <p className="mt-3 text-sm text-gray-400">
                Ask anything and start a conversation.
              </p>

            </div>

          </div>

        ) : (

          <div className="mx-auto w-full max-w-4xl px-4 pb-32 pt-6">

            {messages.map((message, index) => (
              <Message
                key={`${message.role}-${index}`}
                role={message.role}
                content={message.content}
              />
            ))}

            {loading && (
              <Message
                role="assistant"
                content="Thinking..."
              />
            )}

          </div>

        )}

      </div>

      <ChatInput
        onSend={onSend}
        loading={loading}
      />

    </div>
  );
}