new Vue ({
    el: "#app",
    data: {
        counter: 0,
    },
    methods: {
        increase: function () {
            return this.counter ++;
        }
    }
});