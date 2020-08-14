<template>
  <div>
    <button v-for="Thema in jsondata" v-bind:key="Thema">{{Thema.Titel}}</button>
  </div>
</template>

<script>
import json from "../json/nav.json";
export default {
  name: "topnav",
  props: {},
  data: function () {
    return {
      jsondata: null,
    };
  },

  methods: {
    
  },
  created() {
    this.jsondata = json.nav;
    console.log(this.jsondata);
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
