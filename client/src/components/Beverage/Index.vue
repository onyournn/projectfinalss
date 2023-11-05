<template>
    <div class="BgColor">
        <div class="container-xl">
            <div class="">
                <div class="table-wrapper">
                    <div class="table-title">
                        <div class="row">
                            <div class="col">
                                <h2>Beverage Store</h2>
                                <div class="col-btn">
                                    <a class="btn btn-secondary" v-on:click="navigateTo('beverage/create')"><i
                                            class="material-icons">&#xE147;</i> <span>Add Beverage</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tablebg">
                        <table class="table table-striped table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>name <i class=""></i></th>
                                    <th>brand</th>
                                    <th>price <i class=""></i></th>
                                    <th>category</th>
                                    <th>Active</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="beverage in beverages" v-bind:key="beverage.id">
                                    <td>{{ beverage.id }}</td>
                                    <td>{{ beverage.name }}</td>
                                    <td>{{ beverage.brand }}</td>
                                    <td>{{ beverage.price }}</td>
                                    <td>{{ beverage.category }}</td>
                                    <td>
                                        <a class="view" title="View" data-toggle="tooltip"
                                            v-on:click="navigateTo('beverage/' + beverage.id)"><i
                                                class="material-icons">&#xE417;</i> </a>

                                        <a class="edit" title="Edit" data-toggle="tooltip"
                                            v-on:click="navigateTo('beverage/edit/' + beverage.id)"><i
                                                class="material-icons">&#xE254;</i> </a>

                                        <a class="delete" title="Delete" data-toggle="tooltip"
                                            v-on:click="deleteBeverage(beverage)"><i class="material-icons">&#xE872;</i>
                                        </a>
                                    </td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import BeverageService from '@/services/BeverageService'

export default {
    data() {
        return {
            beverages: ""
        }
    },
    methods: {

        navigateTo(route) {
            this.$router.push(route)
        },

        async deleteBeverage(beverage) {
            let result = confirm("Want to delete beverage?")
            if (result) {
                try {
                    await BeverageService.delete(beverage)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
            console.log(beverage);
        },
        async refreshData() {
            this.beverages = (await BeverageService.index()).data
        }
    },

    async created() {
        this.beverages = (await BeverageService.index()).data
        console.log(this.beverages);
    }

}
</script>


<style scoped>
/* .container-xl {
} */
.col {
    background-color: #382c18;
    border-radius: 30px;
    margin-top: 1px;
    margin-bottom: 17px;
    padding: 32px;

}

.tablebg {
    background-color: rgb(232, 205, 159);
    margin-bottom: 5px;
    padding: 15px;
    border-radius: 20px;
}

.view {
    color: #53450e;

}
.edit{
    color: #53450e;
}
.delete{
    color: #53450e;
}
.material-icons {
    cursor: pointer;
}



h2 {
    color: rgb(205, 169, 92);
    font-size: 40px;
    font-weight: bold;
    text-shadow: 2px 2px #FFFACD;
}

.btn {
    color: rgb(255, 255, 255);
}

.btn-secondary {
    position: absolute;
    background-color: rgb(220, 194, 149);
    right: 25px;
    bottom: 25px;
}

/* .section{
    background-image: url('');
    background-attachment: fixed;
    height:100vh;
} */</style>
   