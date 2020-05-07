export default {
  namespaced: true,

  state: {
    //
    // Notification model
    //
    notification: {
      title: '',
      text: '',
      icon: '',
      color: '',
      position: 'top-right',
      time: 8000
    },
    //
    // Profile sidebar state
    //
    profile: {
      active: false,
      name: 'Ángel Guerrero',
      image: ''
    }
  },

  mutations: {
    SHOW_NOTIFICATION: ({ notification }, { vm, pTitle, pMessage, pType }) => {
      notification.title = pTitle
      notification.text = pMessage

      switch (pType) {
        case 'success':
          notification.icon = 'favorite'
          notification.color = 'success'
          break
        case 'danger':
          notification.icon = 'chat'
          notification.color = 'danger'
          break
        case 'warning':
          notification.icon = 'chat'
          notification.color = 'warning'
          break
        case 'error':
          notification.icon = 'error'
          notification.color = 'danger'
          break
        default:
          notification.icon = 'favorite'
          notification.color = 'success'
          break
      }

      vm.$vs.notify({
        title: notification.title,
        text: notification.text,
        icon: notification.icon,
        color: notification.color,
        position: notification.position,
        time: notification.time
      })

      //
      // Reset the notification data
      notification = {
        title: '',
        text: '',
        icon: '',
        color: '',
        position: 'top-right',
        time: 8000
      }
    },

    TOGGLE_PROFILE_ASIDE: ({ profile }, pOptions) => {
      profile.active = !profile.active
    }
  }
}
