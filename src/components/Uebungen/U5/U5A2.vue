<template>
<div>
  <body>
    <h3>Rednerliste</h3>
    <input style="margin-right:5px" id="input" type="text" />
    <button id="newRedner">Redner hinzufügen</button>
    <ul id="list"></ul>
  </body>
</div>
</template>

<script>
export default {
  name: "",
  props: {},
  data: function () {
    return {};
  },
  mounted() {
    this.allSpeakers = new Map();
    CreateSpeaker = createSpeaker
    var speakerCount = 0;
    var button = document.getElementById("newRedner");
    button.onclick = function () {
      speakerCount++;
      const input = document.getElementById("input").value;
      CreateSpeaker(speakerCount, input);
    };
  },

  methods: {

createButton(speaker) {
        var button = document.createElement('button');
        button.innerHTML = speaker.isRunning ? 'stop': 'start';
        button.onclick = function() {
            if (speaker.isRunning) {
                speaker.stop();
                button.innerHTML = 'start'
            } else {
                speaker.start();
                button.innerHTML = 'stop';
            }
        };
        return button;
    },
    createSpeaker(id, name) {
      var allSpeakers = this.allSpeakers
        allSpeakers.set(id, {
            id:id,
            name: name,
            time: 0,
            repeater: null,
            isRunning: false,
            stop: function(){
                clearInterval(this.repeater);
                this.isRunning = false;
                var that = this;
                writeRow(that);
            },
            start: function() {
                var that = this;
                allSpeakers.forEach((value) => value.stop());
                this.repeater = setInterval(function(){
                    that.time++;
                    writeRow(that);
                }, 1000);
                this.isRunning = true;
            }
        });
        allSpeakers.get(id).start();
    },

    writeRow(speaker) {
        var row = document.getElementById('row-' + speaker.id);
        const output = "" + speaker.name + " "
            + new Date(0, 0, 0, 0, 0, speaker.time).toLocaleTimeString() + " ";

        if (!row) {
            row = document.createElement('li');
            row.innerHTML = output;
            row.appendChild(createButton(speaker));
            document.getElementById('list').appendChild(row);
        } else {
            row.innerHTML = output;
            row.appendChild(createButton(speaker))
        }
        row.id = "row-" + speaker.id;
    }

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>