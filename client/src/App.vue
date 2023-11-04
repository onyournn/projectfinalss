<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

ิ
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
div{
  text-align: center;
}
h2{
  text-align: center;
}
button{
  margin-bottom: 5px;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: #ffe4c4;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  border-radius: 5px;
  border-color: rgb(95, 66, 58);
  border-width: 2px;
}
button:hover {
  box-shadow: 0 10px 12px 0 rgba(0,0,0,0.25);
}
.btn{
  background-color: #ffe4c4;
  border-color: black;
  border-width: 2px;
}

</style>
