class UserPanel extends engine.DisplayObjectContainer {

    private background: engine.Bitmap;
    private heroPicture: engine.Bitmap;
    private weaponIconBitmap: engine.Bitmap;
    private helmentIconBitmap: engine.Bitmap;
    private corselerIconBitmap: engine.Bitmap;
    private shoesIconBitmap: engine.Bitmap;
    private heroInformationTextField: engine.TextField;
    private heroInformationText: string;
    private hero: Hero;
    public equipmentInformationPanel: EquipmentInformationPanel;

    constructor() {
        super();
        this.width = 480;
        this.height = 600;

        this.background = this.createBitmapByName("UserPanelBackGround.png");
        this.addChild(this.background);
        this.background.x = 0;
        this.background.y = 0;
        this.background.width = 480;
        this.background.height = 600;
        this.background.touchEnabled = true;
        this.background.addEventListener(engine.TouchEventsType.CLICK, (e: engine.TouchEventData) => {
            this.equipmentInformationPanel.alpha = 0;
        }, this)

        this.weaponIconBitmap = new engine.Bitmap();
        this.weaponIconBitmap.width = 50;
        this.weaponIconBitmap.height = 50;
        this.addChild(this.weaponIconBitmap);
        this.weaponIconBitmap.x = this.width * 7 / 9;
        this.weaponIconBitmap.y = this.height / 8;
        this.weaponIconBitmap.touchEnabled = true;
        this.weaponIconBitmap.addEventListener(engine.TouchEventsType.CLICK, (e: engine.TouchEventData) => {
            if (this.hero.__weaponsOnEquip[0]) {
                this.hero.__weaponsOnEquip[0].getEquipmentInformations();
                this.equipmentInformationPanel.showEquipmentInformation(this.hero.__weaponsOnEquip[0]);
                this.equipmentInformationPanel.alpha = 1;
            } else
                this.weaponIconBitmap.texture = engine.RES.getRES("NoEquipment.png", (value) => {
                    this.weaponIconBitmap.texture = value;
                    // this.weaponIconBitmap.texture.width = 50;
                    // this.weaponIconBitmap.texture.height = 50;
                    //console.log("weaponIconBitmap" + this.weaponIconBitmap.width);
                })
        }, this)


        this.helmentIconBitmap = new engine.Bitmap();
        this.helmentIconBitmap.width = 50;
        this.helmentIconBitmap.height = 50;
        this.addChild(this.helmentIconBitmap);
        this.helmentIconBitmap.x = this.width * 7 / 9;
        this.helmentIconBitmap.y = this.weaponIconBitmap.y + this.height / 6;
        this.helmentIconBitmap.touchEnabled = true;
        this.helmentIconBitmap.addEventListener(engine.TouchEventsType.CLICK, (e: engine.TouchEventData) => {
            if (this.hero.__armorOnEquip[0]) {
                this.hero.__armorOnEquip[0].getDefence();
                this.hero.__armorOnEquip[0].getAglie();
                this.equipmentInformationPanel.showEquipmentInformation(this.hero.__armorOnEquip[0]);
                this.equipmentInformationPanel.alpha = 1;
            } else
                this.helmentIconBitmap.texture = engine.RES.getRES("NoEquipment.png",(value) => {
                    this.helmentIconBitmap.texture = value;
                    // this.helmentIconBitmap.texture.width = 50;
                    // this.helmentIconBitmap.texture.height = 50;
                    //console.log("helmentIconBitmap" + this.helmentIconBitmap.width);
                })
        }, this)

        this.corselerIconBitmap = new engine.Bitmap();
        this.corselerIconBitmap.width = 50;
        this.corselerIconBitmap.height = 50;
        this.addChild(this.corselerIconBitmap);
        this.corselerIconBitmap.x = this.width * 7 / 9;
        this.corselerIconBitmap.y = this.helmentIconBitmap.y + this.height / 7;
        this.corselerIconBitmap.touchEnabled = true;
        this.corselerIconBitmap.addEventListener(engine.TouchEventsType.CLICK, (e: engine.TouchEventData) => {
            if (this.hero.__armorOnEquip[1]) {
                this.hero.__armorOnEquip[1].getDefence();
                this.hero.__armorOnEquip[1].getAglie();
                this.equipmentInformationPanel.showEquipmentInformation(this.hero.__armorOnEquip[1]);
                this.equipmentInformationPanel.alpha = 1;
            } else
                this.corselerIconBitmap.texture = engine.RES.getRES("NoEquipment.png",(value) => {
                    this.corselerIconBitmap.texture = value;
                    // this.corselerIconBitmap.texture.width = 50;
                    // this.corselerIconBitmap.texture.height = 50;
                    //console.log("corselerIconBitmap" + this.corselerIconBitmap.width);
                })
        }, this)

        this.shoesIconBitmap = new engine.Bitmap();
        this.shoesIconBitmap.width = 50;
        this.shoesIconBitmap.height = 50;
        this.addChild(this.shoesIconBitmap);
        this.shoesIconBitmap.x = this.width * 7 / 9;
        this.shoesIconBitmap.y = this.corselerIconBitmap.y + this.height / 6;
        this.shoesIconBitmap.touchEnabled = true;
        this.shoesIconBitmap.addEventListener(engine.TouchEventsType.CLICK, (e: engine.TouchEventData) => {
            if (this.hero.__armorOnEquip[2]) {
                this.hero.__armorOnEquip[2].getDefence();
                this.hero.__armorOnEquip[2].getAglie();
                this.equipmentInformationPanel.showEquipmentInformation(this.hero.__armorOnEquip[2]);
                this.equipmentInformationPanel.alpha = 1;
            }
            else
                this.shoesIconBitmap.texture = engine.RES.getRES("NoEquipment.png",(value) => {
                    this.shoesIconBitmap.texture = value;
                    // this.shoesIconBitmap.texture.width = 50;
                    // this.shoesIconBitmap.texture.height = 50;
                    //console.log("shoesIconBitmap" + this.shoesIconBitmap.width);
                })
        }, this)

        this.heroPicture = new engine.Bitmap();
        this.heroPicture.width = 323;
        this.heroPicture.height = 400;
        this.addChild(this.heroPicture);
        this.heroPicture.x = 0;
        this.heroPicture.y = 50;

        this.heroInformationText = "";

        this.heroInformationTextField = new engine.TextField();
        this.heroInformationTextField.width = 400;
        this.heroInformationTextField.height = 100;
        this.addChild(this.heroInformationTextField);
        this.heroInformationTextField.x = (this.width - this.heroInformationTextField.width) / 2;
        this.heroInformationTextField.y = 460;
        this.heroInformationTextField.size = 16;

        this.equipmentInformationPanel = new EquipmentInformationPanel();
        this.addChild(this.equipmentInformationPanel);
        this.equipmentInformationPanel.x = (this.width - this.equipmentInformationPanel.width) / 2;
        this.equipmentInformationPanel.y = (this.height - this.equipmentInformationPanel.height) / 2;
        this.equipmentInformationPanel.alpha = 0;

    }

