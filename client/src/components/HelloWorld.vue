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
  background-image: url('~@/pic/bg5.jpg');
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

.display-4{
    font-weight: bold  ;
    color: rgb(255, 236, 178);
    border-color: rgb(235, 219, 219);
    border-width:2px ;
    /* font-size: 50px; */
  -webkit-text-stroke: 1px rgb(65, 57, 12);
}
.btn {
  background-color: rgb(100, 75, 50);
  border-color: rgb(100, 75, 50);
  border-width: 2px;
}
</style>
 