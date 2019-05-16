new Vue({
    el: '#app',
    data: {
        id: "",
        title: "",
        description: "",
        category_id: "",
        user_id: "",
        updated_at: "",
        state: "",
        todo: [],
        especial: [],
    }, mounted() {
        this.traerdatos();
    },
    methods: {
        showmoreid: function (id) {
            window.location = "show_more.html";
            console.log(id);
            console.log(this.todo[id].description);
            this.title = this.todo[id].title;
            this.description = this.todo[id].description;
            this.category_id = this.todo[id].category_id;
            this.user_id = this.todo[id].user_id;
            this.state = this.todo[id].state;
            this.updated_at = this.todo[id].updated_at;
           // window.location = "show_more.html";
        },
        traerdatos: function () {
            axios.get('http://127.0.0.1:8000/api/reqbudget/')
                .then((respuesta) => {
                    //console.log(respuesta.data.data);
                    this.todo = respuesta.data.data;
                    console.log(this.todo);
                });
        }
    }
});
