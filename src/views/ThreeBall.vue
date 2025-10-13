<template>
    <div id="threeBall">
        <button type="button" class="btn btn-warning" @click="exportThreeBall()">匯出報表</button>
    </div>
</template>

<script lang="ts" setup>
import axios from 'axios';


//匯出三顆球報表
function exportThreeBall() {
    axios.post("http://localhost:8080/pma/exportThreeBall")
        .then(response => console.log(response))
        .catch(error => console.log(error))
}
</script>