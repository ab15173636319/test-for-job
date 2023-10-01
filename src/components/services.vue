<script setup>
import { reactive } from 'vue';

const data = reactive({
    category: 1,
    categoryList: [
        { id: 1, name: "1111111111111111111111111", per: "$4.34", min: 10, max: 5000, description: "  Drop: stable since few weeks can face drop in future refill not available<br>Guarantee: no<br>Support unavailable<br>🔗 Link Format : https://www.tiktok.com/@UserName<br>✅ Due to the adjustment of tiktok official policy, it is very slow to add tiktok Followers at present,<br>please do not place an order if you mind the speed.<br><br>📌 Before submitting your order, please double-check the link is format and follow the instructions<br>📌 Make sure that your account is settings are set to public NOT private.<br>𝗔𝗹𝗲𝗿𝘁𝘀 <br>✅ The number you order will be delivered in the same amount. Regardless of the your page drop<br>✅ Please do not order for the same link at the same time. You have to wait for the first order to be<br>completed then you can order again.<br>✅ If you change the link while you work, your order will be changed to a completed state, in which case<br> we will not refund the cost. <br>✅ If you order for wrong or delete link server can mark order auto complete and no refund. in this case<br>we can not help you. please be careful.<br>However please do not forget these are just estimations<br>" },
        { id: 2, name: "2222222222222222222222222", per: "$4.34", min: 10, max: 5000, description: "  Drop: stable since few weeks can face drop in future refill not available<br>Guarantee: no<br>Support unavailable<br>🔗 Link Format : https://www.tiktok.com/@UserName<br>✅ Due to the adjustment of tiktok official policy, it is very slow to add tiktok Followers at present,<br>please do not place an order if you mind the speed.<br><br>📌 Before submitting your order, please double-check the link is format and follow the instructions<br>📌 Make sure that your account is settings are set to public NOT private.<br>𝗔𝗹𝗲𝗿𝘁𝘀 <br>✅ The number you order will be delivered in the same amount. Regardless of the your page drop<br>✅ Please do not order for the same link at the same time. You have to wait for the first order to be<br>completed then you can order again.<br>✅ If you change the link while you work, your order will be changed to a completed state, in which case<br> we will not refund the cost. <br>✅ If you order for wrong or delete link server can mark order auto complete and no refund. in this case<br>we can not help you. please be careful.<br>However please do not forget these are just estimations<br>" },
        { id: 3, name: "3333333333333333333333333", per: "$4.34", min: 10, max: 5000, description: "  Drop: stable since few weeks can face drop in future refill not available<br>Guarantee: no<br>Support unavailable<br>🔗 Link Format : https://www.tiktok.com/@UserName<br>✅ Due to the adjustment of tiktok official policy, it is very slow to add tiktok Followers at present,<br>please do not place an order if you mind the speed.<br><br>📌 Before submitting your order, please double-check the link is format and follow the instructions<br>📌 Make sure that your account is settings are set to public NOT private.<br>𝗔𝗹𝗲𝗿𝘁𝘀 <br>✅ The number you order will be delivered in the same amount. Regardless of the your page drop<br>✅ Please do not order for the same link at the same time. You have to wait for the first order to be<br>completed then you can order again.<br>✅ If you change the link while you work, your order will be changed to a completed state, in which case<br> we will not refund the cost. <br>✅ If you order for wrong or delete link server can mark order auto complete and no refund. in this case<br>we can not help you. please be careful.<br>However please do not forget these are just estimations<br>" },
        { id: 4, name: "4444444444444444444444444", per: "$4.34", min: 10, max: 5000, description: "  Drop: stable since few weeks can face drop in future refill not available<br>Guarantee: no<br>Support unavailable<br>🔗 Link Format : https://www.tiktok.com/@UserName<br>✅ Due to the adjustment of tiktok official policy, it is very slow to add tiktok Followers at present,<br>please do not place an order if you mind the speed.<br><br>📌 Before submitting your order, please double-check the link is format and follow the instructions<br>📌 Make sure that your account is settings are set to public NOT private.<br>𝗔𝗹𝗲𝗿𝘁𝘀 <br>✅ The number you order will be delivered in the same amount. Regardless of the your page drop<br>✅ Please do not order for the same link at the same time. You have to wait for the first order to be<br>completed then you can order again.<br>✅ If you change the link while you work, your order will be changed to a completed state, in which case<br> we will not refund the cost. <br>✅ If you order for wrong or delete link server can mark order auto complete and no refund. in this case<br>we can not help you. please be careful.<br>However please do not forget these are just estimations<br>" },
        { id: 5, name: "5555555555555555555555555", per: "$4.34", min: 10, max: 5000, description: "  Drop: stable since few weeks can face drop in future refill not available<br>Guarantee: no<br>Support unavailable<br>🔗 Link Format : https://www.tiktok.com/@UserName<br>✅ Due to the adjustment of tiktok official policy, it is very slow to add tiktok Followers at present,<br>please do not place an order if you mind the speed.<br><br>📌 Before submitting your order, please double-check the link is format and follow the instructions<br>📌 Make sure that your account is settings are set to public NOT private.<br>𝗔𝗹𝗲𝗿𝘁𝘀 <br>✅ The number you order will be delivered in the same amount. Regardless of the your page drop<br>✅ Please do not order for the same link at the same time. You have to wait for the first order to be<br>completed then you can order again.<br>✅ If you change the link while you work, your order will be changed to a completed state, in which case<br> we will not refund the cost. <br>✅ If you order for wrong or delete link server can mark order auto complete and no refund. in this case<br>we can not help you. please be careful.<br>However please do not forget these are just estimations<br>" },
    ],
    value: "1111111111111111111111111"
})

</script>

<template>
    <div style="padding: 0 15px;">
        <el-table :data="data.categoryList"  style="width: 100%;">
            <el-table-column prop="id" label="ID" width="50"  height="48"/>
            <el-table-column prop="name" label="Services" width="800"  height="48" />
            <el-table-column prop="per" label="Rate per 1000"  height="48" />
            <el-table-column prop="min" label="Min order"  height="48" />
            <el-table-column prop="max" label="Max order"  height="48" />
            <el-table-column prop="description" label="Description"  height="48">
                <button class="des" link type="primary" size="small"  height="48">view</button>
            </el-table-column>
        </el-table>
    </div>
</template>
<style>
body {
    padding: 0;
    margin: 0;
}
</style>
<style scoped>
@import url(./css/services.css);
</style>