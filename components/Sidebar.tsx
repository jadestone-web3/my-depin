export default function Sidebar() {
    return (
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-gray-700">
          MyDePIN
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">
            📊 仪表盘
          </a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">
            🔗 节点管理
          </a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">
            📁 数据查看
          </a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">
            ⚙️ 系统设置
          </a>
        </nav>
      </aside>
    );
  }
  