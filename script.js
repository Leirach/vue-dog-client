new Vue({
    el: '#vueapp',
    data: {
        title: "Dog API Client",
        subtitle: "By Juan Carlos De León",
        imgURL: "",
    },
    methods: {
        changeImg() {
            axios.get('https://dog.ceo/api/breeds/image/random')
                 .then(response => (this.imgURL = response.data.message))
        },
    },
    mounted(){
        this.changeImg();
    }
});