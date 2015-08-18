window.TodoApp = new(Backbone.Router.extend({
    routes: {
        '': 'index'
    },
    initialize: function () {
        this.todoItems = new TodoItems();
        this.todosView = new TodosView({
            collection: this.todoItems
        });
        this.todosView.render();
    },
    index: function () {
        var fixtures = [
            {
                val: 'Learn Backbone.js',
                completed: true
            },
            {
                val: 'Look at cat pictures',
                completed: true
            },
            {
                val: 'Also, puppies',
                completed: false
            },
            {
                val: 'Choose an MVC',
                completed: false
            },
            {
                val: 'Hear some rad presenters',
                completed: true
            }
    ];

        $('#app').html(this.TodosView.el);
        this.todoItems.reset(fixttures);
    },
    start: function () {
        Backbone.history.start();
    }
}));