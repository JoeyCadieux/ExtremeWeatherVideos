<template>
  <div id="app">
    <nav-component>Home</nav-component>
    <Home msg="Extreme Weather videos"/>
  </div>
</template>

<script>
import Home from "./components/Home";
import Pagefooter from "./components/Pagefooter";
import Navigation from "./components/Navigation";

export default {
  name: "App",
  components: {
    Home,
    Pagefooter,
    Navigation
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
