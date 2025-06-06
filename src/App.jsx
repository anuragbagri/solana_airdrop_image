import React from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';
import AirDrop from './AirDrop';
import Footer from './Footer';

import '@solana/wallet-adapter-react-ui/styles.css';
import './App.css'; // If you have any custom styles

function App() {
  return (
    <>
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/L2WQTcjS6zJZkKWzL2eneaAuJ1-OrYbs"}>   
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className='h-full bg-slate-700'>
          <div className=" flex flex-col min-h-screen text-white">
            <main className="flex-grow container mx-auto p-4">
              <div className="flex justify-center items-center flex-col space-y-6">
                <WalletMultiButton className="bg-blue-500 px-6 py-3 rounded-full text-lg" />
                <WalletDisconnectButton className="bg-red-500 px-6 py-3 rounded-full text-lg" />
                <AirDrop />
              </div>
            </main>
            <Footer />
          </div>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
    </>
  );
}

export default App;
