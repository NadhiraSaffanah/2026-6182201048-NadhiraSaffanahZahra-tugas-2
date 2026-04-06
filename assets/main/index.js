System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,o,n,r,l,s,c,a,p,h,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,o=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){r=e.cclegacy,l=e._decorator,s=e.SpriteFrame,c=e.CCFloat,a=e.Collider2D,p=e.Contact2DType,h=e.Sprite,u=e.Component}],execute:function(){var v,d,g,C,f,m,y;r._RF.push({},"ccdbesM1FpAr6dqxO1k9w1f","Bird",void 0);var B=l.ccclass,T=l.property;e("Bird",(v=B("Bird"),d=T({type:[s]}),g=T({type:[c]}),v((m=t((f=function(e){function t(){for(var t,i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return t=e.call.apply(e,[this].concat(r))||this,o(t,"spriteBirds",m,n(t)),o(t,"scaleList",y,n(t)),t.listToRemove=[],t.level=0,t}i(t,e);var r=t.prototype;return r.start=function(){console.log("VERSI BARU - CIRCLE COLLIDER AKTIF");var e=this.getComponent(a);e&&(e.on(p.BEGIN_CONTACT,this.onBeginContact,this),e.on(p.END_CONTACT,this.onEndContact,this))},r.onBeginContact=function(e,i,o){e.group==i.group&&e.node.getComponent(t).level==i.node.getComponent(t).level&&(this.levelUp(),this.listToRemove.push(i.node))},r.onEndContact=function(e,t,i){console.log("onEndContact")},r.levelUp=function(){this.level+1<this.spriteBirds.length&&(this.level++,this.getComponent(h).spriteFrame=this.spriteBirds[this.level%this.spriteBirds.length],this.level<this.scaleList.length&&this.node.scale.multiplyScalar(this.scaleList[this.level]),console.log("level: "+this.level))},r.update=function(e){for(var t=0;t<this.listToRemove.length;t++)this.listToRemove[t].active=!1;this.listToRemove=[]},t}(u)).prototype,"spriteBirds",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),y=t(f.prototype,"scaleList",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),C=f))||C));r._RF.pop()}}}));

System.register("chunks:///_virtual/GameController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,n,r,i,a,c,l,s,p,u,y,d,f,h;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,n=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){i=t.cclegacy,a=t._decorator,c=t.Prefab,l=t.input,s=t.Input,p=t.instantiate,u=t.RigidBody2D,y=t.ERigidBody2DType,d=t.tween,f=t.Vec3,h=t.Component}],execute:function(){var v,b,m,g,P;i._RF.push({},"19721ezRxRIhK8YRDeJRyPG","GameController",void 0);var R=a.ccclass,T=a.property;t("GameController",(v=R("GameController"),b=T({type:c}),v((P=e((g=function(t){function e(){for(var e,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i))||this,n(e,"birdPrefab",P,r(e)),e}o(e,t);var i=e.prototype;return i.start=function(){l.on(s.EventType.TOUCH_START,this.onTouchStart,this)},i.onTouchStart=function(t){var e=p(this.birdPrefab),o=t.getUILocation();e.parent=this.node,e.setWorldPosition(o.x,o.y,0),e.getComponent(u).type=y.Dynamic,e.getComponent(u).wakeUp()},i.moveToX=function(t,e,o){void 0===o&&(o=.5);var n=t.worldPosition.clone();d(t).to(o,{worldPosition:new f(e,n.y,n.z)}).start()},i.update=function(t){},e}(h)).prototype,"birdPrefab",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=g))||m));i._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Bird.ts","./GameController.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});