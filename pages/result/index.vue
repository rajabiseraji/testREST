<template>
<div>
    <div class="p-1 pl-3">
        <snapp-vendor v-for="(vendor, index) in vendors" v-if="index < 10" :key="vendor.id" :vendor="vendor">
        </snapp-vendor>
    </div>
</div>
</template>

<style scoped>
</style>

<script>
import {mapGetters} from 'vuex';
import snappVendor from '~/components/snappVendor.vue'
export default {
    layout: 'resultMap',
    computed: {
        ...mapGetters({
            vendors: 'restaurants/vendors'
        })
    },
    components: {
        snappVendor,
    }
}
</script>