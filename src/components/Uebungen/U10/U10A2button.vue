<template>
<div>
    <button @click="updateSub">
        {{menu.titel}}
    </button>
</div> 
</template>

<script>
export default {
   
    props: ["menu"],
    data(){
        return{}
         },
    methods: {
    //Sendet die Submenus zum Hauptmenu
      updateSub: function(){
         this.$parent.value = this.menu.subs;
      }             
    }


}

</script>

<style scoped>

</style>
