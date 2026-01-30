// plugins/crypto-polyfill.client.ts
import { v4 as uuidv4 } from 'uuid';

export default defineNuxtPlugin({
  name: 'crypto-polyfill',
  enforce: 'pre',
  async setup() {
    // 只在客户端执行
    if (process.client) {
      // 确保 crypto 对象存在
      if (typeof crypto === 'undefined') {
        console.warn('Crypto API is not available in this browser');
        return;
      }
      
      // 如果 crypto.randomUUID 不存在，使用 uuidv4 作为 fallback
      if (!crypto.randomUUID) {
        console.log('Adding crypto.randomUUID polyfill using uuid library');
        crypto.randomUUID = uuidv4;
      }
    }
  }
});