<template>
    <div class="background-image">
    <div class="container-fluid">

      <div class="text text-center">
        <p class="display-4" style="color: #black;">Beverage Stroe</p>
        <button class="btn btn-primary" v-on:click="navigateTo('/beverages')">Enjoy</button>
      </div>

    </div>
  </div>
</template>
 
<script>
export default {
  name: 'HelloWorld',
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>
 
<style scoped>
.background-image {
  text-align: center;
  background-image: url('~@/pic/bg2.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}

.container-fluid {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: auto;
  /* background-color: black; */
  height: 100%;
}

.text {
  font-size: 50px;
  -webkit-text-stroke: 1px rgb(230, 226, 150);
}
.display-4{
    font-weight: bold  ;
    color: rgb(242, 228, 187);
    border-color: rgb(230, 204, 204);
    border-width:2px ;
}
.btn {
  background-color: rgb(154, 129, 87);
  border-color: rgb(255, 255, 255);
  border-width: 2px;
}
</style>
 