<template>
  <div>
    <button @click="combine()">Texte Kombinieren</button>
    <div id="U6A2"></div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  methods: {
    combine() {
      const div = document.getElementById("U6A2")
      var TextA;
      var TextB;

      async function fetchToTextarry(url1, url2) {
        try {
          var response1 = await fetch(url1);
          response1 = await response1.text();
          response1 = response1.split("\n");
          var response2 = await fetch(url2);
          response2 = await response2.text();
          response2 = response2.split("\n");
          return {
            t1: response1,
            t2: response2,
          };
        } catch (error) {
          console.log();
        }
      }
      fetchToTextarry(
        "./A.txt",
        "./B.txt"
      )
        .then(function (t) {
          TextA = t.t1;
          TextB = t.t2;
        })
        .then(function () {
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