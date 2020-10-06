<template>
  <div>
       <h3>Code in der Console</h3>
    <button @click="A1()">Fabrikfunktion Warteschlange</button>
    <button @click="A2()">Fabrikfunktion ungeordnete Menge</button>
    <button @click="A3()">Fabrikfunktion ungeordnete Multi-Mengen</button>
  
    <p id="U4A2p1"></p>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  methods: {
    A1() {
     
      console.log("U4A2p1",this.fifo)
    },
    fifo() {
      var arr = [];
      return {
        in: function (x) {
          arr.unshift(x);
        },
        out: function () {
          arr.shift();
        },
        print: function () {
          console.log(arr);
        },
      };
    },

    A2() {

      console.log("U4A2p1",this.disordered)
    },
    disordered() {
      var arr = [];
      return {
        in: function (x) {
          if (arr.includes(x)) {
            console.log("Fehler!");
          }
          arr.push(x);
        },
        print: function () {
          console.log(arr);
        },
      };
    },
    A3() {
   
      console.log("U4A2p1",this.multi)
    },
    multi() {
      var arr = [];
      return {
        in: function (x) {
          arr.push(x);
        },
        print: function () {
          console.log(arr);
        },
      };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>