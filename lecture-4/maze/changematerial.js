AFRAME.registerComponent('changematerial', {
    schema: {
        color: {type: 'color', default: '#FFFFFF'}
    },
    init: function () {
        let data = this.data;
        let el = this.el;
        
        // wait for the model to be loaded
        el.addEventListener('model-loaded', function () {
            console.log('model loaded');
            let mesh = el.getObject3D('mesh');
            if (!mesh) { return; }
            mesh.traverse(function (node) {
                if (node.isMesh) {
                    // set the metalness to 0 and the rougness to 1

                    // set the roughness to 1
                    node.material.roughness = 1;

                    // set the material to white
                    node.material.color.set(0xFFFFFF);

                    // enable shadow
                    node.castShadow = true;
                    node.receiveShadow = true;
        
                    console.log(node);
                }
            });
        });

        

    }
});