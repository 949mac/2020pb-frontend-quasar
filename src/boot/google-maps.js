// import something here
import * as VueGoogleMaps from 'vue2-google-maps'
import GmapCluster from 'vue2-google-maps/dist/components/cluster' // replace src with dist if you have Babel issues

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
export default async ({ Vue }/* { app, router, Vue ... } */) => {
  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyDqzKzZg0EY3870ZMvHuqlVY4qExqcdN8M',
      libraries: 'places'

      // v: '3.26',
    },

    installComponents: true
  })
  Vue.component('GmapCluster', GmapCluster)
}
