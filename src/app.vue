<template >
  <div class="container">Hello {{bundler}},token info {{token}}</div>
</template>
<script lang="ts">
import Vue from "vue";
import { UserLogin } from "./user";
import Component from "vue-class-component";
@Component
export default class App extends Vue {
  bundler = "demo";
  token = "";
  data() {
    return {
      bundler: "Parcel",
      token: new UserLogin().token,
      version: "v1"
    };
  }
}
</script>

<style lang="scss" scoped>
.container {
  color: green;
}
</style>