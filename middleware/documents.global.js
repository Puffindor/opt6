//Поскольку у /documents нет index страницы то редиректим на главную
export default defineNuxtRouteMiddleware((to, from) => {
 if (to.fullPath === '/documents') {
  return navigateTo('/');
 }
});
