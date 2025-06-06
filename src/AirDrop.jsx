import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import React, { useState } from 'react';

const AirDrop = () => {
    const wallet = useWallet();
    const { connection } = useConnection();
    const [amount, setAmount] = useState('');
    
    const sendAirdropToUser = async () => {
        if (wallet.publicKey && amount) {
            const airdropAmount = parseFloat(amount) * 1000000000; // Convert SOL to lamports
            try {
                await connection.requestAirdrop(wallet.publicKey, airdropAmount);
                alert("Airdrop successful!");
            } catch (error) {
                console.error(error);
                alert("Airdrop failed. Please try again.");
            }
        } else {
            alert("Please enter a valid amount.");
        }
    };

    return (
        <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl mb-4">Send SOL Airdrop</h2>
            <input
                id="publickey"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full p-3 mb-4 rounded-md bg-gray-600 text-white"
                placeholder="Enter amount in SOL"
            />
            <button
                onClick={sendAirdropToUser}
                className="w-full bg-blue-600 px-4 py-2 rounded-lg text-xl text-white hover:bg-blue-700"
            >
                Send Airdrop
            </button>
        </div>
    );
};

export default AirDrop;
