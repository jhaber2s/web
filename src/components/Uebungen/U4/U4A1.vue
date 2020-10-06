<template>
  <div>
    <h3>Code in der Console</h3>
    <input type="text" id="U4A1Input1" />
    <input type="text" id="U4A1Input2" />
    <input type="text" id="U4A1Input3" />
    <br>
    <button @click="A1(readArgument1())">identity_function()</button>
    <button @click="A2(readArgument1(),readArgument2())">addf()</button>
    <button @click="A3(readArgument1(),readArgument2())">applyf()</button>
    <button @click="A4(readArgument1(),readArgument2())">curry()</button>
    <button @click="A5(readArgument1())">inc()</button>
    <button @click="A6(readArgument1(),readArgument2())">methodize()</button>
    <button @click="A7(readArgument1(),readArgument2())">demethodize()</button>
    <button @click="A8(readArgument1())">twice()</button>
    <button @click="A9(readArgument1())">composeu()</button>
    <button @click="A10(readArgument1(),readArgument2(),readArgument3())">composeb()</button>
    <button @click="A11()">once()</button>
    <button @click="A12()">counterf()</button>
    <button @click="A13()">revocable()</button>
    <h4>Rueckgabe der Funktion</h4>
    <p id="U4A1p1"></p>
    <h4>ggf ausführung der Rückgabe</h4>
    <p id="U4A1p2"></p>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  methods: {
    readArgument1() {
      return document.getElementById("U4A1Input1").value;
    },
    readArgument2() {
      return document.getElementById("U4A1Input2").value;
    },
    readArgument3() {
      return document.getElementById("U4A1Input3").value;
    },
    A1(arg) {
      document.getElementById("U4A1p1").innerHTML = this.idetify_function(arg);
      console.log("A1: ",this.idetify_function)
      var erg = this.idetify_function(arg);
      document.getElementById("U4A1p2").innerText = erg();
    },
    idetify_function(arg) {
      return function () {
        return arg;
      };
    },
    addf(x) {
      return function add(y) {
        return parseInt(x) + parseInt(y);
      };
    },
    A2(arg1, arg2) {
         console.log("A2:",this.addf)
      document.getElementById("U4A1p1").innerHTML = this.addf();
      document.getElementById("U4A1p2").innerText = this.addf(arg1)(arg2);
    },
    A3(arg1, arg2) {
      console.log("A3:",this.applyf)
      document.getElementById("U4A1p1").innerHTML = this.applyf();
      document.getElementById("U4A1p2").innerText = this.applyf(this.add)(arg1)(
        arg2
      );
    },
    add(x, y) {
      return parseInt(x) + parseInt(y);
    },
    applyf(arg) {
      return function (x) {
        return function (y) {
          return arg(x, y);
        };
      };
    },
    A4(arg1, arg2) {
      console.log("A4:",this.curry)
      document.getElementById("U4A1p1").innerHTML = this.curry(this.add, arg1);
      document.getElementById("U4A1p2").innerText = this.curry(
        this.add,
        arg1
      )(arg2);
    },
    curry(func, arg) {
      return function (y) {
        return func(arg, y);
      };
    },
    inc(x) {
      return this.addf(x)(1);
    },
    A5(arg1) {
      console.log("A5:",this.inc)
      document.getElementById("U4A1p1").innerHTML = this.inc(arg1);
    },
    methodize(func) {
      function y(x) {
        var z = this.valueOf();

        var ans = func(z, x);
        return ans;
      }
      return y;
    },
    A6(arg1, arg2) {
      console.log("A6:",this.methodize)
      document.getElementById("U4A1p1").innerHTML = this.methodize(this.add);
      Number.prototype.add = this.methodize(this.add);
      document.getElementById("U4A1p2").innerHTML = parseInt(arg1).add(
        parseInt(arg2)
      );
    },
    A7(arg1, arg2) {
      console.log("A7",this.demethodize)
      Number.prototype.add = this.methodize(this.add);
      document.getElementById("U4A1p1").innerHTML = this.demethodize(
        Number.prototype.add
      );
      document.getElementById("U4A1p2").innerHTML = this.demethodize(
        Number.prototype.add
      )(arg1, arg2);
    },
    demethodize(op) {
      return function (x, y) {
        return op.call(x, y);
      };
    },
    A8(arg1) {
      console.log("A8:",this.twice)
      document.getElementById("U4A1p1").innerHTML = this.twice(this.add);
      document.getElementById("U4A1p2").innerHTML = this.twice(this.add)(arg1);
    },
    twice(func) {
      return function (x) {
        return func(x, x);
      };
    },
    A9(arg1) {
      console.log("A9:",this.composeu)
      document.getElementById("U4A1p1").innerHTML = this.composeu(
        this.double,
        this.square
      );
      document.getElementById("U4A1p2").innerHTML = this.composeu(
        this.double,
        this.square
      )(arg1);
    },
    double(x) {
      return x * 2;
    },
    square(x) {
      return x * x;
    },
    composeu(func1, func2) {
      return function (x) {
        return func2(func1(x));
      };
    },
    A10(arg1, arg2, arg3) {
      console.log("A10:",this.composeb)
      document.getElementById("U4A1p1").innerHTML = this.composeb(
        this.add,
        this.mul
      );
      document.getElementById("U4A1p2").innerHTML = this.composeu(
        this.double,
        this.square
      )(arg1, arg2, arg3);
    },
    composeb(func1, func2) {
      return function (x, y, z) {
        return func2(func1(x, y), z);
      };
    },
    A11() {
      console.log("A11:",this.once)
      document.getElementById("U4A1p1").innerHTML = this.once(this.add);
    },
    once(op) {
      var flag = true;
      return function (x, y) {
        if (flag) {
          flag = false;
          return op(x, y);
        } else {
          console.log("Fehler");
        }
      };
    },
    A12() {
      console.log("A12",this.counterf)
      document.getElementById("U4A1p1").innerHTML = this.counterf(1);},
    counterf(x) {
      var count = { x: x };
      count.inc = function () {
        return ++count.x;
      };

      count.dec = new (function () {
        return --count.x;
      })();

      return count;
    },
    A13(){
      console.log("A13:",this.revokeable)
      document.getElementById("U4A1p1").innerHTML = this.revokeable(this.inc)},
     revokeable(op){
    var flag =true;
    return{
        invoke: function(x,y) {
            if(flag){
            return op(x,y)
        }else{
                console.log("Fehler!");
            }},
        revoke: function(){return flag = false}
    }

}

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>