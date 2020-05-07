<template>
  <div id="app">
    <!-- Profile Aside its parent is body -->
    <ProfileAside />

    <b-container fluid>
      <b-row>
        <b-col class="dev" md="2" lg="2">
          <!-- Left sidebar -->
          <div id="left_aside">
            <Sidebar />
          </div>
        </b-col>

        <b-col class="dev w-100" md="10" lg="10">
          <!-- Main view -->
          <main id="main">
            <!-- Navbar -->
            <Navbar />
            <router-view />
          </main>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
import Navbar from './components/Principal/Navbar'
import ProfileAside from '@/components/Principal/ProfileAside'
import Sidebar from '@/components/Principal/Sidebar'

export default {
  components: {
    Navbar,
    ProfileAside,
    Sidebar
  }
}
</script>

<style lang="stylus">
@import './assets/stylus/base';

#app
  border 1px solid black
  min-height 100vh

#left_aside
  border 1px solid blue
  background-color beige

#main
  border 1px solid orange
</style>
