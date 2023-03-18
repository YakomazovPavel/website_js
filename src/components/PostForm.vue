<template>
	<div class="app">
		<form @submit.prevent>
			<h4>Create post</h4>
			<my-input 
			 v-model:value="post.title"
			 type="text"
			 placeholder="Title"
			/>
			<my-input 
			 v-model:value="post.body"
			 type="text" 
			 placeholder="Body"
			/>
			<my-button
			 class="btn"
			 @click="create_post"
			 >
			 Create
			</my-button>
		</form>
	</div>
</template>
<script>
// import MyButton from '@/components/UI/MyButton.vue';
export default { 
	// components: {
	// 	MyButton,
	// },
	data() {
		return {
			post: {
				title: "",
				body: ""
			}
		}
	},
	methods:{
		create_post() {
			this.post.id = Date.now();
			
			this.$emit('create', this.post)
			this.post = {
				title: "",
				body: ""
			}
		}
	},
	// watch: {
	// 	post: {
	// 		handler(newValue) {
	// 			console.log(newValue)
	// 		},
	// 		deep: true
	// 	}
	// }
	
}
</script>
<style scoped>


form {
	display: flex;
	flex-direction: column;
}

.btn {
	margin-top: 15px;
	align-self: flex-end;
}
</style>