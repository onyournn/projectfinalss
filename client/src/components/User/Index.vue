<template>
    <div>
        <h1>Edit Chair</h1>
        <form v-on:submit.prevent="editChair">
            <p>Name : <input type="text" v-model="chair.ChairName"></p>
            <p>Material : <input type="text" v-model="chair.ChairMaterial"> </p>
            <p>Color : <input type="text" v-model="chair.ChairColor"> </p>
            <p>Size : <input type="text" v-model="chair.ChairSize"> </p>
            <p>Price : <input type="text" v-model="chair.ChairPrice"> </p>
            <p><button type="submit">Edit chair</button></p>
            <button v-on:click="navigateTo('/chairs')">กลับ</button>
        </form>
        <hr>
        <div>
            <p>Name: {{ chair.ChairName }}</p>
            <p>Material: {{ chair.ChairMaterial }}</p>
            <p>Color: {{ chair.ChairColor }}</p>
            <p>Size: {{ chair.ChairSize }}</p>
            <p>Price: {{ chair.ChairPrice }}</p>
            <p></p>
        </div>
    </div>
</template>
<script>
import ChairService from '@/services/ChairService'
export default {
    data() {
        return {
            chair: {
                ChairName: '',
                ChairMaterial: '',
                ChairColor: '',
                ChairSize: '',
                ChairPrice: '',
                status:'active'
            }
        }
    },
    methods: {
        async editChair() {
            try {
                await ChairService.put(this.chair)
                this.$router.push({
                    name: 'chairs'
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    async created() {
        try {
            let chairId = this.$route.params.chairId
            this.chair = (await ChairService.show(chairId)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>

<style scoped></style>