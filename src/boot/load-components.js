// import something here

import Embed from 'v-video-embed'
// import Plugin from '@quasar/quasar-ui-qmediaplayer'
import '@quasar/quasar-ui-qmediaplayer/dist/index.css'
// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
export default async ({ Vue }/* { app, router, Vue ... } */) => {
  // something to do

  Vue.use(Embed)

  // Vue.use(Plugin)
}
