<template>
  <div>
    <h1>Welcome to my Vue project</h1>
    <p>This is the home page of my Vue project.</p>
  </div>
  <div class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <div style = "padding: 50px">
      <el-icon><UserFilled /></el-icon>
      <el-icon ><Calendar /></el-icon>
      <el-input placeholder="Enter your name" :suffix-icon = "Calendar"></el-input>
      <el-button type="primary" icon="UserFilled">button</el-button>
    </div>
  </div>
</template>

<script setup>

import {Calendar, FullScreen} from "@element-plus/icons-vue";
</script>
