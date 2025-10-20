<template>
  <div id="threeBall">
    <div class="searchArea row">
      <div class="col-1">
        <el-button type="primary" @click="onSubmit">匯出報表</el-button>
      </div>
      <div class="col-1">
        <el-upload
          class="upload-demo"
          action="http://localhost:8080/pma/threeBall"
          accept=".xlsx"
        >
          <el-button type="primary">點擊上傳</el-button>
        </el-upload>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { Vendor } from "../Interface/Vendor";

let vendorList = ref<Vendor[]>();
let selectedVendorId = ref("");

//匯出三顆球報表
function exportThreeBall() {
  axios
    .post("http://localhost:8080/pma/exportThreeBall")
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
}

</script>
