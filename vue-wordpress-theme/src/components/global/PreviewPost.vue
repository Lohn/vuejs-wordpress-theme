<template>
    <div class="preview-post">
        <router-link :to="{ name:'post', params: {postSlug: post.slug} }">
            <h2 class="post-title title is-3" v-html="post.title.rendered"></h2>
            <p class="post-excerpt" v-html="post.excerpt.rendered"></p>
            <p><router-link :to="{ name:'post', params: {postSlug: post.slug} }" class="read-more">Read More</router-link></p>
        </router-link>
    </div>
</template>

<script>
export default{
  props: ['post']
}
</script>
