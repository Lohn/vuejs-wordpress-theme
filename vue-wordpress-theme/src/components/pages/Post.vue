<template>
    <single-post v-bind:post="post" v-bind:author="author"></single-post>
</template>

<script>
import axios from 'axios'
import SinglePost from '../global/SinglePost.vue'

export default{
  name: 'Single',
  data () {
    return {
      title: '',
      post: [],
      author: []
    }
  },

  created () {
    this.getPost()
  },

  methods: {
    getPost () {
      var path = this.$route.path
      axios.get(process.env.API_URL + '/wp-json/wp/v2/posts/?slug=' + path.replace(/^\/|\/$/g, ''))
      .then(response => {
        this.post = response.data[0]

        if (this.post === undefined) {
          this.$router.push({name: 'NotFound'})
        }

        // Get author
        this.getAuthor()

        // Set document title
        document.title = this.post.title.rendered
      })
      .catch(e => {
        console.log(e)
      })
    },

    getAuthor () {
      axios.get(process.env.API_URL + '/wp-json/wp/v2/users/' + this.post.author)
      .then(response => {
        this.author = response.data
      })
    }
  },

  components: {
    'single-post': SinglePost
  }
}
</script>
