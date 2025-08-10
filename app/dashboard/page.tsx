"use client";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* 左侧 Sidebar */}
      <Sidebar />

      {/* 右侧主要区域 */}
      <div className="flex flex-col flex-1">
        {/* 顶部 Header */}
        <Header />

        {/* 主内容区域 */}
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-4">欢迎回来</h1>
          <p className="text-gray-600">
            这里是你的 DePIN 控制台，可以管理节点、查看数据、维护个人信息。
          </p>
        </main>

        {/* 底部 Footer */}
        <Footer />
      </div>
    </div>
  );
}
