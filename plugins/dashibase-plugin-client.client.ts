import PluginClient from "@dashibase/plugin-client"

export default defineNuxtPlugin(nuxtApp => {
  return {
    provide: {
      client: () => {
        return new PluginClient()
      },
    }
  }
})
