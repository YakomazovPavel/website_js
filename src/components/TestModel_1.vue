<template>
	<div>
		text from test model 1
		<input type="text" v-model="value_tm_1" @input="change_value_tm_1">
		text from test model 1
	</div>
</template>
<script>
export default {
	name: 'test_model_1',
	data() {
		return {
			value_tm_1: 'Переменная из TestModel_1'
		}
	},
	methods: {
		change_value_tm_1() {
			this.$emit('update:value_tm_1', event.target.value)
		}
	}
}
</script>
<style>
	
</style>