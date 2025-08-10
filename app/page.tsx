"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8 relative overflow-hidden">
      {/* 背景渐变光晕 */}
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent"></div>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold mb-6 z-10 text-center"
      >
        MyDePIN
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg text-gray-300 max-w-2xl text-center mb-10 z-10"
      >
        在未来的世界，每一个传感器都在讲述一个故事。  
        加入我们，成为去中心化感知网络的一部分，  
        让你的数据为真实世界创造价值。
      </motion.p>

      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        onClick={() => router.push("/dashboard")}
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition z-10"
      >
        🚀 立即进入
      </motion.button>

      {/* 底部项目信息 */}
      <div className="absolute bottom-4 text-sm text-gray-400 flex gap-4 z-10">
        <a href="https://twitter.com/yourproject" target="_blank" className="hover:text-white">
          Twitter
        </a>
        <a href="https://t.me/yourproject" target="_blank" className="hover:text-white">
          Telegram
        </a>
        <span>© 2025 MyDePIN</span>
      </div>
    </main>
  );
}
