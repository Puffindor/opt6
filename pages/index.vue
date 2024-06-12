<template>
 <input-form />

 <article>
  <h2>Плюсы использования сервиса «Компас» для анализа штрафов</h2>
  <div class="cards-container">
   <div class="static-card">
    <img src="@/assets/Frame.svg" alt="pretty icon" />
    <div>
     <h3>Неограниченный автопарк</h3>
     <p>Можно добавить неограниченное кол-во машин и водителей</p>
    </div>
   </div>

   <div class="static-card">
    <img src="@/assets/Frame-1.svg" alt="pretty icon" />
    <div>
     <h3>Сокращение затрат до 50%</h3>
     <p>
      Максимально быстро узнаете о штрафах в автоматическом режиме, тем самым у
     </p>
    </div>
   </div>

   <div class="static-card">
    <img src="@/assets/Frame-2.svg" alt="pretty icon" />
    <div>
     <h3>Безопасность</h3>
     <p>
      Данные передаются в зашифрованном виде, они доступны только получателю
     </p>
    </div>
   </div>

   <div class="static-card">
    <img src="@/assets/Frame-5.svg" alt="pretty icon" />
    <div>
     <h3>Уведомление о погашении</h3>
     <p>
      Мы оповестим вас о том, что штраф был погашен и соответствующая запись
      создана в ГИС ГМП
     </p>
    </div>
   </div>

   <div class="static-card">
    <img src="@/assets/Frame-4.svg" alt="pretty icon" />
    <div>
     <h3>Квитанция об оплате</h3>
     <p>
      После совершения оплаты банковской картой на Вашу электронную почту придет
      квитанция об успешной оплате.
     </p>
    </div>
   </div>

   <div class="static-card">
    <img src="@/assets/Frame-3.svg" alt="pretty icon" />
    <div>
     <h3>Все история сохраняется по каждой машине</h3>
     <p>
      Вся история штрафов сохраняется по машине и водителю, позволяет
      анализировать статистику по штрафам
     </p>
    </div>
   </div>
  </div>
 </article>

 <article class="docs">
  <h2>Документы</h2>
  <div class="list">
   <img
    alt="left page switch"
    class="switch left"
    @click="switchPageLeft"
    src="@/assets/switch.svg"
   />
   <!-- 
Разворачивает произвольное количество карточек для слайдера, 
 данные для них и отдельных страниц на которые они ведут берутся из documents.json
-->
   <ul>
    <li v-for="card in documents.cards" :key="card.title">
     <document-card :title="card.title" :body="card.body" />
    </li>
   </ul>
   <img
    alt="right page switch"
    class="switch right"
    @click="switchPageRight"
    src="@/assets/switch.svg"
   />
  </div>
  <div class="pages">
   <div
    v-for="dot in pages"
    :key="dot.id"
    class="dot"
    :class="{ selected: dot.selected }"
   ></div>
  </div>
 </article>
</template>

<script setup>
import documents from '@/documents.json';

// На сколько сдвинут ряд карточек в слайдере, тут имитация страниц через transform: translate
const cardsTranslateTotal = ref(0);

//Текущая страница в слайдере
const currentPage = ref(1);

//Преобразование для связи со стилями
const translate = computed(() => {
 return cardsTranslateTotal.value + 'px';
});

const windowWidth = ref(
 computed(() => {
  if (process.client) {
   return window.innerWidth;
  }
  return null;
 })
);

// возвращает количество карточек в слайдере, в зависимости от ширины экрана
const cardsCount = computed(() => {
 if (windowWidth.value < 1150 && windowWidth.value > 760) {
  return 2;
 }
 if (windowWidth.value < 760) {
  return 1;
 }
 return 3;
});

// На сколько нужно перенести ряд карточек в слайдере при смене страницы,
// в зависимости от ширины экрана
const pageSwitch = computed(() => {
 if (windowWidth.value < 1150 && windowWidth.value > 760) {
  return 750;
 }
 if (windowWidth.value < 760) {
  return 375;
 }
 return 1125;
});

//Определяет количество страниц в слайдере
const pages = ref([]);
for (let i = 0; i < documents.cards.length / cardsCount.value; i++) {
 pages.value.push({
  id: Math.random(),
  selected: i < 1 ? true : false,
 });
}

//Переключение страниц в слайдере
function switchPageLeft() {
 if (currentPage.value >= 2) {
  currentPage.value--;
  cardsTranslateTotal.value = cardsTranslateTotal.value + pageSwitch.value;
  setPageIndicator(currentPage.value);
 }
}

function switchPageRight() {
 if (currentPage.value < pages.value.length) {
  currentPage.value++;
  cardsTranslateTotal.value = cardsTranslateTotal.value - pageSwitch.value;
  setPageIndicator(currentPage.value);
 }
}

//Устанавливает текущую страницу на индикаторе для слайдера
function setPageIndicator(page) {
 for (let el of pages.value) {
  el.selected = false;
 }
 pages.value[page - 1].selected = true;
}
</script>

<style lang="scss" scoped>
article {
 margin: 0px 0px 98px 0px;
 display: flex;
 flex-direction: column;
 align-items: center;
 width: 1140px;
 grid-gap: 33px;
 h2 {
  font-family: PT Sans;
  font-size: 34px;
  font-weight: 700;
 }
}
.cards-container {
 display: grid;
 grid-gap: 35px;
 grid-template-columns: repeat(3, 1fr);
}
.static-card {
 align-items: center;
 width: 362px;
 height: 161px;
 grid-gap: 15px;
 display: flex;
 padding: 40px 20px;
 background-color: #fbfcfd;
 border-radius: 10px;
 h3 {
  margin-bottom: 10px;
  color: #1253a2;
  font-family: PT Sans;
  font-size: 18px;
 }
 p {
  font-family: PT Sans;
  font-size: 15px;
  font-weight: 400;
 }
}
.switch {
 z-index: 999;
 cursor: pointer;
 position: absolute;
 margin: auto;
 top: 50%;
 bottom: 50%;
}
.switch.left {
 left: 0;
 transform: rotate(180deg);
}
.switch.right {
 right: 0;
}
.pages {
 height: 10px;
 display: flex;
 align-items: center;
 display: flex;
 grid-gap: 10px;
 .dot {
  background-color: #d9d9d9;
  width: 7px;
  height: 7px;
  border-radius: 100%;
  transition: 100ms;
 }
 .dot.selected {
  transition: 100ms;
  width: 10px;
  height: 10px;
  background-color: #007aff;
 }
}
.docs {
 width: 1140px;
 display: flex;
 align-items: center;
 flex-direction: column;
 .list {
  position: relative;
  width: 100%;
  display: flex;
 }
 h2 {
  margin-bottom: 40px;
  font-family: PT Sans;
  font-size: 34px;
  font-weight: 700;
 }
 ul {
  padding: 10px 10px 13px 25px;
  width: 100%;
  overflow: hidden;
  display: flex;
  grid-gap: 35px;
  align-items: flex-start;
  flex-direction: row;
  li {
   transition: 100ms;
   list-style: none;
   transform: translateX(v-bind(translate));
  }
 }
}

@media screen and (max-width: 1150px) {
 .docs {
  width: 764px;
 }
 .cards-container {
  grid-template-columns: repeat(2, 1fr);
 }
 article {
  width: 100%;
  h2 {
   text-align: center;
  }
 }
}
@media screen and (max-width: 760px) {
 .cards-container {
  grid-template-columns: 1fr;
 }
 .docs {
  width: 375px;
  ul {
   padding: 17px;
  }
 }
}
</style>
