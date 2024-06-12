<template>
 <header>
  <nav>
   <NuxtLink to="/">
    <img src="@/assets/logo.svg" alt="logo" />
   </NuxtLink>
   <NuxtLink to="/priceList">Тарифы</NuxtLink>
   <NuxtLink to="/contacts">Контакты</NuxtLink>
  </nav>
  <div>
   <p>+7 495 118-44-22</p>
   <base-button mode="flat">
    <NuxtLink to="/login">Вход</NuxtLink>
   </base-button>
   <button>
    <NuxtLink to="/registration">Регистрация</NuxtLink>
   </button>
  </div>
 </header>
</template>

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
 padding: 9px 18px;
 transition: 100ms;
}
button:hover {
 transition: 100ms;
 background-color: #046dcf;
}
header {
 width: 100%;
 justify-content: space-between;
 padding: 0px 20%;
 display: flex;
 align-items: center;
 height: 60px;
 background-image: linear-gradient(90deg, #000000 30%, #1c2734 73%);
 a {
  text-decoration: none;
  display: flex;
  align-items: center;
  font-family: PT Sans;
  font-size: 18px;
  font-weight: 400;
  color: white;
 }
 nav {
  display: flex;
  grid-gap: 30px;
 }
 div {
  align-items: center;
  display: flex;
  grid-gap: 30px;
  p {
   font-family: PT Sans;
   font-size: 18px;
   font-weight: 700;
   color: white;
  }
 }
}
@media screen and (max-width: 1280px) {
 header {
  padding: 0 5%;
 }
}
@media screen and (max-width: 850px) {
 header {
  padding: 10px 5%;
  grid-gap: 15px;
  height: auto;
  display: flex;
  flex-direction: column;
  div {
   grid-gap: 0;
   p {
    font-size: 14px;
   }
  }
 }
}
</style>
