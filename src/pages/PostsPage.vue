<template>
	<div>
	  <test_model_0>
		<!-- <div>
		  <test_model_1></test_model_1>
		</div> -->
	  </test_model_0>
	</div>
  
	<div >
	  <h1>Page with posts</h1>
	  <my-input v-model:value="searchQuery" />
	  <div class="app__btns">
		<my-button class="btn_create" @click="showDialog"> CreatePost </my-button>
		<my-select v-model="selectedSort" :options="sortOptions" />
	  </div>
	  <!-- 		
		  <my-button
			  class="app__btns"
  
			  @click="fetchPosts"
		  >	
			  Get posts
		  </my-button> -->
  
	  <my-dialog v-model:show="dialogVisible">
		<post-form @create="create_post" />
	  </my-dialog>
  
	  <post-list :posts="sortedAndSerchedPosts" @remove="remove_post" />
	  <!-- <div>
		<div class="page__wrapper">
		  <div
			v-for="pageNumber in totalPages"
			:key="pageNumber"
			class="page"
			:class="{
			  'current-page': page === pageNumber,
			}"
			@click="changePage(pageNumber)"
		  >
			{{ pageNumber }}
		  </div>
		</div>
	  </div> -->
	  <div ref="observer" class="observer">Text from end</div>
	</div>
  </template>
  
  <script>
  import PostForm from "@/components/PostForm.vue";
  import PostList from "@/components/PostList.vue";
  import MyButton from "@/components/UI/MyButton.vue";
  import axios from "axios";
  import test_model_0 from "@/components/TestModel_0.vue";
  // import test_model_1 from "@/components/TestModel_1.vue";
  
  export default {
	components: {
	  PostForm,
	  PostList,
	  MyButton,
	  test_model_0,
	  // test_model_1,
	},
  
	data() {
	  return {
		posts: [],
		dialogVisible: false,
		selectedSort: "",
		sortOptions: [
		  { value: "title", name: "По названию" },
		  { value: "body", name: "По тексту" },
		],
		searchQuery: "",
		page: 0,
		limitPosts: 10,
		totalPages: 0,
	  };
	},
	methods: {
	  create_post(post) {
		this.posts.push(post);
		this.dialogVisible = false;
	  },
	  remove_post(post) {
		this.posts = this.posts.filter((item) => item.id !== post.id);
	  },
	  showDialog() {
		this.dialogVisible = true;
	  },
	  // changePage(pageNumber) {
	  //   this.page = pageNumber;
	  // },
	  // async fetchPosts() {
	  //   try {
	  //     const response = await axios.get(
	  //       "https://jsonplaceholder.typicode.com/posts",
	  //       {
	  //         params: {
	  //           _page: this.page,
	  //           _limit: this.limitPosts,
	  //         },
	  //       }
	  //     );
	  //     this.totalPages = Math.ceil(
	  //       response.headers["x-total-count"] / this.limitPosts
	  //     );
	  //     // console.log(this.totalPages)
	  //     // console.log(response);
	  //     this.posts = response.data;
	  //   } catch (error) {
	  //     console.log(error);
	  //   }
	  // },
	  async fetchPosts() {
		try {
		  const response = await axios.get(
			"https://jsonplaceholder.typicode.com/posts",
			{
			  params: {
				_page: this.page,
				_limit: this.limitPosts,
			  },
			}
		  );
		  this.totalPages = Math.ceil(
			response.headers["x-total-count"] / this.limitPosts
		  );
		  // console.log(this.totalPages)
		  // console.log(response);
		  this.posts = [...this.posts, ...response.data];
		  
		  this.page += 1;
		  console.log(this.page)
		} catch (error) {
		  console.log(error);
		}
	  },
	},
	mounted() {
	  this.fetchPosts();
	  console.log(this.$refs.observer);
	  const options = {
		//   root: document.querySelector("#scrollArea"),
		rootMargin: "0px",
		threshold: 1.0,
	  };
	  const callback = (entries, observer) => {
		/* Content excerpted, show below */
		//   console.log('hi!')
		//   console.log(entries)
		if (entries[0].isIntersecting && this.page < this.totalPages) {
		  console.log("hi!");
		  this.fetchPosts();
		}
	  };
	  const observer = new IntersectionObserver(callback, options);
	  observer.observe(this.$refs.observer);
	},
	computed: {
	  // сортировка
	  sortedPosts() {
		return [...this.posts].sort((post1, post2) =>
		  post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
		);
	  },
	  // поиск
	  sortedAndSerchedPosts() {
		return this.sortedPosts.filter((post) =>
		  post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
		);
	  },
	},
	watch: {
	  // 	selectedSort(newValue) {
	  // 		// console.log(newValue)
	  // 		this.posts.sort((post1, post2) => {
	  // 			return post1[newValue]?.localeCompare(post2[newValue])
	  // 		});
	  // 	}
	  // page() {
	  //   this.fetchPosts();
	  // },
	},
  };
  </script>
  
  <style>
  
  .app__btns {
	display: flex;
	margin-top: 10px;
	margin-bottom: 10px;
	justify-content: space-between;
  }
  
  .page__wrapper {
	display: flex;
	margin-top: 15px;
  }
  
  .page {
	border: 1px solid black;
	padding: 10px;
  }
  
  .current-page {
	border: 2px solid teal;
  }
  
  .observer {
	height: 30px;
	background: teal;
  }
  </style>
  