<script setup>
import { reactive } from 'vue';

const data = reactive({
    tab: 1,
    number: 0.00,
    fee: 0.00
})

</script>

<template>
    <div class=" row">
        <div class="col-lg-10 mb-3 mb-lg-1 ">
            <div class="card" style="margin: 0 15px;">
                <div class="card-title">
                    Method
                </div>
                <el-select v-model="data.value" :placeholder="data.value">
                    <el-option v-for="item in data.categoryList" :key="item.id" :label="item.name" :value="item.name" />
                </el-select>
                <div class="card-title">
                    Instruction
                </div>
                <p style="font-size: 14px;color: #597393;">📮 If the recharge is not successful, please contact customer
                    service support (Telegram2: 💬
                    <a href="https://t.me/smm918support">smmsupport</a>
                    ) in time
                </p>
                <div class="card-title">
                    Amount
                </div>
                <div class="input-wrapper">
                    <input v-model="data.number" type="number" min="0.00" class="select2-selection">
                </div>
                <div class="card-title">
                    Extra fee
                </div>
                <div class="input-wrapper">
                    <input disabled v-model="data.fee" class="select2-selection">
                </div>
                <div class="card-title">
                    Total
                </div>
                <div class="input-wrapper">
                    <input v-model="data.number" disabled class="select2-selection">
                </div>
                <input class="submit" type="submit" value="pay">
            </div>
            <div class="table">
                <table style="border: none;">
                    <thead style="border: none;">
                        <tr style="border: none;">
                            <th>ID</th>
                            <th>Date</th>
                            <th>Method</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
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
@import url(./css/addfunds.css);
</style>