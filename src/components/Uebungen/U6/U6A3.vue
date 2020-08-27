<template>
<div>
  <html>
    <body>
      <div id="nav">
        <h1>WWW-Naigator</h1>
        <button id="html">HTML</button>
        <button id="css">CSS</button>
        <button id="js">JavaScript</button>
        <button id="other">Other</button>
      </div>

      <div id="sidenav">
        <h2>sidenav</h2>
      </div>

      <div id="content">
        <h2>content</h2>
      </div>
    </body>
  </html>
</div>
</template>

<script>
export default {
  name: "",
  props: {},
  mounted() {
    const content = document.querySelector("#content");
    const sidebar = document.querySelector("#sidenav");
    const html = document.querySelector("#html");
      const js = document.getElementById("js")
        const css = document.getElementById("css")
    var jsondata;

    async function fetchjson() {
      fetch("http://www2.inf.h-brs.de/~jhaber2s/UE6/text.json")
        .then((response) => response.json())
        .then(function (data) {
          jsondata = data;
        });
    }

    fetchjson();

    html.onclick = () => {
      if (!jsondata) {
        fetchjson();
      }

      sidebar.innerHTML = `<p><button id = "headings">headings</button></p>
                                <p><button id = "paragraphs">paragraphs</button></p>
                                <p><button id = "links">links</button></p>
                                <p><button id = "images">images</button></p>
                                <p><button id = "tables">tables</button></p>   `;

      var headings = document.querySelector("#headings");
      var paragraphs = document.querySelector("#paragraphs");
      var links = document.querySelector("#links");
      var images = document.querySelector("#images");
      var tables = document.querySelector("#tables");

      headings.onclick = async function () {
        await (content.innerHTML = `<p>${jsondata.menues.html.headings}</p>`);
      };

      paragraphs.onclick = async function () {
        await (content.innerHTML = `<p>${jsondata.menues.html.paragraphs}</p>`);
      };

      links.onclick = async function () {
        await (content.innerHTML = `<p>${jsondata.menues.html.links}</p>`);
      };
      images.onclick = async function () {
        await (content.innerHTML = `<p>${jsondata.menues.html.images}</p>`);
      };
      tables.onclick = async function () {
        await (content.innerHTML = `<p>${jsondata.menues.html.tables}</p>`);
      };
    };

    css.onclick = () => {
      sidebar.innerHTML = `<p><button id = "selectors">selectors</button></p>
                                <p><button id = "colors">colors</button></p>
                                <p><button id = "boxes">boxes</button></p>
                                <p><button id = "display">display</button></p>
                                <p><button id = "float">float</button></p>   `;

      var selectors = document.querySelector("#selectors");
      var colors = document.querySelector("#colors");
      var boxes = document.querySelector("#boxes");
      var display = document.querySelector("#display");
      var float = document.querySelector("#float");

      selectors.onclick = async function () {
        await (content.innerHTML = `<p>${jsondata.menues.css.selectors}</p>`);
      };
      colors.onclick = async function () {
        await (content.innerHTML = `<p>${jsondata.menues.css.colors}</p>`);
      };
      boxes.onclick = async function () {
        await (content.innerHTML = `<p>${jsondata.menues.css.boxes}</p>`);
      };
      display.onclick = async function () {
        await (content.innerHTML = `<p>${jsondata.menues.css.display}</p>`);
      };
      float.onclick = async function () {
        await (content.innerHTML = `<p>${jsondata.menues.css.float}</p>`);
      };
    };

    js.onclick = () => {
      sidebar.innerHTML = `<p><button id = "functions">functions</button></p>
                                <p><button id = "objects">objects</button></p>
                                <p><button id = "scope">scope</button></p>
                                <p><button id = "events">events</button></p>
                                <p><button id = "hoisting">hoisting</button></p>  
                                <p><button id = "strictmode">strict_mode</button></p> 
                                <p><button id = "json">json</button></p> `;

      var functions = document.querySelector("#functions");
      var objects = document.querySelector("#objects");
      var scope = document.querySelector("#scope");
      var events = document.querySelector("#events");
      var hoisting = document.querySelector("#hoisting");
      var strictmode = document.querySelector("#strictmode");
      var json = document.querySelector("#json");

      functions.onclick = async function () {
        await (content.innerHTML = `<p>${jsondata.menues.javascript.functions}</p>`);
      };
      objects.onclick = async function () {
        await (content.innerHTML = `<p>${jsondata.menues.javascript.objects}</p>`);
      };
      scope.onclick = async function () {
        await (content.innerHTML = `<p>${jsondata.menues.javascript.scope}</p>`);
      };
      events.onclick = async function () {
        await (content.innerHTML = `<p>${jsondata.menues.javascript.events}</p>`);
      };
      hoisting.onclick = async function () {
        await (content.innerHTML = `<p>${jsondata.menues.javascript.hoisting}</p>`);
      };
      strictmode.onclick = async function () {
        await (content.innerHTML = `<p>${jsondata.menues.javascript.strict_mode}</p>`);
      };
      json.onclick = async function () {
        await (content.innerHTML = `<p>${jsondata.menues.javascript.json}</p>`);
      };
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  margin: none;

  height: 44.5rem;

  display: flex;
  flex-wrap: wrap;
}

#nav {
  background-color: coral;
  margin: none;
  width: 100%;
  height: 30%;
}

#content {
  background-color: cornsilk;
  height: 80%;
  width: 70%;
}

#sidenav {
  background-color: cornflowerblue;

  height: 80%;
  width: 30%;
}
</style>