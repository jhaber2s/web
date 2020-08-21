<template>
  <div >




<body>
    <header></header>
    <aside class="top"></aside>
    <article></article>
    <aside class="bottom"></aside>
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










        header {
            width: 100%;
            height: 15em;
            background-color: red;


        }


        aside.top {
            background-color: limegreen;
            widows: 100%;
            height: 10em;

        }

        aside.bottom {
            background-color: magenta;
            height: 10em;
            width: 100%;



        }

        article {
            background-color: blue;
            width: 100%;
            height: 100em;

        }


        @media(min-width: 500px) {


            aside.bottom {
                height: 5rem;
            }

            aside.top {
                width: 20%;
                height: 100em;
            }

            article {
                width: 80%;
            }

            body {
                display: flex;
                flex-wrap: wrap;
            }


            article {}



        }

        @media(min-width: 900px) {
            article{

                width: 60%;
            }
            aside.top{width: 20%;}
            aside.bottom{width: 20%;
                height: 100em;}


        }
</style>