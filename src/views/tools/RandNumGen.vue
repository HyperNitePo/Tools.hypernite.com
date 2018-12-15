<template>
    <v-container pa-0>
        <v-card>
            <v-card-title class="title grey darken-3 white--text">隨機數字生成器</v-card-title>
            <v-card-text>
                <v-flex :class="$vuetify.breakpoint.mdAndDown ? 'xs12' : 'xs4' ">
                    <v-text-field browser-autocomplete type="number" :rules="[max > min || '間距太少或呈負數', Number.isInteger(min) || '不是數字']" v-model.number="min" label="隨機最少數"></v-text-field>
                    <v-text-field browser-autocomplete type="number" :rules="[max > min || '間距太少或呈負數', Number.isInteger(max) || '不是數字']" v-model.number="max" label="隨機最大數"></v-text-field>
                    <v-text-field v-model="result" label="生成數字" disabled></v-text-field>
                </v-flex>
            </v-card-text>
            <v-btn class="primary" @click.prevent="generate()">生成</v-btn> <router-link to="/tools"><v-btn @click="$scrollToTop" class="primary">返回</v-btn></router-link>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "RandNumGen",
        data: ()=>{
            return{
                min: 0,
                max: 10,
                result: 0,
            }
        },
       methods: {
            generate(){
                if (this.max <= this.min){
                    this.result = '生成失敗';
                    return;
                }
                if (!Number.isInteger(this.max) || !Number.isInteger(this.min)){
                    this.result = '生成失敗';
                    return;
                }

                this.result = (( Math.random() * (this.max - this.min)) + this.min).toFixed(0)
            }
        },
    }
</script>

<style scoped>

</style>