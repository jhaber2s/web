<template>
  <div>

        <button @click="combine" > Texte Kombinieren</button>
        <div id="U6A1"></div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  methods: {
    combine() {
      var div = document.getElementById("U6A1")
      var TextA;
      var TextB;

      Promise.all([
        fetch("./A.txt")
          .then((x) => x.text())
          .then((t) => (TextA = t.split("\n"))),

        fetch("./B.txt")
          .then((x) => x.text())
          .then((t) => (TextB = t.split("\n"))),
      ]).then(function () {
        for (
          let index = 0;
          index < TextA.length || index < TextB.length;
          index++
        ) {
          if (index < TextA.length) {
            if (index < TextB.length) {
              div.innerHTML += `<p>${TextA[index]}${TextB[index]}</p>`;
            } else {
              div.innerText += `<p>${TextA[index]}</p>`;
            }
          } else {
            div.innerText += `<p>${TextB[index]}</p>`;
          }
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>