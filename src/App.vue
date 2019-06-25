<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <form>
      <FormTextInput :placeholder="'Name'"/>
    </form>
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
