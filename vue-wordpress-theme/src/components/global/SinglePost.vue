<template>
    <div class="post">
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-1">
                        {{ post.title.rendered }}
                    </h1>
                    <h2 class="subtitle" v-if="author">
                        Written by <router-link :to="{ name:'Author', params: {authorId: author.id} }">{{ author.name }}</router-link>
                    </h2>
                </div>
            </div>
        </section>

        <div class="content-area">
            <section class="content-container" v-html="post.content.rendered">
            </section>
        </div>
    </div>
</template>

<script>
export default{
  props: ['post', 'author']
}
</script>
