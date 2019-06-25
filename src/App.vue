<template>
  <div id="app">
    <form>
      <FormTextInput :placeholder="'Name'"/>
    </form>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>


  </div>
</template>

<script>
import FormTextInput from './components/atoms/FormTextInput.vue';
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'app',
  components: {
    FormTextInput,
    HelloWorld
  }
}
</script>

<style src="./styles/style.scss" lang="scss" />
