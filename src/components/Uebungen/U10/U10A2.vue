<template>
  <div id="app">
    <!-- Menü Componente mit Eventhandler zum updaten des content -->
    <Menu v-bind:menus="menus" @updatecontent="content = $event"  />
    <div id = "content" >
      {{content}}
    </div>
  </div>
</template>

<script>
import Menu from "./U10A2menu";
export default {
  name: "app",
  components: {
    Menu
  },
  data() {
    return {
      content: "",
      //Daten des Menüs
      menus: [
        {//Hauptmenü element
          id: 1,
          titel: "First Menu",
          //Submenüs
          subs:[
            {id : 11,
            titel: "First sub one",
            content:"Content of the Firtst Menu Sub One"
            },
            {id : 111,
            titel: "Second Sub",
            content:"Content of the Firtst Menu Sub Two"
            },
             {id : 1111,
            titel: "Third Sub",
            content:"Content of the Firtst Menu Sub Three"
            }
          ]
        },

        { id:2,
          titel: "Seconde Menu",
          subs:[
            {id : 12,
            titel: "First Sub",
            content:"Content of the Seconde Menu Sub One"
            },
            {id : 122,
            titel: "Second Sub",
            content:"Content of the Seconde Menu Sub Two"
            }
          ]
        },
        {
          id:3,
          titel: "thrid Menu",
          subs:[
            {id : 13,
            titel: "First Sub",
            content:"Content of the Third Menu"
            }
          ]
        }
      ],
    
      

    };
  }
};
</script>

<style  scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

button {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 24px;
  cursor: pointer;
}
button:hover {
  background: #666;
}
</style>