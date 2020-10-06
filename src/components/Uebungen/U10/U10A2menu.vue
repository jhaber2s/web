<template>
  <div>
      <!-- Hauptmenü -->
    <div id="top">
        <div   v-bind:key="menu.id" v-for="menu in menus" >
             <MenuBlock v-model="submenus" v-bind:menu="menu" />
        </div>     
    </div>
    <!-- Submenü -->
    <div id ="bottom">
        <div  v-bind:key="menu.id" v-for="menu in value">
            <button @click="updateContent(menu.content)">{{menu.titel}} </button>   
        </div>
    </div> 
  </div>
</template>

<script>
import MenuBlock from './U10A2button';

export default {
  
    props: ["menus"],
    components: {
        MenuBlock
    },
    
    data(){
        return{
            value :null,
            submenus: null,
        }
    },

    methods: {
        //Event und übergabe des contents
        updateContent: function(content){
             this.$emit('updatecontent',content);
        }
    }
   
}
</script>

<style scoped>
#top { display: flex;}
#bottom{display: flex;}
</style>