    public showHeroInformation(hero: Hero) {
        this.hero = hero;
        this.getHeroInformations(hero);
        this.heroPicture.texture = engine.RES.getRES(hero.heroBitemapID,(value) => {
            this.heroPicture.texture = value;
        })

        if (hero.__weaponsOnEquip[0]) {
            this.weaponIconBitmap.texture = engine.RES.getRES(hero.__weaponsOnEquip[0].equipmentBitmapID,(value) => {
                this.weaponIconBitmap.texture = value;
                // this.weaponIconBitmap.texture.width = 50;
                // this.weaponIconBitmap.texture.height = 50;
                console.log(this.weaponIconBitmap.width);
                // console.log(this.helmentIconBitmap.width);
                // console.log(this.shoesIconBitmap.width);
                // console.log(this.corselerIconBitmap.width);
            })
        }
        else {
            this.weaponIconBitmap.texture = engine.RES.getRES("NoEquipment.png",(value) => {
                this.weaponIconBitmap.texture = value;
                // this.weaponIconBitmap.texture.width = 50;
                // this.weaponIconBitmap.texture.height = 50;
                console.log(this.weaponIconBitmap.width);
        // console.log(this.helmentIconBitmap.width);
        // console.log(this.shoesIconBitmap.width);
        // console.log(this.corselerIconBitmap.width);
            })
        }
        if (hero.__armorOnEquip[0]) {
            this.helmentIconBitmap.texture = engine.RES.getRES(hero.__armorOnEquip[0].equipmentBitmapID,(value) => {
                this.helmentIconBitmap.texture = value;
                // this.helmentIconBitmap.texture.width = 50;
                // this.helmentIconBitmap.texture.height = 50;
                // console.log(this.weaponIconBitmap.width);
        console.log(this.helmentIconBitmap.width);
        // console.log(this.shoesIconBitmap.width);
        // console.log(this.corselerIconBitmap.width);
            })
        }
        else {
            this.helmentIconBitmap.texture = engine.RES.getRES("NoEquipment.png",(value) => {
                this.helmentIconBitmap.texture = value;
                // this.helmentIconBitmap.texture.width = 50;
                // this.helmentIconBitmap.texture.height = 50;
                // console.log(this.weaponIconBitmap.width);
        console.log(this.helmentIconBitmap.width);
        // console.log(this.shoesIconBitmap.width);
        // console.log(this.corselerIconBitmap.width);
            })
        }
        if (hero.__armorOnEquip[1]) {
            this.corselerIconBitmap.texture = engine.RES.getRES(hero.__armorOnEquip[1].equipmentBitmapID,(value) => {
                this.corselerIconBitmap.texture = value;
                // this.corselerIconBitmap.texture.width = 50;
                // this.corselerIconBitmap.texture.height = 50;
        //         console.log(this.weaponIconBitmap.width);
        // console.log(this.helmentIconBitmap.width);
        // console.log(this.shoesIconBitmap.width);
        console.log(this.corselerIconBitmap.width);
            })
        }
        else {
            this.corselerIconBitmap.texture = engine.RES.getRES("NoEquipment.png",(value) => {
                this.corselerIconBitmap.texture = value;
                // this.corselerIconBitmap.texture.width = 50;
                // this.corselerIconBitmap.texture.height = 50;
        //         console.log(this.weaponIconBitmap.width);
        // console.log(this.helmentIconBitmap.width);
        // console.log(this.shoesIconBitmap.width);
        console.log(this.corselerIconBitmap.width);
            })
        }

        if (hero.__armorOnEquip[2]) {
            this.shoesIconBitmap.texture = engine.RES.getRES(hero.__armorOnEquip[2].equipmentBitmapID,(value) => {
                this.shoesIconBitmap.texture = value;
                // this.shoesIconBitmap.texture.width = 50;
                // this.shoesIconBitmap.texture.height = 50;
        //         console.log(this.weaponIconBitmap.width);
        // console.log(this.helmentIconBitmap.width);
        console.log(this.shoesIconBitmap.width);
        // console.log(this.corselerIconBitmap.width);
            })
        }
        else {
            this.shoesIconBitmap.texture = engine.RES.getRES("NoEquipment.png",(value) => {
                this.shoesIconBitmap.texture = value;
                // this.shoesIconBitmap.texture.width = 50;
                // this.shoesIconBitmap.texture.height = 50;
        //         console.log(this.weaponIconBitmap.width);
        // console.log(this.helmentIconBitmap.width);
        console.log(this.shoesIconBitmap.width);
        // console.log(this.corselerIconBitmap.width);
            })
        }

        //this.heroInformationTextField.text = this.heroInformationText;
        this.heroInformationTextField.textColor = hero.color;
    }

