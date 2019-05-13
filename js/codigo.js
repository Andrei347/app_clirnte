var app = new Vue({
    el: '#app',
    mounted() {
       this.traerdatos();
    },
    data: {

    },
    methods:{
        showmoreid: function () {
            window.location="show_more.html";
        },
        traerdatos: function () {
            axios.put('http://127.0.0.1:8000/api/reqbudget/5')
                .then((respuesta) => {
                    console.log(respuesta);
                    //this.personas=respuesta.data.results;
                });
        }
    }
})