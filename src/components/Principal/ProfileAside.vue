<template lang="html">

  <div id="parentx">

    <vs-sidebar position-right
                parent="body"
                default-index="1"
                color="primary"
                class="sidebarx"
                spacer
                v-model="profile.active">

      <div class="header-sidebar" slot="header">
        <vs-avatar  size="70px"
                    src="https://randomuser.me/api/portraits/men/85.jpg"/>

        <h6>
          {{ profile.name }}
        </h6>

      </div>

      <vs-sidebar-item index="1" icon="question_answer">
        Dashboard
      </vs-sidebar-item>

      <vs-sidebar-item index="2" icon="gavel">
        Last created tasks
      </vs-sidebar-item>

      <vs-divider icon="person" position="left">
        User
      </vs-divider>

      <vs-sidebar-item index="4" icon="account_box">
        Profile
      </vs-sidebar-item>

      <vs-sidebar-item index="3" icon="verified_user">
        Configuration
      </vs-sidebar-item>

      <div class="footer-sidebar" slot="footer">
        <vs-button icon="reply" color="danger" type="flat">log out</vs-button>
      </div>

    </vs-sidebar>
  </div>

</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState('ui', ['profile'])
}
</script>

<style lang="stylus">
.header-sidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  h4 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    > button {
      margin-left: 10px;
    }
  }
}

.footer-sidebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > button {
    border: 0px solid rgba(0, 0, 0, 0) !important;
    border-left: 1px solid rgba(0, 0, 0, 0.07) !important;
    border-radius: 0px !important;
  }
}
</style>
