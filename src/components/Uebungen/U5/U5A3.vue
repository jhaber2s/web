<template>
  <div >


    <h1>Testmessung</h1>
    

    <button id="U5A3button">Start</button>

    <table border="2">

        <tr>
            <td>innerHTML</td>
            <td id="innerh"></td>
        </tr>
        <tr>

            <td>innerText</td>
            <td id="innert"></td>

        </tr>
        <tr>
            <td>textContent</td>
            <td id="textc"></td>

        </tr>

        <tr>
            <td>outerHTML</td>
            <div><td id="outerh"></td></div>
        </tr>

    </table>



  </div>
</template>

<script>
export default {
  name: '',
  props: {

  },
  mounted(){

    var button = document.getElementById("U5A3button")
        var innerh = document.getElementById("innerh")
        var innert = document.getElementById("innert");
        var textc = document.getElementById("textc");
        var outerh = document.getElementById("outerh");

        button.onclick = function () {
            var time = new Date().getTime();


            time = Date.now();
        

            for (let i = 0; i < 1000000; i++) {
                innerh.innerHTML = i.toString();

            }
            time = Date.now() - time;
            innerh.innerHTML = time.toString();


            time = Date.now();

            for (let i = 0; i < 1000000; i++) {
                innert.innerText = i.toString();

            }
            time = Date.now() - time;
            innert.innerText = time.toString();

            time = Date.now();
            for (let i = 0; i < 1000000; i++) {
                textc.textContent= i.toString();

            }
            time = Date.now() - time;
            textc.textContent = time.toString();

            time = Date.now();
            for (let i = 0; i < 1000000; i++) {
                outerh.outerHTML = i.toString();

            }
            time = Date.now() - time;
            outerh.innerText = time.toString();
        }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
