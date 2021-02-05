<template>
  <div class="box" @click="markPosition"></div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Box",
  props: {
    id: {
      type: Number,
    },
  },
  data() {
    return {
      marked: false,
    };
  },
  methods: {
    ...mapActions(["updateNextMark", "mark", "updateWinner", "updateResult"]),
    markPosition(event) {
      if (!this.marked && this.winner === null) {
        let color = "";
        const nextMark = this.getNextMark;
        if (nextMark === "x") {
          color = "red";
        } else {
          color = "yellow";
        }
        event.target.style.backgroundColor = color;
        this.updateNextMark(nextMark === "x" ? "o" : "x");
        this.marked = true;
        const payload = { id: this.id - 1, mark: nextMark };
        this.mark(payload);
        const winner = this.calculateWinner(this.marks);
        if (winner) {
          this.updateWinner(winner);
          this.updateResult("win");
        } else {
          if (this.marks.indexOf(null) == -1) {
            this.updateResult("tie");
          }
        }
      }
      return true;
    },
    calculateWinner(squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
          squares[a] &&
          squares[a] === squares[b] &&
          squares[a] === squares[c]
        ) {
          return squares[a];
        }
      }
      return null;
    },
  },
  computed: {
    ...mapGetters(["getNextMark", "marks", "winner"]),
  },
};
</script>

<style lang="scss" scoped>
.box {
  height: 100px;
  background: rgba($color: #444, $alpha: 0.2);
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    box-shadow: 0 0 20px rgba($color: #000, $alpha: 0.1);
  }
}
</style>