<template>
  <div id="app">
    <form style="max-width: 400px;">
      <FormTextInput placeholder="Name"/>
      <FormTextArea placeholder="Message" rows="6"/>
    </form>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

  </div>
</template>

<script>
import FormTextInput from './components/atoms/FormTextInput.vue';
import FormTextArea from './components/atoms/FormTextArea.vue';
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'app',
  components: {
    FormTextArea,
    FormTextInput,
    HelloWorld
  }
}
</script>

<style src="./styles/style.scss" lang="scss" />
