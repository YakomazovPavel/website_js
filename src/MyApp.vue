<template>
  <div class="app">
    <!-- <router-view></router-view> -->
    <div>
      Hello!
    </div>
    <chess-place :rows="rows" :columns="columns"></chess-place>
  </div>
</template>
<script>
import CheesPlace from '@/components/CheesPlace.vue'
export default {
  components: {
    'chess-place': CheesPlace
  },
  data() {
    return {
      rows: 26,
      columns: 26
    }
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
