<template>
    <div>
        <snapp-food-navbar class="mb-5" pageTitle="اسنپ‌ فود"></snapp-food-navbar>
        <div class="d-flex w-100 justify-content-center align-items-center" style="height: 80vh">
            <b-button class="p-1 justify-content-center btn-lg text-center mx-auto" @click="findLocation" variant="primary">
                <span class="glyphicon glyphicon-map-marker mr-1"></span>
            </b-button>
        </div>
    </div>
</template>

<style scoped>
.btn {
    border-radius: 50%;
    -webkit-box-shadow: -6px 7px 24px -4px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -6px 7px 24px -4px rgba(0, 0, 0, 0.75);
    box-shadow: -6px 7px 24px -4px rgba(0, 0, 0, 0.75);
}

span.glyphicon {
    font-size: 80px;
}
</style>

<script>
import snappFoodNavbar from '~/components/snappFoodNavbar.vue'
export default {
    layout: 'snappfood',
    // https://newapi.zoodfood.com/mobile/v1/restaurant/new-near?lat=35.7732361&long=51.418727
    methods: {
        async findLocation() {
            let data = (await this.$axios.get('https://newapi.zoodfood.com/mobile/v1/restaurant/new-near?lat=35.7732361&long=51.418727')).data;
            this.$store.commit('restaurants/SET_DATA', {data: data.data, status: data.status});
            if(!data.status) 
                this.$router.push('/problem')
            else 
                this.$router.push('/result')
        }
    }, 
    components: {
        snappFoodNavbar
    }
}
</script>