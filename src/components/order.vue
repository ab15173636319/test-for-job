<script setup>
import { reactive } from 'vue';

const data = reactive({
    tab: 1,
    selLang: 1,
})

</script>

<template>
    <div style="padding: 12px;">
        <div class="btn-group">
            <span class="top-btn" :class="{ active: data.tab == 1 }">All</span>
            <span class="top-btn" :class="{ active: data.tab == 2 }">Pending</span>
            <span class="top-btn" :class="{ active: data.tab == 3 }">In progress</span>
            <span class="top-btn" :class="{ active: data.tab == 4 }">Completed</span>
            <span class="top-btn" :class="{ active: data.tab == 5 }">Partial</span>
            <span class="top-btn" :class="{ active: data.tab == 6 }">Processing</span>
            <span class="top-btn" :class="{ active: data.tab == 7 }">Canceled</span>
        </div>
        <div class="table-place">
            <div class="search-group">
                <input type="text" placeholder="Search">
                <button>🔍</button>
            </div>
        </div>
        <div class="table">
            <table style="border: none;">
                <thead style="border: none;">
                    <tr style="border: none;">
                        <th>ID</th>
                        <th>Date</th>
                        <th>Link</th>
                        <th>Charge</th>
                        <th>Start count</th>
                        <th>Quantity</th>
                        <th>Service</th>
                        <th>Status</th>
                        <th>Remains</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
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
@import url(./css/order.css);
</style>