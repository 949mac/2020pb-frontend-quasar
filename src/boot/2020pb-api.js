// import something here

import axios from 'axios'

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
export default async ({ store }/* { app, router, Vue ... } */) => {
  return axios.get('https://api.846policebrutality.com/api/incidents?include=evidence').then((res) => {
    console.log(res.data.data)
    store.dispatch('incidents/storeIncidents', { data: res.data.data })
  })
}