    public getHeroInformations(hero: Hero) {
        this.heroInformationText = "";
        this.heroInformationText = "英雄 : " + hero.name + "\n";
        hero.getDefence();
        hero.getAttack();
        hero.getMaxHP();
        hero.getAglie();
        for (let i = 0; i < hero.properties.length; i++) {
            this.heroInformationText = this.heroInformationText + hero.properties[i].name + " : " + hero.properties[i].value.toFixed(0) + "\n";
        }
        this.heroInformationText = this.heroInformationText + "战斗力 : " + hero.getFightPower().toFixed(0);
        this.heroInformationTextField.text = this.heroInformationText;
    }

    private createBitmapByName(name: string){
        var result = new engine.Bitmap();
        result.texture = engine.RES.getRES(name,(value) => {
           result.texture = value;
        })
        return result;
    }

}


class EquipmentInformationPanel extends engine.DisplayObjectContainer {
    public backGround: engine.Bitmap;
    private equipmentIconBitmap: engine.Bitmap;
    private nameField: engine.TextField;
    private propertiesField: engine.TextField;
    private jewelInformationField: engine.TextField;
    //private jewelFields : egret.TextField[] = [];

    constructor() {
        super();
        this.width = 250;
        this.height = 400;

        this.backGround = new engine.Bitmap();
        this.backGround.texture = engine.RES.getRES("BlackBackground.png",(value) => {
            this.backGround.texture = value;
        })
        this.backGround.width = 250;
        this.backGround.height = 400;
        this.addChild(this.backGround);
        this.backGround.x = 0;
        this.backGround.y = 0;
        this.backGround.alpha = 0.8;


        this.equipmentIconBitmap = new engine.Bitmap();
        this.equipmentIconBitmap.width = 60;
        this.equipmentIconBitmap.height = 60;
        this.addChild(this.equipmentIconBitmap);
        this.equipmentIconBitmap.x = 30;
        this.equipmentIconBitmap.y = 30;

        this.nameField = new engine.TextField();
        this.nameField.width = 200;
        this.nameField.height = 50;
        this.addChild(this.nameField);
        this.nameField.size = 24;
        this.nameField.x = 30;
        this.nameField.y = this.equipmentIconBitmap.y + this.equipmentIconBitmap.height + 50;

        this.propertiesField = new engine.TextField();
        this.propertiesField.width = 200;
        this.propertiesField.height = 300;
        this.addChild(this.propertiesField);
        this.propertiesField.textColor = "#ffffff";
        this.propertiesField.size = 20;
        this.propertiesField.x = 30;
        this.propertiesField.y = this.nameField.y + 55;

        this.jewelInformationField = new engine.TextField();
        this.jewelInformationField.width = 200;
        this.jewelInformationField.height = 300;
        this.addChild(this.jewelInformationField);
        this.jewelInformationField.size = 20;
        this.jewelInformationField.x = 30;
        this.jewelInformationField.y = this.propertiesField.y + 110;
    }

    public showEquipmentInformation(equipment: Equipment) {
        this.nameField.text = equipment.name;
        this.nameField.textColor = equipment.color;

        this.equipmentIconBitmap.texture = engine.RES.getRES(equipment.equipmentBitmapID,(value) => {
            this.equipmentIconBitmap.texture = value;
            //console.log("equipmentIconBitmap" + this.equipmentIconBitmap.width);
        })
        var information: string = "";

        for (let i = 0; i < equipment.properties.length; i++) {
            information = information + equipment.properties[i].name + " : " + equipment.properties[i].value.toFixed(0) + "\n" + "\n" + "\n";
        }
        this.propertiesField.text = information;

        information = "镶嵌宝石 ： \n\n";
        for (let i = 0; i < equipment.__jewelOnEquip.length; i++) {
            information = information + equipment.__jewelOnEquip[i].name + "\n\n"
            //this.jewelInformationField.textColor = equipment.__jewelOnEquip[i].color;
        }
        this.jewelInformationField.text = information;
    }
}