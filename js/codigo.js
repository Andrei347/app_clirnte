new Vue({
    el: '#app',
    data: {
        todo: [],
    }, mounted() {
        this.traerdatos();
    },
    methods: {
        showmoreid: function () {
            window.location = "show_more.html";
        },
        traerdatos: function () {
            axios.get('http://127.0.0.1:8000/api/reqbudget/')
                .then((respuesta) => {
                    console.log(respuesta.data.data);
                    for (var i = 0; i <respuesta.data.data.length ; i++) {
                        this.todo[i]=respuesta.data.data[i];
                    }
                    console.log(this.todo);
                });
        }
    }
})