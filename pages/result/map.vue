<template>
    <div>
        <div class="p-1">
            <div class="map-container w-100 mt-4 mx-auto">
                <GmapMap style="width: 100%; height: 100%;" :zoom="15" :center="{lat: 35.7732361, lng: 51.418727}">
                    <GmapMarker v-for="vendor in vendors" :key="vendor.id" :icon="image" :shape="shape" @click="openRestaurnat(vendor)" :position="{lat: vendor.lat, lng: vendor.lon}" />
                </GmapMap>
                <transition name="fade" mode="out-in">
                    <div class="w-50">
                        <snapp-vendor style="position: absolute; bottom: 20px;" v-if="selectedVendor != ''" :vendor="selectedVendor">
                        </snapp-vendor>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<style scoped>
.map-container {
    height: 500px;
}
</style>

<script>
import { mapGetters } from 'vuex';
import snappVendor from '~/components/snappVendor.vue'
export default {
    layout: 'resultMap',
    computed: {
        ...mapGetters({
            vendors: 'restaurants/vendors'
        })
    },
    data() {
        var image = {
            url: 'https://lh3.ggpht.com/QZjCEmi1T4U62vjYCQ-78KDEYwPfFXSv27_XU-MmE9fNtprQ_Z3KlyrZJOw3SrdTmw=w300',
            // This marker is 20 pixels wide by 32 pixels high.
            size: new google.maps.Size(300, 300),
            // The origin for this image is (0, 0).
            origin: new google.maps.Point(0, 0),
            // The anchor for this image is the base of the flagpole at (0, 32).
            anchor: new google.maps.Point(0, 0),
            scaledSize: new google.maps.Size(40, 40)
        };
        // Shapes define the clickable region of the icon. The type defines an HTML
        // <area> element 'poly' which traces out a polygon as a series of X,Y points.
        // The final coordinate closes the poly by connecting to the first coordinate.
        var shape = {
            coords: [0, 0, 40, 0, 40, 40, 0, 40, 0, 0],
            type: 'poly'
        };



        return {
            image,
            shape,
            selectedVendor: ''
        }
    },
    components: {
        snappVendor,
    },
    methods: {
        openRestaurnat(vendor) {
            this.selectedVendor = vendor
        }
    }
}
</script>