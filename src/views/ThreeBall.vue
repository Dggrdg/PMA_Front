<template>
    <div id="threeBall">
        <div class="searchArea row">
            <div class="col-2">
                <select class="form-select" v-model="selectedVendorId">
                    <option v-for="vendor in vendorList" :key="vendor.vendorId" :value="vendor.vendorId">
                        {{ vendor.vendorName }}
                    </option>
                </select>
            </div>
            <div class="col-1">
                <button type="button" class="btn btn-warning" @click="exportThreeBall()">匯出報表</button>
            </div>
            <div class="col-1">
                <el-upload class="upload-demo" action="http://localhost:8080/pma/threeBall" accept="xlsx">
                    <el-button type="primary">點擊上傳</el-button>
                </el-upload>
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { Vendor } from "../Interface/Vendor"

let vendorList = ref<Vendor[]>();
let selectedVendorId = ref("");

//取得廠商下拉式選單內容
function getVendor() {
    axios.get("http://localhost:8080/pma/getVendor")
        .then(response => vendorList.value = response.data)
        .catch(error => console.log(error))

}

//匯出三顆球報表
function exportThreeBall() {
    axios.post("http://localhost:8080/pma/exportThreeBall")
        .then(response => console.log(response))
        .catch(error => console.log(error))
}

onMounted(() => {

    getVendor();
})
</script>