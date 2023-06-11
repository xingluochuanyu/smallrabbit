import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: "sass" })],
    }),
  ],
  resolve: {
    //实际转换  @-> src
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      //自动导入定制化样式文件进行样式覆盖
      scss: {
        additionalData: `
          @use "@/styles/element/index.scss" as *;
          // 配置scss自动导入
          @use "@/styles/var.scss" as *;
        `,
      },
    },
  },
})
