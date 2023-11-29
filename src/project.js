window.__require=function t(i,n,e){function s(r,c){if(!n[r]){if(!i[r]){var h=r.split("/");if(h=h[h.length-1],!i[h]){var a="function"==typeof __require&&__require;if(!c&&a)return a(h,!0);if(o)return o(h,!0);throw new Error("Cannot find module '"+r+"'")}}var p=n[r]={exports:{}};i[r][0].call(p.exports,function(t){return s(i[r][1][t]||t)},p,p.exports,t,i,n,e)}return n[r].exports}for(var o="function"==typeof __require&&__require,r=0;r<e.length;r++)s(e[r]);return s}({Car:[function(t,i,n){"use strict";cc._RF.push(i,"ebe30odiCNH44Dau2S5limU","Car"),cc.Class({extends:cc.Component,properties:{speed:100},start:function(){},move:function(t){this.node.x+=this.speed*t},update:function(t){this.move(t)}}),cc._RF.pop()},{}],CollisionChecker:[function(t,i,n){"use strict";cc._RF.push(i,"e8c20J7ks9JZY9l9ZXbUbKr","CollisionChecker"),cc.Class({extends:cc.Component,properties:{spriteA:cc.Node,spriteB:cc.Node},update:function(t){var i=this.spriteA.position,n=this.spriteB.position;i.sub(n).mag()<this.spriteA.width/2+this.spriteB.width/2&&(this.spriteA.getComponent("Dragon").isColliding=!0)}}),cc._RF.pop()},{}],Dragon:[function(t,i,n){"use strict";cc._RF.push(i,"ed21bjTWExNS47OeKWxIrOo","Dragon"),cc.Class({extends:cc.Component,properties:{speed:50,anim:cc.Animation,isColliding:!1},onLoad:function(){this.anim=this.node.getComponent(cc.Animation),this.anim.play("idle")},start:function(){this.anim.play("move")},move:function(t){if(this.isColliding)return this.anim.play("death"),void(this.node.color=cc.Color.GRAY);this.node.y+=-this.speed*t,this.node.x+=this.speed*t,this.node.scale+=t},update:function(t){this.move(t)}}),cc._RF.pop()},{}],Lamp:[function(t,i,n){"use strict";cc._RF.push(i,"56843jABYxMXYHFBgX2UK+T","Lamp"),cc.Class({extends:cc.Component,properties:{colorOn:cc.Color,colorOff:cc.Color,totalTimeOn:1,blinkInterval:.2,totalBlinks:3,dragon:cc.Sprite,car:cc.Sprite},onLoad:function(){this.timer=0,this.lightOn=!1,this.blinking=!1,this.isStable=!1,this.blinkCount=0,this.node.color=this.colorOff},start:function(){this.turnOn()},turnOn:function(){this.lightOn=!0,this.node.color=this.colorOn},turnOff:function(){this.lightOn=!1,this.node.color=this.colorOff},update:function(t){if(!this.isStable){if("GreenLamp"===this.node.name)return this.turnOn(),this.isStable=!0,this.dragon.getComponent("Dragon").enabled=!0,void(this.car.getComponent("Car").enabled=!0);this.lightOn&&!this.blinking&&(this.timer+=t,this.timer>=this.totalTimeOn&&(this.turnOff(),this.blinkCount=0,this.blinking=!0,this.timer=0)),this.blinking&&(this.timer+=t,this.timer>=this.blinkInterval&&(this.lightOn?this.turnOff():this.turnOn(),this.timer=0,this.blinkCount++,this.blinkCount>=2*this.totalBlinks&&(this.blinking=!1,this.turnOff())))}}}),cc._RF.pop()},{}],TrafficLight:[function(t,i,n){"use strict";cc._RF.push(i,"49936vd2UhFr5qdAQB9zuRu","TrafficLight"),cc.Class({extends:cc.Component,properties:{Lamps:[cc.Node]},start:function(){this.redLamp=this.Lamps[0],this.yellowLamp=this.Lamps[1],this.greenLamp=this.Lamps[2],this.timer=0,this.redLamp.active=!0},update:function(t){this.timer+=t,this.timer>=2.5&&(this.redLamp.active=!1,this.yellowLamp.active=!0),this.timer>=5&&(this.yellowLamp.active=!1,this.greenLamp.active=!0),this.timer>=7.5&&(this.greenLamp.active=!0)}}),cc._RF.pop()},{}]},{},["Car","CollisionChecker","Dragon","Lamp","TrafficLight"]);