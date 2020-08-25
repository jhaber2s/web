<template>
  <div >
<svg width="630" height="500">
       
        <text x="30" y="60" style="fill:black;font-weight:400;font-size:15px;font-family:Arial">Frauen: </text>
        <text id="FrauProzent" x="30" y="80" style="fill:black;font-weight:400;font-size:15px;font-family:Arial">{{FrauP}} % </text>
        <line id="FrauBalken" x1="100" y1="70" v-bind:x2="Frau" y2="70" style="stroke:red;stroke-width:80" > <animate attributeName="x2" from="100" v-bind:to="Frau" begin="0s" dur="1s" fill="freeze" /> </line>

       <text x="30" y="155" style="fill:black;font-weight:400;font-size:15px;font-family:Arial">Männer: </text>
       <text id="MannProzent" x="30" y="175" style="fill:black;font-weight:400;font-size:15px;font-family:Arial">{{MannP}} %</text>
       <line id="MannBalken" x1="100" y1="165" v-bind:x2="Mann" y2="165" style="stroke:blue;stroke-width:80" ><animate attributeName="x2" from="100" v-bind:to="Mann" begin="0s" dur="1s" fill="freeze" /> </line>


       <line x1="100" y1="250" x2="600" y2="250" style="stroke:black;stroke-width:5" />

   
       <line x1="100" y1="250" x2="100" y2="0" style="stroke:black;stroke-width:1" />
       <line x1="150" y1="250" x2="150" y2="0" style="stroke:black;stroke-width:1" />
       <line x1="200" y1="250" x2="200" y2="0" style="stroke:black;stroke-width:1" />
       <line x1="250" y1="250" x2="250" y2="0" style="stroke:black;stroke-width:1" />
       <line x1="300" y1="250" x2="300" y2="0" style="stroke:black;stroke-width:1" />
       <line x1="350" y1="250" x2="350" y2="0" style="stroke:black;stroke-width:1" />
       <line x1="400" y1="250" x2="400" y2="0" style="stroke:black;stroke-width:1" />
       <line x1="450" y1="250" x2="450" y2="0" style="stroke:black;stroke-width:1" />
       <line x1="500" y1="250" x2="500" y2="0" style="stroke:black;stroke-width:1" />
       <line x1="550" y1="250" x2="550" y2="0" style="stroke:black;stroke-width:1" />
       <line x1="600" y1="250" x2="600" y2="0" style="stroke:black;stroke-width:1" />

       <text x="95" y="265" style="fill:black;font-weight:400;font-size:12px;font-family:Arial">0%</text>
       <text x="140" y="265" style="fill:black;font-weight:400;font-size:12px;font-family:Arial">10%</text>
       <text x="190" y="265" style="fill:black;font-weight:400;font-size:12px;font-family:Arial">20%</text>
       <text x="240" y="265" style="fill:black;font-weight:400;font-size:12px;font-family:Arial">30%</text>
       <text x="290" y="265" style="fill:black;font-weight:400;font-size:12px;font-family:Arial">40%</text>
       <text x="340" y="265" style="fill:black;font-weight:400;font-size:12px;font-family:Arial">50%</text>
       <text x="390" y="265" style="fill:black;font-weight:400;font-size:12px;font-family:Arial">60%</text>
       <text x="440" y="265" style="fill:black;font-weight:400;font-size:12px;font-family:Arial">70%</text>
       <text x="490" y="265" style="fill:black;font-weight:400;font-size:12px;font-family:Arial">80%</text>
       <text x="540" y="265" style="fill:black;font-weight:400;font-size:12px;font-family:Arial">90%</text>
       <text x="585" y="265" style="fill:black;font-weight:400;font-size:12px;font-family:Arial">100%</text>
       
        </svg>
  </div>
</template>

<script>
 import json from "./U8A2.json";
export default {
 
  name: '',
  props: {

  },
  data: function () {
    return {
      Mann:Number,
      Frau:Number,
      MannP:Number,
      FrauP:Number,
    };
  },
  created(){
    this.Mann = json.Mann.Anzahl
    this.Frau = json.Frau.Anzahl

    var ges = this.Mann + this.Frau

    this.MannP = Math.floor((100/ges)*this.Mann)
    this.FrauP = Math.floor((100/ges)*this.Frau)
    this.Mann = 490 *(this.MannP/100)+105
     this.Frau = 490 *(this.FrauP/100)+105
     console.log(this.Mann)


  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>