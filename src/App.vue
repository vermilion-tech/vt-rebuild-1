<template>
  <div id="app">

    <Navbar :pages="pages" />

    <router-view>
    </router-view>

  </div>
</template>

<script>
import Navbar from './components/molecules/Navbar.vue';
export default {
  name: 'app',
  components: {
    Navbar
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
