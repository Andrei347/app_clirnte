new Vue({
    el: '#app',
    data: {
        todo: [],
    }, mounted() {
        this.traerdatos();
    },
    methods: {
        showmoreid: function (id) {
            console.log(id);

            window.location = "show_more.html";
        },
        traerdatos: function () {
            axios.get('http://127.0.0.1:8000/api/reqbudget/')
                .then((respuesta) => {
                    //console.log(respuesta.data.data);
                        this.todo=respuesta.data.data;
                    console.log(this.todo);
                });
        }
    }
})