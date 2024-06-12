<template>
 <div class="input">
  <label :class="{ invalid: !props.isValid }">{{ props.title }}</label>
  <input :class="{ invalid: !props.isValid }" :value="props.value" />
 </div>
</template>

<script setup>
const props = defineProps({
 isValid: {
  type: Boolean,
 },
 title: {
  type: String,
 },
 value: {
  type: String,
 },
});
</script>

<style lang="scss" scoped>
.input {
 width: 100%;
 display: flex;
 flex-direction: column;
 input {
  outline: none;
  padding: 12px;
  border: 1px solid #bcbcbc;
  border-radius: 5px;
 }
 input:focus {
  transition: 100ms;
  border-color: #0584fe;
 }
 input.invalid {
  border-color: red;
 }
 label.invalid {
  color: red;
 }
 label {
  color: black;
  font-family: PT Sans;
  font-size: 12px;
  font-weight: 400;

  margin-bottom: 5px;
 }
}
</style>
