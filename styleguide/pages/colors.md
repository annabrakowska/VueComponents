```vue noeditor
<template>
  <ul>
    <li v-for="item in colors" :ref="item" :class="'color' + item">
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        'primary',
        'secondary',
        'black',
        'white',
        'gray',
        'danger',
        'warning',
        'success',
        'info',
        'light'
      ]
    };
  },
  mounted() {},
  methods: {
    rgbToArray(rgbColor) {},
    rgbToHex(rgbColor) {},
    rgbToHsl(rgbColor) {}
  }
};
</script>
```
