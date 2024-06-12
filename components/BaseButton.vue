<template>
 <button :class="{ flat: mode === 'flat', flatBorder: mode === 'flatBorder' }">
  <slot></slot>
 </button>
</template>

<script setup>
const props = defineProps({
 mode: {
  type: String,
 },
});
</script>

<style lang="scss" scoped>
button {
 color: white;
 font-family: PT Sans;
 font-size: 18px;
 font-weight: 400;
 cursor: pointer;
 border-style: hidden;
 background-color: #0584fe;
 border-radius: 10px;
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 11px 18px;
 transition: 100ms;
}
button:hover {
 transition: 100ms;
 background-color: #046dcf;
}
button.flat {
 background-color: transparent;
 color: white;
}
button.flat:hover {
 background-color: transparent;
 color: white;
}
button.flatBorder {
 background-color: transparent;
 color: black;
 border: 1px solid #0584fe;
}
button.flatBorder:hover {
 background-color: #0586fe3d;
}
</style>
