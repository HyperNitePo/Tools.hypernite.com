<template>
    <v-container pa-0>
        <v-card>
            <v-card-title class="title grey darken-3 white--text">API 測試</v-card-title>
            <v-card-text>
                <v-text-field label="名字" v-model="name"></v-text-field>
                <v-text-field :rules="[email.indexOf('@') !== -1 || 'Invalid format']" label="Email"
                              v-model="email"></v-text-field>
                {{response}}
            </v-card-text>
            <v-card-actions>
                <v-btn @click="submit()" class="primary">Submit</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "APITest",
        data: () => {
            return {
                name: '',
                email: '',
                response: ''
            }
        },
        computed: {
            submit: () => {
                this.$axios({
                    method: 'post',
                    url: 'test.php',
                    data: {
                        name: this.name,
                        email: this.email
                    }
                }).then(res => {
                    this.response = res.data.name + " & " + res.data.email
                }).catch(error => window.alert(error))
            }
        }
    }
</script>

<style scoped>

</style>