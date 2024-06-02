<template>
    <div>
      <div class="head">
        <div v-for="item in 10" :key="item">
          <div>
            <span>tpddada.11111 ON WHALES.MEME</span>
            <img src="../assets/public.png" alt="" />
          </div>
        </div>
      </div>

      <div class="navigation">
        <span class="dis" @click="goback">memecoin.fun</span>
        <div>
          <span @click="dialogTableVisible = true">How to play</span>
          <span>Chicken Bible</span>
        </div>
        <!-- <span>Connect wallet</span> -->
        <div style="position: relative;">
          <wallet-multi-button dark></wallet-multi-button>
          <span
          v-if="viewProfile"
          @click="goprofile"
            style="
              padding: 0 24px;
              font-size: 14px;
              cursor: pointer;
              color: rgb(255 255 255 / 48%);
              position:absolute;
              left: 0;
              bottom: -20px;
              display: inline-block;
            "
            >[view profile]</span
          >
        </div>
      </div>
      <div class="m">
        <div>
            <div>
            <span @click="dialogTableVisible = true">How to play</span>
          <span>Chicken Bible</span>
        </div>
        <p @click="goback">memecoin.fun</p>
        <div style="position: relative;">
          <wallet-multi-button dark></wallet-multi-button>
          <span
          v-if="viewProfile"
          @click="goprofile"
            style="
              font-size: 12px;
              cursor: pointer;
              color: rgb(255 255 255 / 48%);
              position:absolute;
              left: 0;
              bottom: -20px;
              display: inline-block;
            "
            
            >[view profile]</span
          >
        </div>
        </div>
      </div>
      <el-dialog v-model="dialogTableVisible" title="How it works" center width="800">
          <p>Pump prevents rugs by making sure that all created tokens are safe. Each coin on pump is a fair-launch with no presale and no team allocation.</p>

          <p>step 1: pick a coin that you like</p>
          <p>step 2: buy the coin on the bonding curve</p>
          <p>step 3: sell at any time to lock in your profits or losses</p>
          <p>step 4: when enough people buy on the bonding curve it reaches a market cap of $69k</p>
          <p>step 5: $12k of liquidity is then deposited in raydium and burned</p>
          <div class="btns" @click="dialogTableVisible = false">
            [I'm ready to pump]
          </div>
      </el-dialog>
    </div>
</template>

<script setup>
import * as anchor from "@project-serum/anchor";
import { useWallet } from "solana-wallets-vue";
import {
  Connection,
  clusterApiUrl,
  LAMPORTS_PER_SOL,
  Program,
  PublicKey,
  Transaction,
  wallet,
  Lamports,
} from "@solana/web3.js";
import { WalletMultiButton } from "solana-wallets-vue";
import { ref, getCurrentInstance,onMounted, watch } from "vue";
  let { proxy } = getCurrentInstance();
  let wallets = useWallet();
  
let viewProfile = ref(false)
let Address = ref(wallets.publicKey.value == null ? null : wallets.publicKey.value.toString());
console.log(66666,Address.value);
if(Address.value != null){
  viewProfile.value = true
}
watch(
  () => wallets.publicKey.value,
  (newValue, oldValue) => {
    if (newValue != null) {
      Address.value = newValue.toString();
      console.log('发生了改变',newValue.toString());
      console.log(66666,Address.value);
      if(Address.value != null){
        viewProfile.value = true
      }
    }
  }
)

  let dialogTableVisible = ref(false)
const goback = ()=>{
    proxy.$router.push({
      name: "Home",
    });
}
const goprofile = ()=>{
  console.log('123');
  proxy.$router.push({
      name: "Profiles",
    });
}
onMounted(()=>{

})
</script>

<style lang="less" scoped>
.head {
    width: 100%;
    display: flex;
    align-items: center;
    overflow: auto;

    > div {
      display: inline-block;
      padding: 0.0625rem 0.125rem;
      background-color: aqua;
      flex-shrink: 0;
      color: #fff;
      > div {
        display: flex;
        align-items: center;
        span {
          font-size: 0.175rem;
          margin-right: 0.125rem;
        }
      }
      @media (max-width: 800px) {
        >div{
          span{
            font-size: 12px;
          }
        }
      }
    }
    > div:nth-child(2) {
      background: #b1fa2a;
    }
    > div:nth-child(3) {
      background: #3318ff;
    }
    > div:nth-child(4) {
      background: #fd18ee;
    }
    > div:nth-child(5) {
      background: #fa812a;
    }
    > div:nth-child(6) {
      background: #21fef3;
    }
  }
  .navigation {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.5rem;
    @media (max-width: 800px) {
        display: none;
    }
    span {
      font-size: 0.275rem;
      font-weight: 700;
      color: #fff;
      cursor: pointer;
    }
    .dis {
      color: #ef08ef;
      
    }
    > div {
      > span {
        padding: 0 1rem;
      }
    }
  }
  .m{
    display: none;
    @media (max-width: 800px) {
        display: block;
    }
    >div{
        width: 90%;
        margin:0 auto;
        display: flex;
        align-items:center;
        justify-content: space-between;
        >div:nth-child(1){
            font-size: 12px;
            color: #fff;
            display: flex;
            flex-direction: column;
            margin-top: 6px;
        }
        p{
          font-size: 14px;
          color: #EF08EF;
        }
        >div:nth-child(3){
            font-size: 12px;
            :deep(.swv-button){
                font-size: 12px;
                height: auto;
                line-height: 14px;
                padding: 0 ;
            }
            :deep(.swv-button-icon){
              display: none;
            }
        }
    }
  }
  
  ::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
:deep(.swv-button-trigger) {
  background-color: #00000000;
}
:deep(.swv-button:not([disabled]):hover) {
  background-color: #00000000;
}
:deep(.el-dialog){
  background-color:#1b1d28;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 30px;
  width: 6.25rem;
  @media (max-width: 800px) {
        width: 90%;
      }
  .el-dialog__title{
    color: #fff;
  }
  p:nth-child(1){
  font-size: 16px;
  margin-bottom:15px;
  color: #ffffffc4;
  }
  p{
    font-size: 14px;
    text-align: center;
    margin-bottom: 10px;
    color: #ffffff6b;
  }
  .btns{
    text-align:center;
    margin-top: 20px;
    font-size: 16px;
    cursor: pointer;
  }
  .btns:hover{
    transform: scale(1.2);
  }
}
</style>