<script setup>
import { useWallet } from 'solana-wallets-vue'
import { Connection, clusterApiUrl, Keypair, SystemProgram, Transaction } from '@solana/web3.js';

const { publicKey, connected, sendTransaction } = useWallet();

const onClick = async () => {
        if (!publicKey) {
            console.log('error', `Send Transaction: Wallet not connected!`);
            return;
        }

        let signature = '';
        try {
            // send 1 lamport to random account
            // https://solanacookbook.com/references/basic-transactions.html#how-to-send-sol
            const account = Keypair.generate();
            console.log(publicKey.value,'---',account.publicKey);
            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: publicKey.value,
                    toPubkey: account.publicKey,
                    lamports: 1_000_000,
                })
            );

            const connection = new Connection(clusterApiUrl('devnet'));

            signature = await sendTransaction(transaction, connection);
            await connection.confirmTransaction(signature, 'confirmed');
            console.log("successs")
        } catch (error) {
            console.log('error', `Transaction failed! ${error?.message}`, signature);
            return;
        }
    }
</script>

<template>
    <div>
        <button
            class="group w-60 m-2 btn animate-pulse disabled:animate-none bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ... "
            @click="onClick" :disabled="! publicKey"
        >
            <div v-if="connected">
                Send Transaction
            </div>
            <div v-else>
                Wallet not connected
            </div>
        </button>
    </div>
</template>
