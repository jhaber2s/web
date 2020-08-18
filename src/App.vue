<template>
  <div id="body">
    <div id="titel">
      Titel
      <p>Huasarbeit Web Enginering</p>
    </div>
    <div id="topnav">
      <topnav v-on:setsidenav="setSidenav"></topnav>
    </div>
    <div id="sidenav">
      <sidenav v-on:openAufgabe="openAufgabe" v-bind:aufgaben="this.aufgaben"></sidenav>
    </div>
    <div id="content">
      <component v-bind:is="aktuelleAufgabe"> </component>
    </div>
    <div id="footer">Footer</div>

   <div id = "junk">
    
   </div>

  </div>
</template>

<script>
import topnav from "./components/topnav.vue";
import sidenav from "./components/sidenav.vue";


 import U2A1 from "./components/Uebungen/U2/U2A1.vue"
 import U2A2 from "./components/Uebungen/U2/U2A2.vue"
  import U2A3 from "./components/Uebungen/U2/U2A3.vue"
  import U2A4 from "./components/Uebungen/U2/U2A4.vue"

export default {
  name: "App",
  components: {
    topnav,
    sidenav,

    U2A1,
    U2A2,
    U2A3,
    U2A4
  },
  data: function () {
    return {
      aufgaben:Object,
      aktuelleAufgabe:String,
    };
  },

  methods: {
    setSidenav(aufgaben) {
     this.aufgaben =aufgaben
      console.log(this.aufgaben);
    },
    openAufgabe(aufgabe){
      this.aktuelleAufgabe = aufgabe
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
#junk{

display: none;

}
</style>
