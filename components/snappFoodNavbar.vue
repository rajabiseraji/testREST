<template>
    <b-navbar sticky toggleable="false" class="text-center justify-content-center" type="inverse" variant="primary">
        <b-row class="w-100 text-center justify-content-center">
            <b-navbar-brand>
                {{ pageTitle }}
            </b-navbar-brand>
            <slot name="navigation">
                
            </slot>
        </b-row>
        <b-row>
            <slot name="buttons">    
            </slot>
        </b-row>
        <slot name="search">
        </slot>
    </b-navbar>
</template>

<style scoped>
    .navbar-brand {
        color: whitesmoke;
        font-size: 14px;
    }
</style>


<script>
export default {
    props: {
        pageTitle: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            hello: ''
        }
    }
}
</script>