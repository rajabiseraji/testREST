<template>
    <div class="app" v-else>
        <div class="app-body white bg-auto w-full">
            <div class="text-center pos-rlt p-y-md">
                <h1 class="text-shadow m-a-0 text-muted text-4x">
                    <span class="text-2x font-bold block m-t-lg">{{_error.statusCode}}</span>
                </h1>
                <template v-if="_error.statusCode === 404">
                    <h2 class="h1 m-y-lg text-black">این صفحه وجود ندارد.</h2>
                </template>
                <template v-else>
                    <h2 class="h1 m-y-lg text-black">متاسفانه خطایی رخ داد.</h2>
                    <p class="h5 m-y-lg text-u-c font-bold text-black">
                        <span>خطای رخ داده به طور خودکار گزارش شد و پیگیری می شود.</span>
                        <br>
                        <br>
                        <small><code>{{_error.message}}</code></small>
                    </p>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['error'],
        computed: {
            _error(){
                let e = this.error;

                if (typeof e != 'object')
                    e = {message: e + ''};

                return Object.assign({
                    statusCode: 520,
                    message: ''
                }, e)
            }
        },
        head () {
            return {
                title: 'خطای ' + this._error.statusCode
            }
        }
    }
</script>

