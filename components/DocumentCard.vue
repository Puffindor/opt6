<template>
 <div class="card">
  <div>
   <h2>{{ props.title }}</h2>
   <p>{{ props.body }}</p>
  </div>
  <base-button>
   <NuxtLink :to="`/documents/${title}`">Перейти</NuxtLink>
  </base-button>
 </div>
</template>

<script setup>
const props = defineProps({
 title: {
  type: String,
 },
 body: {
  type: String,
 },
});
</script>

<style lang="scss" scoped>
a {
 width: 100%;
 height: 100%;
 font-weight: 400;
 color: white;
 font-family: 'PT Sans', sans-serif;
 text-decoration: none;
}
.card {
 font-family: 'PT Sans', sans-serif;
 font-size: 18px;
 border-radius: 10px;
 box-shadow: 0px 0px 20px 0px #0000001f;
 width: 340px;
 height: 450px;
 padding: 25px;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 h2 {
  font-family: 'PT Sans', sans-serif;

  font-size: 31px;
  color: #1253a2;
  margin-bottom: 15px;
 }
}
</style>
