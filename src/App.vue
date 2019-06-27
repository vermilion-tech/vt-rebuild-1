<template>
  <div id="app">
    <form style="max-width: 400px;">

      <FormTextArea id="bar" rows="6" placeholder="I hope it's something nice"
        v-model="message">
        <FloatingFormLabel element-id="bar" name="Message"/>
      </FormTextArea>

      <FormTextInput id="foo" placeholder="Self-explanatory" v-model="name">
        <FloatingFormLabel element-id="foo" name="Name"/>
      </FormTextInput>

      <GradientButton>
        Send Send Send!
      </GradientButton>
      <GradientButton :filled="true">
        Send With Style!
      </GradientButton>
    </form>

    <Container>
      <h1>This is an h1 header.</h1>
      <h2>This is an h2 header.</h2>
      <h3>This is an h3 header.</h3>
      <h4>This is an h4 header.</h4>
      <h5>This is an h5 header.</h5>
      <h6>This is an h6 header (holy shit this is small).</h6>
    </Container>

  </div>
</template>

<script>
import Container from './components/atoms/Container.vue';
import FloatingFormLabel from './components/atoms/FloatingFormLabel.vue';
import FormTextInput from './components/atoms/FormTextInput.vue';
import FormTextArea from './components/atoms/FormTextArea.vue';
import GradientButton from './components/atoms/GradientButton.vue';
export default {
  name: 'app',
  components: {
    Container,
    FloatingFormLabel,
    FormTextArea,
    FormTextInput,
    GradientButton,
  },

  data: function() {
    return {
      name: '',
      message: ''
    }
  }
}
</script>

<style src="./styles/style.scss" lang="scss" />
