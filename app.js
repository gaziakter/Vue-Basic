var app = Vue.createApp({
	data() {
		return {
		}
	},

	methods: {
		getCurrentTime (){
			let cTimd = new Date();
			return new Date();
		}
	}

});

app.mount("#app");