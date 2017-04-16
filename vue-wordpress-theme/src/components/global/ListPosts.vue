<template>
    <div class="list-posts">
        <post-preview v-for="post in posts" :key="post.id" v-bind:post="post"></post-preview>
    </div>
</template>

<script>
import PostPreview from './PreviewPost.vue'

export default{
  props: ['posts'],

  components: {
    'post-preview': PostPreview
  }
}
</script>
