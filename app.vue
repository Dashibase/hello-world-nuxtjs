<template>
  <div className="container">
    <h1>Hello World!</h1>

    <p>After you enter your plugin URL, you will receive the following setup data from Dashibase to use in your plugin:</p>
    <ul>
      <li>columnIds: 
        <span v-if="message">{{message.columnIds.join(', ')}}</span>
        <span v-else>Loading</span>
      </li>
      <li>id: 
        <span v-if="message">{{message.id}}</span>
        <span v-else>Loading</span>
      </li>
      <li>messageType: 
        <span v-if="message">{{message.messageType}}</span>
        <span v-else>Loading</span>
      </li>
      <li>store: 
        <span v-if="message">{{message.store}}</span>
        <span v-else>Loading</span>
      </li>
    </ul>

    <p>You can use then the columnIds to pull any info about the item (e.g. email address, Stripe ID, etc.) to use in your plugin.</p>
    <p>If you have any questions, check out <a href="https://dashibase.com/docs">our documentation and guide</a> or email us at sk@dashibase.com.</p>
  </div>
</template>

<script setup lang="ts">

const message = ref(null)
const { $client } = useNuxtApp()

onMounted(() => {
  const client = $client()

  client.onSetup((payload: any) => {
    // Prints a log when a SETUP message is received
    console.log(`Received SETUP message ${JSON.stringify(payload)}`)
    message.value = payload
  })
  
  // Inform Dashibase that plugin is ready to be setup
  client.init()
})
</script>


<style>

html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

.container {
  padding: 0 2rem;
}

.container a {
  color: #FF6069;
}

</style>
