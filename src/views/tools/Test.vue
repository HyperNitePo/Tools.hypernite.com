<template>
    <v-container pa-0>
    <v-card>
        <v-card-title class="title grey darken-3 white--text">測試反轉文字</v-card-title>
        <v-card-text>
            <v-textarea v-model="input" outline label="請輸入文字: " auto-grow autofocus browser-autocomplete></v-textarea>
        </v-card-text>
        <v-btn @click="reverse" class="primary">反轉</v-btn>
        <router-link to="/tools">
            <v-btn @click="global.toTop" class="primary">返回</v-btn>
        </router-link>
    </v-card>
    </v-container>
</template>

<script>
    import global from '../../gFunctions'

    export default {
        name: "Test",
        data: ()=>{
            return{
                global: global(),
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