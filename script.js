new Vue({
    el: '#vueapp',
    data: {
        title: "Dog API Client",
        subtitle: "By Juan Carlos De León.",
        imgURL: "",
        btnText: "Another Dog!",
        loading: false,
        navString: "Collapse",
        jumbotronVisible: true,
        breed: "",
        showError: false,
    },
    methods: {
        changeImg() {
            this.showError = false;
            let endpoint = 'https://dog.ceo/api/breeds/image/random'
            if(this.breed){
                endpoint = `https://dog.ceo/api/breed/${this.breed}/images/random`
            }
            this.loading = true;
            this.btnText = "loading..."
            axios.get(endpoint)
                .then(response => {
                    this.imgURL = response.data.message;
                })
                .catch((err) => {
                    this.imgLoaded();
                    this.showError = true
                });
        },
        toggleJumbotron() {
            this.jumbotronVisible = !this.jumbotronVisible;
            this.navString = this.jumbotronVisible? "Collapse" : "Show";
        },
        imgLoaded() {
            this.loading = false;
            this.btnText = "Another Dog!";
        }
    },
    mounted(){
        this.changeImg();
    }
});