<template>
  <b-container>
    <b-row>
      <b-col class="dev" v-for="col in 8" :key="col">{{ col }}</b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>

<style scoped></style>
