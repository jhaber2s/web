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
      <sidenav v-bind:aufgaben="this.aufgaben"></sidenav>
    </div>
    <div id="content">Content</div>
    <div id="footer">Footer</div>
  </div>
</template>

<script>
import topnav from "./components/topnav.vue";
import sidenav from "./components/sidenav.vue";

export default {
  name: "App",
  components: {
    topnav,
    sidenav,
  },
  data: function () {
    return {
      aufgaben:Array,
    };
  },

  methods: {
    setSidenav(aufgaben) {
     this.aufgaben =aufgaben
      console.log(this.aufgaben);
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
    "topnav topnav topnav topnav topnav"
    "sidenav content content content content"
    "sidenav content content content content"
    "sidenav content content content content"
    "sidenav content content content content"
    "sidenav content content content content"
    ". footer footer footer .";
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
}
#footer {
  grid-area: footer;
}
</style>
