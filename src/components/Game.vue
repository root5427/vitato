<template>
  <div class="game">
    <div class="container">
      <h1>viTaTo</h1>
      <div class="wrapper" ref="gameWrapper">
        <div class="row">
          <box v-for="i in 9" :key="i" :id="i" class="col" ref="markBox" />
        </div>
        <div class="game-over" v-if="result !== ''">
          <h1 v-if="result === 'win'">Winner is {{ winner | uppercase }}</h1>
          <h1 v-else>Tie</h1>
          <button class="restart-btn" @click="restartGame">
            Restart the game
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Box from "./Box.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { Box },
  name: "Game",
  data() {
    return {
      nextMark: "x",
      squares: Array(9).fill(null),
    };
  },
  computed: {
    ...mapGetters(["getNextMark", "winner", "result"]),
  },
  methods: {
    ...mapActions([
      "updateResult",
      "updateWinner",
      "updateMarks",
      "updateNextMark",
    ]),
    restartGame() {
      this.updateResult("");
      this.updateWinner(null);
      this.updateMarks(null);
      this.updateNextMark("x");
      this.$refs.markBox.forEach((mb) => {
        mb.marked = false;
        mb.$el.style.backgroundColor = "";
      });
    },
  },
  filters: {
    uppercase(text) {
      return text.toUpperCase();
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 4rem 0;
  width: 1440px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 3rem;
}

.wrapper {
  width: 33%;
  margin: 0 auto;
  .row {
    margin: 0.5rem 0;
    width: 100%;
    max-width: 100%;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }

  .game-over {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .restart-btn {
      margin-top: 2rem;
      padding: 1rem 1rem;
      border: none;
      outline: none;
      background: rgb(106, 90, 205);
      color: white;
      font-weight: bold;
      font-size: 1.3rem;
      border-radius: 1rem;
      width: fit-content;
      cursor: pointer;
      position: relative;

      &::after {
        contain: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 60%;
        background-color: rgba(106, 90, 204, 1);
      }

      &:hover {
        /* box-shadow: 0 0 20px rgba(106, 90, 204, 0.2); */
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
      }
    }
  }
}
</style>
