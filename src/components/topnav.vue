<template>
  <div>

    top Nav Componente
    <button @click="getTitel"></button>
    
  </div>
</template>

<script>
import json from '../json/nav.json'
export default {
  name: 'topnav',
  props: {
    
  },
  methods:{

    getTitel(){

     console.log(json.nav)

    },

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div{width: 100%;
height: 100%;
}
</style>
