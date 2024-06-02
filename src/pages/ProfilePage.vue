<template>
  <div class="Home">
    <!-- <app-bar
          class="block"
          @child-event="parentMethod"
          @child-event2="parentMethod2"
        ></app-bar> -->
    <webbar />
    <div class="subject">
      <div>
        <img src="../assets/tu1.png" alt="" />
      </div>
      <div>
        <div>@242424</div>
        <P>0 followers</P>
        <div @click="InfoModification = true">Edit profile</div>
        <div>
          <p>Likes received: 0</p>
          <p>Mentions received: 0</p>
        </div>
        <div class="address">23424dfvgdfggfdfgdfgdfgdgdg</div>
        <a :href="`https://solscan.io/account/${Address}`" target="_blank">View on solscan ↗</a>
      </div>
    </div>
    <div class="screen">
      <span>Coins held</span>
      <span>Replies</span>
      <span>Notifications</span>
      <span>Coins created</span>
      <span>followers</span>
      <span>following</span>
    </div>
    <div class="list">
      <div>
        <img src="../assets//tu2.png" alt="" />
        <div>
          <div>
            <div>
              <div>
                MOBYDICK
              </div>
            </div>
            <div>30%</div>
          </div>
          <div>$Cat</div>
          <div>
            <p>To raise funds</p>
            <div><span>19.999</span><span>/100</span> sol</div>
          </div>
          <div>
            <div>
              <p>Number of people</p>
              <span>22</span>
            </div>
            <div>
              <p>Countdown</p>
              <span>00.22</span>
            </div>
          </div>
          <div>
            <p>FIRST LONG COIN ON WHALES.MEME</p>
          </div>
          <div>
            <p>sfdf3rf3f...34424</p>
            <span>0</span>
          </div>
        </div>
      </div>

      <div>
        <img src="../assets//tu4.png" alt="" />
        <div>
          <div>
            <div>
              <div>
                MOBYDICK
              </div>
            </div>
            <div>30%</div>
          </div>
          <div>$Cat</div>
          <div>
            <p>To raise funds</p>
            <div><span>19.999</span><span>/100</span> sol</div>
          </div>
          <div>
            <div>
              <p>Number of people</p>
              <span>22</span>
            </div>
            <div>
              <p>Countdown</p>
              <span>00.22</span>
            </div>
          </div>
          <div>
            <p>FIRST LONG COIN ON WHALES.MEMEFIRST LONG COIN ON WHALES.MEMEFIRST LONG COIN ON WHALES.MEMEFIRST LONG COIN ON WHALES.MEMEFIRST LONG COIN ON WHALES.MEMEFIRST LONG COIN ON WHALES.MEME</p>
          </div>
          <div>
            <p>sfdf3rf3f...34424</p>
            <span>0</span>
          </div>
        </div>
      </div>
      <div v-for="item in 6" :key="item">
        <img src="../assets//tu3.png" alt="" />
        <div>
          <div>
            <div>
              <div>
                MOBYDICK
              </div>
            </div>
            <div>30%</div>
          </div>
          <div>$Cat</div>
          <div>
            <p>To raise funds</p>
            <div><span>19.999</span><span>/100</span> sol</div>
          </div>
          <div>
            <div>
              <p>Number of people</p>
              <span>22</span>
            </div>
            <div>
              <p>Countdown</p>
              <span>00.22</span>
            </div>
          </div>
          <div>
            <p>FIRST LONG COIN ON WHALES.MEME</p>
          </div>
          <div>
            <p>sfdf3rf3f...34424</p>
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      v-model="InfoModification"
      title="Edit profile"
      center
      width="800"
    >
      <p>Profile photo</p>
      <div class="upload">
        <el-upload
        class="avatar-uploader"
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <!-- <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon> -->
        <img v-else src="../assets/tu1.png" class="tu1" alt="" />
      </el-upload>
      <img class="xg" src="../assets/xg.png" alt="">
      </div>
      <div class="Username">
        <span>Username</span>
        <input type="text" />
      </div>
      <div class="Bio">
        <span>Bio</span>
        <input type="text" />
      </div>
      <div class="btns">
        <span>[close]</span>
        <span>[Save]</span>
      </div>
    </el-dialog>
  </div>
</template>
  
<script setup>
import webbar from "@/components/WebBar.vue";
import { ref, getCurrentInstance, watch } from "vue";
import { useWallet } from "solana-wallets-vue";
let wallets = useWallet();
let Address = ref(
  wallets.publicKey.value == null ? null : wallets.publicKey.value.toString()
);
let { proxy } = getCurrentInstance();
let InfoModification = ref(false);
watch(
  () => wallets.publicKey.value,
  (newValue, oldValue) => {
    if (newValue != null) {
      Address.value = newValue.toString();
    }
  }
);
const toCoin = () => {
  proxy.$router.push({
    name: "Coin",
  });
};
const handleAvatarSuccess = (e) => {
  console.log(e);
};

