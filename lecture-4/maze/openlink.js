AFRAME.registerComponent("openlink", {
    schema: {
        url: { type: "string", default: "https://www.google.com" },
    },
    init: function () {
        let data = this.data;
        let el = this.el;

        // get the current scale
        let scale = el.object3D.scale;
        console.log(scale);

        // wait for the model to be loaded
        el.addEventListener("model-loaded", function () {
            el.addEventListener("click", function () {
                window.open(data.url, "_blank");
            });            
        });
    },
});
