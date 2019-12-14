```vue noeditor
<template>
  <ul class="colors-palette">
    <li v-for="color in colors">
      <div class="color-sample" :ref="color" :class="'color-' + color"></div>
      <div class="color-name" v-text="color"></div>
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
        'gray-dark',
        'gray-light',
        'danger',
        'warning',
        'success',
        'info',
        'light'
      ]
    };
  },
  mounted() {
    this.colors.forEach(color => {
      let el = this.$refs[color][0];
      let rgb = window.getComputedStyle(el).color;
      console.log(rgb);
      let hex = this.rgbToHex(rgb);
      console.log(hex);
      el.style.backgroundColor = hex;
    });
  },
  methods: {
    rgbToHex(rgb) {
      return (
        '#' +
        rgb
          .match(/\d+/g)
          .map(x => {
            x = parseInt(x).toString(16);
            return x.length === 1 ? '0' + x : x;
          })
          .join('')
      );
    }
  }
};
</script>

<style scoped>
.color-name {
  align-self: center;
}
.color-sample {
  height: 80%;
  border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
  border: 1px solid lightgray;
}

ul {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}

li {
  display: flex;
  flex-direction: column;
  margin: 8px;
  width: 100px;
  height: 100px;
}
</style>
```
