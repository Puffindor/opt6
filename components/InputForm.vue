<template>
 <div class="from">
  <form>
   <h1>Проверьте штрафы и зарегистрируйтесь в 1 клик</h1>
   <div class="inputs">
    <base-input
     title="Номер автомобиля"
     class="a"
     :isValid="fromInput.autoNumber.isValid"
     :value="fromInput.autoNumber.value"
     @input="fromInput.autoNumber.value = $event.target.value"
    />
    <base-input
     title="Регион"
     class="b"
     :isValid="fromInput.region.isValid"
     :value="fromInput.region.value"
     @input="fromInput.region.value = $event.target.value"
    />
    <base-input
     title="Свидетельство о регистрации ТС"
     class="long"
     :isValid="fromInput.registration.isValid"
     :value="fromInput.registration.value"
     @input="fromInput.registration.value = $event.target.value"
    />
   </div>
   <div class="btns">
    <base-button @click.prevent="sendData"
     >Проверить штрафы &nbsp; <img src="@/assets/arrow.svg" alt="arrow"
    /></base-button>
    <base-button @click.prevent="togglePopup" mode="flatBorder">
     <div class="about-btn">
      <img src="@/assets/youtube-logo.svg" alt="youtube logo" />
      О сервисе &nbsp;
      <span> (1 мин. 20 сек)</span>
     </div>
    </base-button>
   </div>
   <p>
    Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки
    персональных данных и принимаете оферту
   </p>
  </form>
  <img class="from-img" src="@/assets/from.png" alt="service preview image" />
  <Teleport to="body">
   <base-popup v-if="showPopup" @close="togglePopup">
    <iframe
     frameborder="0"
     allow="autoplay"
     src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1 "
    />
   </base-popup>
  </Teleport>
 </div>
</template>

<script setup>
const fromInput = reactive({
 autoNumber: {
  value: null,
  isValid: true,
 },
 region: {
  value: null,
  isValid: true,
 },
 registration: {
  value: null,
  isValid: true,
 },
});
const showPopup = ref(false);

//Простая валидация данных формы при нажатии на отправку
function checkValidity() {
 let isValid = true;
 for (let el in fromInput) {
  if (!fromInput[el].value) {
   fromInput[el].isValid = false;
   isValid = false;
  } else {
   fromInput[el].isValid = true;
  }
 }
 return isValid;
}

function sendData() {
 if (checkValidity()) {
  alert('Данные отправлены');
  return;
 }
 alert('Все поля должны быть заполнены');
}

function togglePopup() {
 showPopup.value = !showPopup.value;
}
</script>

<style lang="scss" scoped>
iframe {
 height: 555px;
 width: 960px;
}
.about-btn {
 display: flex;
 align-items: center;
 justify-content: center;
 img {
  margin-right: 5px;
 }
 span {
  color: #1253a2;
 }
}
.btns {
 grid-gap: 21px;
 display: flex;
}
.from {
 display: grid;
 grid-gap: 40px;
 margin: 80px 0px 98px;
 grid-template-columns: 620px max-content;
 width: 1140px;
}
form {
 width: 100%;
 p {
  margin-top: 16px;
  font-family: PT Sans;
  font-size: 13px;
  font-weight: 400;
  color: #8f8f8f;
 }
 h1 {
  font-family: PT Sans;
  font-size: 41px;
  font-weight: 700;
  margin-bottom: 25px;
 }
 .inputs {
  margin-bottom: 15px;
  grid-column-gap: 30px;
  display: grid;
  grid-template-columns: 60% auto;
  grid-row-gap: 15px;
  grid-template-areas:
   'inputA inputB'
   'long long';
  div {
   grid-area: input;
  }
  .input.long {
   height: fit-content;
   grid-area: long;
  }
  .input.a {
   grid-area: inputA;
  }
  .input.b {
   grid-area: inputB;
  }
 }
}
@media screen and (max-width: 1280px) {
 iframe {
  height: 555px;
  width: 960px;
 }
 form {
  width: 80%;
 }
 .from {
  width: 100%;
  display: flex;
  justify-content: center;
 }
 .from-img {
  display: none;
 }
}

@media screen and (max-width: 1000px) {
 iframe {
  height: 405px;
  width: 710px;
 }
}

@media screen and (max-width: 760px) {
 iframe {
  height: 205px;
  width: 360px;
 }
 form {
  .inputs {
   display: flex;
   flex-direction: column;
  }
  h2 {
   font-size: 35px;
  }
 }
 .btns {
  flex-direction: column;
 }
}
</style>
