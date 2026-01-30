// plugins/polyfills.client.ts
export default defineNuxtPlugin(() => {
  if (process.client) {
    // 检查浏览器是否支持 Object.hasOwn
    if (!Object.hasOwn) {
      Object.hasOwn = function(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      };
    }
  }
});