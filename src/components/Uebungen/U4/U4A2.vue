<template>
  <div>
    <button @click="A1()">Fabrikfunktion Warteschlange</button>
    <button @click="A2()">Fabrikfunktion ungeordnete Menge</button>
    <button @click="A3()">Fabrikfunktion ungeordnete Multi-Mengen</button>
    <h4>Funktion</h4>
    <p id="U4A2p1"></p>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  methods: {
    A1() {
      document.getElementById("U4A2p1").innerHTML = this.fifo;
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
      document.getElementById("U4A2p1").innerHTML = this.disordered;
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
      document.getElementById("U4A2p1").innerHTML = this.multi;
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