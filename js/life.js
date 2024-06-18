game.PlayerLife({
    init: function(x, y) {
        var settings = {};
        settings.image = 'プレイヤー';
        settings.width = 230;
        settings.height = 200;

        this._super(me.Life, 'init', [x, y, settings]);
        this.alwaysUpdate = true;
        this.maxAngleRotation = Number.prototype.degToRad(-20);
        this.maxAngleRotationDown = Number.prototype.degToRad(20);
        // this.renderable.addAnimation("swim", [0, 1, 2]);
        // this.renderable.setCurrentAnimation("swim");
    },
});
