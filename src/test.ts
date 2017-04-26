var canvas = document.getElementById("app") as HTMLCanvasElement;
var stage = engine.run(canvas);
var touchService = engine.TouchEventService.getInstance();
// var bitmap = new engine.Bitmap();
// engine.RES.getRes("0008.png").then((value) => {
//     bitmap.texture = value;
//     bitmap.setWidth(bitmap.texture.width);
//     bitmap.setHeight(bitmap.texture.height);
// });
// stage.addChild(bitmap);
// let speed = 190;

// engine.Ticker.getInstance().register((deltaTime) => {
//     //console.log("aaa");
//     bitmap.setWidth(500);
// });
engine.RES.getRES("RES.json",(data) => {
    var preloadJson = data;
    engine.RES.loadConfig(preloadJson, () => {
        console.log("load complete!!!");
        var main = new Main(stage, touchService);
        main.createGameScene();
    });
});


