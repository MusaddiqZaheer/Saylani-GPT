"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ChatArea from "@/components/ChatArea";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (message) => {
    if (!message.trim() || loading) return;

    const userMessage = {
      role: "user",
      content: message,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Error: ${error.message}`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const newChat = () => {
    if (messages.length > 0) {
      setChatHistory((prev) => [
        ...prev,
        {
          id: Date.now(),
          title:
            messages[0]?.content?.slice(0, 35) ||
            "New conversation",
        },
      ]);
    }

    setMessages([]);
  };

  return (
    <main className="flex h-screen overflow-hidden bg-[#212121] text-white">
      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
        newChat={newChat}
        chatHistory={chatHistory}
      />

      <section className="flex min-w-0 flex-1 flex-col">
        <Navbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          newChat={newChat}
        />

        <ChatArea
          messages={messages}
          onSend={sendMessage}
          loading={loading}
        />
      </section>
    </main>
  );
}