<template>
    <vs-row class="dev">
      <vs-col class="dev">
        <vs-input
          class="total inputx"
          placeholder="Nueva etiqueta"
          v-model="tag.name"
          @keyup.enter="save()"
        />
      </vs-col>

      <vs-col class="dev">
        <vs-chip
          v-for="tag of tags"
          :key="tag.id"
          color="primary"
          @click="remove(tag)"
          closable
        >{{ tag.name }}</vs-chip>
      </vs-col>
    </vs-row>
</template>

<script>
import { tagsCollection } from '@/firebase'
import { mapMutations } from 'vuex'

export default {
  created () {
    tagsCollection.onSnapshot(querySnapshot => {
      //
      // Prevents show all the changes
      // in the initial state of firebase
      if (this.initialFirebaseLoad === false) {
        this.initialFirebaseLoad = true
        return
      }

      querySnapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
          this.SHOW_NOTIFICATION({
            vm: this,
            pTitle: 'New Tag',
            pMessage: `Tag: "${change.doc.data().name}"`
          })
        }

        if (change.type === 'modified') {
          this.SHOW_NOTIFICATION({
            vm: this,
            pTitle: 'Modified tag',
            pMessage: `Tag: "${change.doc.data().name}"`,
            pType: 'warning'
          })
        }

        if (change.type === 'removed') {
          this.SHOW_NOTIFICATION({
            vm: this,
            pTitle: 'Deleted tag',
            pMessage: `Tag: "${change.doc.data().name}"`,
            pType: 'danger'
          })
        }
      })
    })
  },

  data () {
    return {
      initialFirebaseLoad: false,

      tag: {
        name: null
      },

      tags: []
    }
  },

  firestore: {
    tags: tagsCollection
  },

  methods: {
    ...mapMutations('ui', ['SHOW_NOTIFICATION', 'CLEAR_NOTIFICATION']),

    save () {
      tagsCollection.add(this.tag)
      this.clearInputData()
    },

    remove (item) {
      tagsCollection.doc(item.id).delete()
    },

    clearInputData () {
      this.tag.name = null
    }
  }
}
</script>

<style scoped>
.dev {
  border: 1px solid tomato;
}

.total {
  width: 100%;
}
</style>
