<template>
  <nav id="nav" class="row-v-center">
    <b-container>
      <b-row align-v="center" align-h="between">

        <!-- Title -->
        <b-col md="2" lg="2" class="d-none d-md-flex row-v-center row-h-center">
          <h6 class="nav__title">Admin</h6>
        </b-col>

        <!-- Menu bar-->
        <b-col cols="2" sm="2" class="d-flex d-sm-flex d-md-none">
          <button class="mybtn-dark--flat justify-content-md-center">
            <vs-icon icon="menu" size="small" color="blue"></vs-icon>
          </button>
        </b-col>

        <!-- Actions -->
        <b-col sm="8" md="5" lg="5" class="d-none d-sm-block">
          <b-row align-v="center">
            <!-- Search input -->
            <b-col id="col__controls">
              <b-form-input size="sm"
                            placeholder="Search"
                            v-model="input.search"
                            @focus="focusInputSearch"
                            @blur="blurInputSearch"
              ></b-form-input>
            </b-col>

            <!-- Actions buttons -->
            <b-col id="col__actions">
              <ul class="nav__items flex fj-around">
                <li v-for="button in actionsMenu" :key="button.id">
                  <button :class="button.class">
                    <vs-icon :icon="button.icon" size="small"></vs-icon>
                  </button>
                </li>
              </ul>
            </b-col>
          </b-row>
        </b-col>

        <!-- Links-->
        <b-col md="4" lg="4" class="row-v-center row-h-center d-none d-sm-none d-md-block">
          <ul class="nav__items row-v-center row-h-center fj-around">
            <li
              v-for="menu in navMenu"
              :key="menu.id"
            >
              <router-link :to="menu.href" class="nav__item">{{ menu.name }}</router-link>
            </li>
          </ul>
        </b-col>

        <!-- Profile button-->
        <b-col cols="2" sm="2" md="1" lg="1" class="row-h-center">
          <vs-avatar size="small"
                     id="nav__avatar"
                     @click="TOGGLE_PROFILE_ASIDE"
          ></vs-avatar>
        </b-col>
      </b-row>
    </b-container>
  </nav>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      input: {
        search: ''
      },

      navMenu: [
        {
          name: 'Home',
          href: '/'
        },
        {
          name: 'Projects',
          href: '/projects'
        },
        {
          name: 'Tasks',
          href: '/tasks'
        }
      ],

      actionsMenu: [
        {
          title: 'New project',
          class: 'mybtn-success--flat',
          icon: 'add',
          action: 'newProject'
        },
        {
          title: 'New task',
          class: 'mybtn-default--flat',
          icon: 'list',
          action: 'newTask'
        }
      ],

      profile: {
        title: 'Profile',
        image: '',
        component: 'vs-avatar'
      }
    }
  },

  methods: {
    ...mapMutations('ui', ['TOGGLE_PROFILE_ASIDE']),

    focusInputSearch: () => document.getElementById('col__actions').classList.add('d-none'),

    blurInputSearch: () => document.getElementById('col__actions').classList.remove('d-none')
  }
}
</script>

<style lang="stylus" scoped>
#nav
  min-height 44px
  max-height 44px
  box-shadow 0px 0px 25px -8px lightgrey
.input
  width 100%
  transition all 2s
.nav__items
  width 100%
  margin 0
  padding 0
  li
    list-style-type none
.nav__title
  font-weight 600
  margin 0
  padding 0
#nav__avatar
    min-width 24px !important
    min-height 24px !important
</style>
