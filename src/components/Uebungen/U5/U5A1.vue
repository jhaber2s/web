<template>
  <div >

<h1>Einkaufsliste</h1>

    <label>Enter new Item</label>
    <input type="text" id="U5A1input">
    <button id="U5A1button">Add item</button>

    <ul id="U5A1ul"></ul>
  </div>
</template>

<script>
export default {
  name: '',
  props: {

  },
  data: function () {
    return {

     
    };
  },
  methods:
  {


    
  },
 
  mounted(){
    var ul =document.getElementById("U5A1ul");
    var input =document.getElementById("U5A1input");
    var button =document.getElementById("U5A1button");
    
    
    button.onclick= function(){

            var listItem = document.createElement('li');
            listItem.innerHTML = input.value+" <button>Delete</button>";
             var delete_button = listItem.querySelector('button');
            delete_button.onclick = () => ul.removeChild(listItem);
            ul.appendChild(listItem);
           input.value = "";
            input.focus();
    
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>