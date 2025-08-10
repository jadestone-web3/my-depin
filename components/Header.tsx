"use client";

import { useEffect, useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

export default function Header() {
  const { publicKey } = useWallet();
  const { connection } = useConnection();

  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    if (!publicKey) {
      setBalance(null);
      return;
    }
    // 获取余额
    connection
      .getBalance(publicKey)
      .then((lamports) => setBalance(lamports / LAMPORTS_PER_SOL))
      .catch(() => setBalance(null));
  }, [publicKey, connection]);

  // 简短地址展示，如 3Af3...eXb2
  function shortAddress(key: PublicKey) {
    const s = key.toBase58();
    return s.slice(0, 4) + "..." + s.slice(-4);
  }

  return (
    <header className="flex items-center justify-between bg-white p-4 shadow">
      <h2 className="text-xl font-semibold">控制台</h2>

      <div className="flex items-center space-x-6">
        <a
          href="https://twitter.com/yourproject"
          target="_blank"
          className="text-gray-600 hover:text-blue-500"
        >
          Twitter
        </a>
        <a
          href="https://t.me/yourproject"
          target="_blank"
          className="text-gray-600 hover:text-blue-500"
        >
          Telegram
        </a>

        {publicKey ? (
          <div className="flex items-center space-x-4 text-gray-700">
            <span className="font-mono bg-gray-100 rounded px-2 py-1 text-sm">
              {shortAddress(publicKey)}
            </span>
            <span className="text-sm">
              {balance !== null ? balance.toFixed(4) + " SOL" : "读取余额..."}
            </span>
            <WalletMultiButton />
          </div>
        ) : (
          <WalletMultiButton />
        )}
      </div>
    </header>
  );
}
