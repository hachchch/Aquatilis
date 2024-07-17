const canvas = document.querySelector('.canvas');
            const ctx = canvas.getContext('2d');
            const miss = document.getElementById('missCounter');
            const score = document.getElementById('stageCounter');
            const score2 = document.getElementById('scoreCounter');
            const time = document.getElementById('timer');
            const progress = document.getElementById('progressBar');
            const nameDisplay = document.getElementById('toggle');
            let startTime=0;
            let isPC=false;
            let isStart=false;
            let popInterval=0;
            const img = new Image(); // 新たな img 要素を作成
            img.src = "https://github.com/hachchch/Aquatilis/blob/main/Images/player1.png?raw=true";
            img.src = "https://github.com/hachchch/Aquatilis/blob/main/Images/player2.png?raw=true";
            img.src = "https://github.com/hachchch/Aquatilis/blob/main/Images/player3.png?raw=true";
            img.src = "https://github.com/hachchch/Aquatilis/blob/main/Images/player2-blink.png?raw=true";
            const players=[];
            const fishes=[];
            const popTexts=[];
            const mouse = {
                x: null,
                y: null,
            }
            var gameEnd = false;
            function ringTrigger() {
                document.getElementById('DamageSound').pause();
                document.getElementById('DamageSound').currentTime = 0;
                document.getElementById("DamageSound").play();
            }
            function eatTrigger() {
                document.getElementById('EatSound').pause();
                document.getElementById('EatSound').currentTime = 0;
                document.getElementById("EatSound").play();
            }
            function nextStageTrigger() {
                document.getElementById('NextStageSound').pause();
                document.getElementById('NextStageSound').currentTime = 0;
                document.getElementById("NextStageSound").play();
            }
            function nextFloorTrigger() {
                document.getElementById('NextFloorSound').pause();
                document.getElementById('NextFloorSound').currentTime = 0;
                document.getElementById("NextFloorSound").play();
            }
            function bgm1Trigger() {
                bgm2Stop();
                bgm3Stop();
                bgm4Stop();
                bgm5Stop();
                document.getElementById("TwilightZone").play();
            }
            function bgm1Stop(){
                document.getElementById('TwilightZone').pause();
                document.getElementById('TwilightZone').currentTime = 0;
            }
            function bgm2Trigger() {
                bgm1Stop();
                bgm4Stop();
                bgm5Stop();
                document.getElementById("MidnightZone").play();
            }
            function bgm2Stop(){
                document.getElementById('MidnightZone').pause();
                document.getElementById('MidnightZone').currentTime = 0;
            }
            function bgm3Trigger() {
                document.getElementById("Aquatilis").play();
                document.getElementById("titleButton").disabled = true;
            }
            function bgm3Stop(){
                document.getElementById('Aquatilis').pause();
                document.getElementById('Aquatilis').currentTime = 0;
            }
            function bgm4Trigger() {
                bgm1Stop();
                bgm2Stop();
                bgm5Stop();
                document.getElementById("HydrothermalVent").play();
            }
            function bgm4Stop(){
                document.getElementById('HydrothermalVent').currentTime = 0;
                document.getElementById('HydrothermalVent').pause();
            }
            function bgm5Trigger() {
                bgm1Stop();
                bgm2Stop();
                bgm4Stop();
                document.getElementById("Spirogyra").play();
            }
            function bgm5Stop(){
                document.getElementById('Spirogyra').currentTime = 0;
                document.getElementById('Spirogyra').pause();
            }
            difficulties.value='普通';
            miss.value=0;
            score.value=0;
            score.innerHTML=0;
            score2.value=0;
            nameDisplay.value=0;
            window.addEventListener('mousemove', (event) => {
                mouse.x = event.x-10;
                mouse.y = event.y-10;
            });
            canvas.style.border = "3px solid";
            players.push({
                x:100,
                y:300,
                r:10,
                dx:0,
                dy:0,
                v:5,
                eatEffect: "0"
            });
            function summonFishes(){
            if(score.value!=8){
            if(score.value!=10){
            if(score.value<20){
            fishes.push({
                name:"カタクチイワシ",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:5,
                v:5,
                color:"red",
                isEatable: false,
                isBullet: false,
                isAggressive: false
            });
            }
            if(Math.round(Math.random()*100)>30 && score.value>=11 && score.value<20){
            fishes.push({
                name: "ウナギ",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:4,
                v:6,
                color:"red",
                isEatable: false,
                isBullet: false,
                isAggressive: false
            });
            }
            if(Math.round(Math.random()*100)>30 && score.value>=12 && score.value<20){
            fishes.push({
                name: "エビ",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:5,
                v:2,
                color:"red",
                isEatable: false,
                isBullet: false,
                isAggressive: false
            });
            }
            if(Math.round(Math.random()*100)>30 && score.value>=3 && score.value<20){
            fishes.push({
                name: "ニシン",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:5,
                v:4,
                color:"red",
                isEatable: false,
                isBullet: false,
                isAggressive: false
            });
            }
            if(Math.round(Math.random()*100)>30 && score.value>=13 && score.value<20){
            fishes.push({
                name: "鮭",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:6,
                v:6,
                color:"red",
                isEatable: false,
                isBullet: false,
                isAggressive: false
            });
            }
            if(Math.round(Math.random()*100)>60 && score.value>=14 && score.value<20){
            fishes.push({
                name: "マグロ",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:8,
                v:6,
                color:"red",
                isEatable: false,
                isBullet: false,
                isAggressive: false
            });
            }
            if(Math.round(Math.random()*100)>45 && score.value>=15 && score.value<20){
            fishes.push({
                name: "スズキ",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:4,
                v:6,
                color:"red",
                isEatable: false,
                isBullet: false,
                isAggressive: false
            });
            }
            if(Math.round(Math.random()*100)>97 && score.value>=16){
            fishes.push({
                name: "ダイオウイカ",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:15,
                v:3,
                color:"red",
                jetSwimming: true,
                isEatable: false,
                isBullet: false,
                isAggressive: true
            });
            }
            if(Math.round(Math.random()*100)>97 && score.value>=12 && score.value<20){
            fishes.push({
                name: "イルカ",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:12,
                v:9,
                color:"red",
                jetSwimming: false,
                isEatable: false,
                isBullet: false,
                isAggressive: true
            });
            }
            if(Math.round(Math.random()*100)>98 && score.value>=19 && score.value<24){
            fishes.push({
                name: "ザトウクジラ",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:25,
                v:2,
                color:"red",
                jetSwimming: false,
                isEatable: false,
                isBullet: false,
                isAggressive: false
            });
            }
            if(Math.round(Math.random()*100)>80 && score.value>=2 && score.value<11){
            fishes.push({
                name:"バショウカジキ",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:6,
                v:10,
                color:"red",
                isEatable: false,
                isBullet: false,
                isAggressive: false
            });
            }
            if(Math.round(Math.random()*100)>90 && score.value>=1 && score.value<11){
            fishes.push({
                name:"ホオジロザメ",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:7,
                v:7,
                color:"red",
                isEatable: false,
                isBullet: false,
                isAggressive: true
            });
            }
            if(Math.round(Math.random()*100)>40 && score.value>=3 && score.value<20){
            fishes.push({
                name:"マンボウ",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:8,
                v:3,
                color:"red",
                isEatable: false,
                isBullet: false,
                isAggressive: false
            });
            }
            if(Math.round(Math.random()*100)>60 && score.value>=10){
            fishes.push({
                name:"クラゲ",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:1.5,
                v:2,
                color:"lightblue",
                jetSwimming: true,
                isEatable: false,
                isBullet: false,
                isAggressive: false
            });
            }
            if(Math.round(Math.random()*100)>25 && score.value<11){
            fishes.push({
                name:"緑藻",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:3,
                v:5,
                color:"orange",
                isEatable: true,
                isAggressive: false,
                isBullet: false,
                dx:0,
                dy:0
            });
            }
            if(Math.round(Math.random()*100)>30 && score.value>10 && 20>score.value){
            fishes.push({
                name:"褐藻",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:3,
                v:5,
                color:"brown",
                isEatable: true,
                isAggressive: false,
                isBullet: false,
                dx:0,
                dy:0
            });
            }
            if(Math.round(Math.random()*100)>50 && score.value>=20){
            fishes.push({
                name:"栄養",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:3,
                v:5,
                color:"#"+Math.round(Math.random()*999999),
                isEatable: true,
                isAggressive: false,
                isBullet: false,
                dx:0,
                dy:0
            });
            }
            if(Math.round(Math.random()*100)>90 && score.value>=5 && score.value<11){
            fishes.push({
                name:"潜水艦",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:10,
                v:Math.ceil(Math.random()*12),
                color:"purple",
                isEatable: false,
                isAggressive: false,
                isBullet: false
            });
            }
            if(Math.round(Math.random()*100)>90 && score.value>=20){
            fishes.push({
                name:"チョウチンアンコウ",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:10,
                v:10,
                color:"red",
                isEatable: false,
                isAggressive: true,
                isBullet: false
            });
            }
            if(Math.round(Math.random()*100)>50 && score.value>=20){
            fishes.push({
                name:"リミカリス",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:3,
                v:4,
                color:"red",
                isEatable: false,
                isAggressive: false,
                isBullet: false
            });
            }
            if(Math.round(Math.random()*100)>50 && score.value>=20){
            fishes.push({
                name:"ナガツエエソ",
                x:canvas.width,
                y:600-Math.random()*5,
                r:5,
                v:2,
                color:"red",
                isEatable: false,
                isAggressive: false,
                isBullet: false
            });
            }
            if(Math.round(Math.random()*100)>70 && score.value>=30){
            fishes.push({
                name:"カスクウナギ",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:7,
                v:9,
                color:"red",
                isEatable: false,
                isAggressive: false,
                isBullet: false
            });
            }
            if(Math.round(Math.random()*100)>60 && score.value>=21){
            fishes.push({
                name:"ジュウモンジダコ",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:8,
                v:2,
                color:"red",
                jetSwimming: true,
                isEatable: false,
                isAggressive: true,
                isBullet: false
            });
            }
            if(Math.round(Math.random()*100)>30 && score.value>=22){
            fishes.push({
                name:"ヨロイダラ",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:5,
                v:5,
                color:"red",
                isEatable: false,
                isAggressive: false,
                isBullet: false
            });
            }
            if(Math.round(Math.random()*100)>60 && score.value>=32){
            fishes.push({
                name:"マリアナスネイルフィッシュ",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:3,
                v:5,
                color:"red",
                isEatable: false,
                isAggressive: false,
                isBullet: false
            });
            }
            if(Math.round(Math.random()*100)>50 && score.value>=25){
            fishes.push({
                name:"オウムガイ",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:7,
                v:1,
                color:"red",
                jetSwimming: true,
                isEatable: false,
                isAggressive: false,
                isBullet: false
            });
            }
            if(Math.round(Math.random()*100)>50 && score.value>=35){
            fishes.push({
                name:"アノマロカリス",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:3,
                v:2,
                color:"red",
                isEatable: false,
                isAggressive: true,
                isBullet: false
            });
            }
            if(Math.round(Math.random()*100)>50 && score.value>=36){
            fishes.push({
                name:"タミシオカリス",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:2.5,
                v:1,
                color:"red",
                isEatable: false,
                isAggressive: true,
                isBullet: false
            });
            }
            if(Math.round(Math.random()*100)>50 && score.value>40){
            fishes.push({
                name:"エーギロカシス",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:4,
                v:2,
                color:"red",
                isEatable: false,
                isAggressive: false,
                isBullet: false
            });
            }
            if(Math.round(Math.random()*100)>50 && score.value>37){
            fishes.push({
                name:"オパビニア",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:1,
                v:2,
                color:"red",
                isEatable: false,
                isAggressive: false,
                isBullet: false
            });
            }
            if(Math.round(Math.random()*100)>50 && score.value>50){
            fishes.push({
                name:"モササウルス",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:15,
                v:3,
                color:"red",
                isEatable: false,
                isAggressive: true,
                isBullet: false
            });
            }
            }else{
            //クラゲステージ
            if(Math.round(Math.random()*100)>50){
            fishes.push({
                name:"ポリープ",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:1,
                v:3,
                color:"lightblue",
                jetSwimming: true,
                isEatable: false,
                isBullet: false,
                isAggressive: false
            });
            }
            fishes.push({
                name:"クシクラゲ",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:1.25,
                v:1.25,
                color:"lightblue",
                jetSwimming: true,
                isEatable: false,
                isBullet: false,
                isAggressive: false
            });
            fishes.push({
                name:"真クラゲ",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:1.5,
                v:2,
                color:"lightblue",
                jetSwimming: true,
                isEatable: false,
                isBullet: false,
                isAggressive: false
            });
            if(Math.round(Math.random()*100)>70){
            fishes.push({
                name:"マンボウ",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:8,
                v:3,
                color:"red",
                isEatable: false,
                isBullet: false,
                isAggressive: false
            });
            }
            }
            }else{
            //イワシサメステージ
            fishes.push({
                name:"カタクチイワシ",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:5,
                v:5,
                color:"red",
                isEatable: false,
                isBullet: false,
                isAggressive: false
            });
            fishes.push({
                name:"カタクチイワシ",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:5,
                v:5,
                color:"red",
                isEatable: false,
                isBullet: false,
                isAggressive: false
            });
            if(Math.round(Math.random()*100)>87 && score.value>=1){
            fishes.push({
                name:"ホオジロザメ",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:7,
                v:7,
                color:"red",
                isEatable: false,
                isBullet: false,
                isAggressive: true
            });
            }
            if(Math.round(Math.random()*100)>97){
            fishes.push({
                name:"緑藻",
                x:canvas.width,
                y:Math.round(Math.random()*600),
                r:3,
                v:5,
                color:"orange",
                isEatable: true,
                isAggressive: false,
                isBullet: false,
                dx:0,
                dy:0
            });
            }
            }
            }
            popTexts.loopOf1=0;
            ctx.fillStyle="#ffffff"; //もっと暗いd2eefe
            ctx.fillRect(0,0,canvas.width,canvas.height);
            ctx.fillStyle="black";
            ctx.font = "200px serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("Aquatilis", 650, 250);
            ctx.font = "50px serif";
            ctx.fillText("アクアティリス", 650, 353);
            ctx.font = "20px serif";
            ctx.fillText("下のスタートボタンまたはスペースキーを押して開始", 480, 450);
            ctx.font = "20px serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            let radius = players[0].r;
            let radius2 =radius;
            function translate() {
            if(gameEnd===false){
                time.value = Math.floor((Date.now()-startTime)/1000);
                time.innerHTML=time.value;
                if(score.value!=8 && score.value!=10 && score.value<20){
                bgm1Trigger();
                }else{
                if(score.value==8){
                bgm5Trigger();
                }else if(score.value==10){
                bgm2Trigger();
                }else if(score.value>=20){
                bgm4Trigger();
                }
                }
                ctx.clearRect(0,0,canvas.width,canvas.height);
                ctx.fillStyle="#ffffff"; //もっと暗いd2eefe
                ctx.fillRect(0,0,canvas.width,canvas.height);
                if(time.value>0){
                ctx.beginPath();
                if(isPC===true){
                //スマホだと何故かこの処理がラグの原因になる。
                ctx.fillStyle="#0000ff0"+players[0].eatEffect;
                if(parseInt(players[0].eatEffect)>0){
                    players[0].eatEffect--;
                }
                }else{
                ctx.fillStyle="#00000000";
                }
                ctx.arc(players[0].x,players[0].y,radius,0,2*Math.PI);
                ctx.fill();
                ctx.fillStyle="gray";
                ctx.stroke();
                ctx.fillStyle=players[0].color+"05";
                ctx.arc(players[0].x,players[0].y,players[0].feed,0,2*Math.PI);
                ctx.fill();
                }
                ctx.drawImage(img, players[0].x-25, players[0].y-25, 50, 50);
                if(parseInt(radius2)>200){
                //小さくなる
                radius = radius-players[0].r/5;
                score2.value++;
                score2.innerHTML=score2.value;
                if(popTexts.loopOf1==0){
                popTexts.push({
                        value:"loop",
                        x:players[0].x,
                        y:players[0].y,
                        interval:100,
                        interval2:100
                    });
                }
                popTexts.loopOf1++;
                progress.value=radius/2;
                if(radius<players[0].r){
                popTexts.loopOf1=0;
                //次のステージへ
                    radius2=radius;
                    players[0].health=10;
                    if(difficulties.value==='簡単' && score.value==9){}else{
                    if(score.value==10 || score.value==19){
                    nextFloorTrigger();
                    }else{
                    nextStageTrigger();
                    }
                    score.value++;
                    score.innerHTML=score.value;
                    }
                score2.value=score2.value+50;
                score2.innerHTML=score2.value;
                popTexts.push({
                        value:50,
                        x:players[0].x,
                        y:players[0].y,
                        interval:25,
                        interval2:25
                    });
                }
                }else{
                radius = radius+players[0].r/100;
                radius2=radius;
                progress.value=radius/2;
                }
                for(const f of fishes){
                if(!f.jetSwimming){
                    f.jetSwimming=false;
                };
                ctx.beginPath();
                if(f.isEatable===false){
                if(f.jetSwimming===true){
                if(!f.interval){f.interval=40;f.interval2=40;}
                if(f.interval2!=40){
                    f.interval++;
                    f.interval2++;
                    f.x=f.x+f.v;
                }else{
                f.x=f.x-(f.interval*f.v)/30;
                f.interval=f.interval-0.25;
                if(f.interval<=0){
                    f.interval2=40;
                }
                }
                }
                if(f.isAggressive===false){
                if(f.isBullet===false){
                f.x=f.x-f.v;
                }else{
                f.x=f.x+f.dx*f.v;
                f.y=f.y+f.dy*f.v;
                }
                }else{
                if(Math.abs(players[0].x-f.x)<radius && radius2<200 && Math.abs(players[0].y-f.y)<radius){
                f.dx=Math.sin(Math.atan2(players[0].x-f.x,players[0].y-f.y));
                f.dy=Math.cos(Math.atan2(players[0].x-f.x,players[0].y-f.y));
                f.x=f.x+f.dx*(f.v/3);
                f.y=f.y+f.dy*(f.v/3);
                }else{
                f.x=f.x-f.v;
                }
                }
                }else{
                if(Math.abs(players[0].x-f.x)<players[0].feed && Math.abs(players[0].y-f.y)<players[0].feed){
                f.dx=Math.sin(Math.atan2(players[0].x-f.x,players[0].y-f.y));
                f.dy=Math.cos(Math.atan2(players[0].x-f.x,players[0].y-f.y));
                f.x=f.x+f.dx*f.v;
                f.y=f.y+f.dy*f.v;
                }else{
                f.x=f.x-f.v;
                }
                }
                if(f.isEatable===false){
                ctx.fillStyle="gray";
                }else{
                ctx.fillStyle="orange";
                }
                if(nameDisplay.value>1){
                    nameDisplay.value=0;
                }
                if(nameDisplay.value==0){
                ctx.fillText(f.name, f.x, f.y+f.r+10);
                }
                ctx.fillStyle=f.color;
                ctx.arc(f.x,f.y,f.r,0,2*Math.PI);
                ctx.fill();
                fishes.num = fishes.findIndex((element)=>element.x+element.r<0);
                    if(fishes.num>-1){
                    fishes.push("dammy");
                    fishes.length=fishes.copyWithin(fishes.num,fishes.length-1).length-1;
                    fishes.length=fishes.copyWithin(fishes.num,fishes.num+1).length-1;
                }
                fishes.num2 = fishes.findIndex((element) => element.x-element.r < players[0].x+players[0].r && element.x+element.r > players[0].x-players[0].r && element.y-element.r < players[0].y+players[0].r && element.y+element.r > players[0].y-players[0].r);
                    if(fishes.num2>-1){
                    if(fishes[fishes.num2].isEatable===false){
                    miss.value++;
                    if(difficulties.value==='普通' || difficulties.value==='難しい'){
                    if(!players[0].health){players[0].health=10;}
                    players[0].health--;
                    if(players[0].health<=0){
                    ctx.clearRect(0,0,canvas.width,canvas.height);
                    gameEnd=true;
                    endText();
                    }
                    }
                    ringTrigger();
                    if(radius2<200){
                    radius=1;
                    }
                    }else{
                    eatTrigger();
                    if(radius2<200){
                    radius=radius+10;
                    players[0].eatEffect=players[0].eatEffect+(9-players[0].eatEffect);
                    popTexts.push({
                        value:10+score.value,
                        x:players[0].x,
                        y:players[0].y,
                        interval:25,
                        interval2:25
                    });
                    score2.value=score2.value+10+score.value;
                    score2.innerHTML=score2.value;
                    }
                    }
                    //用済みなので削除
                    fishes.push("dammy");
                    fishes.length=fishes.copyWithin(fishes.num2,fishes.length-1).length-1;
                    fishes.length=fishes.copyWithin(fishes.num2,fishes.num2+1).length-1;
                }
                if(f.name==="潜水艦"){
                    if(Math.round(Math.random()*100)>99){
                        fishes.push({
                            name: "ミサイル",
                            x:f.x,
                            y:f.y,
                            r:3,
                            v:3,
                            dx:Math.sin(Math.atan2(Math.random()*-3, -1)),
                            dy:-Math.cos(Math.atan2(Math.random()*-3, -1)),
                            color:"red",
                            isEatable: false,
                            isAggressive: false,
                            isBullet: true
                        });
                        fishes.push({
                            name: "ミサイル",
                            x:f.x,
                            y:f.y,
                            r:3,
                            v:3,
                            dx:Math.sin(Math.atan2(-1, Math.random()*-1+Math.random())),
                            dy:-Math.cos(Math.atan2(-1, Math.random()*-1+Math.random())),
                            color:"red",
                            isEatable: false,
                            isAggressive: false,
                            isBullet: true
                        });
                        fishes.push({
                            name: "ミサイル",
                            x:f.x,
                            y:f.y,
                            r:3,
                            v:3,
                            dx:Math.sin(Math.atan2(Math.random()*-3, 1)),
                            dy:-Math.cos(Math.atan2(Math.random()*-3, 1)),
                            color:"red",
                            isEatable: false,
                            isAggressive: false,
                            isBullet: true
                        });
                    }
                }
                }
                for(const p of players){
                ctx.fillStyle=players[0].color+"40";
                ctx.beginPath();
                if(time.value>0){
                if(isPC===false){
                if(Math.abs(mouse.x-p.x)<3 && Math.abs(mouse.y-p.y)<3){
                p.dx=0;
                p.dy=0;
                }else{
                players[0].dx=Math.sin(Math.atan2(mouse.x-players[0].x, players[0].y-mouse.y));
                players[0].dy=-Math.cos(Math.atan2(mouse.x-players[0].x, players[0].y-mouse.y));
                }
                }
                p.x=p.x+p.v*p.dx;
                p.y=p.y+p.v*p.dy;
                ctx.arc(p.x,p.y,p.r,0,2*Math.PI);
                miss.innerHTML=miss.value;
                ctx.fill();
                ctx.fillStyle="gray";
                ctx.stroke();
                if(p.y>canvas.height || p.y<0){
                    p.y=p.y-p.v*p.dy
                }
                if(p.x>canvas.width || p.x<0){
                    p.x=p.x-p.v*p.dx
                }
                }
                }
                for(const t of popTexts){
                if(t.interval>0){
                ctx.font = "15px serif";
                ctx.fillStyle="gray";
                if(t.value==="loop" && popTexts.loopOf1!=0){
                ctx.fillText("+"+popTexts.loopOf1,t.x,t.y-(t.interval2-t.interval))
                }else{
                ctx.fillText("+"+t.value,t.x,t.y-(t.interval2-t.interval));
                }
                t.interval--;
                }else{
                popTexts.num = popTexts.findIndex((element)=>element.x==t.x && element.y==t.y);
                    if(popTexts.num>-1){
                    popTexts.push("dammy");
                    popTexts.length=popTexts.copyWithin(popTexts.num,popTexts.length-1).length-1;
                    popTexts.length=popTexts.copyWithin(popTexts.num,popTexts.num+1).length-1;
                }
                }
                }
                if(difficulties.value==='簡単'){
                if(Math.round(Math.random()*100)>97){
                    summonFishes();
                }
                }
                if(difficulties.value==='普通'){
                if(Math.round(Math.random()*100)>95){
                    summonFishes();
                }
                }
                if(difficulties.value==='難しい'){
                if(Math.round(Math.random()*100)>95-score.value/5){
                    summonFishes();
                }
                }
                requestAnimationFrame(translate);
            }
            }
            function endText(){
            bgm1Stop();
            bgm2Stop();
            bgm4Stop();
            bgm5Stop();
            let nIntervId;
            function repeatTimer() {
                      if (!nIntervId) {
                      nIntervId = setInterval(showText, 150);
                  }
            }
            repeatTimer();
            function showText(){
            ctx.fillStyle="#ffffff"; //もっと暗いd2eefe
            ctx.fillRect(0,0,canvas.width,canvas.height);
            ctx.fillStyle="black";
            ctx.font = "200px serif";
            ctx.fillText("結果", 650, 300);
            ctx.fillStyle="gray";
            ctx.font = "20px serif";
            ctx.fillText("時間"+time.value+"秒", 450, 450);
            ctx.fillText("スコア"+score2.value+"点", 650, 450);
            ctx.fillText("ステージ"+score.value, 850, 450);
            }
            }
            function gameStart(){
            if(isStart===false){
            startTime = Date.now();
            if(difficulties.value==='簡単'){
            players[0].feed=200;
            players[0].color="#65e984";
            }else if(difficulties.value==='普通'){
            players[0].feed=175;
            players[0].color="#f9ef2e";
            }else if(difficulties.value==='難しい'){
            players[0].feed=100;
            players[0].color="#ff0000";
            }
            translate();
            document.getElementById("difficulties").disabled = true;
            document.getElementById("startButton").disabled = true;
            }
            }
            boost=1;
            window.addEventListener('keydown', (event)=>{
                if (event.defaultPrevented) {
                        return;
                }
                switch (event.key) {
                    case 'w':
                    players[0].dy=-1;
                    isPC=true;
                    break;
                    case 'a':
                    players[0].dx=-1;
                    isPC=true;
                    break;
                    case 's':
                    players[0].dy=1;
                    isPC=true;
                    break;
                    case 'd':
                    players[0].dx=1;
                    isPC=true;
                    break;
                    case ' ':
                    gameStart();
                    isStart=true;
                    isPC=true;
                    break;
                    default:
                        break;
                }
                event.preventDefault();
            });
            window.addEventListener('keyup', (event)=>{
                if (event.defaultPrevented) {
                        return;
                }
                switch (event.key) {
                    case 'w':
                    players[0].dy=0;
                    break;
                    case 'a':
                    players[0].dx=0;
                    break;
                    case 's':
                    players[0].dy=0;
                    break;
                    case 'd':
                    players[0].dx=0;
                    break;
                    
                    case 'p':
                    score.value++;
                    
                    break;
                    default:
                        break;
                }
                event.preventDefault();
            });
