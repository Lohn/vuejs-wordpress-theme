<template>
    <div id="header" class="columns">
        <div class="column is-three-quarters">
            <h1 class="title is-1"><router-link :to="{ name: 'Homepage'}">VueJS WordPress Theme</router-link></h1>
        </div>

        <nav class="column">
            <ul class="is-inline-flex">
                <li><router-link :to="{ name: 'About'}">About</router-link></li>
                <li><router-link :to="{ name: 'Contact'}">Contact</router-link></li>
            </ul>
        </nav>
    </div>
</template>
