AFRAME.registerComponent('video-player', {
    schema: {
        target: {type: 'selector'},
        distance: {type: 'number', default: 5}
    },
    tick: function () {
        var playerLocation = this.data.target.components['player-location'].playerLocation;
        var position = new THREE.Vector3();
        this.el.object3D.getWorldPosition(position);
        var distance = playerLocation.distanceTo(position);
        if (distance < this.data.distance) {
            console.log('The camera is close to the video');
        }
    }
});