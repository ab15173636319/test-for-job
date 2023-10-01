<script setup>
import { reactive } from 'vue';

const data = reactive({
    category: 1,
    categoryList: [
        { id: 1, name: "1111111111111111111111111" },
        { id: 2, name: "2222222222222222222222222" },
        { id: 3, name: "3333333333333333333333333" },
        { id: 4, name: "4444444444444444444444444" },
        { id: 5, name: "5555555555555555555555555" },
    ],
    value: "1111111111111111111111111"
})

</script>

<template>
    <div class=" row">
        <div class="col-lg-7 mb-3 mb-lg-0 ">
            <div class="card" style="max-width: 735px;margin: 0 15px;">
                <div class="input-wrapper">
                    <button class="input-wrapper__prepend">🔍</button>
                    <input type="text" placeholder="Search" class="select2-selection">
                </div>
                <div class="card-title">
                    Category
                </div>
                <el-select v-model="data.value" :placeholder="data.value">
                    <el-option v-for="item in data.categoryList" :key="item.id" :label="item.name" :value="item.name" />
                </el-select>
                <div class="card-title">
                    Services
                </div>
                <el-select v-model="data.value" :placeholder="data.value">
                    <el-option v-for="item in data.categoryList" :key="item.id" :label="item.name" :value="item.name" />
                </el-select>
                <div class="card-title">
                    Description
                </div>
                <div class="input-wrapper text">
                    Drop: stable since few weeks can face drop in future refill not available
                    <br>
                    Guarantee: no
                    <br>
                    Support unavailable
                    <br>

                    🔗 Link Format : https://www.tiktok.com/@UserName
                    <br>

                    ✅ Due to the adjustment of tiktok official policy, it is very slow to add tiktok Followers at present,
                    <br>
                    please do not place an order if you mind the speed.
                    <br>


                    <br>
                    📌 Before submitting your order, please double-check the link is format and follow the instructions
                    <br>
                    📌 Make sure that your account is settings are set to public NOT private.
                    <br>

                    𝗔𝗹𝗲𝗿𝘁𝘀
                    <br>
                    ✅ The number you order will be delivered in the same amount. Regardless of the your page drop
                    <br>
                    ✅ Please do not order for the same link at the same time. You have to wait for the first order to be
                    <br>
                    completed then you can order again.
                    <br>
                    ✅ If you change the link while you work, your order will be changed to a completed state, in which case
                    <br>
                    we will not refund the cost.
                    <br>
                    ✅ If you order for wrong or delete link server can mark order auto complete and no refund. in this case
                    <br>
                    we can not help you. please be careful.
                    <br>

                    However please do not forget these are just estimations
                    <br>
                </div>
                <div class="card-title">
                    Link
                </div>
                <div class="input-wrapper">
                    <input type="text" class="select2-selection">
                </div>
                <div class="card-title">
                    Quantity
                </div>
                <div class="input-wrapper">
                    <input type="text" class="select2-selection">
                </div>
                <div class="card-title number">
                    Min: 10 - Max: 50000
                </div>
                <div class="card-title">
                    Charge
                </div>
                <div class="input-wrapper">
                    <input type="text" class="select2-selection">
                </div>
                <input class="submit" type="submit" value="Submit">
            </div>
        </div>
        <div class="col-lg-5">
            <div class="component_content_card component_content_button">
                <div class="card textcard">
                    <div style="font-size: 28px;text-align: center;">
                        <span style="color: #0089ff;font-weight: bold;">Tips of placing orders</span>
                    </div>
                    <ul>
                        <li style="font-size: 12px;color: #597393;">
                            Make sure read the description carefully before placing an order.
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>
<style>
body {
    padding: 0;
    margin: 0;
    overflow: hidden;
}
</style>
<style scoped>
@import url(./css/NewOrder.css);
</style>