<script setup>
import NewOrder from "../components/NewOrder.vue";
import Order from "../components/order.vue";
import addfunds from "../components/addfunds.vue";
import api from "../components/api.vue";
import account from "../components/account.vue";
import { reactive } from 'vue';

const data = reactive({
  lang: [
    { lid: 1, name: "English" },
    { lid: 2, name: "Russian" },
    { lid: 3, name: "Turkish" },
    { lid: 4, name: "Portuguese (Brazil)" },
    { lid: 5, name: "Korean" },
    { lid: 6, name: "Arabic" },
  ],
  tab: 1,
  selLang: 1,
  open: false
})

</script>

<template>
  <div class="test-container">
    <!-- 菜单 -->
    <div class="menu">
      <div class="logo">
        <div class="logo-font">
          SMM918.COM
        </div>
      </div>
      <!-- 菜单列表 -->
      <div class="menulist">
        <div class="menulist-item logo-font" :class="{ active: data.tab == 1 }" @click="data.tab = 1">
          <span>🚗</span>
          <span>New order</span>
        </div>
        <div class="menulist-item logo-font" :class="{ active: data.tab == 2 }" @click="data.tab = 2">
          <span>🚗</span>
          <span>Services</span>
        </div>
        <div class="menulist-item logo-font" :class="{ active: data.tab == 3 }" @click="data.tab = 3">
          <span>🚗</span>
          <span>Orders</span>
        </div>
        <div class="menulist-item logo-font" :class="{ active: data.tab == 4 }" @click="data.tab = 4">
          <span>🚗</span>
          <span>Add funds</span>
        </div>
        <div class="menulist-item logo-font" :class="{ active: data.tab == 5 }" @click="data.tab = 5">
          <span>🚗</span>
          <span>API</span>
        </div>
        <div class="menulist-item logo-font" :class="{ active: data.tab == 6 }" @click="data.tab = 6">
          <span>🚗</span>
          <span>Tickets</span>
        </div>
        <div class="menulist-item logo-font" :class="{ active: data.tab == 7 }" @click="data.tab = 7">
          <span>🚗</span>
          <span>Mass order</span>
        </div>
      </div>
    </div>
    <div class="right-container" style="overflow-y: auto;">
      <!-- 内容部分顶部导航 -->
      <nav>
        <div class="nav-contain">
          <!-- PC端菜单 -->
          <div class="nav-right-pc">
            <div class="sel">
              <div class="nav-item">
                <div class="nav-item-btn money">
                  $0.00
                </div>
              </div>
              <div class="nav-item">
                <div class="nav-item-btn" @click="data.tab = 8; alert('1111')" :class="{ active: data.tab == 8 }">
                  Account
                </div>
              </div>
              <div class="nav-item">
                <div class="nav-item-btn">
                  Loginout
                </div>
              </div>
            </div>
          </div>
          <!-- 移动端菜单 -->
          <div class="nav-right-mobile">
            <div class="mobile-logo">SMM918.COM</div>
            <div class="menu-btn"><span @click="data.open = !data.open">---</span></div>
          </div>
          <div class="nav-right-mobile-menu" :class="{ active: data.open }">
            <div class="mobile-money">$0.00</div>
            <div class="mobile-item-menu">
              <div class="mobile-item" @click="data.tab = 1">
                <span>🚗</span>
                <span>New order</span>
              </div>
              <div class="mobile-item" @click="data.tab = 2">
                <span>🚗</span>
                <span>Services</span>
              </div>
              <div class="mobile-item" @click="data.tab = 3">
                <span>🚗</span>
                <span>Orders</span>
              </div>
              <div class="mobile-item" @click="data.tab = 4">
                <span>🚗</span>
                <span>Add funds</span>
              </div>
              <div class="mobile-item" @click="data.tab = 5">
                <span>🚗</span>
                <span>API</span>
              </div>
              <div class="mobile-item" @click="data.tab = 6">
                <span>🚗</span>
                <span>Tickets</span>
              </div>
              <div class="mobile-item" @click="data.tab = 7">
                <span>🚗</span>
                <span>Mass order</span>
              </div>
              <div class="mobile-item" @click="data.tab = 8">
                Account
              </div>
              <div class="mobile-item">
                Logout
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div class="down-container">
        <!-- 内容 -->
        <div class="margin"></div>
        <NewOrder v-if="data.tab == 1" class="order"></NewOrder>
        <Order v-if="data.tab == 3" class="order"></Order>
        <addfunds v-if="data.tab == 4" class="order"></addfunds>
        <api v-if="data.tab == 5" class="order"></api>
        <account v-if="data.tab == 8" class="order"></account>
      </div>
    </div>
  </div>
</template>
<style>
body {
  padding: 0;
  margin: 0;
}
</style>
<style scoped>
@import url(../css/home.css);
</style>