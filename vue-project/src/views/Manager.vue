<template>
  <!-- 头部区域 -->
  <div style="height: 60px; border-bottom: 1px solid #eee; display: flex; align-items: center">
    <div style="display: flex; align-items: center; padding-left: 20px">
      <img style="width: 40px; height: 40px; border-radius: 50%; margin-right: 10px" src="@/assets/imgs/logo.png"  alt=""/>
      <span style="font-size: 24px; font-weight: bold; margin-right: 10px; color: #2c82ff">后台管理系统</span>
    </div>
  </div>

  <!-- 主体区域 -->
  <div style="display: flex">
    <!-- 左侧菜单 -->
    <div style="width: 240px; height: 100vh">
      <el-menu default-active="1" style="min-height: calc(100vh - 60px)">
        <el-menu-item style="border-bottom: 1px solid #eee;" index="/manager/home">首页</el-menu-item>
        <el-sub-menu index="1">
          <template #title>
            <el-icon><Location /></el-icon>
            <span>数据管理</span>
          </template>
          <el-menu-item index="1-1">二级菜单</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
    <!-- 右侧内容 -->
    <div>

    </div>
  </div>
</template>

<script setup>
import { Location } from '@element-plus/icons-vue'
</script>
