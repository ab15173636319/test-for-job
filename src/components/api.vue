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
@import url(./css/api.css);
</style>