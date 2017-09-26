<template>
    <section dir="rtl">
        <div class="content">
            <snapp-food-navbar class="mb-5" pageTitle="رستوران‌های نزدیک من" search="true">
                <b-button slot="navigation" class="glyphicon glyphicon-chevron-right back-button" @click="back"></b-button>
                <div slot="buttons" class="mt-1">
                    <b-button-group style="direction: ltr">
                        <b-button class="text-center" @click="list">لیست</b-button>
                        <b-button class="text-center" @click="map">نقشه</b-button>
                    </b-button-group>
                </div>
                <div slot="search">
                    <b-form-input type="search" 
                                class="w-75 text-center search-input" 
                                slot="navBarContent" 
                                placeholder="جستجو">
                    </b-form-input>
                </div>
            </snapp-food-navbar>
            <div class="container-fluid p-0">
                <nuxt/>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .search-input {
        position: absolute; top: 110px; right: 12.5%; background: white
    }

    .back-button {
        position: absolute;
        right: 10px;
        top: 20px;
        background: transparent;
    }
</style>

<script>
    import snappFoodNavbar from '~/components/snappFoodNavbar.vue'
    export default{
        components: {
            snappFoodNavbar
        },
        methods: {
            list() {
                this.$router.push('/result')
            },
            map() {
                this.$router.push('/result/map')
            },
            back() {
                this.$router.push('/')
            }
        }
    }
</script>
