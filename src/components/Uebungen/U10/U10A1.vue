<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <p>+:{{add}} -:{{sub}} count:{{sum}}</p>
  </div>
</template>

<script>
export default {
    name: "Counter",
    data(){
        return{
            add: 0,
            sub: 0,
            sum:0
        }
    },
    methods: {
        increment: function(){ 
                this.sum ++;
                this.add ++; 
            },
        decrement: function(){
                this.sum --;
                this.sub ++;
            }
    }
}
</script>

<style scoped>
</style>