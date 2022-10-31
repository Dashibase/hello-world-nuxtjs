<template>
  <div class="container">
    <h1>Hello World!</h1>

    <p>After you enter your plugin URL, you will receive the following setup data from Dashibase to use in your plugin:</p>
    <ul>
      <li>columnIds: {{ setupData && setupData.columnIds ? setupData.columnIds.join(', ') : 'Loading' }}</li>
      <li>id: {{ setupData ? setupData.id : 'Loading' }}</li>
      <li>messageType: {{ setupData ? setupData.messageType : 'Loading' }}</li>
      <li>store: {{ setupData ? setupData.store : 'Loading' }}</li>
    </ul>

    <p>You can use then the columnIds to pull any info about the item (e.g. email address, Stripe ID, etc.) to use in your plugin.</p>
    <p>If you have any questions, check out <a href="https://dashibase.com/docs">our documentation and guide</a> or email us at sk@dashibase.com.</p>
  </div>
</template>

<script setup lang="ts">

const setupData = ref(null)
const { $client } = useNuxtApp()

onMounted(() => {
  const client = $client()

  client.onSetup((data: any) => {
    // Prints a log when a SETUP message is received
    console.log(`Received SETUP message ${JSON.stringify(data)}`)
    setupData.value = data
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
