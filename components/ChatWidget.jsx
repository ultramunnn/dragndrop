"use client";
import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown"; 

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "model", content: "Halo! Ada yang bisa saya bantu hari ini?" },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto scroll ke pesan terbawah
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // 1. Tambahkan pesan user ke UI
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      // 2. Panggil API Internal Next.js (Nanti kita buat di langkah 3)
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();

      // 3. Tambahkan balasan AI ke UI
      setMessages((prev) => [
        ...prev,
        { role: "model", content: data.reply || "Maaf, terjadi kesalahan." },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "model", content: "Gagal terhubung ke server." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-10 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[400px] h-[600px] bg-white rounded-lg shadow-2xl border border-white flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300">
          
          {/* Header */}
          <div className="bg-warna3 p-4 text-white flex justify-between items-center">
            <h3 className="font-bold">Asisten DragnDrop</h3>
            <button onClick={toggleChat} className="hover:text-gray-200 text-sm">
              X
            </button>
            
          </div>

          {/* Chat Area (Scrollable) */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
            {messages.map((msg, index) => ( 
              <div
                key={index}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    msg.role === "user"
                      ? "bg-warna3 text-white rounded-br-none"
                      : "bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm"
                  }`}
                >
                  <ReactMarkdown
                    components={{
                      a: ({ node, ...props }) => (
                        <a
                          {...props}
                          target="_blank"
                          rel="noopener noreferrer"
                          // Style Link: Biru & Tebal jika background putih (model), Putih & Tebal jika background user
                          className={`font-bold underline ${msg.role === 'user' ? 'text-white' : 'text-blue-600 hover:text-blue-800'}`}
                        />
                      ),
                      // Hapus margin default paragraf markdown
                      p: ({ node, ...props }) => <p {...props} className="m-0" />
                    }}
                  >
                    {msg.content}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-200 p-3 rounded-lg text-xs animate-pulse">
                  Sedang mengetik...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-200 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ketik pesan..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-blue-500 text-black"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-warna3 text-white p-2 rounded-full hover:bg-blue-700 transition disabled:opacity-50"
            >
              {/* Icon Send (SVG) */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.126A59.768 59.768 0 0 1 21.485 12 59.77 59.77 0 0 1 3.27 20.876L5.999 12Zm0 0h7.5" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* button chat */}
      <button
        onClick={toggleChat}
        className="bg-warna3 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 focus:outline-none"
      >
        {isOpen ? (
          // Icon X (Close)
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        ) : ( 
          // Icon Chat Bubble
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;