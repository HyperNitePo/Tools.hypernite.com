<template>
    <v-container pa-0>
    <v-card>
        <v-card-title class="title grey darken-3 white--text">測試反轉文字</v-card-title>
        <v-card-text>
            <v-textarea v-model="input" outline label="請輸入文字: " auto-grow autofocus browser-autocomplete></v-textarea>
        </v-card-text>
        <v-btn class="primary" @click="reverse">反轉</v-btn> <router-link to="/tools"><v-btn class="primary">返回</v-btn></router-link>
    </v-card>
    </v-container>
</template>

<script>

    export default {
        name: "test",
        data: ()=>{
            return{
                input: '',
            }
        },
        methods: {
            reverse(){
                let text = this.input;
                this.input = text.split('').reverse().join('');
            }
        }
    }
</script>

<style scoped>

</style>