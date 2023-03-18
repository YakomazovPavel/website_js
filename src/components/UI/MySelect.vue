<template>
  <select v-model="modelValue" @change="changeOptions">
    <option disabled value="">Сортировать по</option>
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      @change="changeOptions"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  // data() {
  // 	return {
  // 		selectedSortValue: {
  // 			type: String,
  // 		},
  // 	}
  // },
  modelValue: {
    type: String,
  },

  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOptions(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style></style>
