<template>
<div>
  <h2>Wireframe with HTML and CSS</h2>
  
    <div id="frame">
      <h1>Survey Form</h1>
      <div id="Survey">
        <p>Let us know how we can improve freeCodeCamp</p>

        <table>
          <tr>
            <td class="left">* Name:</td>
            <td>
              <input form="text" class="right" placeholder="Enter your name" />
            </td>
          </tr>
          <tr>
            <td class="left">* Email:</td>
            <td>
              <input class="right" form="Email" placeholder="Enter your Email" />
            </td>
          </tr>
          <tr>
            <td class="left">* Age:</td>
            <td>
              <input class="right" form="number" placeholder="Age" />
            </td>
          </tr>
          <tr>
            <td class="left">Which option describes your current role?</td>
            <td>
              <select class="right" name="role" id="role">
                <option>Student</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <p class="left">
                * How likley is that you would recommend
                <br />freeCodeCamp to a friend?
              </p>
            </td>
            <td>
              <input class="right" type="radio" name="radio1" />Definitely
              <br />
              <input class="right" type="radio" name="radio2" />Definitely
              <br />
              <input class="right" type="radio" name="radio3" />Definitely
              <br />
            </td>
          </tr>

          <tr>
            <td class="left">What do you like most in FCC:</td>
            <td>
              <select class="right" name="option" id="option">
                <option value="0">select an option</option>
              </select>
            </td>
          </tr>

          <tr>
            <td class="left">
              Things that schould be improved in the future
              <br />(Check all that apply)
            </td>
            <td>
              <input class="right" type="checkbox" name="check" /> Front-end Projects
              <br />
              <input class="right" type="checkbox" name="check" /> Back-end Projects
              <br />
              <input class="right" type="checkbox" name="check" /> Data Visualization
            </td>
          </tr>
        </table>
      </div>
    </div>
 
</div>
</template>

<script>
export default {
  name: "",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .left {
    text-align: right;
  }

  .right {
    text-align: left;
  }

  #survey {
    text-align: center;
    background-color: #fafafa;
    padding-top: 10px;
    border-radius: 5px;
    height: 100%;
  }

  #frame {
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #a9d7d1;
    padding: 10px 10% 0px;
    font-size: 14pt;
  }

  td {
    vertical-align: top;
    width: 50%;
    padding: 10px;
  }
  input[type="radio"],
  input[type="checkbox"] {
    margin-bottom: 10px;
  }
  input[form="text"],
  input[form="Email"],
  input[form="number"] {
    padding: 5px;
    padding-right: 50px;
  }

  input {
    font-size: 11pt;
  }
  select {
    font-size: 11pt;
    padding: 5px;
    width: 140px;
  }

  table {
    margin: auto;
  }
    </style>