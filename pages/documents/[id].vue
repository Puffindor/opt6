<template>
 <article>
  <p class="route">
   Главная страница &#9679; Документы &#9679;
   <span> {{ route.params.id }}</span>
  </p>
  <h1>
   {{ route.params.id }}
  </h1>
  <div v-for="el in article.article" :key="el.head">
   <h2>{{ el.head }}</h2>
   <p v-for="p in el.body" :key="p">
    {{ p }}
   </p>
  </div>
 </article>
</template>

<script setup>
import documents from '@/documents.json';
const route = useRoute();

//Получаем данне для страницы документа из слайдера,
//заголовок всей страницы берем из URL
const article = documents.cards.find((el) => {
 return el.title === route.params.id;
});
</script>

<style lang="scss" scoped>
.route {
 margin: 20px 0px 20px;
 span {
  color: #8f8f8f;
 }
}
article {
 width: 60%;
}
h1 {
 font-family: PT Sans;
 font-size: 41px;

 margin-bottom: 40px;
}
h2 {
 font-family: PT Sans;
 font-size: 41px;
 color: #383838;
 margin-bottom: 25px;
}
p {
 margin-bottom: 15px;
 font-family: PT Sans;
 font-size: 18px;
 font-weight: 400;
}
@media screen and (max-width: 1280px) {
 article {
  width: 80%;
 }
}
@media screen and (max-width: 850px) {
 article {
  width: 90%;
 }
}
</style>
