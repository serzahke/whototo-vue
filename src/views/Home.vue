<template>
  <div class="container">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <form-builder></form-builder>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import FormBuilder from "@/components/FormBuilder";
export default {
  name: 'Home',
  components: {
    FormBuilder
    // HelloWorld
  }
}
</script>
