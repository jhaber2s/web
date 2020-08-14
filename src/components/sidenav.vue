<template>
  <div>

      <button v-for="Thema in aufgaben" v-bind:key="Thema">{{Thema}}</button>
     -
    
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
      log(){

          console.log(this.aufgaben)
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
}
</style>