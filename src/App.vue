<template>
  <div id="body">
    <div id="titel">
      <p>Huasarbeit Web Enginering</p>
    </div>
    <div id="topnav">
      <topnav v-on:setsidenav="setSidenav"></topnav>
    </div>
    <div id="sidenav">
      <sidenav
        v-on:openAufgabe="openAufgabe"
        v-bind:aufgaben="this.aufgaben"
      ></sidenav>
    </div>
    <div id="content">
      <component v-if="rooted" v-bind:is="aktuelleAufgabe"> </component>
      <router-view id="routerview"></router-view>
    </div>

   

    <div id="junk"></div>
  </div>
</template>

<script>
import topnav from "./components/topnav.vue";
import sidenav from "./components/sidenav.vue";

import U2A1 from "./components/Uebungen/U2/U2A1.vue";
import U2A2 from "./components/Uebungen/U2/U2A2.vue";
import U2A3 from "./components/Uebungen/U2/U2A3.vue";
import U2A4 from "./components/Uebungen/U2/U2A4.vue";

import U3A1 from "./components/Uebungen/U3/U3A1.vue";
import U3A2 from "./components/Uebungen/U3/U3A2.vue";
import U3A3 from "./components/Uebungen/U3/U3A3.vue";
import U3A4 from "./components/Uebungen/U3/U3A4.vue";

import U4A1 from "./components/Uebungen/U4/U4A1.vue";
import U4A2 from "./components/Uebungen/U4/U4A2.vue";

import U5A1 from "./components/Uebungen/U5/U5A1.vue";
import U5A2 from "./components/Uebungen/U5/U5A2.vue";
import U5A3 from "./components/Uebungen/U5/U5A3.vue";

import U6A1 from "./components/Uebungen/U6/U6A1.vue";
import U6A2 from "./components/Uebungen/U6/U6A2.vue";
import U6A3 from "./components/Uebungen/U6/U6A3.vue";

import U7A1 from "./components/Uebungen/U7/U7A1.vue";
import U7A2 from "./components/Uebungen/U7/U7A2.vue";
import U7A3 from "./components/Uebungen/U7/U7A3.vue";

import U8A1 from "./components/Uebungen/U8/U8A1.vue";
import U8A2 from "./components/Uebungen/U8/U8A2.vue";


import U10A1 from "./components/Uebungen/U10/U10A1.vue";
import U10A2 from "./components/Uebungen/U10/U10A2.vue";

export default {
  name: "App",
  components: {
    topnav,
    sidenav,

    U2A1,
    U2A2,
    U2A3,
    U2A4,
    U3A1,
    U3A2,
    U3A3,
    U3A4,
    U4A1,
    U4A2,
    U5A1,
    U5A2,
    U5A3,
    U6A1,
    U6A2,
    U6A3,
    U7A1,
    U7A2,
    U7A3,
    U8A1,
    U8A2,
   
    U10A1,
    U10A2,
  },
  data: function () {
    return {
      aufgaben: Object,
      aktuelleAufgabe: String,
      rooted: true,
    };
  },
  updated: function () {
    this.rooted = !(document.getElementById("routerview").innerText.length > 0);
  },

  

  methods: {
    setSidenav(aufgaben) {
      this.aufgaben = aufgaben;
      console.log(this.aufgaben);
    },
    openAufgabe(aufgabe) {
      this.rooted = true;
      try{document.getElementById("routerview").innerText = null;}
      catch{console.log("cant change routerview")}
      
      this.aktuelleAufgabe = aufgabe;
    },
  },
};
</script>

<style>
#body {
  width: 100%;

  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: auto;
  grid-template-areas:
    "titel titel titel titel titel"
    ". topnav topnav topnav topnav"
    "sidenav content content content content"
    "sidenav content content content content"
    "sidenav content content content content"
    "sidenav content content content content"
    "sidenav content content content content"
    "footer footer footer footer footer";
}
#titel {
  grid-area: titel;

  background-color: blue;
}
#topnav {
  grid-area: topnav;
  background-color: red;
}

#sidenav {
  grid-area: sidenav;
  background-color: green;
}
#content {
  grid-area: content;
  background-color: violet;
}
#footer {
  grid-area: footer;
  background-color: brown;
}
#junk {
  display: none;
}
</style>
