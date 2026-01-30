// plugins/array-at-polyfill.client.js
export default defineNuxtPlugin(() => {
  if (process.client) {
    // 为 Array.prototype.at 添加 polyfill
    if (!Array.prototype.at) {
      console.log('Adding Array.at polyfill');
      
      Object.defineProperty(Array.prototype, 'at', {
        value: function(index) {
          // 支持负数索引
          let k = index >= 0 ? index : this.length + index;
          
          // 如果索引超出范围，返回 undefined
          if (k < 0 || k >= this.length) {
            return undefined;
          }
          
          // 返回指定位置的元素
          return this[k];
        },
        writable: true,
        configurable: true,
        enumerable: false
      });
    }
    
    // 确保 typed arrays 也有 at 方法
    const typedArrays = [
      Int8Array,
      Uint8Array,
      Uint8ClampedArray,
      Int16Array,
      Uint16Array,
      Int32Array,
      Uint32Array,
      Float32Array,
      Float64Array
    ];
    
    typedArrays.forEach(TypedArray => {
      if (TypedArray && !TypedArray.prototype.at) {
        Object.defineProperty(TypedArray.prototype, 'at', {
          value: function(index) {
            let k = index >= 0 ? index : this.length + index;
            if (k < 0 || k >= this.length) {
              return undefined;
            }
            return this[k];
          },
          writable: true,
          configurable: true,
          enumerable: false
        });
      }
    });
  }
});