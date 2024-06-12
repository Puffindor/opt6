<template>
 <div class="out">
  <div class="in">
   <img alt="close button" src="@/assets/cross.svg" @click="closePopup" />
   <slot></slot>
  </div>
 </div>
</template>

<script setup>
const emit = defineEmits(['close']);

function closePopup() {
 emit('close');
}
</script>

<style lang="scss" scoped>
.out {
 top: 0;
 z-index: 99999;
 position: fixed;
 width: 100vw;
 height: 100vh;
 background-color: rgba(0, 0, 0, 0.268);
 display: flex;
 justify-content: center;
 align-items: center;
 .in {
  img {
   cursor: pointer;
   width: 17px;
   height: 17px;
  }
  grid-gap: 8px;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
 }
}
</style>
