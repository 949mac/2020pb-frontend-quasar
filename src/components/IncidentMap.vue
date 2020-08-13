<template>
  <section>
        <GmapMap
          ref="mapRef"
          :center="{ lat:39.8333333, lng:98.585522*-1}"
          :cluster="{ options: { styles: clusterStyle } }"
          class="incident-map"
          map-type-id="terrain"
        >

          <GmapCluster :gridSize="50">
          <GmapMarker
            :key="index"
            v-for="(m, index) in $store.getters['incidents/incidents']"
            :position="{ lat: m.geocoding.lat * 1, lng: m.geocoding.long *1 }"
            :clickable="true"
            :draggable="true"
            @click="center=m.position"
          />
          </GmapCluster>
        </GmapMap>
  </section>
</template>

<script>
export default {
  name: 'IncidentMap',
  data () {
    return {
      mapOptions: {
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        gestureHandling: 'cooperative'
        // styles: darkMapStyle
      },
      clusterStyle: [
        {
          url:
            'https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/packages/markerclustererplus/images/m3.png',
          width: 66,
          height: 66,
          textColor: '#fff'
        }
      ]
    }
  },
  mounted () {
    // At this point, the child GmapMap has been mounted, but
    // its map has not been initialized.
    // Therefore we need to write mapRef.$mapPromise.then(() => ...)

    const $vm = this

    this.$refs.mapRef.$mapPromise.then(() => {
      // const b = new window.google.maps.LatLngBounds()

      const b = [
        { lat:39.8333333, lng:98.585522*-1},
        { lat:39.8333333, lng:98.585522*-1}
      ]

      $vm.$refs.mapRef.fitBounds(b)
    })

    // this.$refs.mapRef.$mapPromise.then((map) => {
    //   const bounds = this.$refs.mapRef.$mapObject.getBounds()
    //
    //   map.fitBounds(bounds)
    // })
  }
}
</script>

<style scoped>
  .incident-map {
    width: 100%;
    height: 100vh;
    min-width: 600px;
  }
</style>
