module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'Snappfood',
        meta: [
            { charset: 'utf-8' },
            { lang: 'fa' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', content: "Nuxt.js project" }
        ],
    },
    loading: { color: '#3B8070' },
    build: {
        vendor: ['babel-polyfill', 'lodash'],
        plugins: [],

    },

    /*
     ** Style of the app
     */
    css: [
        { src: '~/assets/sass/bootstrap/bootstrap.scss', lang: 'scss' },
        { src: '~/assets/sass/app/app.scss', lang: 'scss' }
    ],
    manifest: {
        name: 'Snappfood',
        short_name: 'snappfood',
        dir: 'rtl',
        theme_color: '#3367d6',
        background_color: '#f8f2f6'
    },
    /*
     ** Module declarations
     */
    modules: [
        '@nuxtjs/bootstrap-vue',
        '@nuxtjs/toast',
		'@nuxtjs/axios'
    ],

    plugins: [
        '~/plugins/maps.js'
    ]
}
