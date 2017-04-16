<template>
    <single-post v-bind:post="post"></single-post>
</template>

<script>
import axios from 'axios'
import SinglePost from '../global/SinglePost.vue'

export default{
  name: 'Page',
  data () {
    return {
      title: '',
      post: []
    }
  },

  created () {
    this.getPost()
    document.title = this.title
  },

  methods: {
    getPost () {
      var path = this.$route.path
      axios.get(process.env.API_URL + '/wp-json/wp/v2/pages/?slug=' + path.replace(/^\/|\/$/g, ''))
      .then(response => {
        this.post = response.data[0]

        if (this.post === undefined) {
          this.$router.push({name: 'NotFound'})
        }
      })
      .catch(e => {
        console.log(e)
      })
    }
  },

  components: {
    'single-post': SinglePost
  }
}
</script>
