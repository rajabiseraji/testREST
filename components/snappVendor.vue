<template>
    <b-row class="w-100 m-1">
        <b-card class="w-100" text-variant="black">
            <b-row>
                <b-col cols="2" class="p-0 m-0 align-items-center">
                    <b-img-lazy width="100px" height="100px" fluid rounded class="mr-2 logo-image" :src="vendor.logo">
                    </b-img-lazy>
                </b-col>
                <b-col cols="8" class="align-items-start stuff">
                    <h5>{{vendor.title}}</h5>
                    <p class="mt-auto">{{vendor.address}}</p>
                </b-col>
                <b-col cols="2">
                    <b-badge variant="success">{{vendor.rating.toFixed(2)}}</b-badge>
                </b-col>
            </b-row>
        </b-card>
    </b-row>
</template>

<style scoped>
.logo-image img {
    /* max-width: 100px; */
    /* max-height: 100px; */
}


/* .stuff {
        font-size: 10px;
    }
    .stuff h5 {
        font-size: 12px;
    } */

</style>

<script>
export default {
    props: {
        // title: {
        //     type: String
        // }, 
        // logo: {
        //     type: String
        // },
        // badges: {
        //     type: Array
        // },
        // isOpen: {
        //     type: String
        // },
        // address: {
        //     type: String
        // }
        vendor: {
            type: Object
        }
    }
}
</script>