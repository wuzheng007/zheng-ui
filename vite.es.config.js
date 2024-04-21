/* 打包 ES 模块所用的配置文件 */
import { fileURLToPath, URL } from 'node:url'
import { resolve, dirname } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  publicDir: false,
  build: {
    outDir: 'dist/es', // 指定输出路径
    lib: {
      entry: resolve(__dirname, 'src/bundle.js'), // 打包的入口文件
      name: 'ZhengUi',
      fileName: 'zheng-ui', // 包文件输出的名称
      formats: ['es'] // 输出包格式 指定为es模块
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue']
    }
  }
})
