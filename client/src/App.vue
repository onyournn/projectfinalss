<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Times New Roman", Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

div {
  text-align: center;
}

h2 {
  text-align: center;
}

button {
  margin-bottom: 5px;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: #ffe4c4;
  box-shadow: 0 8px 16px 0 rgba(244, 88, 88, 0.2);
  border-radius: 5px;
  border-color: rgb(243, 159, 136);
  border-width: 2px;
}

button:hover {
  box-shadow: 0 10px 12px 0 rgba(255, 203, 203, 0.25);
}

.btn {
  background-color: #ffe4c4;
  border-color: rgb(255, 178, 178);
  border-width: 2px;
}</style>
