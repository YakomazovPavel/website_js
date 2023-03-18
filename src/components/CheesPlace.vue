<template>
  <div>Hi this is chess plase!</div>
  <div>{{ this.counter }}</div>
  <div v-for="(row, id) in rows" :key="id" class="chessrow">
    <div
      v-for="(column, id) in columns"
      :key="id"
      class="cell"
      @mouseover="mousedownChess"
    ></div>
  </div>
  <!-- <button @mouseover="mousedownChess">Clik me!</button> -->
</template>
<script>
export default {
  name: "chess-place",
  props: {
    rows: Number,
    columns: Number,
  },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    mousedownChess(event) {
		if (event.buttons === 1) {
			// console.log(event)
			event.toElement.style.backgroundColor = "#000000";
		}
		// console.log(`counter = ${this.counter}`)
		// console.log(event.toElement)
		
    //   this.counter += 1;
    },
  },
};
</script>
<style>
.cell {
  width: 20px;
  height: 20px;
  border: 1px solid black;
  display: inline-block;
}

.chessrow {
  height: 20px;
}
</style>
