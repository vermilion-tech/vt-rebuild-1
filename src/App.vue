<template>
  <div id="app">

    <Navbar :pages="pages" />

    <Container>

      <h1>This is an h1 header.</h1>
      <h2>This is an h2 header.</h2>
      <h3>This is an h3 header.</h3>
      <h4>This is an h4 header.</h4>
      <h5>This is an h5 header.</h5>
      <h6>This is an h6 header.</h6>
      <p>This is a paragraph.</p>

      <Row>
        <Column>
          <p>This is a column.</p>
        </Column>
        <Column>
          <p>This is a column.</p>
        </Column>
        <Column>
          <p>This is a column.</p>
        </Column>
      </Row>

      <h1 class="text-center">Contact Us</h1>

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

    </Container>

  </div>
</template>

<script>
import Column from './components/atoms/Column.vue';
import Container from './components/atoms/Container.vue';
import FloatingFormLabel from './components/atoms/FloatingFormLabel.vue';
import FormTextInput from './components/molecules/FormTextInput.vue';
import FormTextArea from './components/molecules/FormTextArea.vue';
import GradientButton from './components/atoms/GradientButton.vue';
import Navbar from './components/molecules/Navbar.vue';
import Row from './components/atoms/Row.vue';
export default {
  name: 'app',
  components: {
    Column,
    Container,
    FloatingFormLabel,
    FormTextArea,
    FormTextInput,
    GradientButton,
    Navbar,
    Row
  },

  data: function() {
    return {
      name: '',
      message: '',
      pages: [
        {
          name: 'Services',
          path: 'services'
        },
        {
          name: 'Projects',
          path: 'projects'
        },
        {
          name: 'About Us',
          path: 'about'
        }
      ]
    }
  }
}
</script>

<style src="./styles/style.scss" lang="scss" />
