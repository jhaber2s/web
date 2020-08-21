<template>
  <div >


<body>
<header></header>
<aside class="left"></aside>
<article></article>
<aside class="right"></aside>
</body>


  </div>
</template>

<script>
export default {
  name: '',
  props: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
            box-sizing: border-box;
        }
        body {
            display: flex;
            flex-wrap: wrap;
        }
        header {
            background-color: red;
            width: 100%;
            height: 5rem;
        }
        aside {
            width: 20%;
        }
        aside.left {
            background-color: limegreen;
        }
        aside.right {
            background-color: magenta;
        }
        article {
            background-color: blue;
            width: 60%; height: 40rem;
        }
        /* Responsive layout - when the screen is less than 600px wide, make last column stack on top of the other */
        @media screen and (max-width: 600px) {
            aside.right { width: 100%; }
            aside.right { height: 5rem; }
            article {  width: 80%;  }
            body{flex: none}
        }
        /* Responsive layout - when the screen is less than 300px wide, make the columns stack on top of each other instead of next to each other */
        @media screen and (max-width: 500px) {
            aside, article { width: 100%;  }
            aside.left { height: 5rem; }
            
            
        }
</style>