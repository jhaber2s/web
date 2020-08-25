<template>
  <div >


     <h1>Aufgabe 1</h1>


    <svg width="310" height="310">
        <rect width="300" height="300" style="fill:rgb(184, 101, 101);" />

        <text x="30" y="70" style="fill:White;font-weight:400;font-size:50px;font-family:Arial">Use </text>
        <line x1="30" y1="85" x2="275" y2="85" style="stroke:White;stroke-width:4" />

        <text x="30" y="165" style="fill:White;font-weight:400;font-size:50px;font-family:Arial">The </text>
        <line x1="30" y1="180" x2="275" y2="180" style="stroke:White;stroke-width:4" />

        <text x="30" y="265" style="fill:White;font-weight:400;font-size:50px;font-family:Arial">Platform </text>
        <line x1="30" y1="280" x2="275" y2="280" style="stroke:White;stroke-width:4" />

    </svg>


  </div>
</template>

<script>
export default {
  name: '',
  props: {

  },
  mounted(){
 var svg_svg = document.getElementsByTagName("svg");
        var svg_rect = document.getElementsByTagName("rect");
        var svg_text = document.getElementsByTagName("text");
        var svg_line = document.getElementsByTagName("line");
        //-----over-----
        svg_svg[0].addEventListener("mouseover", event => {
          event
            //-svg-
            svg_svg[0].setAttribute('width', 310 * 2);
            svg_svg[0].setAttribute('height', 310 * 2);
            //-rect-
            svg_rect[0].setAttribute('width', 300 * 2);
            svg_rect[0].setAttribute('height', 300 * 2);

            svg_rect[0].getAttribute('x')
            // svg_text.forEach(element => {
            // element.setAttribute('x', (svg_rect[0].getAttribute('x') *2));
            // element.setAttribute('y', (svg_rect[0].getAttribute('y') *2));
            // element.setAttribute('style', 'fill:White;font-weight:800;font-size:100px;font-family:Arial');
            // });
            svg_text[0].setAttribute('x', 30 * 2);
            svg_text[0].setAttribute('y', 70 * 2);
            svg_text[0].setAttribute('style', 'fill:White;font-weight:400;font-size:100px;font-family:Arial');

            svg_text[1].setAttribute('x', 30 * 2);
            svg_text[1].setAttribute('y', 165 * 2);
            svg_text[1].setAttribute('style', 'fill:White;font-weight:400;font-size:100px;font-family:Arial');

            svg_text[2].setAttribute('x', 30 * 2);
            svg_text[2].setAttribute('y', 265 * 2);
            svg_text[2].setAttribute('style', 'fill:White;font-weight:400;font-size:100px;font-family:Arial');

            //-line-
            svg_line[0].setAttribute('x1', 30 * 2);
            svg_line[0].setAttribute('y1', 85 * 2);
            svg_line[0].setAttribute('x2', 275 * 2);
            svg_line[0].setAttribute('y2', 85 * 2);
            svg_line[0].setAttribute('style', "stroke:White;stroke-width:8");

            svg_line[1].setAttribute('x1', 30 * 2);
            svg_line[1].setAttribute('y1', 180 * 2);
            svg_line[1].setAttribute('x2', 275 * 2);
            svg_line[1].setAttribute('y2', 180 * 2);
            svg_line[1].setAttribute('style', "stroke:White;stroke-width:8");

            svg_line[2].setAttribute('x1', 30 * 2);
            svg_line[2].setAttribute('y1', 280 * 2);
            svg_line[2].setAttribute('x2', 275 * 2);
            svg_line[2].setAttribute('y2', 280 * 2);
            svg_line[2].setAttribute('style', "stroke:White;stroke-width:8");


            //-----out-----
            svg_svg[0].addEventListener("mouseout", event => {
                //-svg-
                event
                svg_svg[0].setAttribute('width', 310);
                svg_svg[0].setAttribute('height', 310);
                //-rect-
                svg_rect[0].setAttribute('width', 300);
                svg_rect[0].setAttribute('height', 300);
                //-Text-
                svg_text[0].setAttribute('x', 30);
                svg_text[0].setAttribute('y', 70);
                svg_text[0].setAttribute('style', 'fill:White;font-weight:400;font-size:50px;font-family:Arial');

                svg_text[1].setAttribute('x', 30);
                svg_text[1].setAttribute('y', 165);
                svg_text[1].setAttribute('style', 'fill:White;font-weight:400;font-size:50px;font-family:Arial');

                svg_text[2].setAttribute('x', 30);
                svg_text[2].setAttribute('y', 265);
                svg_text[2].setAttribute('style', 'fill:White;font-weight:400;font-size:50px;font-family:Arial');

                //-line-
                svg_line[0].setAttribute('x1', 30);
                svg_line[0].setAttribute('y1', 85);
                svg_line[0].setAttribute('x2', 275);
                svg_line[0].setAttribute('y2', 85);
                svg_line[0].setAttribute('style', "stroke:White;stroke-width:4");

                svg_line[1].setAttribute('x1', 30);
                svg_line[1].setAttribute('y1', 180);
                svg_line[1].setAttribute('x2', 275);
                svg_line[1].setAttribute('y2', 180);
                svg_line[1].setAttribute('style', "stroke:White;stroke-width:4");

                svg_line[2].setAttribute('x1', 30);
                svg_line[2].setAttribute('y1', 280);
                svg_line[2].setAttribute('x2', 275);
                svg_line[2].setAttribute('y2', 280);
                svg_line[2].setAttribute('style', "stroke:White;stroke-width:4");

            });
        });


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>