new Vue ({
    el: "#app",
    data: {
        title: "Hello World",
        link: "http://www.google.com",
        finishedLink: "<a href='http://www.google.com'>Gootle</a>"
    },
    methods: {
        sayHello: function () {
            this.title = "Hello!";
            return this.title;
        }
    }
});