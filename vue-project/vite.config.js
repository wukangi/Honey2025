import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'//自动导入vue组件
import Components from 'unplugin-vue-components/vite'//自动导入ui组件
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers' //对应组件库引入

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
      //element-plus组件库
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      //自动导入ui组件
      Components({
        resolvers: ({importStyle: 'sass'})
      }),
  ],
  css: {
    preprocessorOptions: {
      sass:{
        additionalData: '@use "@/assets/css/index.scss" as *;'
      },
    },
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
