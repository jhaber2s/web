<template>
  <div>

      <button v-for="(aufgabe,key) in aufgaben" v-bind:key="key" @click="openAufgabe(key)">{{aufgabe}}</button>
     
    
  </div>
</template>

<script>

export default {
  name: "sidenav",
  props: {

      aufgaben:Array

  },
  data: function () {
    return {
        
    
    };
  },

  methods: {
      openAufgabe(aufgabe){

          this.$emit("openAufgabe",aufgabe)
      }

  },
  created() {
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>