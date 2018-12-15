<template>
    <v-container pa-0>
        <v-card>
            <v-card-title class="title grey darken-3 white--text">Opps! 我們找不到你想要的頁面。</v-card-title>
            <v-card-text>
                <v-card-media max-height="300px" position="center center"
                              src="https://howfix.net/wp-content/uploads/2018/02/sIaRmaFSMfrw8QJIBAa8mA-article.png">
                </v-card-media>
            </v-card-text>
            <v-card-actions class="justify-center pb-3">
                <router-link to="/">
                    <v-btn class="success">返回主頁</v-btn>
                </router-link>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "NotFound"
    }
</script>

<style scoped>

</style>