const beforeAvatarUpload = (rawFile) => {
  console.log(rawFile);
};
</script>
  
  <style lang="less" scoped>
.Home {
  height: auto;
  background-color: #000;
  padding-bottom: 1.25rem;
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
    }
    > div:nth-child(1) {
      display: inline-block;
      padding: 0.0625rem 0.125rem;
      background: #ef08ef;
      > div {
        display: flex;
        align-items: center;
        span {
          font-size: 0.175rem;
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
    span {
      font-size: 0.275rem;
      font-weight: 700;
      color: #fff;
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
  .subject {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.25rem;
    @media (max-width: 800px) {
      width: 90%;
      margin: 0 auto;
      margin-top: 40px;
      align-items: flex-start;
    }
    > div:nth-child(1) {
      img {
        width: 2.5rem;
        height: 2.5rem;
      }
      @media (max-width: 800px) {
        // width: 50%;
        // img{
        //   width: 100%;
        // }
        margin-bottom: 10px;
      }
    }
    > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      margin-left: 0.375rem;
      @media (max-width: 800px) {
        margin-left: 20px;
      }
      > div:nth-child(1) {
        font-size: 0.25rem;
        font-weight: 500;
        color: #fff;
        margin-bottom: 0.125rem;
        @media (max-width: 800px) {
          font-size: 12px;
          margin-bottom: 5px;
        }
      }
      > p:nth-child(2) {
        font-size: 0.225rem;
        font-weight: 500;
        color: #fff;
        margin-bottom: 0.125rem;
        @media (max-width: 800px) {
          font-size: 12px;
          margin-bottom: 5px;
        }
      }
      > div:nth-child(3) {
        border: 0.0125rem solid #969696;
        width: 1.5rem;
        padding: 0.0625rem 0;
        text-align: center;
        font-size: 0.2rem;
        font-weight: 500;
        color: #6b6b6b;
        margin-bottom: 0.125rem;
        cursor: pointer;
        @media (max-width: 800px) {
          width: 100px;
          font-size: 12px;
          margin-bottom: 5px;
        }
      }
      > div:nth-child(4) {
        display: flex;
        align-items: center;
        font-size: 0.2rem;
        font-weight: 500;
        margin-bottom: 0.125rem;
        @media (max-width: 800px) {
          font-size: 12px;
          margin-bottom: 5px;
        }
        > p:nth-child(1) {
          color: #ef08ef;
          margin-right: 0.1875rem;
          @media (max-width: 800px) {
            margin-right: 16px;
          }
        }
        > p:nth-child(2) {
          color: #0fe8e7;
        }
      }
      .address {
        border: 1px solid #969696;
        padding: 0.0625rem 0.2rem;
        display: inline-block;
        font-size: 0.2rem;
        font-weight: 500;
        color: #6b6b6b;
        margin-bottom: 0.125rem;
        @media (max-width: 800px) {
          font-size: 12px;
          margin-bottom: 5px;
          text-align: center;
        }
      }
      a {
        font-size: 0.15rem;
        font-weight: 500;
        color: #fff;
        @media (max-width: 800px) {
          font-size: 12px;
          margin-bottom: 5px;
        }
      }
    }
  }
  .screen {
    display: flex;
    width: 90%;
    margin: 0 auto;
    margin-top: 1rem;
    @media (max-width: 800px) {
    justify-content: space-between;
    }
    span {
      font-size: 16px;
      color: #fff;
      display: inline-block;
      padding: 0 20px;
      cursor: pointer;
    }
    @media (max-width: 800px) {
      flex-wrap: wrap;
      span {
        padding-left: 0;
      }
    }
  }
}
.list {
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.6rem;
  margin-top: 0.75rem;
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  > div {
    // height: 300px;
    cursor: pointer;
    img {
      width: 100%;
    }
    > div:nth-child(2) {
      padding: 0.25rem;
      box-sizing: border-box;
      background-color: #282524;
      @media (max-width: 800px) {
        padding: 20px 10px;
      }
      > div:nth-child(1) {
        display: flex;
        justify-content: space-between;
        > div:nth-child(1) {
          padding-right: 4px;
          border-radius: 0.225rem;
          background: linear-gradient(to right top, #9845fefc, #28e2b7);
          >div{
            padding: 0.0625rem 0.125rem;
          background-color: #fff;
          font-size: 0.175rem;
          font-weight: 600;
          border-radius: 0.225rem;
          }
        }
        > div:nth-child(2) {
          font-size: 0.15rem;
          font-weight: 600;
          // border: 0.0125rem solid #9945ff;
          background: linear-gradient(to right top, #9845fe79, #28e2b78b);
          padding: 0.0625rem 0.325rem;
          border-radius: 0.125rem;
          color: #0fe8e7;
        }
        @media (max-width: 800px) {
          >div:nth-child(1){
            border-radius: 16px;
            >div{
              font-size: 12px;
              padding: 5px 10px;
              border-radius: 16px;
            }
          }
          >div:nth-child(2){
            font-size: 12px;
            padding: 5px 10px;
            border-radius: 16px;
          }
        }
      }
      > div:nth-child(2) {
        font-size: 0.25rem;
        color: #fff;
        font-weight: 700;
        padding: 0.125rem 0;
        @media (max-width: 800px) {
          font-size: 14px;
          margin: 6px 0;
        }
      }
      > div:nth-child(3) {
        margin-bottom: 0.1875rem;
        p {
          font-size: 0.175rem;
          font-weight: 500;
          color: #747271;
          margin-bottom: 0.025rem;
        }
        > div {
          font-size: 0.275rem;
          font-weight: 700;
          color: #fff;
          > span:nth-child(1) {
            color: #ef08ef;
          }
          > span:nth-child(2) {
            color: #0fe8e7;
          }
        }
        @media (max-width: 800px) {
          p{
            font-size: 12px
          }
          >div{
            font-size: 14px;
          }
        }
      }
      > div:nth-child(4) {
        display: flex;
        margin-bottom: 0.125rem;
        > div:nth-child(1) {
          margin-right: 0.625rem;
        }
        div {
          display: flex;
          flex-direction: column;
          margin-bottom: .1rem;
          p {
            font-size: 0.175rem;
            font-weight: 500;
            color: #747271;
            margin-bottom: 0.05rem;
          }
          span {
            font-size: 0.2rem;
            color: #89e80f;
          }
        }
        @media (max-width: 800px) {
          margin: 10px 0;
          div{
            height:auto;
            display: flex;
            flex-direction: column;
            p{
              font-size: 12px
            }
            span{
              font-size: 12px;
            }
          }
        }
      }
      > div:nth-child(5) {
        
       border-bottom: 0.0125rem solid #595959;
       padding-bottom: 0.1875rem;
        p{
          font-size: 0.175rem;
        font-weight: 700;
        color: #fff;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        @media (max-width: 800px) {
          font-size: 14px;
        }
        }
        @media (max-width: 800px) {
          padding-bottom: 15px;
        }
      }
      > div:nth-child(6) {
        display: flex;
        justify-content: space-between;
        font-size: 0.175rem;
        color: #ffffff8c;
        padding-top: 0.1875rem;
        @media (max-width: 800px) {
          font-size: 12px;
        }
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
:deep(.el-dialog) {
  background-color: #1b1d28;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 30px;
  width: 6.25rem;
  p{
    font-size: 16px;
    color: #fff;
    margin-bottom: 10px;
  }
  .upload{
    width: 100px;
    position: relative;
    .xg{
      width: 25px;
      height: 25px;
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
  @media (max-width: 800px) {
    width: 90%;
  }
  .el-dialog__title {
    color: #fff;
  }
  .avatar-uploader {
    width: 100px;
    height: 100px;
    border: 1px solid #ccc;
    border-radius: 50%;
  }
  .el-upload {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    .tu1 {
      border-radius: 50%;
    }
  }
  .Username{
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    margin-top: 20px;
    span{
      font-size: 16px;
      color: #fff;
      margin-bottom: 10px;
    }
    input{
      width: 100%;
      height: 40px;
      background-color: #1b1d28;
      border: 1px solid #fff;
      color: #fff;
      font-size: 14px;
      padding-left: 10px;
    }
  }
  .Bio{
    display: flex;
    flex-direction: column;
    span{
      font-size: 16px;
      color: #fff;
      margin-bottom: 10px;
    }
    input{
      width: 100%;
      height: 40px;
      background-color: #1b1d28;
      border: 1px solid #fff;
      color: #fff;
      font-size: 14px;
      padding-left: 10px;
    }
  }
  .btns{
    display: flex;
    justify-content: space-evenly;
    margin-top: 30px;
    span{
      font-size: 18px;
      color: #ffffffa9;
      cursor: pointer;
    }
    span:hover{
      transform: scale(1.1);
    }
  }
}
</style>