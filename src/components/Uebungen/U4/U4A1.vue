<template>
  <div >
      <input type="text" id="U4A1Input1"> 
       <input type="text" id="U4A1Input2"> 
<button @click="A1(readArgument1())">identity_function()</button>
<button @click="A2(readArgument1())(readArgument2())">addf()</button>
  <h4>Ausgabe</h4>
  <p id="U4A1p1"></p>
    <h4>Variablen der Ausgabe</h4>
  <p id="U4A1p2"></p>



  </div>
</template>

<script>

export default {
  name: '',
  props: {

  },
  methods:{
      readArgument1(){
          return document.getElementById("U4A1Input1").value
      },
      readArgument2(){ return document.getElementById("U4A1Input2").value
      },
      A1(arg){
        document.getElementById("U4A1p1").innerHTML = function(){return arg} 
        document.getElementById("U4A1p2").innerHTML = "arg:"+arg
          return function(){return arg}
      },
      A2(x){return function bla(y){

        document.getElementById("U4A1p1").innerHTML = "x+y"
        var erg = parseInt(x)+parseInt(y)
        document.getElementById("U4A1p2").innerText =  "x:"+x+" y:"+y+" ergebniss:"+erg
        
  return x+y
  };
},
     
  
  



  
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>