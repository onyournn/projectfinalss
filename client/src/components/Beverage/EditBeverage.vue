<template>
  <div>
    <div class="BgColor">
      <h1>Edit Beverage</h1>
      <hr>
      <form v-on:submit.prevent="editBeverage">
        <p>name : <input type="text" v-model="beverage.name"></p>
        <p>brand : <input type="text" v-model="beverage.brand"> </p>
        <p>price : <input type="text" v-model="beverage.price"> บาท</p>
        <p>category: <input type="text" v-model="beverage.category"> </p>
        <p><button type="submit" class="btn">Edit beverage</button></p>
      </form>
      <button v-on:click="navigateTo('/beverages')">back</button>
      <hr>
      <h1>Show Detail</h1>
        <p>ID : {{ beverage.id }}</p>
        <p>ชื่อเครื่องดื่ม : {{ beverage.name }}</p>
        <p>ยี่ห้อ : {{ beverage.brand }}</p>
        <p>ราคา : {{ beverage.price }} บาท</p>
        <p>หมวดหมู่ : {{ beverage.category }}</p>
        <hr>
    </div>
  </div>
</template>

<script>

import BeverageService from '@/services/BeverageService'

export default {
  data() {
    return {
      beverage: {
        name: '',
        brand: '',
        price: '',
        category: '',
      }
    }
  },

  methods: {
    navigateTo(route) {
      this.$router.push(route)
    },

    async editBeverage() {
      try {
        await BeverageService.put(this.beverage)
        this.$router.push({ name: 'beverages' })
      } catch (err) {
        console.log(err)
      }
    }
  },

  async created() {
    try {
      let beverageId = this.$route.params.beverageId
      this.beverage = (await BeverageService.show(beverageId)).data
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style scoped>
.button {
  background-color: #ffe4c4;
  border-color: rgb(255, 178, 178);
  border-width: 2px;
}
h1 {
    color: #3f312d;
    margin-bottom: 10px;
    font-size: 50px;
    padding: 5px;
    font-weight: bold;
}
.BgColor {
  background-color: rgb(248, 245, 240);
  padding: 50px;
  height: 150vh;
}
</style>