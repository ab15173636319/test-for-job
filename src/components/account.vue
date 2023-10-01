<script setup>
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
})

</script>

<template>
    <div class=" row">
        <div class="col-lg-10 mb-3 mb-lg-0 " style="padding-bottom: 70px;">
            <div class="card">
                <div>
                    <div class="card-title font-size14">
                        Username
                    </div>
                    <div class="input-wrapper font-size14">
                        <input disabled class="select2-selection font-size14">
                    </div>
                </div>
                <div>
                    <div class="card-title font-size14">
                        Email
                    </div>
                    <div class="input-wrapper font-size14">
                        <input disabled class="select2-selection font-size14">
                    </div>
                </div>
                <input class="submit font-size14" type="submit" value="Change mail">
            </div>
            <div class="card">
                <div>
                    <div class="card-title font-size14">
                        Language
                    </div>
                    <div class="sel font-size14">
                        <el-select style="width: calc(100% - 28px);height: 40px;" v-model="data.value"
                            :placeholder="data.value">
                            <el-option style="height: 40px;" v-for="item in data.categoryList" :key="item.id"
                                :label="item.name" :value="item.name" />
                        </el-select>
                        <input class="font-size14 font-size14" type="submit" value="Save">
                    </div>
                </div>
            </div>
            <div class="card">
                <div>
                    <div class="card-title font-size14">
                        Current password
                    </div>
                    <div class="input-wrapper font-size14">
                        <input class="select2-selection">
                    </div>
                </div>
                <div>
                    <div class="card-title font-size14">
                        New password
                    </div>
                    <div class="input-wrapper font-size14">
                        <input class="select2-selection">
                    </div>
                </div>
                <div>
                    <div class="card-title font-size14">
                        Confirm new password
                    </div>
                    <div class="input-wrapper font-size14">
                        <input class="select2-selection">
                    </div>
                </div>
                <input class="submit font-size14" type="submit" value="Change password">
            </div>
            <div class="card">
                <div>
                    <div class="card-title font-size14">
                        <p>Current password</p>
                        <p style="color: #597393;font-size: 14px;">Please check your email and enter the code below.</p>
                    </div>
                </div>
                <div>
                    <div class="card-title font-size14">
                        Code
                    </div>
                    <div class="input-wrapper font-size14">
                        <input class="select2-selection">
                    </div>
                </div>
                <input class="submit font-size14" type="submit" value="Enable">
            </div>
            <div class="card">
                <div>
                    <div class="card-title font-size14">
                        Timezone
                    </div>
                    <div class="sel font-size14">
                        <el-select style="width: calc(100% - 28px);height: 40px;" v-model="data.value"
                            :placeholder="data.value">
                            <el-option style="height: 40px;" v-for="item in data.categoryList" :key="item.id"
                                :label="item.name" :value="item.name" />
                        </el-select>
                        <input class="font-size14 font-size14" type="submit" value="Save">
                    </div>
                </div>
            </div>
            <div class="card">
                <div>
                    <div class="card-title font-size14">
                        AIP key
                    </div>
                    <div class="sel font-size14">
                        <input style="margin: 0;" type="submit" value="Generate new">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="box">
        <div class="input-box"></div>
    </div>
</template>
<style>
body {
    padding: 0;
    margin: 0;
}
</style>
<style scoped>
@import url(./css/account.css);
</style>