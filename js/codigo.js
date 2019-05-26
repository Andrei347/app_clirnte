new Vue({
    el: '#app',
    data: {
        username:"",
        password:"",
        title: "",
        description: "",
        category_id: "",
        user_id: "",
        updated_at: "",
        state: "",
        image:"",
        todo: [],
    }, mounted() {
        this.traerdatos();
    },
    methods: {
        showmoreid: function (id) {
            console.log(this.todo[id]);
            window.location = "show_more.html";
            this.mostrar(id);
        },
        mostrar:function(id){
            this.title = this.todo[id].title;
            this.description = this.todo[id].description;
            this.category_id = this.todo[id].category_id;
            this.user_id = this.todo[id].user_id;
            this.state = this.todo[id].state;
            this.updated_at = this.todo[id].updated_at;
        },

        traerdatos: function () {
            axios.get('http://127.0.0.1:8000/api/reqbudget/')
                .then((respuesta) => {
                    //console.log(respuesta.data.data);
                    this.todo = respuesta.data.data;
                    console.log(this.todo);
                });
        },
        sesion: function () {
            console.log(this.username, this.password);
            //window.location = "inicio.html";
        }
    }
});
