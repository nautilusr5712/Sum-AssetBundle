window.__require = function t(e, n, o) {
function i(c, a) {
if (!n[c]) {
if (!e[c]) {
var s = c.split("/");
s = s[s.length - 1];
if (!e[s]) {
var p = "function" == typeof __require && __require;
if (!a && p) return p(s, !0);
if (r) return r(s, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = s;
}
var l = n[c] = {
exports: {}
};
e[c][0].call(l.exports, function(t) {
return i(e[c][1][t] || t);
}, l, l.exports, t, e, n, o);
}
return n[c].exports;
}
for (var r = "function" == typeof __require && __require, c = 0; c < o.length; c++) i(o[c]);
return i;
}({
BannerPromition: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "5a31fEXfdRJR4L/LSyqXjDk", "BannerPromition");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = (c.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ a ], e);
}(fzgui.UIPopup));
n.default = s;
cc._RF.pop();
}, {} ],
BannerPromotion: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6e4091lTYFCTpNS41XbeME3", "BannerPromotion");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = (c.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ a ], e);
}(fzgui.UIPopup));
n.default = s;
cc._RF.pop();
}, {} ],
BundleMiniGame: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d7ae8W+pkhKN71C0SrSO2su", "BundleMiniGame");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../../LobbyConst"), a = cc._decorator, s = a.ccclass, p = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.linkUrl = "";
e.bundleName = "";
e.prefabMainNameURL = "";
e.prgLoadGame = null;
e.lbMsg = null;
e.isClicked = !0;
e.gameID = c.GAME_IDS.NONE;
return e;
}
e.prototype.onEnable = function() {
t.prototype.onEnable.call(this);
var e = this.prgLoadGame.node.getChildByName("progess");
e && e.runAction(cc.rotateBy(2, 360).repeatForever());
};
e.prototype.onFuturePrefabLoadDone = function(t) {
var e = this;
if (!cc.Canvas.instance.node.getChildByName(this.prefabMainNameURL)) {
fzgui.UIWindowManager.instance.showWindowFromPrefab(t, function(t) {
t.node.name = e.prefabMainNameURL;
});
fzgui.EventDispatch.instance.emit(c.LobbyConst.EVENT_NAME.BUNDLEMINI_DOWNLOAD_SUCCESS);
}
};
r([ p(cc.String) ], e.prototype, "linkUrl", void 0);
r([ p(cc.String) ], e.prototype, "bundleName", void 0);
r([ p(cc.String) ], e.prototype, "prefabMainNameURL", void 0);
r([ p(cc.ProgressBar) ], e.prototype, "prgLoadGame", void 0);
r([ p(cc.Label) ], e.prototype, "lbMsg", void 0);
r([ p(cc.Boolean) ], e.prototype, "isClicked", void 0);
r([ p({
type: cc.Enum(c.GAME_IDS)
}) ], e.prototype, "gameID", void 0);
return r([ s ], e);
}(fzgui.BundleDownLoad);
n.default = l;
cc._RF.pop();
}, {
"../../LobbyConst": "LobbyConst"
} ],
BundleSceneGame: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "19083XsaEZMx7wDy6oqmR1j", "BundleSceneGame");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../../LobbyConst"), a = cc._decorator, s = a.ccclass, p = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.linkUrl = "";
e.bundleName = "";
e.prefabMainNameURL = "";
e.prgLoadGame = null;
e.lbMsg = null;
e.isClicked = !0;
e.gameID = c.GAME_IDS.NONE;
return e;
}
e.prototype.onEnable = function() {
t.prototype.onEnable.call(this);
var e = this.prgLoadGame.node.getChildByName("progess");
e && e.runAction(cc.rotateBy(2, 360).repeatForever());
};
e.prototype.onFuturePrefabLoadDone = function(t) {
fzgui.UIScreenManager.instance.pushScreen(t);
};
r([ p(cc.String) ], e.prototype, "linkUrl", void 0);
r([ p(cc.String) ], e.prototype, "bundleName", void 0);
r([ p(cc.String) ], e.prototype, "prefabMainNameURL", void 0);
r([ p(cc.ProgressBar) ], e.prototype, "prgLoadGame", void 0);
r([ p(cc.Label) ], e.prototype, "lbMsg", void 0);
r([ p(cc.Boolean) ], e.prototype, "isClicked", void 0);
r([ p({
type: cc.Enum(c.GAME_IDS)
}) ], e.prototype, "gameID", void 0);
return r([ s ], e);
}(fzgui.BundleDownLoad);
n.default = l;
cc._RF.pop();
}, {
"../../LobbyConst": "LobbyConst"
} ],
CapchaZ: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "3ce052fYL1H45r8huNtFn/M", "CapchaZ");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.capcha = null;
e.isTelco = !1;
e.capchaId = "";
e.mUrl = "";
return e;
}
e.prototype.start = function() {
this.refreshCapcha();
};
e.prototype.refreshCapcha = function() {
var t = "https://api.banghe.xyz/Captcha/Get?length=3&width=90&height=36";
this.isTelco && (t = "");
this.sendGetCaptcha(t);
};
e.prototype.getCapChaId = function() {
return this.capchaId;
};
e.prototype.resetCapcha = function() {
this.capcha.node.active = !1;
};
e.prototype.sendGetCaptcha = function(t) {
this.mUrl = t;
var e = this;
fzgui.Https.get(t, function(t) {
var n = t;
e.capchaId = n[0];
var o = n[1];
o = o.replace(/\r\n/g, "");
e.loadImgBinary(o);
});
};
e.prototype.loadImgBinary = function(t) {
var e = "data:image/png;base64," + t, n = new Image();
n.width = 130;
n.height = 60;
var o = this;
n.onload = function() {
var t = new cc.Texture2D();
t.initWithElement(n);
t.handleLoadedTexture();
var e = new cc.SpriteFrame(t);
o.capcha.node.active = !0;
o.capcha.spriteFrame = e;
};
n.src = e;
};
r([ s(cc.Sprite) ], e.prototype, "capcha", void 0);
r([ s(cc.Boolean) ], e.prototype, "isTelco", void 0);
return r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
CellDuDayTX: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d1299DqF5NNBqSMR1VLzlSz", "CellDuDayTX");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./MVUtils"), a = cc._decorator, s = a.ccclass, p = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbTime = null;
e.lbDisplayName = null;
e.lbSoDay = null;
e.lbReward = null;
return e;
}
e.prototype.setData = function(t) {
if (t) {
this.lbTime.string = c.MVUtils.formatDateTime(t.StartTime);
this.lbDisplayName.string = t.Username;
this.lbSoDay.string = [ "Dây thua", "Dây thắng" ][t.Type] + " - " + t.QuantityGameSession;
this.lbReward.string = fzgui.Utils.formatMoneyWithCommaOnly(t.PrizeValue);
}
};
r([ p(cc.Label) ], e.prototype, "lbTime", void 0);
r([ p(cc.Label) ], e.prototype, "lbDisplayName", void 0);
r([ p(cc.Label) ], e.prototype, "lbSoDay", void 0);
r([ p(cc.Label) ], e.prototype, "lbReward", void 0);
return r([ s ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {
"./MVUtils": "MVUtils"
} ],
CellHomQuaTXCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "f04b8MHXH5EqZNXp56hcKeo", "CellHomQuaTXCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = cc._decorator, s = a.ccclass, p = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbDate = null;
return e;
}
e.prototype.onEnable = function() {
var t = this;
this.node.on("touchend", function() {
t.onClickedGetRank();
});
};
e.prototype.setData = function(t) {
this._data = t;
this.lbDate.string = "Ngày " + new Date(t).toJSON().slice(0, 10).split("-").reverse().join("/");
};
e.prototype.onClickedGetRank = function() {
fzgui.EventDispatch.instance.emit(c.LobbyConst.EVENT_NAME.REQUEST_EVENT_RANK, this._data);
};
r([ p(cc.Label) ], e.prototype, "lbDate", void 0);
return r([ s ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst"
} ],
EventX3Nap: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "c8fd5FFpTRBNYkeLU29PDVw", "EventX3Nap");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./MVUtils"), a = cc._decorator, s = a.ccclass, p = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.template = null;
e.content = null;
return e;
}
e.prototype.onEnable = function() {
var t = this;
this.content.removeAllChildren();
c.MVUtils.get("https://api.banghe.xyz/api/Event/GetX3Infor", {}, function(e, n) {
e >= 200 && e < 400 ? t.parseData(n) : console.log(n);
});
};
e.prototype.parseData = function(t) {
if (1 == t.ResponseCode) for (var e = 0; e < t.List.length; e++) {
var n = cc.instantiate(this.template);
n.position = new cc.Vec3(0, 0);
n.active = !0;
n.getChildByName("txtMission").getComponent(cc.Label).string = [ "X3 Nạp Thẻ", "X3 Nạp Ngân Hàng", "X3 Nạp Momo" ][t.List[e].RechargeType - 1];
n.getChildByName("txtTienDo").getComponent(cc.Label).string = t.List[e].Progress + " %";
n.getChildByName("txtValue").getComponent(cc.Label).string = c.MVUtils.formatNumber(t.List[e].PrizeValue);
if (100 == t.List[e].Progress && 2 == t.List[e].Status) n.getChildByName("btnGet").getComponent(cc.Button).clickEvents[0].customEventData = t.List[e].RechargeType + "," + t.List[e].Status; else {
n.getChildByName("btnGet").opacity = 100;
n.getChildByName("btnGet").getComponent(cc.Button).clickEvents[0].customEventData = t.List[e].RechargeType + "," + t.List[e].Status;
}
n.getChildByName("btnNap").active = !1;
n.getChildByName("txtSoLuong").active = !1;
n.getChildByName("btnPlay").active = !1;
this.content.addChild(n);
}
};
e.prototype.onClickNhanGiai = function(t, e) {
var n = parseInt(e.split(",")[0]), o = parseInt(e.split(",")[1]);
if (-1 != o) {
if (o = 0) fzgui.UITextManager.showCenterNotification("Hãy bắt đầu tiến trình nạp"); else if (o = 1) fzgui.UITextManager.showCenterNotification("Hãy hoàn thành tiến trình nạp"); else if (o = 2) c.MVUtils.post("https://api.banghe.xyz/api/Event/GetX3Reward", {
RechargeType: n
}, function(t, e) {
if (1 == e.ResponseCode) {
fzgui.UIPopupManager.instance.showPopup(e.Message);
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, e.Balance);
} else fzgui.UIPopupManager.instance.showPopup(e.Message);
}); else if (o = 3) {
fzgui.UITextManager.showCenterNotification("Bạn đã nhận thưởng rồi");
return;
}
} else fzgui.UITextManager.showCenterNotification("Phần thưởng đã hết hạn");
};
r([ p(cc.Node) ], e.prototype, "template", void 0);
r([ p(cc.Node) ], e.prototype, "content", void 0);
return r([ s ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {
"./MVUtils": "MVUtils"
} ],
GUIAccountChangePass: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "af430Za50VKKrBLoGZg4QQA", "GUIAccountChangePass");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./utils/CapchaZ"), s = t("./MVUtils"), p = cc._decorator, l = p.ccclass, u = p.property, f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.UICaptcha = null;
e.txtOldPass = null;
e.txtNewPass = null;
e.txtReNewPass = null;
e.txtCaptchaChangePass = null;
e.nodeStep1 = null;
e.nodeStep2 = null;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.start = function() {};
e.prototype.onRefreshCaptchaClicked = function() {
this.UICaptcha.refreshCapcha();
};
e.prototype.onChangePass = function() {
var t = this, e = this.txtOldPass.string, n = this.txtNewPass.string, o = this.txtReNewPass.string, i = this.txtCaptchaChangePass.string;
if (0 != e.length) if (0 != n.length) if (n === o) if (0 != i.length) {
var r = {
sourceId: s.MVUtils.getPlatform(),
newPass: window.md5(n),
oldPass: window.md5(e),
captchaText: i,
captchaToken: this.UICaptcha.getCapChaId()
};
s.MVUtils.post(c.LobbyConst.API.CHANGE_PASS, r, function(e, n) {
if (e >= 200 && e < 400) {
var o = n;
if (null != o) if (null != o.IsOtp && 1 == o.IsOtp) fzgui.UIPopupManager.instance.showPopupFromPrefab(fzgui.CommonAssetDefined.instance.getPrefabByName("GUI_OTP"), function(t) {
t.initData(o.OtpToken, Global.SERVICEID.OTP_SERVICE_CHANGE_PASSWORD);
}); else {
var i = [ fzgui.PopupAction.make("OK", function() {
fzgui.EventDispatch.instance.emit(c.LobbyConst.EVENT_NAME.CHANGE_TAB_UI, 3);
}), fzgui.PopupAction.make("CLOSE", function() {}) ];
fzgui.UIPopupManager.instance.showPopup("Bạn cần đăng ký OTP để thực hiện chức năng này.\nBạn muốn đăng ký OTP không?", i);
}
} else {
t.onRefreshCaptchaClicked();
fzgui.UIPopupManager.instance.showPopup(n);
}
});
} else fzgui.UIPopupManager.instance.showPopup("Bạn chưa nhập mã xác nhận"); else fzgui.UIPopupManager.instance.showPopup("Nhập lại mật khẩu mới không đúng"); else fzgui.UIPopupManager.instance.showPopup("Bạn chưa nhập mật khẩu mới"); else fzgui.UIPopupManager.instance.showPopup("Bạn chưa nhập mật khẩu cũ");
};
r([ u(a.default) ], e.prototype, "UICaptcha", void 0);
r([ u(cc.EditBox) ], e.prototype, "txtOldPass", void 0);
r([ u(cc.EditBox) ], e.prototype, "txtNewPass", void 0);
r([ u(cc.EditBox) ], e.prototype, "txtReNewPass", void 0);
r([ u(cc.EditBox) ], e.prototype, "txtCaptchaChangePass", void 0);
r([ u(cc.Node) ], e.prototype, "nodeStep1", void 0);
r([ u(cc.Node) ], e.prototype, "nodeStep2", void 0);
return r([ l ], e);
}(cc.Component);
n.default = f;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils",
"./utils/CapchaZ": "CapchaZ"
} ],
GUIAccountDetail: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "b4aaemL11lLvoXxIBnIZrTq", "GUIAccountDetail");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = cc._decorator, s = a.ccclass, p = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lblNickname = null;
e.lbCoin = null;
e.lblPhone = null;
e.lblDiemVip = null;
e.lblLevel = null;
e.avatar = null;
e.listAvt = [];
e.btnSms = null;
return e;
}
e.prototype.onLoad = function() {
this.setData();
};
e.prototype.setData = function() {
this.lblNickname.string = fzgui.UserManager.instance.mainUserInfo.NickName;
this.lbCoin.string = fgui.StringUtils.formatNumber(fzgui.UserManager.instance.mainUserInfo.Money);
fzgui.UserManager.instance.mainUserInfo.Mobile ? this.lblPhone.string = fzgui.UserManager.instance.mainUserInfo.Mobile : this.lblPhone.string = "";
this.lblDiemVip.string = fzgui.UserManager.instance.mainUserInfo.VipPoint + "";
this.lblLevel.string = fzgui.UserManager.instance.mainUserInfo.Level + "";
this.btnSms.active = !(this.lblPhone.string.length > 0);
this.avatar.spriteFrame = this.listAvt[fzgui.UserManager.instance.mainUserInfo.Avatar];
};
e.prototype.openGuideOTP = function() {
fzgui.EventDispatch.instance.emit(c.LobbyConst.EVENT_NAME.CHANGE_TAB_UI, 3);
};
r([ p(cc.Label) ], e.prototype, "lblNickname", void 0);
r([ p(cc.Label) ], e.prototype, "lbCoin", void 0);
r([ p(cc.Label) ], e.prototype, "lblPhone", void 0);
r([ p(cc.Label) ], e.prototype, "lblDiemVip", void 0);
r([ p(cc.Label) ], e.prototype, "lblLevel", void 0);
r([ p(cc.Sprite) ], e.prototype, "avatar", void 0);
r([ p(cc.SpriteFrame) ], e.prototype, "listAvt", void 0);
r([ p(cc.Node) ], e.prototype, "btnSms", void 0);
return r([ s ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst"
} ],
GUIAccountMail: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "7f47c5fYaZANqorDhathbD5", "GUIAccountMail");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mailTemplate = null;
e.mailList = null;
e.mailDetail = null;
return e;
}
n = e;
Object.defineProperty(e, "instance", {
get: function() {
n._instance || (n._instance = new n());
return n._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onEnable = function() {
n._instance = this;
this.mailDetail.active = !1;
this.requestMail();
};
e.prototype.onDisable = function() {};
e.prototype.requestMail = function() {
var t = this, e = c.LobbyConst.API.GET_LIST_MAIL;
a.MVUtils.post(e, {
MailType: 2,
CurrentPage: 1,
PageSize: 25
}, function(e, n) {
if (e >= 200 && e < 400) {
console.log("requestMail ===" + JSON.stringify(n));
t.initPanelInbox(n.List);
} else console.log("err", n);
});
};
e.prototype.initPanelInbox = function(t) {
if (null != t && !(t.length <= 0)) {
this.mailList.removeAllChildren();
for (var e = 0; e < t.length; e++) {
var n = cc.instantiate(this.mailTemplate);
n.getComponent("ItemMail").initData(t[e]);
n.getComponent(cc.Button).clickEvents[0].customEventData = t[e];
n.getChildByName("btnDelete").getComponent(cc.Button).clickEvents[0].customEventData = t[e].ID;
this.mailList.addChild(n);
console.log(this.mailList);
}
}
};
e.prototype.initMailContent = function(t) {
this.mailDetail.getChildByName("lblTime").getComponent(cc.Label).string = a.MVUtils.formatDateTime(t.CreatedTime);
this.mailDetail.getChildByName("lblTitle").getComponent(cc.Label).string = t.Title;
this.mailDetail.getChildByName("lblContent").getComponent(cc.Label).string = t.Content;
};
e.prototype.onActBack = function() {
this.mailList.active = !0;
this.mailDetail.active = !1;
};
var n;
e._instance = null;
r([ l(cc.Prefab) ], e.prototype, "mailTemplate", void 0);
r([ l(cc.Node) ], e.prototype, "mailList", void 0);
r([ l(cc.Node) ], e.prototype, "mailDetail", void 0);
return n = r([ p ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUIAccountSafe: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "e9512sLjkFEb7wom0HBexVs", "GUIAccountSafe");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.pnlStep1 = null;
e.pnlStep2 = null;
e.panelOTPSafe = null;
e.imgKet = null;
e.cbxFreeze = null;
e.cbxOpenFreeze = null;
e.lblNoteSafe = null;
e.btnFreeze = null;
e.lblBalance = null;
e.lblFreezeBalance = null;
e.lblAccount = null;
e.edbMoneyFreeze = null;
e.edbOTPSafeStep2 = null;
e.btnAccept = null;
e.btnGetOtpFreezeSafe = null;
e.typeAction = 0;
e.frozenVal = 0;
return e;
}
e.prototype.onEnable = function() {
this.initSafe();
};
e.prototype.initSafe = function() {
this.lblAccount.string = fzgui.UserManager.instance.mainUserInfo.NickName;
if (fzgui.UserManager.instance.mainUserInfo.IsOtp) {
this.imgKet.node.active = !0;
this.lblNoteSafe.string = "";
this.typeAction = 1;
} else {
this.imgKet.node.active = !1;
this.lblNoteSafe.string = "Bạn cần đăng ký SMS Plus để thực hiện chức năng này.\nVui lòng đăng ký SMS Plus.";
this.typeAction = 2;
}
this.cbxFreeze.interactable = !1;
};
e.prototype.onClickBack = function() {
this.pnlStep1.active = !0;
this.pnlStep2.active = !1;
};
e.prototype.onClickSafe = function() {
this.panelOTPSafe.active = !1;
this.edbMoneyFreeze.string = "";
this.edbOTPSafeStep2.string = "";
this.btnGetOtpFreezeSafe.interactable = !0;
1 == this.typeAction ? this.getFrozenValue() : 2 == this.typeAction && fzgui.EventDispatch.instance.emit(c.LobbyConst.EVENT_NAME.CHANGE_TAB_UI, 3);
};
e.prototype.getFrozenValue = function() {
var t = this;
fzgui.UIWaitingLayout.showWaiting();
var e = c.LobbyConst.API.GET_FROZEB, n = {
accountId: fzgui.UserManager.instance.mainUserInfo.AccountID,
token: fzgui.UserManager.instance.mainUserInfo.GameToken
}, o = fzgui.Https.packDataForRequest(n);
fzgui.Https.getPackData(e + o, function(e) {
fzgui.ZLog.log("getFrozenValue ===" + JSON.stringify(e));
if (e) {
t.pnlStep1.active = !1;
t.pnlStep2.active = !0;
fzgui.UIWaitingLayout.hideWaiting();
var n = e, o = n.FrozenValue;
t.frozenVal = o;
var i = n.Balance;
t.lblFreezeBalance.string = fgui.StringUtils.formatNumber(o);
t.lblBalance.string = fgui.StringUtils.formatNumber(i);
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, i);
} else {
fzgui.UIWaitingLayout.hideWaiting();
fzgui.UIPopupManager.instance.showPopup("Đã có lỗi sảy ra=> " + e);
}
});
};
e.prototype.onClickFreeze = function() {
if (this.cbxFreeze.isChecked) {
this.cbxFreeze.isChecked = !0;
this.cbxOpenFreeze.isChecked = !1;
this.panelOTPSafe.active = !1;
this.cbxFreeze.interactable = !1;
this.cbxOpenFreeze.interactable = !0;
}
};
e.prototype.onClickOpenFreeze = function() {
if (this.cbxOpenFreeze.isChecked) {
this.cbxOpenFreeze.isChecked = !0;
this.cbxFreeze.isChecked = !1;
this.panelOTPSafe.active = !0;
this.cbxFreeze.interactable = !0;
this.cbxOpenFreeze.interactable = !1;
}
};
e.prototype.acceptFreeze = function() {
var t = this;
this.btnAccept.interactable = !1;
if (0 != this.edbMoneyFreeze.string.length) {
var e = this.toNumber(this.edbMoneyFreeze.string), n = this.cbxFreeze.isChecked ? c.LobbyConst.SETTING_ID.FROZEN : c.LobbyConst.SETTING_ID.UNFROZEN;
if (e <= 0) {
var o = [ fzgui.PopupAction.make("OK", function() {
t.btnAccept.interactable = !0;
}) ];
fzgui.UIPopupManager.instance.showPopup("Giá trị Coin phải lớn hơn 0", o);
} else if (e > fzgui.UserManager.instance.mainUserInfo.Money && n == c.LobbyConst.SETTING_ID.FROZEN) {
o = [ fzgui.PopupAction.make("OK", function() {
t.btnAccept.interactable = !0;
}) ];
fzgui.UIPopupManager.instance.showPopup("Giá trị Coin phải nhỏ hơn hoặc bằng số dư của bạn", o);
} else if (e > this.frozenVal && n == c.LobbyConst.SETTING_ID.UNFROZEN) {
o = [ fzgui.PopupAction.make("OK", function() {
t.btnAccept.interactable = !0;
}) ];
fzgui.UIPopupManager.instance.showPopup("Giá trị Coin phải nhỏ hơn hoặc bằng số dư đóng băng của bạn", o);
} else {
fzgui.UIWaitingLayout.showWaiting();
var i = c.LobbyConst.API.FROZEB, r = {
accountId: fzgui.UserManager.instance.mainUserInfo.AccountID,
amount: e,
isFrozen: n,
sourceId: a.MVUtils.getPlatform(),
otp: this.edbOTPSafeStep2.string,
otpType: 1
};
this.executeGETMethod(i, r, function(o, i) {
fzgui.UIWaitingLayout.hideWaiting();
if (i) {
var r = JSON.parse(i), a = r.FrozenValue, s = r.Balance;
t.frozenVal = a;
fzgui.UserManager.instance.mainUserInfo.Money = s;
t.lblFreezeBalance.string = fgui.StringUtils.formatNumber(a);
t.lblBalance.string = fgui.StringUtils.formatNumber(s);
t.edbOTPSafeStep2.string = "";
t.edbMoneyFreeze.string = "";
n == c.LobbyConst.SETTING_ID.FROZEN ? fzgui.UIPopupManager.instance.showPopup("Bạn đã đóng băng thành công " + e + " Coin") : fzgui.UIPopupManager.instance.showPopup("Bạn đã mở băng thành công " + e + " Coin");
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, s);
} else {
fzgui.UIWaitingLayout.hideWaiting();
fzgui.UIPopupManager.instance.showPopup("Đã có lỗi sảy ra=> " + i);
}
t.btnAccept.interactable = !0;
});
}
} else fzgui.UIPopupManager.instance.showPopup("Bạn chưa nhập số Coin");
};
e.prototype.getOtpFreez = function() {
var t = this;
this.btnGetOtpFreezeSafe.interactable = !1;
this.scheduleOnce(function() {
t.btnGetOtpFreezeSafe.interactable = !0;
}, 3);
var e = c.LobbyConst.API.GET_OTP_SMS;
fzgui.Https.get(e, function(t) {
if (cc.js.isNumber(t)) {
fzgui.UIPopupManager.instance.showPopup("Hệ thống đã gửi mã OTP đến số điện thoại của bạn");
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, t);
} else fzgui.UIPopupManager.instance.showPopup(t);
});
};
e.prototype.toNumber = function(t) {
if (t.indexOf(".") >= 0) {
for (var e = t; e.indexOf(".") >= 0; ) e = e.replace(".", "");
return parseInt(e);
}
return parseInt(t);
};
e.prototype.executeGETMethod = function(t, e, n) {
e || (e = {});
if (fzgui.UserManager.instance.mainUserInfo.GameToken) {
e.token = void 0;
e = Object.assign(e, {
token: fzgui.UserManager.instance.mainUserInfo.GameToken
});
}
var o = t + c.getStringBodyByObject(e), i = cc.loader.getXMLHttpRequest();
i.onreadystatechange = function() {
4 === i.readyState && (200 == i.status ? n(null, i.responseText) : i.responseText.length > 0 ? n(i.responseText, null) : n("error_code : " + i.status, null));
};
i.ontimeout = function() {
n("Hệ thống không phản hồi.", null);
};
i.timeout = 3e4;
i.open("GET", o, !0);
i.setRequestHeader("Content-Type", "application/json");
i.withCredentials = !0;
i.send();
};
r([ l(cc.Node) ], e.prototype, "pnlStep1", void 0);
r([ l(cc.Node) ], e.prototype, "pnlStep2", void 0);
r([ l(cc.Node) ], e.prototype, "panelOTPSafe", void 0);
r([ l(cc.Sprite) ], e.prototype, "imgKet", void 0);
r([ l(cc.Toggle) ], e.prototype, "cbxFreeze", void 0);
r([ l(cc.Toggle) ], e.prototype, "cbxOpenFreeze", void 0);
r([ l(cc.Label) ], e.prototype, "lblNoteSafe", void 0);
r([ l(cc.Button) ], e.prototype, "btnFreeze", void 0);
r([ l(cc.Label) ], e.prototype, "lblBalance", void 0);
r([ l(cc.Label) ], e.prototype, "lblFreezeBalance", void 0);
r([ l(cc.Label) ], e.prototype, "lblAccount", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbMoneyFreeze", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbOTPSafeStep2", void 0);
r([ l(cc.Button) ], e.prototype, "btnAccept", void 0);
r([ l(cc.Button) ], e.prototype, "btnGetOtpFreezeSafe", void 0);
return r([ p ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUIAccountSecurity: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "45a32kM0iRKY6Kqe7N+mRwQ", "GUIAccountSecurity");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lblPhoneSMSPlus = null;
e.lblAccount = null;
e.lblTitleSMSPlus = null;
e.edbPhoneSMSPlus = null;
e.edbOTPRegisterAndDel = null;
e.panelRegisterSMSPlus = null;
e.btnGetOtpDeletePhone = null;
e.btnGetOtpRegisterPhone = null;
e.btnRegisterSMSPlus = null;
e.btnRemovePhoneSMSPlus = null;
e.btnUpdatePhoneSMSPlus = null;
e.btnBack = null;
e.btnDeleteMobile = null;
e._phoneNumber = "";
e.g_isOTP = !1;
return e;
}
e.prototype.onEnable = function() {
this.lblAccount.string = fzgui.UserManager.instance.mainUserInfo.NickName;
this.setInfo();
};
e.prototype.setInfo = function() {
this.g_isOTP = fzgui.UserManager.instance.mainUserInfo.IsMobileActived;
this._phoneNumber = fzgui.UserManager.instance.mainUserInfo.Mobile;
this.lblPhoneSMSPlus.string = this._phoneNumber;
this.g_isOTP ? this.showPanelSMSPlus(c.LobbyConst.SETTING_ID.SMSPLUS_INFO) : this._phoneNumber.length > 0 ? this.showPanelSMSPlus(c.LobbyConst.SETTING_ID.SMSPLUS_REGISTER) : this.showPanelSMSPlus(c.LobbyConst.SETTING_ID.SMSPLUS_INFO);
};
e.prototype.showPanelSMSPlus = function(t) {
this.panelRegisterSMSPlus.active = !1;
this.edbOTPRegisterAndDel.string = "";
if (t == c.LobbyConst.SETTING_ID.SMSPLUS_DEL_PHONE) {
this.panelRegisterSMSPlus.active = !0;
this.lblTitleSMSPlus.string = "HỦY SỐ ĐIỆN THOẠI";
this.btnGetOtpDeletePhone.node.active = !0;
this.btnGetOtpRegisterPhone.node.active = !1;
this.btnRemovePhoneSMSPlus.node.active = !1;
this.btnUpdatePhoneSMSPlus.node.active = !1;
this.edbPhoneSMSPlus.node.active = !1;
this.btnBack.node.active = !0;
this.btnDeleteMobile.node.active = !0;
this.btnRegisterSMSPlus.node.active = !1;
this.btnRegisterSMSPlus.getComponent(cc.Button).clickEvents[0].customEventData = "3";
} else if (t == c.LobbyConst.SETTING_ID.SMSPLUS_REGISTER) {
this.panelRegisterSMSPlus.active = !0;
this.lblTitleSMSPlus.string = "ĐĂNG KÝ BẢO MẬT OTP";
this.btnRemovePhoneSMSPlus.node.active = !1;
this.btnUpdatePhoneSMSPlus.node.active = !1;
this.btnGetOtpDeletePhone.node.active = !1;
this.btnGetOtpRegisterPhone.node.active = !0;
this.edbPhoneSMSPlus.node.active = !1;
this.btnBack.node.active = !1;
this.btnDeleteMobile.node.active = !1;
this.btnRegisterSMSPlus.node.active = !0;
} else if (t == c.LobbyConst.SETTING_ID.SMSPLUS_INFO) {
this.btnBack.node.active = !1;
this.btnDeleteMobile.node.active = !1;
if (this.g_isOTP) {
this.lblTitleSMSPlus.string = "THÔNG TIN BẢO MẬT OTP";
this.lblPhoneSMSPlus.string = this._phoneNumber;
this.edbPhoneSMSPlus.node.active = !1;
this.btnRemovePhoneSMSPlus.node.active = !0;
this.btnUpdatePhoneSMSPlus.node.active = !1;
} else if (this._phoneNumber.length > 0) {
this.lblTitleSMSPlus.string = "THÔNG TIN BẢO MẬT OTP";
this.btnRemovePhoneSMSPlus.node.active = !0;
this.edbPhoneSMSPlus.node.active = !1;
} else {
this.lblTitleSMSPlus.string = "CẬP NHẬT THÔNG TIN BẢO MẬT OTP";
this.lblPhoneSMSPlus.string = "";
this.edbPhoneSMSPlus.node.active = !0;
this.edbPhoneSMSPlus.string = "";
this.btnRemovePhoneSMSPlus.node.active = !1;
this.btnUpdatePhoneSMSPlus.node.active = !0;
}
} else if (999 == t) {
this.lblTitleSMSPlus.string = "CẬP NHẬT THÔNG TIN BẢO MẬT OTP";
this.lblPhoneSMSPlus.string = "";
this.edbPhoneSMSPlus.node.active = !0;
this.edbPhoneSMSPlus.string = "";
this.btnRemovePhoneSMSPlus.node.active = !1;
this.btnUpdatePhoneSMSPlus.node.active = !0;
}
};
e.prototype.touchUpdate = function() {
var t = this, e = this.edbPhoneSMSPlus.string;
if (e.length < 10) fzgui.UIPopupManager.instance.showPopup("Số điện thoại không hợp lệ!"); else {
var n = {
accountId: fzgui.UserManager.instance.mainUserInfo.AccountID,
mobile: e
};
a.MVUtils.post(c.LobbyConst.API.UPDATE_MOBILE, n, function(e, n) {
if (e >= 200 && e < 400) {
fzgui.UIPopupManager.instance.showPopup("Cập nhật thông tin thành công!");
fzgui.UserManager.instance.mainUserInfo.Mobile = n.Mobile;
fzgui.UserManager.instance.mainUserInfo.IsMobileActived = n.IsMobileActived;
fzgui.UserManager.instance.mainUserInfo.IsOtp = n.IsOTP;
t.setInfo();
} else fzgui.UIPopupManager.instance.showPopup(n);
}, !0);
}
};
e.prototype.registerOTP = function(t, e) {
var n = this;
console.log(e);
var o = this.edbOTPRegisterAndDel.string, i = e;
if (0 != o.length) {
var r = {
AccountName: fzgui.UserManager.instance.mainUserInfo.UserName,
AccountId: fzgui.UserManager.instance.mainUserInfo.AccountID,
Type: parseInt(i),
SecureCode: o,
Mobile: this._phoneNumber
};
a.MVUtils.post(c.LobbyConst.API.REG_MOBILE, r, function(t, e) {
if (t >= 200 && t < 400) {
var o = e;
fzgui.UserManager.instance.mainUserInfo.Mobile = o.Mobile;
fzgui.UserManager.instance.mainUserInfo.IsMobileActived = o.IsMobileActived;
fzgui.UserManager.instance.mainUserInfo.IsOtp = o.IsOTP;
n.setInfo();
if (i == c.LobbyConst.SETTING_ID.SMSPLUS_REGISTER_TYPE) {
fzgui.UIPopupManager.instance.showPopup("Đăng ký bảo mật thành công!");
n.showPanelSMSPlus(c.LobbyConst.SETTING_ID.SMSPLUS_INFO);
} else i == c.LobbyConst.SETTING_ID.SMSPLUS_DEL_OTP_TYPE && a.MVUtils.post(c.LobbyConst.API.DELETE_MOBILE, {
accountId: fzgui.UserManager.instance.mainUserInfo.AccountID,
mobile: fzgui.UserManager.instance.mainUserInfo.Mobile
}, function(t, e) {
if (t >= 200 && t < 400) {
var n = [ fzgui.PopupAction.make("OK", function() {
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.LOGOUT);
}) ];
fzgui.UIPopupManager.instance.showPopup("Hủy số điện thoại thành công!", n);
} else fzgui.UIPopupManager.instance.showPopup(e);
});
} else fzgui.UIPopupManager.instance.showPopup(e);
});
} else fzgui.UIPopupManager.instance.showPopup("Bạn chưa nhập mã OTP!");
};
e.prototype.touchGetOtpRegisterPhone = function() {
a.MVUtils.getOtpSMS();
};
e.prototype.onShowPanelRemovePhone = function() {
this.showPanelSMSPlus(c.LobbyConst.SETTING_ID.SMSPLUS_DEL_PHONE);
};
r([ l(cc.Label) ], e.prototype, "lblPhoneSMSPlus", void 0);
r([ l(cc.Label) ], e.prototype, "lblAccount", void 0);
r([ l(cc.Label) ], e.prototype, "lblTitleSMSPlus", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbPhoneSMSPlus", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbOTPRegisterAndDel", void 0);
r([ l(cc.Node) ], e.prototype, "panelRegisterSMSPlus", void 0);
r([ l(cc.Button) ], e.prototype, "btnGetOtpDeletePhone", void 0);
r([ l(cc.Button) ], e.prototype, "btnGetOtpRegisterPhone", void 0);
r([ l(cc.Button) ], e.prototype, "btnRegisterSMSPlus", void 0);
r([ l(cc.Button) ], e.prototype, "btnRemovePhoneSMSPlus", void 0);
r([ l(cc.Button) ], e.prototype, "btnUpdatePhoneSMSPlus", void 0);
r([ l(cc.Button) ], e.prototype, "btnBack", void 0);
r([ l(cc.Button) ], e.prototype, "btnDeleteMobile", void 0);
return r([ p ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUIAccountsCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "0b2c6zgYYZBgJBUpiXN4Ats", "GUIAccountsCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = cc._decorator, s = a.ccclass, p = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.redDot = null;
return e;
}
e.prototype.onEnable = function() {
fzgui.EventDispatch.instance.add(c.LobbyConst.EVENT_NAME.CHANGE_TAB_UI, this.onChangeTab, this);
this.requestUnreadMail();
};
e.prototype.onDisable = function() {
fzgui.EventDispatch.instance.remove(c.LobbyConst.EVENT_NAME.CHANGE_TAB_UI, this.onChangeTab, this);
};
e.prototype.onChangeTab = function(t) {
this.node.getComponent("UITabbarController").selectItemAtIndex(t);
};
e.prototype.requestUnreadMail = function() {
var t = this, e = c.LobbyConst.API.GET_UNREAD_MAIL;
fzgui.Https.get(e, function(e) {
fzgui.ZLog.log("requestUnreadMail ===" + JSON.stringify(e));
e && (e.Count ? t.redDot.active = !0 : t.redDot.active = !1);
});
};
r([ p(cc.Node) ], e.prototype, "redDot", void 0);
return r([ s ], e);
}(fzgui.UIPopup);
n.default = l;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst"
} ],
GUIEventDuDay: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "3d135ioA7hHvoK3D4LFQwM9", "GUIEventDuDay");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./CellDuDayTX"), s = t("./CellHomQuaTXCtrl"), p = t("./MVUtils"), l = t("./utils/Lobby_UITableView"), u = cc._decorator, f = u.ccclass, h = u.property, d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.daylist = [];
e.currentType = -1;
e.template = null;
e.content = null;
e.stopRequest = 0;
e.tbvDayThang = null;
e.tbvHomQua = null;
e.prefabItemDay = null;
e.btnDay = null;
e.nodeMask = null;
e._dataDuDay = [];
e._dataHomQua = [];
return e;
}
e.prototype.numberOfCellsInTableView = function(t) {
return t === this.tbvDayThang ? this._dataDuDay.length : t === this.tbvHomQua ? this._dataHomQua.length : void 0;
};
e.prototype.tableCellAtIndex = function(t, e) {
if (t === this.tbvDayThang) {
var n = t.dequeueCell(), o = this._dataDuDay[e];
n.getComponent(a.default).setData(o);
return n;
}
n = t.dequeueCell(), o = this._dataHomQua[e];
n.getComponent(s.default).setData(o);
return n;
};
e.prototype.onEnable = function() {
fzgui.EventDispatch.instance.add(c.LobbyConst.EVENT_NAME.REQUEST_EVENT_RANK, this._updateRank, this);
this.nodeMask.zIndex = 100;
this.tbvDayThang.dataSource = this;
this.tbvHomQua.dataSource = this;
this.requestList();
};
e.prototype.onDisable = function() {
fzgui.EventDispatch.instance.remove(c.LobbyConst.EVENT_NAME.REQUEST_EVENT_RANK, this._updateRank, this);
};
e.prototype.cowndownTimeRequest = function() {
var t = this, e = setInterval(function() {
t.stopRequest--;
console.log(t.stopRequest);
0 == t.stopRequest && clearInterval(e);
}, 1e3);
};
e.prototype.requestList = function(t) {
var e = this;
void 0 === t && (t = new Date());
this.removeDayList();
var n = "" + new Date(t).getFullYear() + (new Date(t).getMonth() + 1 < 10 ? "0" + (new Date(t).getMonth() + 1) : new Date(t).getMonth() + 1) + (new Date(t).getDate() < 10 ? "0" + new Date(t).getDate() : new Date(t).getDate()), o = {
token: fzgui.UserManager.instance.mainUserInfo.GameToken,
timeint: n
};
p.MVUtils.get("https://tx.banghe.xyz/service/GetEventTopRank", o, function(t, n) {
if (t >= 200 && t < 400) {
e.dataWin = n.slice(0, 49);
e.dataLost = n.slice(50, 99);
e.onDayThangClicked();
} else fzgui.ZLog.error("err" + n);
});
};
e.prototype.onDayThangClicked = function() {
this.content.removeAllChildren();
for (var t = this.dataWin, e = 0; e < t.length; e++) {
var n = this.content.children[e];
n || ((n = cc.instantiate(this.template)).parent = this.content);
n.getComponent(a.default).setData(t[e]);
}
};
e.prototype.onDayThuaClicked = function() {
this.content.removeAllChildren();
for (var t = this.dataLost, e = 0; e < t.length; e++) {
var n = this.content.children[e];
n || ((n = cc.instantiate(this.template)).parent = this.content);
n.getComponent(a.default).setData(t[e]);
}
};
e.prototype._updateRank = function(t) {
this.requestList(t);
this.daylist.forEach(function(t) {
t.removeFromParent();
});
this.daylist.length = 0;
var e = new Date().getDate(), n = new Date(t).getDate();
this.btnDay.children[0].getComponent(cc.Label).string = e == n ? "Hôm nay" : new Date(t).toJSON().slice(0, 10).split("-").reverse().join("/");
};
e.prototype.removeDayList = function() {
this.daylist.forEach(function(t) {
t.removeFromParent();
});
this.daylist.length = 0;
this.nodeMask.active = !1;
};
e.prototype.onInitListDay = function() {
if (0 == this.daylist.length) {
this.nodeMask.active = !0;
for (var t = 0; t < 7; t++) {
var e = new Date(), n = e.setDate(e.getDate() - t), o = cc.instantiate(this.prefabItemDay);
o.parent = this.btnDay.parent;
o.zIndex = cc.macro.MAX_ZINDEX;
o.position = this.btnDay.getPosition().sub(cc.v2(0, (t + 1) * o.height));
o.getComponent("CellHomQuaTXCtrl").setData(n);
this.daylist.push(o);
}
} else this.removeDayList();
};
r([ h(cc.Prefab) ], e.prototype, "template", void 0);
r([ h(cc.Node) ], e.prototype, "content", void 0);
r([ h(l.default) ], e.prototype, "tbvDayThang", void 0);
r([ h(l.default) ], e.prototype, "tbvHomQua", void 0);
r([ h(cc.Prefab) ], e.prototype, "prefabItemDay", void 0);
r([ h(cc.Node) ], e.prototype, "btnDay", void 0);
r([ h(cc.Node) ], e.prototype, "nodeMask", void 0);
return r([ f ], e);
}(cc.Component);
n.default = d;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./CellDuDayTX": "CellDuDayTX",
"./CellHomQuaTXCtrl": "CellHomQuaTXCtrl",
"./MVUtils": "MVUtils",
"./utils/Lobby_UITableView": "Lobby_UITableView"
} ],
GUIEventsCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "7b15bSdOhZJsJVfOfERYeQ1", "GUIEventsCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = (c.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ a ], e);
}(fzgui.UIPopup));
n.default = s;
cc._RF.pop();
}, {} ],
GUIGiftCode: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "9be5cKI7zJMq7+CMpvb7Ae2", "GUIGiftCode");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./MVUtils"), s = t("./utils/CapchaZ"), p = cc._decorator, l = p.ccclass, u = p.property, f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.UICaptcha = null;
e.txtGiftCode = null;
e.txtCaptcha = null;
e.imgCaptcha = null;
e._codeType = 1;
return e;
}
e.prototype.initData = function(t, e) {
void 0 === e && (e = null);
this._codeType = c.LobbyConst.SETTING_ID.GIFT_CODE;
null != t && (this._codeType = t);
null != e && (this._uiid = e);
this.init();
};
e.prototype.init = function() {
var t = "";
this._codeType == c.LobbyConst.SETTING_ID.GIFT_CODE && (t = c.LobbyConst.StringDefine.INPUT_GIFT_CODE);
this.txtGiftCode.placeholder = t;
this.onRefreshCaptchaClicked();
};
e.prototype.setGiftcodeText = function(t) {
this.txtGiftCode.string = t;
};
e.prototype.touchBtnGiftcode = function() {
var t, e = this, n = this.txtGiftCode.string;
n = n.replace(" ", "");
var o = this.txtCaptcha.string;
if (n.length <= 0) this._codeType == c.LobbyConst.SETTING_ID.GIFT_CODE ? fzgui.UIPopupManager.instance.showPopup(c.LobbyConst.StringDefine.INPUT_GIFT_CODE) : this._codeType == c.LobbyConst.SETTING_ID.VIP_CODE ? fzgui.UIPopupManager.instance.showPopup(c.LobbyConst.StringDefine.INPUT_VIP_CODE) : this._codeType == c.LobbyConst.SETTING_ID.OTP && fzgui.UIPopupManager.instance.showPopup(c.LobbyConst.StringDefine.INPUT_OTP); else if (o.length <= 0) fzgui.UIPopupManager.instance.showPopup("Bạn chưa nhập mã xác nhận!"); else {
fzgui.UIWaitingLayout.showWaiting();
var i = {
accountId: fzgui.UserManager.instance.mainUserInfo.AccountID,
accountName: fzgui.UserManager.instance.mainUserInfo.UserName,
nickName: fzgui.UserManager.instance.mainUserInfo.NickName,
giftcode: n,
captcha: o,
verifyCaptcha: this.UICaptcha.getCapChaId(),
uiid: this._uiid,
merchantKey: c.LobbyConst.MERCHANT_GIFTCODE.KEY,
merchantId: c.LobbyConst.MERCHANT_GIFTCODE.ID,
sourceId: a.MVUtils.getPlatform()
}, r = c.getStringBodyByObject({
token: fzgui.UserManager.instance.mainUserInfo.GameToken
});
t = c.LobbyConst.API.GIFT_CODE + r;
var s = cc.loader.getXMLHttpRequest();
s.onreadystatechange = function() {
if (4 == s.readyState) {
fzgui.UIWaitingLayout.hideWaiting();
if (200 == s.status) e._codeType == c.LobbyConst.SETTING_ID.GIFT_CODE && e.onCheckGiftCode(s.responseText); else if (400 == s.status) {
fzgui.UIPopupManager.instance.showPopup(s.responseText);
e.onRefreshCaptchaClicked();
} else if (e._codeType == c.LobbyConst.SETTING_ID.GIFT_CODE) {
fzgui.UIPopupManager.instance.showPopup("Nhập GiftCode không thành công.\nVui lòng thử lại.");
e.onRefreshCaptchaClicked();
}
}
};
s.ontimeout = function() {
fzgui.UIWaitingLayout.hideWaiting();
fzgui.UIPopupManager.instance.showPopup(c.LobbyConst.StringDefine.STR_NETWORK_ERROR);
};
s.onerror = function() {
fzgui.UIWaitingLayout.hideWaiting();
fzgui.UIPopupManager.instance.showPopup(c.LobbyConst.StringDefine.STR_NETWORK_ERROR);
};
s.timeout = 3e4;
s.open("POST", t, !0);
s.setRequestHeader("Content-Type", "application/json");
s.withCredentials = !0;
s.send(JSON.stringify(i));
}
};
e.prototype.onCheckGiftCode = function(t) {
var e = this;
if (null != t) {
var n = JSON.parse(t);
if (n.Response >= 0) {
var o = "Chúc mừng bạn đã nhận được\n" + fzgui.StringUtils.formatNumber(n.Response);
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, n.Balance);
var i = [ fzgui.PopupAction.make("OK", function() {
e.hide();
}) ];
fzgui.UIPopupManager.instance.showPopup(o, i);
}
}
};
e.prototype.onRefreshCaptchaClicked = function() {
this.UICaptcha.refreshCapcha();
};
r([ u(s.default) ], e.prototype, "UICaptcha", void 0);
r([ u(cc.EditBox) ], e.prototype, "txtGiftCode", void 0);
r([ u(cc.EditBox) ], e.prototype, "txtCaptcha", void 0);
r([ u(cc.Sprite) ], e.prototype, "imgCaptcha", void 0);
return r([ l ], e);
}(fzgui.UIPopup);
n.default = f;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils",
"./utils/CapchaZ": "CapchaZ"
} ],
GUIMissionCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "94581UjZ0xMl5+bjAFRZ8yI", "GUIMissionCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label = null;
e.text = "hello";
return e;
}
e.prototype.start = function() {};
r([ s(cc.Label) ], e.prototype, "label", void 0);
r([ s ], e.prototype, "text", void 0);
return r([ a ], e);
}(fzgui.UIPopup);
n.default = p;
cc._RF.pop();
}, {} ],
GUIOTP: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "1a890yymXtHIZDKEQ8N6vs+", "GUIOTP");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = cc._decorator, s = a.ccclass, p = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.txtOTP = null;
e.btnGetOtpSms = null;
e.otpToken = null;
e.serviceId = null;
e.otpType = 1;
return e;
}
e.prototype.initData = function(t, e) {
this.otpToken = t;
this.serviceId = e;
this.initUI();
};
e.prototype.initUI = function() {
this.otpType = 1;
};
e.prototype.getOTP = function() {
var t = this;
this.btnGetOtpSms.interactable = !1;
var e = c.LobbyConst.API.GET_OTP_SMS;
3 == this.otpType && (e = c.LobbyConst.API.GET_OTP_TRANFER);
this.scheduleOnce(function() {
t.btnGetOtpSms.interactable = !0;
}, 3);
fzgui.Https.get(e, function(t) {
if (cc.js.isNumber(t)) {
fzgui.UIPopupManager.instance.showPopup("Hệ thống đã gửi mã OTP đến số điện thoại của bạn");
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, t);
} else fzgui.UIPopupManager.instance.showPopup(t);
});
};
e.prototype.touchXacThuc = function() {
var t = this, e = this.txtOTP.string;
if (0 != e.length) {
var n = {
Otp: e,
OtpType: this.otpType,
OtpToken: this.otpToken,
ServiceId: this.serviceId
}, o = c.getStringBodyByObject({
token: fzgui.UserManager.instance.mainUserInfo.GameToken
}), i = c.LobbyConst.API.CHECK_OTP + o;
fzgui.UIWaitingLayout.showWaiting();
var r = cc.loader.getXMLHttpRequest();
r.onreadystatechange = function() {
if (4 == r.readyState) {
fzgui.UIWaitingLayout.hideWaiting();
if (200 == r.status) {
fzgui.UIPopupManager.instance.showPopup(r.responseText);
t.hide();
} else r.responseText.length > 0 ? fzgui.UIPopupManager.instance.showPopup(r.responseText) : fzgui.UIPopupManager.instance.showPopup("Kiểm tra OTP không thành công, Vui lòng thử lại!");
}
};
r.ontimeout = function() {
fzgui.UIPopupManager.instance.showPopup("Kiểm tra OTP không thành công, kiểm tra kết nối internet của bạn!");
fzgui.UIWaitingLayout.hideWaiting();
};
r.onerror = function() {
fzgui.UIPopupManager.instance.showPopup("Kiểm tra OTP không thành công. Vui lòng thử lại!");
fzgui.UIWaitingLayout.hideWaiting();
};
r.timeout = 3e4;
r.open("POST", i, !0);
r.setRequestHeader("Content-Type", "application/json");
r.withCredentials = !0;
r.send(JSON.stringify(n));
} else fzgui.UIPopupManager.instance.showPopup("Bạn chưa nhập mã OTP");
};
r([ p(cc.EditBox) ], e.prototype, "txtOTP", void 0);
r([ p(cc.Button) ], e.prototype, "btnGetOtpSms", void 0);
return r([ s ], e);
}(fzgui.UIPopup);
n.default = l;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst"
} ],
GUISettingCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "eb28aej8ZpC7IBPcvjreNwP", "GUISettingCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.cbSound = null;
e.cbMusic = null;
return e;
}
e.prototype.onCbSound = function(t) {
fzgui.AudioManager.instance.sfxVolume = t.isChecked ? 1 : 0;
};
e.prototype.onCbMusic = function(t) {
fzgui.AudioManager.instance.musicVolume = t.isChecked ? 1 : 0;
};
e.prototype.onEnable = function() {
var t = fzgui.ClientData.getNumber("music", 1), e = fzgui.ClientData.getNumber("sfx", 1);
0 == t ? this.cbMusic.uncheck() : this.cbMusic.check();
0 == e ? this.cbSound.uncheck() : this.cbSound.check();
};
r([ s(cc.Toggle) ], e.prototype, "cbSound", void 0);
r([ s(cc.Toggle) ], e.prototype, "cbMusic", void 0);
return r([ a ], e);
}(fzgui.UIPopup);
n.default = p;
cc._RF.pop();
}, {} ],
GUISpinner: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "b0a7akSSs1GfJifntrESPNZ", "GUISpinner");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label = null;
e.text = "hello";
return e;
}
e.prototype.start = function() {};
r([ s(cc.Label) ], e.prototype, "label", void 0);
r([ s ], e.prototype, "text", void 0);
return r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
GUITopJackpotCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "e4903cXk/RKWIdtsKgPq6fc", "GUITopJackpotCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./game_icon/BundleMiniGame"), s = t("./game_icon/BundleSceneGame"), p = t("./ItemTopJackpotCtrl"), l = t("./utils/Lobby_UITableView"), u = cc._decorator, f = u.ccclass, h = u.property, d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.tbvJackpot = null;
e.listIconDownLoad = [];
e._dataOld = new Map();
e._data = [];
return e;
}
e.prototype.numberOfCellsInTableView = function() {
return this._data.length || 0;
};
e.prototype.tableCellAtIndex = function(t, e) {
var n = t.dequeueCell(), o = n.getComponent(p.default), i = this._dataOld.get(e);
i = i || 0;
o.lbJackpot.data = i;
o.lbJackpot.setString(fzgui.StringUtils.formatNumber(i));
this._dataOld.set(e, this._data[e].jackpot);
o.setData(this._data[e], this._data[e].jackpot);
return n;
};
e.prototype.onTabbarSelected = function() {
if (this.tbvJackpot && this.tbvJackpot._isOnLoadCalled) {
this.refreshData();
this.tbvJackpot.reloadData();
this.tbvJackpot.scrollToTop(!1);
}
};
e.prototype.onEnable = function() {
this.tbvJackpot.dataSource = this;
fzgui.EventDispatch.instance.add(c.LobbyConst.EVENT_NAME.EVENT_UPDATE_JACKPOT, this.onUpdateListJackpot, this);
fzgui.EventDispatch.instance.add(c.LobbyConst.EVENT_NAME.BUNDLE_DOWNLOAD_FROM_ITEM_JACKPOT, this.onDownloadGameFromItem, this);
this.node.on(fzgui.ControlEvent.TabbarItemSelected, this.onTabbarSelected, this);
this.onUpdateListJackpot();
};
e.prototype.onDisable = function() {
fzgui.EventDispatch.instance.remove(c.LobbyConst.EVENT_NAME.EVENT_UPDATE_JACKPOT, this.onUpdateListJackpot, this);
fzgui.EventDispatch.instance.remove(c.LobbyConst.EVENT_NAME.BUNDLE_DOWNLOAD_FROM_ITEM_JACKPOT, this.onDownloadGameFromItem, this);
this.node.off(fzgui.ControlEvent.TabbarItemSelected, this.onTabbarSelected, this);
};
e.prototype.onDownloadGameFromItem = function(t) {
this.listIconDownLoad.forEach(function(e) {
if (e) {
var n = e.getComponent(a.default) && e.getComponent(a.default).gameID, o = e.getComponent(s.default) && e.getComponent(s.default).gameID;
if (n && n == t || o && o == t) {
e.getComponent(a.default) && e.getComponent(a.default)._onClicked();
e.getComponent(s.default) && e.getComponent(s.default)._onClicked();
}
}
});
};
e.prototype.refreshData = function() {
var t = c.LobbyConst.slotByKeys;
this._data = [];
var e = [], n = Math.max(this.node.getComponent("UITabbarController").curSelectedIndex, 0);
t.forEach(function(t, o) {
t.length - 1 >= n && e.push({
gameID: o,
jackpot: t[n]
});
});
this._data = e.sort(function(t, e) {
return t.jackpot > e.jackpot ? -1 : t < e ? 1 : 0;
});
};
e.prototype.onUpdateListJackpot = function() {
this.refreshData();
this.tbvJackpot.reloadData();
};
r([ h(l.default) ], e.prototype, "tbvJackpot", void 0);
r([ h(cc.Node) ], e.prototype, "listIconDownLoad", void 0);
return r([ f ], e);
}(cc.Component);
n.default = d;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./ItemTopJackpotCtrl": "ItemTopJackpotCtrl",
"./game_icon/BundleMiniGame": "BundleMiniGame",
"./game_icon/BundleSceneGame": "BundleSceneGame",
"./utils/Lobby_UITableView": "Lobby_UITableView"
} ],
GUITopupBank: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6f83aop94JNioUx6gMraHaS", "GUITopupBank");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Spinner = void 0;
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function() {
function t() {
this.container = null;
this.itemTemplate = null;
this.thisNode = null;
this.type = -1;
}
t.prototype.setInfo = function(t, e, n) {
var o = this;
this.container.children.forEach(function(t) {
t.active = !1;
});
for (var i = function(i) {
var c = r.container.children[i];
c || ((c = cc.instantiate(r.itemTemplate)).parent = r.container);
c.active = !0;
e(c, t[i]);
c.off(cc.Node.EventType.TOUCH_END);
c.on(cc.Node.EventType.TOUCH_END, function() {
n(t[i]);
o.thisNode.active = !1;
});
}, r = this, c = 0; c < t.length; c++) i(c);
};
r([ l(cc.Node) ], t.prototype, "container", void 0);
r([ l(cc.Node) ], t.prototype, "itemTemplate", void 0);
r([ l(cc.Node) ], t.prototype, "thisNode", void 0);
return r([ p("GuiTopupEWallet.Spinner") ], t);
}();
n.Spinner = u;
var f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.edbAmount = null;
e.edbCaptcha = null;
e.sprCaptcha = null;
e.lbTypeBank = null;
e.lbBigAmount = null;
e.lbAccountId = null;
e.lbAccountName = null;
e.lbTransferContent = null;
e.lbTimeRemain = null;
e.nodeSpiner = null;
e.nodeInfoTransfer = null;
e.lbStk = null;
e.lbBankName = null;
e.lbAccName = null;
e.lbContent = null;
e._verifyCaptcha = null;
e.bank = null;
e.amount = 0;
e.listBank = [];
e.timeRemain = 30;
return e;
}
e.prototype.onLoad = function() {
var t = this;
this.nodeInfoTransfer.active = !1;
fzgui.Https.get(c.LobbyConst.API.URL + c.LobbyConst.API.LIST_BANK, function(e) {
1 == e.ResponseCode && (t.listBank = e.Data);
});
};
e.prototype.start = function() {};
e.prototype.onClickChooseBank = function() {
var t = this;
this.nodeSpiner.thisNode.active = !this.nodeSpiner.thisNode.active;
this.nodeSpiner.setInfo(this.listBank, function(t, e) {
t.getComponentInChildren(cc.Label).string = e.bank_name;
}, function(e) {
t.lbTypeBank.string = e.bank_name;
t.lbTypeBank.node.color = cc.Color.WHITE;
t.bank = e.code;
});
this.nodeSpiner.thisNode.y = 394.026;
};
e.prototype.onClickRefreshCaptcha = function() {
this.sprCaptcha.node.getComponent("CapchaZ").refreshCapcha();
};
e.prototype.onEdbChange = function() {
var t = a.MVUtils.toInt(this.edbAmount.string);
t = Math.abs(t);
this.amount = t;
this.edbAmount.string = a.MVUtils.formatNumber(t);
this.lbBigAmount.string = a.MVUtils.formatNumber(t);
cc.sys.isBrowser && this.edbAmount.focus();
};
e.prototype.onEnded = function() {
var t = this;
setTimeout(function() {
var e = a.MVUtils.toInt(t.edbAmount.string);
e = Math.abs(e);
t.edbAmount.string = a.MVUtils.formatNumber(e);
}, 500);
};
e.prototype.onClickConfirm = function() {
var t = this;
console.log(parseInt(this.edbAmount.string));
if ("" != this.edbAmount.string) if (a.MVUtils.toInt(this.edbAmount.string) < 2e5) fzgui.UIPopupManager.instance.showPopup("Số tiền tối thiểu là 200.000"); else if (null != this.bank) if ("" != this.edbCaptcha.string) {
var e = c.LobbyConst.API.URL + c.LobbyConst.API.REQUEST_PAYMENT, n = {
os: a.MVUtils.getPlatform(),
amount: this.amount,
provider: this.bank
};
console.log("BOdy=", n);
fzgui.Https.post(e, n, function(e, n) {
console.log("Result request bank:", n.Data);
if (1 == n.ResponseCode) {
t.lbStk.string = n.Data.Banknumber;
t.lbBankName.string = n.Data.Bankname;
t.lbAccName.string = t.lbTypeBank.string;
t.lbContent.string = n.Data.Content;
t.nodeInfoTransfer.active = !0;
t.timeRemain = a.MVUtils.toInt(n.Data.Expired);
t.setTimeCountDown();
}
});
} else fzgui.UIPopupManager.instance.showPopup("Vui lòng nhập đủ thông tin!"); else fzgui.UIPopupManager.instance.showPopup("Vui lòng chọn ngân hàng!"); else fzgui.UIPopupManager.instance.showPopup("Vui lòng nhập số tiền!");
};
e.prototype.setTimeCountDown = function() {
var t = this;
this.schedule(function() {
t.lbTimeRemain.string = t.timeRemain.toString();
t.timeRemain--;
}, 1, this.timeRemain);
};
e.prototype.onClickCancel = function() {};
e.prototype.onClickCopy = function() {
fzgui.PlatformUtils.copy(this.lbStk.string);
};
e.prototype.onBtnHuyBo = function() {
this.nodeInfoTransfer.active = !1;
};
r([ l(cc.EditBox) ], e.prototype, "edbAmount", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
r([ l(cc.Sprite) ], e.prototype, "sprCaptcha", void 0);
r([ l(cc.Label) ], e.prototype, "lbTypeBank", void 0);
r([ l(cc.Label) ], e.prototype, "lbBigAmount", void 0);
r([ l(cc.Label) ], e.prototype, "lbAccountId", void 0);
r([ l(cc.Label) ], e.prototype, "lbAccountName", void 0);
r([ l(cc.Label) ], e.prototype, "lbTransferContent", void 0);
r([ l(cc.Label) ], e.prototype, "lbTimeRemain", void 0);
r([ l(u) ], e.prototype, "nodeSpiner", void 0);
r([ l(cc.Node) ], e.prototype, "nodeInfoTransfer", void 0);
r([ l(cc.Label) ], e.prototype, "lbStk", void 0);
r([ l(cc.Label) ], e.prototype, "lbBankName", void 0);
r([ l(cc.Label) ], e.prototype, "lbAccName", void 0);
r([ l(cc.Label) ], e.prototype, "lbContent", void 0);
return r([ p ], e);
}(cc.Component);
n.default = f;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "32701gpeuBPPb09K5EcN62J", "GUITopupCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = (c.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ a ], e);
}(fzgui.UIPopup));
n.default = s;
cc._RF.pop();
}, {} ],
GUITopupEWallet: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "3ed3c3pD0dI3oRCO5rUdcbj", "GUITopupEWallet");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Spinner = void 0;
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function() {
function t() {
this.container = null;
this.itemTemplate = null;
this.thisNode = null;
this.type = -1;
}
t.prototype.setInfo = function(t, e, n) {
var o = this;
this.container.children.forEach(function(t) {
t.active = !1;
});
for (var i = function(i) {
var c = r.container.children[i];
c || ((c = cc.instantiate(r.itemTemplate)).parent = r.container);
c.active = !0;
e(c, t[i]);
c.off(cc.Node.EventType.TOUCH_END);
c.on(cc.Node.EventType.TOUCH_END, function() {
n(t[i]);
o.thisNode.active = !1;
});
}, r = this, c = 0; c < t.length; c++) i(c);
};
r([ l(cc.Node) ], t.prototype, "container", void 0);
r([ l(cc.Node) ], t.prototype, "itemTemplate", void 0);
r([ l(cc.Node) ], t.prototype, "thisNode", void 0);
return r([ p("GuiTopupBank.Spinner") ], t);
}();
n.Spinner = u;
var f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbPhone = null;
e.lbAccountName = null;
e.lbContentTransfer = null;
e.lbCurrenAmount = null;
e.lbTimeRemain = null;
e.scrRateNap = null;
e.nodeSpiner = null;
e.panelContent = null;
e.panelRate = null;
e.listAmount = [];
e.listWallet = [];
e.listRate = [];
e.momoInfo = {};
e.currentAmount = 0;
e.timeRemain = 0;
e.timeSche = null;
return e;
}
e.prototype.onLoad = function() {
var t = this;
fzgui.Https.get(c.LobbyConst.API.URL + c.LobbyConst.API.MOMO_INFO, function(e) {
if (1 == e.ResponseCode) {
console.log("Momo Info:", e);
t.listAmount = e.Data.List;
t.momoInfo = e.Data;
t.loadListRate();
t.setInfoWallet();
}
});
};
e.prototype.setInfoWallet = function() {
var t = this;
this.panelRate.active = !0;
this.panelContent.active = !1;
this.timeRemain = this.momoInfo.Expired;
this.lbAccountName.string = this.momoInfo.name;
this.lbPhone.string = this.momoInfo.phone;
this.unschedule(this.timeSche);
this.lbTimeRemain.string = "00:00";
this.schedule(this.timeSche = function() {
t.timeRemain--;
var e = t.convertTimeRemain(t.timeRemain);
t.lbTimeRemain.string = cc.js.formatStr("%s:%s", e.minute, e.seccond);
}, 1, this.timeRemain);
};
e.prototype.convertTimeRemain = function(t) {
var e = {}, n = Math.floor(t / 60), o = n >= 10 ? n : "0" + n, i = Math.floor(t % 60), r = i >= 10 ? i : "0" + i;
e.minute = o;
e.seccond = r;
return e;
};
e.prototype.loadListRate = function() {
for (var t = 0; t < this.listAmount.length; t++) {
var e = this.listAmount[t], n = this.scrRateNap.content.children[t];
n || ((n = cc.instantiate(this.scrRateNap.content.children[0])).parent = this.scrRateNap.content);
n.active = !0;
n.getChildByName("lblAmout").getComponent(cc.Label).string = a.MVUtils.formatNumber(e.Amount);
n.getChildByName("lblNo").getComponent(cc.Label).string = a.MVUtils.formatNumber(e.AmountReceive);
}
};
e.prototype.onClickConfirm = function() {
if (this.momoInfo != {}) {
var t = "Server Thêm Content hộ cái!";
null != this.momoInfo.content && (t = this.momoInfo.content);
this.lbContentTransfer.string = t;
this.panelContent.active = !0;
this.panelRate.active = !1;
} else fzgui.UIPopupManager.instance.showPopup("Hệ thống đang lỗi,Vui lòng thử lại sau!");
};
e.prototype.onClickRefreshCaptcha = function() {};
e.prototype.onClickChooseAmount = function() {
var t = this;
this.nodeSpiner.thisNode.active = !this.nodeSpiner.thisNode.active;
this.nodeSpiner.setInfo(this.listAmount, function(t, e) {
t.getComponentInChildren(cc.Label).string = a.MVUtils.formatNumber(e.Amount);
}, function(e) {
t.lbCurrenAmount.string = a.MVUtils.formatNumber(e.Amount);
t.lbCurrenAmount.node.color = cc.Color.WHITE;
t.currentAmount = e.Amount;
});
this.nodeSpiner.thisNode.y = 328.16;
};
e.prototype.onClickChooseWallet = function(t, e) {
"2" != e && "3" != e || fzgui.UIPopupManager.instance.showPopup("Tính năng đang phát triển!");
};
e.prototype.onClickCopy = function() {
fzgui.PlatformUtils.copy(this.momoInfo.phone);
};
r([ l(cc.Label) ], e.prototype, "lbPhone", void 0);
r([ l(cc.Label) ], e.prototype, "lbAccountName", void 0);
r([ l(cc.Label) ], e.prototype, "lbContentTransfer", void 0);
r([ l(cc.Label) ], e.prototype, "lbCurrenAmount", void 0);
r([ l(cc.Label) ], e.prototype, "lbTimeRemain", void 0);
r([ l(cc.ScrollView) ], e.prototype, "scrRateNap", void 0);
r([ l(u) ], e.prototype, "nodeSpiner", void 0);
r([ l(cc.Node) ], e.prototype, "panelContent", void 0);
r([ l(cc.Node) ], e.prototype, "panelRate", void 0);
return r([ p ], e);
}(fzgui.UIPopup);
n.default = f;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupExchange: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "fefcdRa9qVKjLiaLguJ46lr", "GUITopupExchange");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.TabCashCard = n.Spinner = void 0;
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function() {
function t() {
this.container = null;
this.itemTemplate = null;
this.thisNode = null;
this.type = -1;
}
t.prototype.setInfo = function(t, e, n) {
var o = this;
this.container.children.forEach(function(t) {
t.active = !1;
});
for (var i = function(i) {
var c = r.container.children[i];
c || ((c = cc.instantiate(r.itemTemplate)).parent = r.container);
c.active = !0;
e(c, t[i]);
c.off(cc.Node.EventType.TOUCH_END);
c.on(cc.Node.EventType.TOUCH_END, function() {
n(t[i]);
o.thisNode.active = !1;
});
}, r = this, c = 0; c < t.length; c++) i(c);
};
r([ l(cc.Node) ], t.prototype, "container", void 0);
r([ l(cc.Node) ], t.prototype, "itemTemplate", void 0);
r([ l(cc.Node) ], t.prototype, "thisNode", void 0);
return r([ p("GuiTopupExchange.Spinner") ], t);
}();
n.Spinner = u;
var f = function() {
function t() {
this.thisNode = null;
this.sprCaptcha = null;
this._verifyCaptcha = null;
}
t.prototype.setInfo = function() {};
r([ l(cc.Node) ], t.prototype, "thisNode", void 0);
r([ l(cc.Sprite) ], t.prototype, "sprCaptcha", void 0);
return r([ p("GuiTopupExchange.TabCashCard") ], t);
}();
n.TabCashCard = f;
var h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeSpiner = null;
e.tabCashCard = null;
e.lbTypeCard = null;
e.lbRequiredChip = null;
e.lbValue = null;
e.sprCaptcha = null;
e.edbCaptcha = null;
e.pnlOTPVerify = null;
e.edbOTPVerify = null;
e.tiGiaContainer = null;
e.itemTiGiaTemplate = null;
e.listProvider = [];
e.listCardRate = [];
e.provider = null;
e.currentCardValue = 0;
return e;
}
e.prototype.onLoad = function() {
var t = this;
0 == this.listProvider.length && fzgui.Https.get(c.LobbyConst.API.URL + c.LobbyConst.API.CARD_TYPE, function(e) {
t.listProvider = e.Data;
});
0 == this.listCardRate.length && fzgui.Https.get(c.LobbyConst.API.URL + c.LobbyConst.API.RATE_CARD, function(e) {
t.listCardRate = e.Data[0];
t.ExchangeRate = e.Data[0].ExchangeRate;
t.loadListTiGia();
});
};
e.prototype.loadListTiGia = function() {
for (var t = this.listCardRate.LstCashOutDisplay, e = 0; e < t.length; e++) {
var n = this.tiGiaContainer.children[e];
n || ((n = cc.instantiate(this.itemTiGiaTemplate)).parent = this.tiGiaContainer);
n.getChildByName("lblValue").getComponent(cc.Label).string = a.MVUtils.formatNumber(t[e].Amount);
n.getChildByName("lblBalance").getComponent(cc.Label).string = a.MVUtils.formatNumber(t[e].Amount * this.ExchangeRate);
}
};
e.prototype.onClickTypeCard = function() {
var t = this;
this.nodeSpiner.thisNode.active = !this.nodeSpiner.thisNode.active;
this.nodeSpiner.type = 0;
this.nodeSpiner.setInfo(this.listProvider, function(t, e) {
t.getComponentInChildren(cc.Label).string = e.cardTypeName;
}, function(e) {
t.lbTypeCard.string = e.cardTypeName;
t.provider = e.cardType;
});
this.nodeSpiner.thisNode.y = 394.026;
};
e.prototype.onClickValue = function() {
var t = this;
this.nodeSpiner.type = 1;
this.nodeSpiner.thisNode.active = !this.nodeSpiner.thisNode.active;
this.nodeSpiner.thisNode.y = 315.377;
this.nodeSpiner.setInfo(this.listCardRate.LstCashInDisplay, function(t, e) {
t.getComponentInChildren(cc.Label).string = a.MVUtils.formatNumber(e.Amount);
}, function(e) {
t.lbValue.string = a.MVUtils.formatNumber(e.Amount);
t.currentCardValue = e.Amount;
t.lbRequiredChip.string = a.MVUtils.formatNumber(e.Amount * t.ExchangeRate);
});
};
e.prototype.onClickConfirmExChange = function() {
var t = this;
if ("" != this.edbCaptcha.string) if (this.provider) if (0 != this.currentCardValue) {
var e = "";
"VT" == this.provider && (e = "VTT");
"Vina" == this.provider && (e = "VNP");
"Mobi" == this.provider && (e = "VMS");
var n = {
provider: e,
type: 0,
captchaText: this.edbCaptcha.string,
captchaToken: this.sprCaptcha.getComponent("CapchaZ").getCapChaId(),
amount: this.currentCardValue,
merchantId: 1,
sourceId: 1,
quantity: 1
};
a.MVUtils.post(c.LobbyConst.API.MUA_THE, n, function(e, n) {
if (e >= 200 && e < 400) {
t.data = n;
t.pnlOTPVerify.getChildByName("pnlContent").getChildByName("lblCardType").getComponent(cc.Label).string = t.provider;
t.pnlOTPVerify.getChildByName("pnlContent").getChildByName("lblCardValue").getComponent(cc.Label).string = a.MVUtils.formatNumber(t.currentCardValue);
t.pnlOTPVerify.getChildByName("pnlContent").getChildByName("lblBigDoi").getComponent(cc.Label).string = t.lbRequiredChip.string;
t.pnlOTPVerify.active = !0;
t.tabCashCard.thisNode.active = !1;
} else fzgui.UIPopupManager.instance.showPopup(n);
});
} else fzgui.UIPopupManager.instance.showPopup("Xin vui lòng chọn mệnh giá!"); else fzgui.UIPopupManager.instance.showPopup("Xin vui lòng chọn nhà mạng!"); else fzgui.UIPopupManager.instance.showPopup("Xin vui lòng nhập mã kiểm tra!");
};
e.prototype.onClickVerifyOTP = function() {
var t = this;
a.MVUtils.post(c.LobbyConst.API.CHECK_OTP, {
Otp: this.edbOTPVerify.string,
OtpType: 1,
OtpToken: this.data.OtpToken,
ServiceId: 2001
}, function(e, n) {
if (200 == e) {
fzgui.UIPopupManager.instance.showPopup("Rút thẻ thành công, thẻ sẽ được gửi vào Hòm Thư của quý khách!");
fzgui.UserManager.instance.mainUserInfo.Money = fzgui.UserManager.instance.mainUserInfo.Money - t.currentCardValue;
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, fzgui.UserManager.instance.mainUserInfo.Money);
} else fzgui.UIPopupManager.instance.showPopup(n);
});
};
e.prototype.onClickRefreshCaptcha = function() {
this.sprCaptcha.node.getComponent("CapchaZ").refreshCapcha();
};
e.prototype.onClickSendOTPSMS = function() {
a.MVUtils.getOtpSMS();
};
r([ l(u) ], e.prototype, "nodeSpiner", void 0);
r([ l(f) ], e.prototype, "tabCashCard", void 0);
r([ l(cc.Label) ], e.prototype, "lbTypeCard", void 0);
r([ l(cc.Label) ], e.prototype, "lbRequiredChip", void 0);
r([ l(cc.Label) ], e.prototype, "lbValue", void 0);
r([ l(cc.Sprite) ], e.prototype, "sprCaptcha", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
r([ l(cc.Node) ], e.prototype, "pnlOTPVerify", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbOTPVerify", void 0);
r([ l(cc.Node) ], e.prototype, "tiGiaContainer", void 0);
r([ l(cc.Node) ], e.prototype, "itemTiGiaTemplate", void 0);
return r([ p ], e);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupHistoryAllGame: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "62760o5vXBKybXWQZVvHxI1", "GUITopupHistoryAllGame");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.scrHistory = null;
e.itemTemplate = null;
e.listHistory = [];
return e;
}
e.prototype.onLoad = function() {
var t = this, e = {
accountId: fzgui.UserManager.instance.mainUserInfo.AccountID
};
a.MVUtils.get(c.LobbyConst.API.URL + c.LobbyConst.API.LIST_HISTORY_ALLGAME, e, function(e, n) {
e >= 200 && e < 400 ? t.loadListHistory(n) : console.log("err===>", n);
});
};
e.prototype.loadListHistory = function(t) {
this.listHistory = t;
console.log("json: " + JSON.stringify(this.listHistory));
for (var e = 0; e < this.listHistory.length; e++) {
var n = this.listHistory[e], o = this.scrHistory.content.children[e];
if (!o) {
o = cc.instantiate(this.itemTemplate);
this.scrHistory.content.addChild(o);
}
o.active = !0;
var i = n.CreatedTime;
i = (i = i.replace("T", "\n")).substring(0, i.indexOf("."));
o.getChildByName("lblThoiGian").getComponent(cc.Label).string = i;
o.getChildByName("lblDichVu").getComponent(cc.Label).string = n.ServiceName;
o.getChildByName("lblSoTien").getComponent(cc.Label).string = a.MVUtils.formatNumber(n.Amount).toString();
n.Description.length > 29 && (n.Description = n.Description.substring(0, 29) + "...");
o.getChildByName("lblMoTa").getComponent(cc.Label).string = n.Description;
}
};
e.prototype.start = function() {};
r([ l(cc.ScrollView) ], e.prototype, "scrHistory", void 0);
r([ l(cc.Node) ], e.prototype, "itemTemplate", void 0);
return r([ p ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupHistory: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "0f1edg/gHBB44ZE3KZnNhOB", "GUITopupHistory");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.scrHistory = null;
e.itemTemplate = null;
e.listHistory = [];
return e;
}
e.prototype.onLoad = function() {
var t = this, e = c.LobbyConst.API.URL + c.LobbyConst.API.LIST_HISTORY;
fzgui.Https.get(e, function(e) {
if (null != e) {
t.loadListHistory();
if (e.length > 0) {
t.listHistory = e;
t.loadListHistory();
}
}
});
};
e.prototype.loadListHistory = function() {
for (var t = 0; t < this.listHistory.length; t++) {
var e = this.listHistory[t], n = this.scrHistory.content.children[t];
if (!n) {
n = cc.instantiate(this.itemTemplate);
this.scrHistory.content.addChild(n);
}
n.active = !0;
n.getChildByName("lblSTT").getComponent(cc.Label).string = t + 1 + "";
var o = e.CreatedTime;
o = (o = o.replace("T", "\n")).substring(0, o.indexOf("."));
n.getChildByName("lblTime").getComponent(cc.Label).string = o;
var i = "";
switch (e.Provider) {
case "Vina":
i = "Vinaphone";
break;

case "Mobi":
i = "Mobiphone";
break;

case "VT":
i = "Viettel";
break;

default:
e.Provider;
}
n.getChildByName("lblCardType").getComponent(cc.Label).string = i;
n.getChildByName("lblCardValue").getComponent(cc.Label).string = a.MVUtils.formatNumber(e.Amount);
}
};
e.prototype.start = function() {};
r([ l(cc.ScrollView) ], e.prototype, "scrHistory", void 0);
r([ l(cc.Node) ], e.prototype, "itemTemplate", void 0);
return r([ p ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupIAP: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "bb3e05Td1lC2q9vLRt36rCK", "GUITopupIAP");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label = null;
e.text = "hello";
return e;
}
e.prototype.start = function() {};
r([ s(cc.Label) ], e.prototype, "label", void 0);
r([ s ], e.prototype, "text", void 0);
return r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
GUITopupRutBank: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "773aePSP/pNJZowO2fOnd+Y", "GUITopupRutBank");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.edbBank = null;
e.edbAmount = null;
e.edbSoTk = null;
e.edbChuTaiKhoan = null;
e.edbCaptcha = null;
e.sprCaptcha = null;
e.edbOTPVerify = null;
e.nodeListBank = null;
e.layoutCastOut = null;
e.layoutOTP = null;
e._verifyCaptcha = null;
e.bank = null;
return e;
}
e.prototype.onLoad = function() {
this.nodeListBank.active = !0;
this.layoutCastOut.active = !1;
this.layoutOTP.active = !1;
this.sprCaptcha.node.getComponent("CapchaZ").refreshCapcha();
};
e.prototype.start = function() {};
e.prototype.onClickBank = function(t, e) {
this.bank = e;
this.edbBank.string = e;
this.nodeListBank.active = !1;
this.layoutCastOut.active = !0;
this.layoutOTP.active = !1;
};
e.prototype.onClickRutTien = function() {
var t = this;
this._verifyCaptcha = this.sprCaptcha.getComponent("CapchaZ").getCapChaId();
this.data = {
nickNameTrans: fzgui.UserManager.instance.mainUserInfo.NickName,
transferValue: a.MVUtils.toInt(this.edbAmount.string),
sourceId: 1,
captchaText: this.edbCaptcha.string,
captchaToken: this._verifyCaptcha,
bankAccountNumber: this.edbSoTk.string,
bankAccountName: this.edbChuTaiKhoan.string,
bankCode: this.bank,
transferType: 0
};
var e = this;
a.MVUtils.post(c.LobbyConst.API.CAST_OUT, this.data, function(n, o) {
if (200 == n) {
e.layoutOTP.getChildByName("lblUsername").getComponent(cc.Label).string = t.data.bankAccountName;
e.layoutOTP.getChildByName("lblReceiveQuay").getComponent(cc.Label).string = a.MVUtils.formatNumber(t.data.transferValue);
e.layoutOTP.getChildByName("lblReason").getComponent(cc.Label).string = t.data.bankAccountNumber + " - " + t.bank;
e.nodeListBank.active = !1;
e.layoutCastOut.active = !1;
e.layoutOTP.active = !0;
e.data.OtpToken = o.OtpToken;
} else fzgui.UIPopupManager.instance.showPopup(o);
});
};
e.prototype.onClickVerifyOTP = function() {
var t = this;
a.MVUtils.post(c.LobbyConst.API.CHECK_OTP, {
Otp: this.edbOTPVerify.string,
OtpType: 1,
OtpToken: this.data.OtpToken,
ServiceId: 2005
}, function(e, n) {
if (200 == e) {
fzgui.UIPopupManager.instance.showPopup("Tạo lệnh rút tiền thành công");
t.nodeListBank.active = !0;
t.layoutCastOut.active = !1;
t.layoutOTP.active = !1;
fzgui.UserManager.instance.mainUserInfo.Money = fzgui.UserManager.instance.mainUserInfo.Money - t.data.transferValue;
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, fzgui.UserManager.instance.mainUserInfo.Money);
} else fzgui.UIPopupManager.instance.showPopup(n);
});
};
e.prototype.onClickRefreshCaptcha = function() {
this.sprCaptcha.node.getComponent("CapchaZ").refreshCapcha();
};
e.prototype.onEdbChange = function() {
var t = a.MVUtils.toInt(this.edbAmount.string);
t = Math.abs(t);
this.edbAmount.string = a.MVUtils.formatNumber(t);
cc.sys.isBrowser && this.edbAmount.focus();
};
e.prototype.onClickSendOTPSMS = function() {
a.MVUtils.getOtpSMS();
};
r([ l(cc.Label) ], e.prototype, "edbBank", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbAmount", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbSoTk", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbChuTaiKhoan", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
r([ l(cc.Sprite) ], e.prototype, "sprCaptcha", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbOTPVerify", void 0);
r([ l(cc.Node) ], e.prototype, "nodeListBank", void 0);
r([ l(cc.Node) ], e.prototype, "layoutCastOut", void 0);
r([ l(cc.Node) ], e.prototype, "layoutOTP", void 0);
return r([ p ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupTelco: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d4303PCXcRKZrcQyq2peaWg", "GUITopupTelco");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Spinner = void 0;
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function() {
function t() {
this.container = null;
this.itemTemplate = null;
this.thisNode = null;
this.type = -1;
}
t.prototype.setInfo = function(t, e, n) {
var o = this;
this.container.children.forEach(function(t) {
t.active = !1;
});
for (var i = function(i) {
var c = r.container.children[i];
c || ((c = cc.instantiate(r.itemTemplate)).parent = r.container);
c.active = !0;
e(c, t[i]);
c.off(cc.Node.EventType.TOUCH_END);
c.on(cc.Node.EventType.TOUCH_END, function() {
n(t[i]);
o.thisNode.active = !1;
});
}, r = this, c = 0; c < t.length; c++) i(c);
};
r([ l(cc.Node) ], t.prototype, "container", void 0);
r([ l(cc.Node) ], t.prototype, "itemTemplate", void 0);
r([ l(cc.Node) ], t.prototype, "thisNode", void 0);
return r([ p("GuiTopupTelco.Spinner") ], t);
}();
n.Spinner = u;
var f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeSpinner = null;
e.lbTypeCard = null;
e.lbValue = null;
e.tiGiaContainer = null;
e.itemTiGiaTemplate = null;
e.edbCaptcha = null;
e.edbCardCode = null;
e.edbCardSeri = null;
e.sprCaptcha = null;
e.currentMenhGia = 0;
e.provider = null;
e._verifyCaptcha = "";
e.listProvider = [];
e.currentRateProvider = {};
e.rateCard = null;
e.currentTabRateProvider = null;
return e;
}
e.prototype.onLoad = function() {
var t = this;
fzgui.Https.get(c.LobbyConst.API.URL + c.LobbyConst.API.RATE_CARD, function(e) {
t.rateCard = e.Data[0];
});
fzgui.Https.get(c.LobbyConst.API.URL + c.LobbyConst.API.CARD_TYPE, function(e) {
if (1 == e.ResponseCode) {
t.listProvider = e.Data;
t.currentRateProvider = t.listProvider[0];
}
t.loadListTiGia();
});
this.currentTabRateProvider = this.node.getChildByName("btnChooseViettel");
};
e.prototype.start = function() {};
e.prototype.onClickTypeCard = function() {
var t = this;
this.nodeSpinner.thisNode.active = !this.nodeSpinner.thisNode.active;
this.nodeSpinner.type = 0;
this.nodeSpinner.setInfo(this.listProvider, function(e, n) {
e.getComponentInChildren(cc.Label).string = n.cardTypeName;
e.id = t.listProvider.indexOf(n);
}, function(e) {
cc.log("onClickTypeCard");
t.lbTypeCard.string = e.cardTypeName;
t.provider = e.cardType;
});
this.nodeSpinner.thisNode.y = 404;
};
e.prototype.onClickValue = function() {
var t = this;
this.nodeSpinner.type = 1;
this.nodeSpinner.thisNode.active = !this.nodeSpinner.thisNode.active;
this.nodeSpinner.thisNode.y = 325;
var e = this.rateCard.LstCashInDisplay;
this.nodeSpinner.setInfo(e, function(t, e) {
t.getComponentInChildren(cc.Label).string = a.MVUtils.formatNumber(e.Amount);
}, function(e) {
cc.log("onClickValue");
t.lbValue.string = a.MVUtils.formatNumber(e.Amount);
t.currentMenhGia = e.Amount;
});
};
e.prototype.loadListTiGia = function() {
for (var t = this.currentRateProvider.List, e = 0; e < t.length; e++) {
var n = this.tiGiaContainer.children[e];
n || ((n = cc.instantiate(this.itemTiGiaTemplate)).parent = this.tiGiaContainer);
n.getChildByName("lblAmout").getComponent(cc.Label).string = a.MVUtils.formatNumber(t[e].Amount);
n.getChildByName("lblNo").getComponent(cc.Label).string = a.MVUtils.formatNumber(t[e].AmountReceive);
}
};
e.prototype.onClickConfirm = function() {
var t = this;
if (0 != this.currentMenhGia) if (null != this.provider) if ("" != this.edbCaptcha.string && "" != this.edbCardCode.string && "" != this.edbCardSeri.string) {
this._verifyCaptcha = this.sprCaptcha.node.getComponent("CapchaZ").getCapChaId();
var e = this.edbCardSeri.string, n = this.edbCardCode.string, o = this.edbCaptcha.string, i = {
cardType: this.provider,
cardSerial: e,
amount: this.currentMenhGia,
cardPin: n,
captcha: o,
CardUserAmount: this.currentMenhGia,
verify: this._verifyCaptcha,
os: a.MVUtils.getPlatform()
};
cc.log("Body==", JSON.stringify(i));
var r = c.LobbyConst.API.URL + c.LobbyConst.API.REQUEST_CASH_IN;
fzgui.Https.post(r, i, function(e, n) {
fzgui.UIPopupManager.instance.showPopup(n.Description);
-1 == n.ResponseCode && t.onClickResetCaptcha();
});
} else fzgui.UIPopupManager.instance.showPopup("Vui lòng nhập đủ thông tin!"); else fzgui.UIPopupManager.instance.showPopup("Vui lòng chọn loại thẻ!"); else fzgui.UIPopupManager.instance.showPopup("Vui lòng chọn mệnh giá thẻ!");
};
e.prototype.onClickResetCaptcha = function() {
this.sprCaptcha.node.getComponent("CapchaZ").refreshCapcha();
};
e.prototype.onClickChangeProvider = function(t, e) {
null != this.currentTabRateProvider && (this.currentTabRateProvider.color = cc.Color.GRAY);
this.currentTabRateProvider = t.target;
this.currentRateProvider = this.listProvider[parseInt(e)];
this.currentTabRateProvider.color = cc.Color.WHITE;
this.loadListTiGia();
};
r([ l(u) ], e.prototype, "nodeSpinner", void 0);
r([ l(cc.Label) ], e.prototype, "lbTypeCard", void 0);
r([ l(cc.Label) ], e.prototype, "lbValue", void 0);
r([ l(cc.Node) ], e.prototype, "tiGiaContainer", void 0);
r([ l(cc.Node) ], e.prototype, "itemTiGiaTemplate", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbCardCode", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbCardSeri", void 0);
r([ l(cc.Sprite) ], e.prototype, "sprCaptcha", void 0);
return r([ p ], e);
}(cc.Component);
n.default = f;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupTranfers: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ad5f9XP3mtEer426/J4XmR4", "GUITopupTranfers");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.edbTVN = null;
e.edbReTVN = null;
e.edbAmount = null;
e.edbCaptcha = null;
e.edbAccountInfo = null;
e.sprCaptcha = null;
e.lbFee = null;
e.lbBigReceive = null;
e.scrView = null;
e.transferLayer = null;
e.otpLayer = null;
e.edbOTPVerify = null;
e.listAgency = [];
e.amount = 0;
e._verifyCaptcha = "";
return e;
}
e.prototype.onLoad = function() {
var t = this, e = c.LobbyConst.API.URL + c.LobbyConst.API.LIST_AGENCY;
a.MVUtils.get(e, {}, function(e, n) {
e >= 200 && e < 400 && (t.listAgency = n);
});
};
e.prototype.start = function() {};
e.prototype.loadListAgency = function() {
for (var t = 0; t < this.listAgency.length; t++) {
var e = this.scrView.content.children[t], n = this.listAgency[t];
if (!e) {
e = cc.instantiate(this.scrView.content.children[0]);
this.scrView.content.addChild(e);
}
e.active = !0;
e.getChildByName("lbStt").getComponent(cc.Label).string = t + 1 + "";
e.getChildByName("lbName").getComponent(cc.Label).string = n.StaffName;
e.getChildByName("lbNickName").getComponent(cc.Label).string = n.NickName;
}
};
e.prototype.onClickConfirm = function() {
var t = this;
if ("" != this.edbCaptcha.string && "" != this.edbAccountInfo.string && "" != this.edbCaptcha.string && "" != this.edbAmount.string && "" != this.edbReTVN.string && "" != this.edbTVN.string) if (this.edbReTVN.string == this.edbReTVN.string) {
this._verifyCaptcha = this.sprCaptcha.getComponent("CapchaZ").getCapChaId();
var e = this.edbAccountInfo.string;
this.data = {
accountIdTrans: fzgui.UserManager.instance.mainUserInfo.AccountID,
nickNameTrans: fzgui.UserManager.instance.mainUserInfo.NickName,
transferValue: this.amount,
nickNameRecv: this.edbReTVN.string,
sourceId: a.MVUtils.getPlatform(),
captchaText: this.edbCaptcha.string,
captchaToken: this._verifyCaptcha,
transferType: 0,
reason: e
};
a.MVUtils.post(c.LobbyConst.API.URL + c.LobbyConst.API.REQUEST_TRANSFER, this.data, function(e, n) {
if (e >= 200 && e < 400) {
t.otpLayer.getChildByName("lblUsername").getComponent(cc.Label).string = t.data.nickNameRecv;
t.otpLayer.getChildByName("lblReceiveQuay").getComponent(cc.Label).string = a.MVUtils.formatNumber(t.data.transferValue);
t.otpLayer.getChildByName("lblReason").getComponent(cc.Label).string = t.data.reason;
t.transferLayer.active = !1;
t.otpLayer.active = !0;
t.data.OtpToken = JSON.parse(n).OtpToken;
fzgui.ZLog.log("res ==============" + JSON.stringify(n));
} else {
fzgui.UIPopupManager.instance.showPopup(n);
t.onClickRefreshCaptcha();
}
});
} else fzgui.UIPopupManager.instance.showPopup("Vui lòng nhập tên giống nhau!"); else fzgui.UIPopupManager.instance.showPopup("Vui lòng nhập đủ thông tin!");
};
e.prototype.onClickVerifyOTP = function() {
var t = this;
a.MVUtils.post(c.LobbyConst.API.CHECK_OTP, {
Otp: this.edbOTPVerify.string,
OtpType: 1,
OtpToken: this.data.OtpToken,
ServiceId: 2002
}, function(e, n) {
if (e >= 200 && e < 400) {
fzgui.UIPopupManager.instance.showPopup("Chuyển khoản thành công");
t.transferLayer.active = !0;
t.otpLayer.active = !1;
fzgui.UserManager.instance.mainUserInfo.Money = fzgui.UserManager.instance.mainUserInfo.Money - t.data.transferValue;
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, fzgui.UserManager.instance.mainUserInfo.Money);
} else fzgui.UIPopupManager.instance.showPopup(n);
});
};
e.prototype.onClickRefreshCaptcha = function() {
this.sprCaptcha.node.getComponent("CapchaZ").refreshCapcha();
};
e.prototype.onClickSendOTPSMS = function() {
a.MVUtils.getOtpSMS();
};
e.prototype.onEdbChange = function() {
var t = a.MVUtils.toInt(this.edbAmount.string);
t = Math.abs(t);
this.amount = t;
this.edbAmount.string = a.MVUtils.formatNumber(t);
this.lbFee.string = a.MVUtils.formatNumber(Math.floor(.02 * t));
this.lbBigReceive.string = a.MVUtils.formatNumber(Math.floor(.98 * t));
cc.sys.isBrowser && this.edbAmount.focus();
};
r([ l(cc.EditBox) ], e.prototype, "edbTVN", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbReTVN", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbAmount", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbAccountInfo", void 0);
r([ l(cc.Sprite) ], e.prototype, "sprCaptcha", void 0);
r([ l(cc.Label) ], e.prototype, "lbFee", void 0);
r([ l(cc.Label) ], e.prototype, "lbBigReceive", void 0);
r([ l(cc.ScrollView) ], e.prototype, "scrView", void 0);
r([ l(cc.Node) ], e.prototype, "transferLayer", void 0);
r([ l(cc.Node) ], e.prototype, "otpLayer", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbOTPVerify", void 0);
return r([ p ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUIUpdateDisplayName: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "034b8Kz6f1Gk4jn9VbUoqSY", "GUIUpdateDisplayName");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./MVUtils"), s = t("./utils/CapchaZ"), p = cc._decorator, l = p.ccclass, u = p.property, f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.edbNickName = null;
e.edbCaptcha = null;
e.UICaptcha = null;
return e;
}
e.prototype.onAcceptClicked = function() {
var t = this, e = this.edbNickName.string, n = this.edbCaptcha.string;
if (e.length < 6 || e.length > 18 || e.indexOf(" ") > 0 || e.indexOf("@") > 0 || e === fzgui.UserManager.instance.mainUserInfo.NickName) fzgui.UIPopupManager.instance.showPopup("Tên người chơi phải từ 6 - 18 ký tự, viết liền không dấu, không trùng tên tài khoản, không chứa ký tự đặc biệt!"); else if (0 != n.length) {
var o = {
fullName: this.edbNickName.string,
captcha: this.edbCaptcha.string,
captchaToken: this.UICaptcha.getComponent(s.default).getCapChaId()
};
a.MVUtils.get(c.LobbyConst.API.UPDATE_DISPLAYNAME, o, function(e, n) {
if (e >= 200 && e < 400) {
fzgui.UserManager.instance.mainUserInfo = n;
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_DISPLAYNAME);
fzgui.EventDispatch.instance.emit(c.LobbyConst.EVENT_NAME.SHOW_BANNER_PROMOTION);
t.hide();
} else {
t.onRefreshCaptchaClicked();
fzgui.UIPopupManager.instance.showPopup(n);
}
});
} else fzgui.UIPopupManager.instance.showPopup("Mã xác nhận không đúng");
};
e.prototype.onRefreshCaptchaClicked = function() {
this.UICaptcha.getComponent(s.default).refreshCapcha();
};
r([ u(cc.EditBox) ], e.prototype, "edbNickName", void 0);
r([ u(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
r([ u(cc.Node) ], e.prototype, "UICaptcha", void 0);
return r([ l ], e);
}(fzgui.UIPopup);
n.default = f;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils",
"./utils/CapchaZ": "CapchaZ"
} ],
GUIVipPointCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "db953iQv6BLRaePO5c2mnxj", "GUIVipPointCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = cc._decorator, s = a.ccclass, p = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.giftScrollView = null;
e.giftItemTemplate = null;
e.pnlVpInfo = null;
e.pnlExchange = null;
e.pnlPolicy = null;
e.vpProgressBar = null;
e.edbVP = null;
e.edbOTP = null;
e.lblBonValue = null;
e.lblVipLevel = null;
e.lblNextVipLevel = null;
e.lblCurrentVP = null;
e.lblAccountName = null;
e.lblAccountID = null;
e.lblExVipLevel = null;
e.lblExCurrentVP = null;
e.lblSMSContent = null;
e.btnChinhSach = null;
e.btnGetOtp = null;
e.giftData = [];
e.currentVP = 0;
e.currentLv = 0;
return e;
}
e.prototype.onLoad = function() {
var t = this;
this.getListRanking();
this.initTab(1);
this.initPanelInfo();
this.btnChinhSach.node.on(cc.Node.EventType.TOUCH_END, function() {
t.initTab(1);
});
};
e.prototype.getListRanking = function() {
var t = this, e = c.LobbyConst.API.VIP_POINT_RANK;
fzgui.Https.get(e, function(e) {
if (e) {
cc.log("res: ", e);
t.giftData = e;
t.loadGiftScrollView();
}
});
};
e.prototype.initPanelInfo = function() {
this.getLoyalty();
};
e.prototype.getLoyalty = function() {
var t = fzgui.UserManager.instance.mainUserInfo;
this.lblVipLevel.string = "VIP " + t.Level;
t.Level;
this.currentVP = t.TotalVipPoint;
this.currentLv = t.Level;
this.lblCurrentVP.string = fzgui.StringUtils.formatNumber(this.currentVP);
this.vpProgressBar.progress = t.Level / 10 * .98;
this.lblAccountName.string = fzgui.UserManager.instance.mainUserInfo.NickName;
this.lblAccountID.string = fzgui.UserManager.instance.mainUserInfo.AccountID + "";
this.lblExVipLevel.string = this.lblVipLevel.string;
this.lblExCurrentVP.string = fzgui.StringUtils.formatNumber(this.currentVP);
};
e.prototype.initTab = function(t) {
if (1 == t) {
this.pnlVpInfo.active = !0;
this.pnlPolicy.active = !1;
this.pnlExchange.active = !1;
} else if (2 == t) {
this.edbVP.string = "";
this.lblBonValue.string = "0";
this.edbOTP.string = "";
this.pnlVpInfo.active = !1;
this.pnlPolicy.active = !1;
this.pnlExchange.active = !0;
}
};
e.prototype.onClickBack = function() {
this.initTab(1);
};
e.prototype.touchChinhSach = function() {
this.pnlPolicy.active = !0;
this.pnlExchange.active = !1;
this.pnlVpInfo.active = !1;
};
e.prototype.loadGiftScrollView = function() {
var t = this;
this.giftScrollView.removeAllChildren();
for (var e in this.giftData) {
var n = cc.instantiate(this.giftItemTemplate), o = this.giftData[e].Point, i = this.giftData[e].MinExchangePoint;
n.active = !0;
n.getChildByName("lblVipPoint").getComponent(cc.Label).string = this.formatMoneyKMB(o);
n.getChildByName("lblVip").getComponent(cc.Label).string = e + "";
n.getChildByName("lblBon").getComponent(cc.Label).string = fzgui.StringUtils.formatNumber(i);
if (this.currentVP >= o && i > 0) {
n.getChildByName("btnNhan").getComponent(cc.Button).interactable = !0;
n.getChildByName("btnNhan").on(cc.Node.EventType.TOUCH_END, function() {
t.initTab(2);
});
} else n.getChildByName("btnNhan").getComponent(cc.Button).interactable = !1;
this.giftScrollView.addChild(n);
}
};
e.prototype.formatMoneyKMB = function(t) {
var e = 1;
e = Math.pow(10, e);
for (var n = [ "K", "M", "B", "T" ], o = n.length - 1; o >= 0; o--) {
var i = Math.pow(10, 3 * (o + 1));
if (i <= t) {
if (1e3 == (t = Math.round(t * e / i) / e) && o < n.length - 1) {
t = 1;
o++;
}
t += n[o];
break;
}
}
return t;
};
e.prototype.getOtp = function() {
this.btnGetOtp.interactable = !1;
this.btnGetOtp.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
c.LobbyConst.timerSMS--;
if (c.LobbyConst.timerSMS <= 0) {
this.btnGetOtp.interactable = !0;
this.lblSMSContent.string = "SMS";
c.LobbyConst.timerSMS = 30;
this.btnGetOtp.node.stopAllActions();
} else this.lblSMSContent.string = c.LobbyConst.timerSMS;
}, this)).repeatForever());
var t = c.LobbyConst.API.GET_OTP_SMS;
fzgui.Https.get(t, function(t) {
if (cc.js.isNumber(t)) {
fzgui.UIPopupManager.instance.showPopup("Hệ thống đã gửi mã OTP đến số điện thoại của bạn");
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, t);
} else fzgui.UIPopupManager.instance.showPopup(t);
});
};
e.prototype.onExchange = function() {
var t = this, e = this.edbOTP.string.trim(), n = this.toNumber(this.edbVP.string);
if (0 != e.length) if (n > this.currentVP) fzgui.UIPopupManager.instance.showPopup("Bạn không đủ vip point để đổi"); else if (this.currentLv < 1) fzgui.UIPopupManager.instance.showPopup("Bạn không cấp vip để đổi"); else {
fzgui.UIWaitingLayout.showWaiting();
var o = c.getStringBodyByObject({
vipPoint: n,
otpType: 1,
otp: e,
token: fzgui.UserManager.instance.mainUserInfo.GameToken
}), i = c.LobbyConst.API.VIP_POINT_TRADE + o, r = cc.loader.getXMLHttpRequest();
r.onreadystatechange = function() {
fzgui.UIWaitingLayout.hideWaiting();
if (4 == r.readyState) if (200 == r.status) {
var e = JSON.parse(r.responseText);
cc.log("onExchange: ", e);
if (e.Balance > 0) {
fzgui.UserManager.instance.mainUserInfo.TotalVipPoint = e.VipPointCurrent;
fzgui.UserManager.instance.mainUserInfo.Money = e.Balance;
t.lblExCurrentVP.string = e.VipPointCurrent;
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, e.Balance);
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_VIPPOINT, e.VipPointCurrent);
fzgui.UIPopupManager.instance.showPopup("Đổi vip point thành công \nBạn nhận được " + t.lblBonValue.string + "Coin");
t.edbVP.string = "0";
t.lblBonValue.string = "0";
} else -5 == e.Balance ? fzgui.UIPopupManager.instance.showPopup("Chưa đủ hạng") : -15 == e.Balance ? fzgui.UIPopupManager.instance.showPopup("Số điểm đổi thưởng vượt quá số điểm có") : -35 == e.Balance && fzgui.UIPopupManager.instance.showPopup("Quỹ tri ân hết tiền");
} else r.responseText.length > 0 ? fzgui.UIPopupManager.instance.showPopup(r.responseText) : fzgui.UIPopupManager.instance.showPopup("Đổi vip point không thành công");
};
r.ontimeout = function() {
fzgui.UIWaitingLayout.hideWaiting();
fzgui.UIPopupManager.instance.showPopup("Đổi vip point không thành công");
};
r.onerror = function() {
fzgui.UIWaitingLayout.hideWaiting();
fzgui.UIPopupManager.instance.showPopup("Đổi vip point không thành công");
};
r.timeout = 3e4;
r.open("GET", i, !0);
r.setRequestHeader("Content-Type", "application/json");
r.withCredentials = !0;
r.send();
} else fzgui.UIPopupManager.instance.showPopup("Bạn chưa nhập mã OTP!");
};
e.prototype.toNumber = function(t) {
if (t.indexOf(".") >= 0) {
for (var e = t; e.indexOf(".") >= 0; ) e = e.replace(".", "");
return parseInt(e);
}
return parseInt(t);
};
e.prototype.onEditChipValueChange = function(t) {
if (this.currentLv < 1 || "" == t) this.lblBonValue.string = "0"; else {
cc.log("onEditChipValueChange", t);
var e = this.toNumber(t);
this.lblBonValue.string = e * this.giftData[this.currentLv].MinExchangePoint + "";
}
};
r([ p(cc.Node) ], e.prototype, "giftScrollView", void 0);
r([ p(cc.Node) ], e.prototype, "giftItemTemplate", void 0);
r([ p(cc.Node) ], e.prototype, "pnlVpInfo", void 0);
r([ p(cc.Node) ], e.prototype, "pnlExchange", void 0);
r([ p(cc.Node) ], e.prototype, "pnlPolicy", void 0);
r([ p(cc.ProgressBar) ], e.prototype, "vpProgressBar", void 0);
r([ p(cc.EditBox) ], e.prototype, "edbVP", void 0);
r([ p(cc.EditBox) ], e.prototype, "edbOTP", void 0);
r([ p(cc.Label) ], e.prototype, "lblBonValue", void 0);
r([ p(cc.Label) ], e.prototype, "lblVipLevel", void 0);
r([ p(cc.Label) ], e.prototype, "lblNextVipLevel", void 0);
r([ p(cc.Label) ], e.prototype, "lblCurrentVP", void 0);
r([ p(cc.Label) ], e.prototype, "lblAccountName", void 0);
r([ p(cc.Label) ], e.prototype, "lblAccountID", void 0);
r([ p(cc.Label) ], e.prototype, "lblExVipLevel", void 0);
r([ p(cc.Label) ], e.prototype, "lblExCurrentVP", void 0);
r([ p(cc.Label) ], e.prototype, "lblSMSContent", void 0);
r([ p(cc.Button) ], e.prototype, "btnChinhSach", void 0);
r([ p(cc.Button) ], e.prototype, "btnGetOtp", void 0);
return r([ s ], e);
}(fzgui.UIPopup);
n.default = l;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst"
} ],
GateJackpotNoti: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "367a3lByDhFzIpqOJuHzIje", "GateJackpotNoti");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbNameNick = null;
e.lbGameName = null;
e.lbMoneyWin = null;
e.lbTime = null;
e.timeSche = null;
return e;
}
e.prototype.showJackpot = function(t, e) {
var n = this;
void 0 === e && (e = 5);
this.lbNameNick.string = t.NickName;
this.lbGameName.string = t.GameName;
this.lbMoneyWin.string = fzgui.StringUtils.formatNumber(t.JackpotValue);
cc.Tween.stopAllByTarget(this.node);
cc.tween(this.node).set({
x: 0,
y: -200
}).to(1, {
x: 0,
y: 0
}, {
easing: cc.easing.backOut
}).delay(e).to(1, {
y: cc.winSize.height / 2 + 500
}, {
easing: cc.easing.backIn
}).call(function() {
n.node.active = !1;
}).start();
this.unschedule(this.timeSche);
this.lbTime.string = e.toString();
this.schedule(this.timeSche = function() {
e--;
n.lbTime.string = e.toString();
}, 1, e + 2);
};
e.prototype.hideJackpot = function() {};
e.prototype.onClickXinLoc = function() {};
r([ s(cc.Label) ], e.prototype, "lbNameNick", void 0);
r([ s(cc.Label) ], e.prototype, "lbGameName", void 0);
r([ s(cc.Label) ], e.prototype, "lbMoneyWin", void 0);
r([ s(cc.Label) ], e.prototype, "lbTime", void 0);
return r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
HeaderAccountCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "096b2vP0exLPLpcCyZGPD5R", "HeaderAccountCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./utils/Lobby_UINumericLabelHelper"), a = cc._decorator, s = a.ccclass, p = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbNickName = null;
e.lbGold = null;
e.lbVippoint = null;
return e;
}
e.prototype.onEnable = function() {
fzgui.EventDispatch.instance.add(fzgui.EVENT_GAMECORE.UPDATE_DISPLAYNAME, this.onUpdateInfo, this);
fzgui.EventDispatch.instance.add(fzgui.EVENT_GAMECORE.UPDATE_GOLD, this.onUpdateGold, this);
fzgui.EventDispatch.instance.add(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, this.onUpdateTotalGold, this);
fzgui.EventDispatch.instance.add(fzgui.EVENT_GAMECORE.UPDATE_VIPPOINT, this.onUpDateVipPoint, this);
};
e.prototype.onDisable = function() {
fzgui.EventDispatch.instance.remove(fzgui.EVENT_GAMECORE.UPDATE_DISPLAYNAME, this.onUpdateInfo, this);
fzgui.EventDispatch.instance.remove(fzgui.EVENT_GAMECORE.UPDATE_GOLD, this.onUpdateGold, this);
fzgui.EventDispatch.instance.remove(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, this.onUpdateTotalGold, this);
fzgui.EventDispatch.instance.remove(fzgui.EVENT_GAMECORE.UPDATE_VIPPOINT, this.onUpDateVipPoint, this);
};
e.prototype.onUpdateTotalGold = function(t) {
fzgui.UserManager.instance.mainUserInfo.Money = t;
this.lbGold.scheduleProgress(t, .5);
};
e.prototype.onUpdateGold = function() {
var t = fzgui.UserManager.instance.mainUserInfo.Money;
this.lbGold.scheduleProgress(t, .5);
};
e.prototype.onUpDateVipPoint = function() {
var t = fzgui.UserManager.instance.mainUserInfo.TotalVipPoint;
this.lbVippoint.scheduleProgress(t, .5);
};
e.prototype.onUpdateInfo = function() {
fzgui.ZLog.log("onUpdateInfo ===" + JSON.stringify(fzgui.UserManager.instance.mainUserInfo));
var t = fzgui.UserManager.instance.mainUserInfo.Money, e = fzgui.UserManager.instance.mainUserInfo.TotalVipPoint;
this.lbNickName.string = fzgui.UserManager.instance.mainUserInfo.NickName;
this.lbGold.scheduleProgress(t, .5);
this.lbVippoint.scheduleProgress(e, .5);
};
e.prototype.onTestUpdateGold = function() {
fzgui.ZLog.log("onTestUpdateGold===>");
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, 1e6);
};
r([ p(cc.Label) ], e.prototype, "lbNickName", void 0);
r([ p(c.default) ], e.prototype, "lbGold", void 0);
r([ p(c.default) ], e.prototype, "lbVippoint", void 0);
return r([ s ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {
"./utils/Lobby_UINumericLabelHelper": "Lobby_UINumericLabelHelper"
} ],
HeaderCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "1a51eW1XyhOt6qP45H4JoA1", "HeaderCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nAccount = null;
e.nLogin = null;
return e;
}
e.prototype.onEnable = function() {
fzgui.ZLog.log("HeaderCtrl ===================" + fzgui.GameCoreManager.instance.isLoginSuccess);
this.nAccount.active = fzgui.GameCoreManager.instance.isLoginSuccess;
this.nLogin.active = !fzgui.GameCoreManager.instance.isLoginSuccess;
fzgui.EventDispatch.instance.add(fzgui.EVENT_GAMECORE.LOGIN_SUCCESS, this.onLoginSucess, this);
fzgui.EventDispatch.instance.add(fzgui.EVENT_GAMECORE.LOGOUT, this.onLogout, this);
};
e.prototype.onDisable = function() {
fzgui.EventDispatch.instance.remove(fzgui.EVENT_GAMECORE.LOGIN_SUCCESS, this.onLoginSucess, this);
fzgui.EventDispatch.instance.remove(fzgui.EVENT_GAMECORE.LOGOUT, this.onLogout, this);
};
e.prototype.onLoginSucess = function() {
this.nAccount.active = !0;
this.nLogin.active = !1;
};
e.prototype.onLogout = function() {
this.nAccount.active = !1;
this.nLogin.active = !0;
};
e.prototype.onLogoutClicked = function() {
var t = [ fzgui.PopupAction.make("OK", function() {
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.LOGOUT);
}), fzgui.PopupAction.make("CLOSE", function() {}) ];
fzgui.UIPopupManager.instance.showPopup("Bạn có chắc chắn muốn thoát khỏi trò chơi?", t);
};
r([ s(cc.Node) ], e.prototype, "nAccount", void 0);
r([ s(cc.Node) ], e.prototype, "nLogin", void 0);
return r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
IconBanCa: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "49b12s81Z9HvaYra2eUWGet", "IconBanCa");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./BundleSceneGame"), a = cc._decorator, s = a.ccclass, p = (a.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ s ], e);
}(c.default));
n.default = p;
cc._RF.pop();
}, {
"./BundleSceneGame": "BundleSceneGame"
} ],
IconGameCards: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "9fb32GKVtVMTYPocjcqbe5Q", "IconGameCards");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./BundleSceneGame"), a = cc._decorator, s = a.ccclass, p = (a.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onFuturePrefabLoadDone = function(t) {
fzgui.GameCoreManager.instance.setGameID(this.gameID);
fzgui.UIScreenManager.instance.pushScreen(t);
};
return r([ s ], e);
}(c.default));
n.default = p;
cc._RF.pop();
}, {
"./BundleSceneGame": "BundleSceneGame"
} ],
IconMiniET: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "9dbbaOmtCBEEo1Nr7mykhND", "IconMiniET");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./BundleMiniGame"), a = cc._decorator, s = a.ccclass, p = (a.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ s ], e);
}(c.default));
n.default = p;
cc._RF.pop();
}, {
"./BundleMiniGame": "BundleMiniGame"
} ],
IconMiniLarva: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "23459uK3jFK1Y5LvgHQwb4V", "IconMiniLarva");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./BundleMiniGame"), a = cc._decorator, s = a.ccclass, p = (a.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ s ], e);
}(c.default));
n.default = p;
cc._RF.pop();
}, {
"./BundleMiniGame": "BundleMiniGame"
} ],
IconMiniPoker: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "95b79PfFo9Fc6If94sDzKYo", "IconMiniPoker");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./BundleMiniGame"), a = cc._decorator, s = a.ccclass, p = (a.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ s ], e);
}(c.default));
n.default = p;
cc._RF.pop();
}, {
"./BundleMiniGame": "BundleMiniGame"
} ],
IconMiniTaiXiu: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ff069evfzhDJK5I8Yp0OMyo", "IconMiniTaiXiu");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./BundleMiniGame"), a = cc._decorator, s = a.ccclass, p = (a.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ s ], e);
}(c.default));
n.default = p;
cc._RF.pop();
}, {
"./BundleMiniGame": "BundleMiniGame"
} ],
IconMiniTomCuaCa: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "67e00FaupRPvIof7YcGKiTO", "IconMiniTomCuaCa");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./BundleMiniGame"), a = cc._decorator, s = a.ccclass, p = (a.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ s ], e);
}(c.default));
n.default = p;
cc._RF.pop();
}, {
"./BundleMiniGame": "BundleMiniGame"
} ],
IconSlotLienMinh: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "eadee6RpWZJMYm04231DQSs", "IconSlotLienMinh");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./BundleSceneGame"), a = cc._decorator, s = a.ccclass, p = (a.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ s ], e);
}(c.default));
n.default = p;
cc._RF.pop();
}, {
"./BundleSceneGame": "BundleSceneGame"
} ],
IconSlotLongVuong: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "9cb3f6KXJdKg77zsTQkW/R9", "IconSlotLongVuong");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./BundleSceneGame"), a = cc._decorator, s = a.ccclass, p = (a.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ s ], e);
}(c.default));
n.default = p;
cc._RF.pop();
}, {
"./BundleSceneGame": "BundleSceneGame"
} ],
IconSlotRungRam: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "2fce6ixljdB3rECxj/egPxQ", "IconSlotRungRam");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./BundleSceneGame"), a = cc._decorator, s = a.ccclass, p = (a.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ s ], e);
}(c.default));
n.default = p;
cc._RF.pop();
}, {
"./BundleSceneGame": "BundleSceneGame"
} ],
IconSlotTayDuKy: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ec7777XqqZCtbLo5gl4TIO3", "IconSlotTayDuKy");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./BundleSceneGame"), a = cc._decorator, s = a.ccclass, p = (a.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ s ], e);
}(c.default));
n.default = p;
cc._RF.pop();
}, {
"./BundleSceneGame": "BundleSceneGame"
} ],
IconSlotThienDia: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "14cca5yiadD4IUSEQ4ODXz8", "IconSlotThienDia");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./BundleMiniGame"), a = cc._decorator, s = a.ccclass, p = (a.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ s ], e);
}(c.default));
n.default = p;
cc._RF.pop();
}, {
"./BundleMiniGame": "BundleMiniGame"
} ],
ItemMail: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6ee50OxiEBBh5EcEWrRQnEV", "ItemMail");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./GUIAccountMail"), s = t("./MVUtils"), p = cc._decorator, l = p.ccclass, u = p.property, f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbTitle = null;
e.btnXoaMail = null;
e.lbTime = null;
e.lbNew = null;
e.idMail = -1;
e.mailType = null;
e.link = null;
e.giftcode = !1;
return e;
}
e.prototype.onLoad = function() {
var t = this;
this.node.on(cc.Node.EventType.TOUCH_END, function() {
t.readMail(t.idMail);
});
};
e.prototype.readMail = function(t) {
var e = this, n = {
Type: 2,
MailID: t
};
s.MVUtils.post(c.LobbyConst.API.READ_MAIL, n, function(t, n) {
t >= 200 && t < 400 ? 1 == n.ResponseCode ? e.lbNew.node.active = !1 : fzgui.UIPopupManager.instance.showPopup(n.Message) : fzgui.UIPopupManager.instance.showPopup(n);
});
};
e.prototype.onBtnXoaMail = function(t, e) {
s.MVUtils.post(c.LobbyConst.API.DEL_MAIL, {
Type: -1,
MailID: e
}, function(t, e) {
if (t >= 200 && t < 400) {
fzgui.UITextManager.showCenterNotification("Xóa thành công!");
a.default.instance.requestMail();
} else fzgui.UIPopupManager.instance.showPopup(e);
});
};
e.prototype.initData = function(t) {
this.idMail = t.ID;
this.mailType = t.Type;
1 == t.Status ? this.lbNew.node.active = !0 : this.lbNew.node.active = !1;
this.lbTitle.string = t.Title;
this.lbTime.string = s.MVUtils.formatDateTime(t.CreatedTime);
};
e.prototype.onClickMailDetail = function(t, e) {
a.default.instance.mailList.active = !1;
a.default.instance.mailDetail.active = !0;
a.default.instance.initMailContent(e);
};
r([ u(cc.Label) ], e.prototype, "lbTitle", void 0);
r([ u(cc.Button) ], e.prototype, "btnXoaMail", void 0);
r([ u(cc.Label) ], e.prototype, "lbTime", void 0);
r([ u(cc.Sprite) ], e.prototype, "lbNew", void 0);
return r([ l ], e);
}(cc.Component);
n.default = f;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./GUIAccountMail": "GUIAccountMail",
"./MVUtils": "MVUtils"
} ],
ItemTopJackpotCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "c7e213v/PZHe6KcAMZ6T63a", "ItemTopJackpotCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./utils/Lobby_UINumericLabelHelper"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbJackpot = null;
e.lbGameName = null;
e.spIcon = null;
e.nSuKien = null;
e.iconRungRam = null;
e.iconLienMinh = null;
e.iconTayDuKy = null;
e.iconLongVuong = null;
e.iconET = null;
e.iconLarva = null;
e.iconMiniPoker = null;
e.m_IdGame = -1;
return e;
}
e.prototype.updateGoldJackpot = function(t) {
this.lbJackpot.scheduleProgress(t, .5);
};
e.prototype.setData = function(t, e) {
if (t) {
this.nSuKien.active = -1 != c.LobbyConst.listEventByDay.indexOf(t.gameID);
var n = t.gameID;
this.m_IdGame = n;
switch (n) {
case c.GAME_IDS.LIENMINH:
this.lbGameName.string = "Liên Minh";
this.spIcon.spriteFrame = this.iconLienMinh;
this.updateGoldJackpot(e);
break;

case c.GAME_IDS.RUNGRAM:
this.lbGameName.string = "Rừng Rậm";
this.spIcon.spriteFrame = this.iconRungRam;
this.updateGoldJackpot(e);
break;

case c.GAME_IDS.TAYDUKY:
this.lbGameName.string = "Tây Du Ký";
this.spIcon.spriteFrame = this.iconTayDuKy;
this.updateGoldJackpot(e);
break;

case c.GAME_IDS.LONGVUONG:
this.lbGameName.string = "Long Vương";
this.spIcon.spriteFrame = this.iconLongVuong;
this.updateGoldJackpot(e);
break;

case c.GAME_IDS.ET:
this.lbGameName.string = "ET";
this.spIcon.spriteFrame = this.iconET;
this.updateGoldJackpot(e);
break;

case c.GAME_IDS.LARVA:
this.lbGameName.string = "Larva";
this.spIcon.spriteFrame = this.iconLarva;
this.updateGoldJackpot(e);
break;

case c.GAME_IDS.MINIPOKER:
this.lbGameName.string = "MiniPoker";
this.spIcon.spriteFrame = this.iconMiniPoker;
this.updateGoldJackpot(e);
}
}
};
e.prototype.onShowGameClicked = function() {
fzgui.EventDispatch.instance.emit(c.LobbyConst.EVENT_NAME.BUNDLE_DOWNLOAD_FROM_ITEM_JACKPOT, this.m_IdGame);
};
r([ l(a.default) ], e.prototype, "lbJackpot", void 0);
r([ l(cc.Label) ], e.prototype, "lbGameName", void 0);
r([ l(cc.Sprite) ], e.prototype, "spIcon", void 0);
r([ l(cc.Node) ], e.prototype, "nSuKien", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "iconRungRam", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "iconLienMinh", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "iconTayDuKy", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "iconLongVuong", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "iconET", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "iconLarva", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "iconMiniPoker", void 0);
return r([ p ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./utils/Lobby_UINumericLabelHelper": "Lobby_UINumericLabelHelper"
} ],
JackpotBySlotCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "44997m/iLpMhYzy9a4OvCNb", "JackpotBySlotCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./utils/Lobby_UINumericLabelHelper"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.gameID = c.GAME_IDS.NONE;
e.lbJackpot1 = null;
e.lbJackpot2 = null;
e.lbJackpot3 = null;
e.nSuKien = null;
return e;
}
e.prototype.onEnable = function() {
this.nSuKien.active = -1 != c.LobbyConst.listEventByDay.indexOf(this.gameID);
fzgui.EventDispatch.instance.add(c.LobbyConst.EVENT_NAME.EVENT_UPDATE_JACKPOT, this.updateJackpot, this);
};
e.prototype.onDisable = function() {
fzgui.EventDispatch.instance.remove(c.LobbyConst.EVENT_NAME.EVENT_UPDATE_JACKPOT, this.updateJackpot, this);
};
e.prototype.updateJackpot = function() {
var t, e = this;
c.LobbyConst.slotByKeys.forEach(function(n, o) {
o != e.gameID || (t = n);
});
if (t) for (var n = 0; n < t.length; n++) 2 == n ? this.lbJackpot3 && this.lbJackpot3.scheduleProgress(t[n], 1) : 1 == n ? this.lbJackpot2 && this.lbJackpot2.scheduleProgress(t[n], .8) : this.lbJackpot1 && this.lbJackpot1.scheduleProgress(t[n], .6);
};
r([ l({
type: cc.Enum(c.GAME_IDS)
}) ], e.prototype, "gameID", void 0);
r([ l(a.default) ], e.prototype, "lbJackpot1", void 0);
r([ l(a.default) ], e.prototype, "lbJackpot2", void 0);
r([ l(a.default) ], e.prototype, "lbJackpot3", void 0);
r([ l(cc.Node) ], e.prototype, "nSuKien", void 0);
return r([ p ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./utils/Lobby_UINumericLabelHelper": "Lobby_UINumericLabelHelper"
} ],
LobbAudioDefined: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "590f2JSWmRPELkqE/Ra6jXp", "LobbAudioDefined");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.music_bgm = null;
return e;
}
n = e;
Object.defineProperty(e, "instance", {
get: function() {
n._instance || (n._instance = new n());
return n._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
n._instance = this;
};
var n;
e._instance = null;
r([ s(cc.AudioClip) ], e.prototype, "music_bgm", void 0);
return n = r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
LobbyBundleDownload: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "3e09fLZ58REFKs/KqlY5fCE", "LobbyBundleDownload");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.linkUrl = "";
e.bundleName = "";
e.prefabMainNameURL = "";
e.prgLoadGame = null;
e.lbMsg = null;
e.isClicked = !0;
return e;
}
r([ s(cc.String) ], e.prototype, "linkUrl", void 0);
r([ s(cc.String) ], e.prototype, "bundleName", void 0);
r([ s(cc.String) ], e.prototype, "prefabMainNameURL", void 0);
r([ s(cc.ProgressBar) ], e.prototype, "prgLoadGame", void 0);
r([ s(cc.Label) ], e.prototype, "lbMsg", void 0);
r([ s(cc.Boolean) ], e.prototype, "isClicked", void 0);
return r([ a ], e);
}(fzgui.BundleDownLoad);
n.default = p;
cc._RF.pop();
}, {} ],
LobbyConst: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6b25cz4Ct5PVrB3sRlPhBbp", "LobbyConst");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.getStringBodyByObject = n.GAME_IDS = n.LobbyConst = n.Platform = void 0;
var o;
(function(t) {
t[t.INVALID = 0] = "INVALID";
t[t.ANDROID = 1] = "ANDROID";
t[t.WINDOWS = 2] = "WINDOWS";
t[t.IOS = 3] = "IOS";
t[t.WEB = 4] = "WEB";
t[t.MAC = 5] = "MAC";
})(o = n.Platform || (n.Platform = {}));
var i = function() {
function t() {}
Object.defineProperty(t, "platform", {
get: function() {
var t = o.INVALID;
cc.sys.isBrowser ? t = o.WEB : cc.sys.os == cc.sys.OS_ANDROID ? t = o.ANDROID : cc.sys.os == cc.sys.OS_IOS ? t = o.IOS : cc.sys.os == cc.sys.OS_WINDOWS ? t = o.WINDOWS : cc.sys.os == cc.sys.OS_OSX ? t = o.MAC : fzgui.ZLog.log("Unsupport platform");
return t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t, "OSName", {
get: function() {
return cc.sys.isBrowser ? "web" : cc.sys.os == cc.sys.OS_ANDROID ? "android" : cc.sys.os == cc.sys.OS_OSX || cc.sys.os == cc.sys.OS_IOS ? "ios" : void 0;
},
enumerable: !1,
configurable: !0
});
t.BUILD_VERSION = "v_23_23072021_";
t.usernameRegEx = /^(?:[A-Za-z0-9_.@]{6,32})$/;
t.passwordRegEx = /^(?:[A-Za-z0-9~!@#$%^&*()_+`\-=\[\]{};':"\\|,.<>\/?]{6,35})$/;
t.slotByKeys = new Map();
t.listEventByDay = [];
t.timerSMS = 30;
t.MERCHANT_GIFTCODE = {
ID: 100011,
KEY: "123456"
};
t.API = {
LOGIN: "https://api.banghe.xyz/Authen/login",
REGISTRY: "https://api.banghe.xyz/Authen/Register",
GET_INFO_ACCOUNT: "https://api.banghe.xyz/Account/getLoyalty",
UPDATE_DISPLAYNAME: "https://api.banghe.xyz/Account/UpdateUserFullName",
CHANGE_PASS: "https://api.banghe.xyz/Account/ChangePass",
CHECK_OTP: "https://api.banghe.xyz/Privacy/VerifyOTP",
GET_INFO_OTP: "https://api.banghe.xyz/Account/GetInfo?",
REGISTER_OTP: "https://api.banghe.xyz/Account/RegisterOTP",
DELETE_MOBILE: "https://api.banghe.xyz/Account/deleteMobile",
UPDATE_MOBILE: "https://api.banghe.xyz/Account/updateMobile",
REG_MOBILE: "https://api.banghe.xyz/Account/registerOTP",
GET_OTP_SMS: "https://api.banghe.xyz/Account/getOTPSMS",
GET_OTP_TRANFER: "https://api.banghe.xyz/Account/getOTPSMSTranfer",
GET_FROZEB: "https://api.banghe.xyz/Account/getFrozen?",
FROZEB: "https://api.banghe.xyz/Account/frozen",
GIFT_CODE: "https://api.banghe.xyz/Account/GiftCode",
LOGIN_VIP_CODE: "https://api.banghe.xyz/Account/LoginVipcode",
VIP_POINT_TRADE: "https://api.banghe.xyz/Account/VipPointTrade",
VIP_POINT_RANK: "https://api.banghe.xyz/Account/getRankingVip",
CAST_OUT: "https://api.banghe.xyz/MoneyChange/TransferCashout",
DELETE_PHONE: "https://api.banghe.xyz/Account/deleteMobile",
URL: "https://api.banghe.xyz/",
LIST_BANK: "MoneyChange/GetListBank",
REQUEST_PAYMENT: "MoneyChange/BankRequestPayment",
RATE_CARD: "MoneyChange/GetChargeRate",
REQUEST_CASH_IN: "MoneyChange/rechargecard",
CARD_TYPE: "MoneyChange/GetCardTypes",
LIST_AGENCY: "Agency/GetAgencies",
REQUEST_TRANSFER: "MoneyChange/Transfer",
MOMO_INFO: "MoneyChange/MomoGetAccount",
LIST_HISTORY: "MoneyChange/chargingHistory",
LIST_HISTORY_ALLGAME: "MoneyChange/getTransactionLogs",
GET_UNREAD_MAIL: "https://api.banghe.xyz/Mail/MailUnRead",
GET_LIST_MAIL: "https://api.banghe.xyz/Mail/GetUserMail",
READ_MAIL: "https://api.banghe.xyz/Mail/UpdateStatus",
DEL_MAIL: "https://api.banghe.xyz/Mail/UpdateStatus",
MUA_THE: "https://api.banghe.xyz/MoneyChange/muaThe"
};
t.EVENT_NAME = {
BUNDLEMINI_DOWNLOAD_SUCCESS: "BUNDLEMINI_DOWNLOAD_SUCCESS",
BUNDLE_DOWNLOAD_FROM_ITEM_JACKPOT: "BUNDLE_DOWNLOAD_FROM_ITEM_JACKPOT",
EVENT_UPDATE_JACKPOT: "EVENT_UPDATE_JACKPOT",
CHANGE_TAB_UI: "CHANGE_TAB_UI",
GET_LIST_MAIL: "GET_LIST_MAIL",
GET_DETAIL_MAIL: "GET_DETAIL_MAIL",
EVENT_DETAIL_MAIL: "notify_detail_mail",
USER_MAIL: "UserMail",
NEW_MAIL: "notifyNewMail",
COUNT_MAIL_MAIN: "count_mail0",
SHOW_BANNER_PROMOTION: "SHOW_BANNER_PROMOTION",
REQUEST_EVENT_RANK: "REQUEST_EVENT_RANK"
};
t.SETTING_ID = {
SMSPLUS_REGISTER_TYPE: 1,
SMSPLUS_DEL_OTP_TYPE: 3,
SMSPLUS_INFO: 1,
SMSPLUS_REGISTER: 2,
SMSPLUS_DEL_PHONE: 5,
FROZEN: 1,
UNFROZEN: 2,
GIFT_CODE: 1,
VIP_CODE: 2,
OTP: 3
};
t.StringDefine = {
INPUT_GIFT_CODE: "Vui lòng nhập GiftCode",
INPUT_VIP_CODE: "Vui lòng nhập VipCode",
INPUT_OTP: "Vui lòng nhập mã OTP",
STR_NETWORK_ERROR: "Mạng không ổn định, hãy kiểm tra Wifi hoặc 3G của bạn."
};
return t;
}();
n.LobbyConst = i;
(function(t) {
t[t.NONE = -1] = "NONE";
t[t.TAYDUKY = 101] = "TAYDUKY";
t[t.LONGVUONG = 103] = "LONGVUONG";
t[t.LARVA = 105] = "LARVA";
t[t.ET = 115] = "ET";
t[t.RUNGRAM = 106] = "RUNGRAM";
t[t.MINIPOKER = 41] = "MINIPOKER";
t[t.LIENMINH = 999] = "LIENMINH";
t[t.BA_CAY = 102] = "BA_CAY";
t[t.TIEN_LEN_MN = 71] = "TIEN_LEN_MN";
t[t.TIEN_LEN_MN_SOLO = 100] = "TIEN_LEN_MN_SOLO";
t[t.MAU_BINH = 7] = "MAU_BINH";
t[t.THIEN_DIA = 1001] = "THIEN_DIA";
})(n.GAME_IDS || (n.GAME_IDS = {}));
n.getStringBodyByObject = function(t) {
if (!t) return "";
var e = [];
for (var n in t) e.push(n + "=" + encodeURIComponent(t[n]));
return "?" + e.join("&");
};
cc._RF.pop();
}, {} ],
LobbyCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "a3832nwcBdNMKefpx7BqvfH", "LobbyCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./BannerPromotion"), s = t("./network/NetworkPortal"), p = t("./network/NotificationNetworkHandle"), l = cc._decorator, u = l.ccclass, f = l.property, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prfUpdateDisplayName = null;
e.prefabOTP = null;
e.nWidgetIcon = null;
e.PreBannerPromotion = null;
e.listEventByDay = [];
return e;
}
e.prototype.start = function() {};
e.prototype.getGameEventByDay = function() {
var t = new Date(), e = new Array(7);
e[0] = "Sunday";
e[1] = "Monday";
e[2] = "Tuesday";
e[3] = "Wednesday";
e[4] = "Thursday";
e[5] = "Friday";
e[6] = "Saturday";
var n = [];
switch (e[t.getDay()]) {
case "Monday":
this.listEventByDay = n.concat(c.GAME_IDS.ET);
break;

case "Tuesday":
this.listEventByDay = n.concat(c.GAME_IDS.LARVA);
break;

case "Wednesday":
this.listEventByDay = n.concat(c.GAME_IDS.LIENMINH);
break;

case "Thursday":
this.listEventByDay = n.concat(c.GAME_IDS.LONGVUONG);
break;

case "Friday":
this.listEventByDay = n.concat(c.GAME_IDS.MINIPOKER);
break;

case "Saturday":
this.listEventByDay = n.concat(c.GAME_IDS.RUNGRAM);
break;

case "Sunday":
this.listEventByDay = n.concat(c.GAME_IDS.TAYDUKY);
}
c.LobbyConst.listEventByDay = this.listEventByDay;
};
e.prototype.onEnable = function() {
fzgui.EventDispatch.instance.add(fzgui.EVENT_GAMECORE.LOGIN_SUCCESS, this.onLoginSuccess, this);
fzgui.EventDispatch.instance.add(c.LobbyConst.EVENT_NAME.SHOW_BANNER_PROMOTION, this.loadBannerPromotion, this);
this._addGUIOTP();
this._addWidgetIcon();
this.getGameEventByDay();
cc.Canvas.instance.getComponent(p.default) || cc.Canvas.instance.addComponent(p.default).connect();
};
e.prototype.loadBannerPromotion = function() {
fzgui.UIPopupManager.instance.has(a.default) || fzgui.UIPopupManager.instance.showPopupFromPrefab(this.PreBannerPromotion);
};
e.prototype._addWidgetIcon = function() {
if (!fzgui.GameCoreManager.instance.nMiniGames.getChildByName("nWidgetIcon")) {
var t = cc.instantiate(this.nWidgetIcon);
t.name = "nWidgetIcon";
fzgui.GameCoreManager.instance.nMiniGames.addChild(t);
}
};
e.prototype._addGUIOTP = function() {
var t = {
namePrefab: "GUI_OTP",
prfDefined: this.prefabOTP
};
fzgui.CommonAssetDefined.instance.listPrefabDefined.push(t);
};
e.prototype.onDisable = function() {
fzgui.EventDispatch.instance.remove(fzgui.EVENT_GAMECORE.LOGIN_SUCCESS, this.onLoginSuccess, this);
};
e.prototype.onLoginSuccess = function() {
null != fzgui.UserManager.instance.mainUserInfo.NickName && "" != fzgui.UserManager.instance.mainUserInfo.NickName || fzgui.UIPopupManager.instance.showPopupFromPrefab(this.prfUpdateDisplayName);
var t = cc.Canvas.instance.getComponent(s.default);
t ? t.connect() : cc.Canvas.instance.addComponent(s.default).connect();
};
e.prototype.onBtnCheat = function() {
fzgui.GameCoreManager.instance.updateTotalGold(123123123);
};
r([ f(cc.Prefab) ], e.prototype, "prfUpdateDisplayName", void 0);
r([ f(cc.Prefab) ], e.prototype, "prefabOTP", void 0);
r([ f(cc.Prefab) ], e.prototype, "nWidgetIcon", void 0);
r([ f(cc.Prefab) ], e.prototype, "PreBannerPromotion", void 0);
return r([ u ], e);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./BannerPromotion": "BannerPromotion",
"./network/NetworkPortal": "NetworkPortal",
"./network/NotificationNetworkHandle": "NotificationNetworkHandle"
} ],
Lobby_MiniGameNavigator: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "17186JZy8dBJp0coDZ023Kr", "Lobby_MiniGameNavigator");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../../LobbyConst"), a = cc._decorator, s = a.ccclass, p = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nBg = null;
return e;
}
e.prototype.start = function() {
this.nBg.opacity = 255;
this.nBg.scale = 0;
var t = cc.spawn(cc.scaleTo(.24, 1), cc.rotateBy(.5, 360));
this.nBg.runAction(t);
};
e.prototype.onEnable = function() {
t.prototype.onEnable.call(this);
fzgui.EventDispatch.instance.add(c.LobbyConst.EVENT_NAME.BUNDLEMINI_DOWNLOAD_SUCCESS, this.hide, this);
};
e.prototype.onDisable = function() {
t.prototype.onDisable.call(this);
fzgui.EventDispatch.instance.remove(c.LobbyConst.EVENT_NAME.BUNDLEMINI_DOWNLOAD_SUCCESS, this.hide, this);
};
r([ p(cc.Node) ], e.prototype, "nBg", void 0);
return r([ s ], e);
}(fzgui.UIPopup);
n.default = l;
cc._RF.pop();
}, {
"../../LobbyConst": "LobbyConst"
} ],
Lobby_UINumericLabelHelper: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6aa8bFsEZpNjIqUqHxoX0hf", "Lobby_UINumericLabelHelper");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = (c.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ a ], e);
}(fzgui.UINumericLabelHelper));
n.default = s;
cc._RF.pop();
}, {} ],
Lobby_UIScrollBar: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "a6f97L48btM7LQAKF6khlKX", "Lobby_UIScrollBar");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.handle = null;
e.direction = fzgui.UIScrollBarDirection.VERTICAL;
e.enableAutoHide = !0;
e.autoHideTime = 1;
return e;
}
r([ s(cc.Sprite) ], e.prototype, "handle", void 0);
r([ s({
type: cc.Enum(fzgui.UIScrollBarDirection)
}) ], e.prototype, "direction", void 0);
r([ s(cc.Boolean) ], e.prototype, "enableAutoHide", void 0);
r([ s(cc.Float) ], e.prototype, "autoHideTime", void 0);
return r([ a ], e);
}(fzgui.UIScrollBar);
n.default = p;
cc._RF.pop();
}, {} ],
Lobby_UIScrollView: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ae862f8dZRBAbtDXrhGoUOk", "Lobby_UIScrollView");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./Lobby_UIScrollBar"), a = cc._decorator, s = a.ccclass, p = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.direction = fzgui.UIScrollDirection.BOTH;
e.zoomScaleEnabled = !1;
e.maxScale = 1;
e.minScale = 1;
e.content = null;
e.scrollEnabled = !0;
e.touchEnabled = !0;
e.dragChildrenEnabled = !1;
e.easingAutoScroll = !0;
e.movementFactor = .64;
e.horizontalScrollBar = null;
e.verticalScrollBar = null;
e.autoClearAutoScroll = !1;
e.autoClearAutoZoomScale = !1;
return e;
}
r([ p({
type: cc.Enum(fzgui.UIScrollDirection)
}) ], e.prototype, "direction", void 0);
r([ p ], e.prototype, "zoomScaleEnabled", void 0);
r([ p ], e.prototype, "maxScale", void 0);
r([ p ], e.prototype, "minScale", void 0);
r([ p(cc.Node) ], e.prototype, "content", void 0);
r([ p ], e.prototype, "scrollEnabled", void 0);
r([ p ], e.prototype, "touchEnabled", void 0);
r([ p ], e.prototype, "dragChildrenEnabled", void 0);
r([ p ], e.prototype, "easingAutoScroll", void 0);
r([ p ], e.prototype, "movementFactor", void 0);
r([ p(c.default) ], e.prototype, "horizontalScrollBar", void 0);
r([ p(c.default) ], e.prototype, "verticalScrollBar", void 0);
r([ p ], e.prototype, "autoClearAutoScroll", void 0);
r([ p ], e.prototype, "autoClearAutoZoomScale", void 0);
return r([ s ], e);
}(fzgui.UIScrollView);
n.default = l;
cc._RF.pop();
}, {
"./Lobby_UIScrollBar": "Lobby_UIScrollBar"
} ],
Lobby_UIShowPopupHelp: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d0169/XWbxHQKww7MnOyWnF", "Lobby_UIShowPopupHelp");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.text = "";
return e;
}
e.prototype.onEnable = function() {
this.node.getComponent(cc.Button) || this.node.addComponent(cc.Button);
this.node.on(fzgui.ControlEvent.Click, this._onClicked, this);
this.node.on(cc.Node.EventType.MOUSE_ENTER, function() {
this.node.runAction(cc.scaleTo(.2, .92, .92));
}.bind(this));
this.node.on(cc.Node.EventType.MOUSE_LEAVE, function() {
this.node.runAction(cc.scaleTo(.2, 1, 1));
}.bind(this));
};
e.prototype.onDisable = function() {
this.node.off(fzgui.ControlEvent.Click, this._onClicked, this);
};
e.prototype._onClicked = function() {
fzgui.UIPopupManager.instance.showPopup(this.text);
};
r([ s ], e.prototype, "text", void 0);
return r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
Lobby_UITableCell: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "9bb030itztF1JPUcE0wmv/+", "Lobby_UITableCell");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nSelected = null;
e.nDeselected = null;
e.nHighlighted = null;
e.nUnhighlighted = null;
return e;
}
r([ s(cc.Node) ], e.prototype, "nSelected", void 0);
r([ s(cc.Node) ], e.prototype, "nDeselected", void 0);
r([ s(cc.Node) ], e.prototype, "nHighlighted", void 0);
r([ s(cc.Node) ], e.prototype, "nUnhighlighted", void 0);
return r([ a ], e);
}(fzgui.UITableCell);
n.default = p;
cc._RF.pop();
}, {} ],
Lobby_UITableView: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "498cbDOIwhMmZQNxq7SA5ho", "Lobby_UITableView");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./Lobby_UIScrollBar"), a = cc._decorator, s = a.ccclass, p = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.direction = fzgui.UIScrollDirection.BOTH;
e.zoomScaleEnabled = !1;
e.maxScale = 1;
e.minScale = 1;
e.content = null;
e.scrollEnabled = !0;
e.touchEnabled = !0;
e.dragChildrenEnabled = !1;
e.easingAutoScroll = !0;
e.movementFactor = .64;
e.horizontalScrollBar = null;
e.verticalScrollBar = null;
e.autoClearAutoScroll = !1;
e.autoClearAutoZoomScale = !1;
e.fillOrder = fzgui.UITableViewFillOrder.LEFT_TO_RIGHT__TOP_TO_BOTTOM;
e.interactionMode = fzgui.UITableViewInteractionMode.NONE;
e.cellPagingEnabled = !1;
e.numberOfPagingCell = 1;
e.tableCell = null;
e.nEmpty = null;
return e;
}
r([ p({
type: cc.Enum(fzgui.UIScrollDirection)
}) ], e.prototype, "direction", void 0);
r([ p ], e.prototype, "zoomScaleEnabled", void 0);
r([ p ], e.prototype, "maxScale", void 0);
r([ p ], e.prototype, "minScale", void 0);
r([ p(cc.Node) ], e.prototype, "content", void 0);
r([ p ], e.prototype, "scrollEnabled", void 0);
r([ p ], e.prototype, "touchEnabled", void 0);
r([ p ], e.prototype, "dragChildrenEnabled", void 0);
r([ p ], e.prototype, "easingAutoScroll", void 0);
r([ p ], e.prototype, "movementFactor", void 0);
r([ p(c.default) ], e.prototype, "horizontalScrollBar", void 0);
r([ p(c.default) ], e.prototype, "verticalScrollBar", void 0);
r([ p ], e.prototype, "autoClearAutoScroll", void 0);
r([ p ], e.prototype, "autoClearAutoZoomScale", void 0);
r([ p({
type: cc.Enum(fzgui.UITableViewFillOrder)
}) ], e.prototype, "fillOrder", void 0);
r([ p({
type: cc.Enum(fzgui.UITableViewInteractionMode)
}) ], e.prototype, "interactionMode", void 0);
r([ p(cc.Boolean) ], e.prototype, "cellPagingEnabled", void 0);
r([ p(cc.Integer) ], e.prototype, "numberOfPagingCell", void 0);
r([ p(cc.Prefab) ], e.prototype, "tableCell", void 0);
r([ p(cc.Node) ], e.prototype, "nEmpty", void 0);
return r([ s ], e);
}(fzgui.UITableView);
n.default = l;
cc._RF.pop();
}, {
"./Lobby_UIScrollBar": "Lobby_UIScrollBar"
} ],
LoginCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "65be4uyy4xF46qG67e6b51q", "LoginCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./utils/CapchaZ"), s = t("./MVUtils"), p = cc._decorator, l = p.ccclass, u = p.property, f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.edbAccount = null;
e.edbPass = null;
e.edbCaptcha = null;
e.UICaptcha = null;
e.nCapcha = null;
e.nButton = null;
e.toggleSaveAccount = null;
return e;
}
e.prototype.onEnable = function() {
this.nButton.y = 0;
this.nCapcha.active = !1;
var t = fzgui.ClientData.getBoolean("SAVE_PASS", !0);
this.toggleSaveAccount.isChecked = t;
this.edbAccount.string = fzgui.ClientData.getString("USER_NAME", "");
this.edbPass.string = fzgui.ClientData.getString("PASSWORD", "");
};
e.prototype.onClickLogin = function() {
var t = this, e = this.edbAccount.string.trim();
e = e.toLowerCase();
var n = this.edbPass.string.trim();
this.edbCaptcha.string;
if (e.length <= 0) fzgui.UIPopupManager.instance.showPopup("Bạn chưa nhập tên tài khoản"); else if (n.length <= 0) fzgui.UIPopupManager.instance.showPopup("Bạn chưa nhập mật khẩu"); else {
var o = {
UserName: this.edbAccount.string,
Password: window.md5(this.edbPass.string),
IpAddress: "",
DeviceName: "Chrome",
PlatformId: c.LobbyConst.platform,
UIID: "",
MerchantId: 1002,
CaptchaText: this.edbCaptcha.string,
CaptchaToken: 1 == this.nCapcha.active ? this.UICaptcha.getComponent(a.default).getCapChaId() : ""
};
s.MVUtils.postRaw(c.LobbyConst.API.LOGIN, o, function(e, n) {
if (e >= 200 && e < 400) {
if (n) {
if (n.IsCaptcha) {
t.nCapcha.active = !0;
t.nButton.y = -70;
fzgui.UITextManager.showCenterNotification("Bạn đăng nhập sai quá nhiều lần, vui lòng dùng capcha thử lại");
return;
}
t.onLoginSuccess(n, function() {
s.MVUtils.get(c.LobbyConst.API.GET_INFO_ACCOUNT, {}, function(e, n) {
fzgui.UserManager.instance.mainUserInfo.PassWord = o.Password;
fzgui.UserManager.instance.mainUserInfo.UserName = o.UserName;
fzgui.UserManager.instance.mainUserInfo.TotalVipPoint = n.TotalVipPoint;
fzgui.UserManager.instance.mainUserInfo.VipPoint = n.VipPoint;
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_DISPLAYNAME);
t.requestUnreadMail();
});
});
}
} else fzgui.UIPopupManager.instance.showPopup(n);
});
}
};
e.prototype.onLoginSuccess = function(t, e) {
fzgui.UserManager.instance.mainUserInfo = t;
this.hide();
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.LOGIN_SUCCESS);
fzgui.EventDispatch.instance.emit(c.LobbyConst.EVENT_NAME.SHOW_BANNER_PROMOTION);
if (this.toggleSaveAccount.isChecked) {
fzgui.ClientData.setString("USER_NAME", this.edbAccount.string);
fzgui.ClientData.setString("PASSWORD", this.edbPass.string);
} else {
this.edbAccount.string = "";
this.edbPass.string = "";
fzgui.ClientData.setString("USER_NAME", this.edbAccount.string);
fzgui.ClientData.setString("PASSWORD", this.edbPass.string);
}
e && e();
};
e.prototype.setCookie = function() {};
e.prototype.onRefreshCaptchaClicked = function() {
this.UICaptcha.getCapChaId();
};
e.prototype.onToggleSavePass = function(t) {
var e = t.isChecked;
fzgui.ClientData.setBoolean("SAVE_PASS", e);
};
e.prototype.requestUnreadMail = function() {
var t = c.LobbyConst.API.GET_UNREAD_MAIL;
fzgui.Https.get(t, function(t) {
fzgui.ZLog.log("requestUnreadMail ===" + JSON.stringify(t));
t && t.ResponseCode;
});
};
r([ u(cc.EditBox) ], e.prototype, "edbAccount", void 0);
r([ u(cc.EditBox) ], e.prototype, "edbPass", void 0);
r([ u(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
r([ u(a.default) ], e.prototype, "UICaptcha", void 0);
r([ u(cc.Node) ], e.prototype, "nCapcha", void 0);
r([ u(cc.Node) ], e.prototype, "nButton", void 0);
r([ u(cc.Toggle) ], e.prototype, "toggleSaveAccount", void 0);
return r([ l ], e);
}(fzgui.UIPopup);
n.default = f;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils",
"./utils/CapchaZ": "CapchaZ"
} ],
MVUtils: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "51eddUDQF1F05VZcf0ZIFjr", "MVUtils");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.MVUtils = void 0;
var o = t("../LobbyConst"), i = function() {
function t() {}
t.getPlatform = function() {
return Global.PLATFORM_ID;
};
t.formatDateTime = function(t) {
if ("" != t.length && 0 != t.length) {
var e = (t = t.split("T"))[0].split("-");
return e[2] + "/" + e[1] + "/" + e[0] + " - " + t[1].substr(0, 5);
}
};
t.formatNumber = function(t) {
return void 0 === t ? "0" : t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};
t.toInt = function(t) {
if ("" == t) return 0;
cc.log("before==" + t);
var e = t.split(".").join("");
cc.log("after==" + e);
return parseInt(e);
};
t.ToVND = function(t) {
var e = t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
null != e && "NaN" != e || (e = 0);
return e;
};
t.getToken = function() {
return this.getStringBodyByObject({
token: fzgui.UserManager.instance.mainUserInfo.GameToken
}, void 0);
};
t.getStringBodyByObject = function(t, e) {
if (!t) return "";
if (null != e && e) return JSON.stringify(t);
var n = [];
for (var o in t) n.push(o + "=" + encodeURIComponent(t[o]));
return "?" + n.join("&");
};
t.getRaw = function(t, e, n, o) {
void 0 === o && (o = !1);
o && console.log("SendRequest =========>\nurl=" + t + "\ndata=" + JSON.stringify(e));
fzgui.UIWaitingLayout.showWaiting();
var i = cc.loader.getXMLHttpRequest();
i.timeout = 3e4;
i.open("GET", t + this.getStringBodyByObject(e, void 0), !0);
i.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
i.onreadystatechange = function() {
if (4 == i.readyState) if (i.status >= 200 && i.status < 400) {
o && console.log("ResponseText <=========\nstt=" + i.status + "\ndata=" + i.responseText);
fzgui.UIWaitingLayout.hideWaiting();
n && n(i.status, JSON.parse(i.responseText));
} else {
fzgui.UIWaitingLayout.hideWaiting();
n && n(i.status, i.responseText);
}
};
i.send();
};
t.postRaw = function(t, e, n, o) {
void 0 === o && (o = !1);
o && console.log("SendRequest =========>\nurl=" + t + "\ndata=" + JSON.stringify(e));
fzgui.UIWaitingLayout.showWaiting();
var i = cc.loader.getXMLHttpRequest();
i.timeout = 3e4;
i.open("POST", t);
i.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
i.onreadystatechange = function() {
if (4 == i.readyState) if (i.status >= 200 && i.status < 400) {
o && console.log("ResponseText <=========\nstt=" + i.status + "\ndata=" + i.responseText);
fzgui.UIWaitingLayout.hideWaiting();
n && n(i.status, JSON.parse(i.responseText));
} else {
fzgui.UIWaitingLayout.hideWaiting();
n && n(i.status, i.responseText);
}
};
i.send(JSON.stringify(e));
};
t.post = function(t, e, n, o) {
void 0 === o && (o = !1);
o && console.log("SendRequest =========>\nurl=" + t + "\ndata=" + JSON.stringify(e));
fzgui.UIWaitingLayout.showWaiting();
var i = cc.loader.getXMLHttpRequest();
i.timeout = 3e4;
i.open("POST", t + this.getToken());
i.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
i.onreadystatechange = function() {
if (4 == i.readyState) if (i.status >= 200 && i.status < 400) {
o && console.log("ResponseText <=========\nstt=" + i.status + "\ndata=" + i.responseText);
fzgui.UIWaitingLayout.hideWaiting();
n && n(i.status, JSON.parse(i.responseText));
} else {
fzgui.UIWaitingLayout.hideWaiting();
n && n(i.status, i.responseText);
}
};
i.send(JSON.stringify(e));
};
t.get = function(t, e, n, o) {
void 0 === o && (o = !1);
e.token = fzgui.UserManager.instance.mainUserInfo.GameToken;
o && console.log("SendRequest =========>\nurl=" + t + "\ndata=" + JSON.stringify(e));
fzgui.UIWaitingLayout.showWaiting();
var i = cc.loader.getXMLHttpRequest();
i.timeout = 3e4;
i.open("GET", t + this.getStringBodyByObject(e, void 0), !0);
i.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
i.onreadystatechange = function() {
if (4 == i.readyState) if (i.status >= 200 && i.status < 400) {
o && console.log("ResponseText <=========\nstt=" + i.status + "\ndata=" + i.responseText);
fzgui.UIWaitingLayout.hideWaiting();
n && n(i.status, JSON.parse(i.responseText));
} else {
fzgui.UIWaitingLayout.hideWaiting();
n && n(i.status, i.responseText);
}
};
i.send();
};
t.showPopupError = function(t, e, n, o) {
var i = this, r = [ fzgui.PopupAction.make("OK", function() {}), fzgui.PopupAction.make("BÁO LỖI", function() {
i.sendError(t, e, n, o);
}) ];
fzgui.UIPopupManager.instance.showPopup(o, r);
};
t.sendError = function(t, e, n, o, i) {
void 0 === i && (i = !1);
var r = "https://api.telegram.org/bot1978760504:AAGQ5UTrZgNICYXrEBkKsBe5ctwTrSPcOJk/sendMessage?chat_id=-1001574984547&text=" + encodeURIComponent("*Thông báo lỗi*\n*================*\n_" + JSON.stringify(fzgui.UserManager.instance.mainUserInfo) + "_\n================\n*SendRequest:* " + t + "\n*SendData:* _" + JSON.stringify(e) + "_\n*Status:* " + n + "\n*ResponseText:* " + o + "\n") + "&parse_mode=markdown";
console.log(r);
var c = cc.loader.getXMLHttpRequest();
c.timeout = 3e4;
c.open("GET", r, !0);
c.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
c.onreadystatechange = function() {};
c.send();
};
t.getOtpSMS = function() {
this.get(o.LobbyConst.API.GET_OTP_SMS, {}, function(t, e) {
if (t >= 200 && t < 400) {
fzgui.UIPopupManager.instance.showPopup("Hệ thống đã gửi mã OTP đến số điện thoại của bạn");
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, fzgui.UserManager.instance.mainUserInfo.Money);
} else fzgui.UIPopupManager.instance.showPopup(e);
});
};
return t;
}();
n.MVUtils = i;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst"
} ],
NetworkHandleTemp: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "5c2b1n1gSlNBL13E4UCRd7n", "NetworkHandleTemp");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = (c.property, function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSignalr = null;
e.mListenerKey = "OnTaiXiuWebSocKet";
e.isConnect = !1;
return e;
}
n = e;
Object.defineProperty(e, "instance", {
get: function() {
n._instance || (n._instance = new n());
return n._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
n._instance = this;
};
e.prototype.connect = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
cc.systemEvent.on(this.mListenerKey, this.onResponeData, this);
this.mSignalr = new fzgui.GateSignalR();
fzgui.ZLog.log("UserManager.instance.mainUserInfo.cookie =====" + fzgui.UserManager.instance.mainUserInfo.cookie);
this.mSignalr.connect(this.mListenerKey, "https://tx.banghe.xyz/signalr/negotiate", "minigamehub", fzgui.UserManager.instance.mainUserInfo.cookie, !1);
fzgui.GateWebSocketManager.pushSignalR(this.mSignalr);
};
e.prototype.onResponeData = function(t) {
this.isEmpty(t) || t.s && "error" == t.s || this.onWebSocketCallback(t);
};
e.prototype.isEmpty = function(t) {
for (var e in t) if (t.hasOwnProperty(e)) return !1;
return JSON.stringify(t) === JSON.stringify({});
};
e.prototype.onWebSocketCallback = function(t) {
"jackpots" != t.M.M && fzgui.ZLog.log("onWebSocketCallback", JSON.stringify(t));
if (("open" == t.s || "reconnect" == t.s || "1" == t.s) && !this.isConnect) {
this.isConnect = !0;
this.connectSuccess();
}
};
e.prototype.connectSuccess = function() {
fzgui.ZLog.log("TX connectSuccess");
};
e.prototype.closeWS = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
this.mSignalr.close();
fzgui.GateWebSocketManager.removeSignalR(this.mSignalr);
this.mSignalr = null;
};
e.prototype.sendSignalR = function(t, e) {
e = e || [];
this.mSignalr && this.mSignalr.send(t, e);
};
var n;
e._instance = null;
return n = r([ a ], e);
}(cc.Component));
n.default = s;
cc._RF.pop();
}, {} ],
NetworkPortal: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "50da5BoJcVFnpPT2A3XGYP/", "NetworkPortal");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = (c.property, function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSignalr = null;
e.mListenerKey = "portalHub_net";
e.isConnect = !1;
return e;
}
n = e;
Object.defineProperty(e, "instance", {
get: function() {
n._instance || (n._instance = new n());
return n._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
n._instance = this;
};
e.prototype.connect = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
cc.systemEvent.on(this.mListenerKey, this.onResponeData, this);
this.mSignalr = new fzgui.GateSignalR();
this.mSignalr.connect(this.mListenerKey, "https://api.banghe.xyz/signalr/negotiate", "portalHub", "", !1);
fzgui.GateWebSocketManager.pushSignalR(this.mSignalr);
};
e.prototype.onDisable = function() {
this.closeWS();
};
e.prototype.onResponeData = function(t) {
this.isEmpty(t) || t.s && "error" == t.s || this.onWebSocketCallback(t);
};
e.prototype.isEmpty = function(t) {
for (var e in t) if (t.hasOwnProperty(e)) return !1;
return JSON.stringify(t) === JSON.stringify({});
};
e.prototype.onWebSocketCallback = function(t) {
fzgui.ZLog.log("=====================CONNECT WS NOTI===============================" + JSON.stringify(t));
if (("open" == t.s || "reconnect" == t.s || "1" == t.s) && !this.isConnect) {
this.isConnect = !0;
this.connectSuccess();
}
t.R < 0 && fzgui.UITextManager.showCenterNotification("Lỗi " + t.R);
if (t.M && Array.isArray(t.M) && 0 != t.M.length) for (var e = t.M.length, n = 0; n < e; ++n) {
var o = t.M[n];
if (o.A && null != o.A[0] && null != o.A[0]) {
var i = o.A[0];
fzgui.ZLog.log("onWebSocketCallback: ", o.M + ": " + JSON.stringify(i));
switch (o.M) {
case "playerLeave":
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.LOGOUT);
fzgui.UIPopupManager.instance.showPopup("Tài khoản của bạn đã bị đăng nhập ở chỗ khác");
break;

case "topup":
1 == i.Status ? fzgui.GameCoreManager.instance.updateTotalGold(i.balance) : fzgui.UIPopupManager.instance.showPopup(i.msg);
}
}
}
};
e.prototype.connectSuccess = function() {
fzgui.ZLog.log("NotificationNetworkHandle Sucesss");
};
e.prototype.closeWS = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
this.mSignalr.close();
fzgui.GateWebSocketManager.removeSignalR(this.mSignalr);
this.mSignalr = null;
};
e.prototype.sendSignalR = function(t, e) {
fzgui.ZLog.log("SendSocket==========================>" + t + "==data==" + JSON.stringify(e));
e = e || [];
this.mSignalr && this.mSignalr.send(t, e);
};
var n;
e._instance = null;
return n = r([ a ], e);
}(cc.Component));
n.default = s;
cc._RF.pop();
}, {} ],
NotificationNetworkHandle: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d49d4pTbZtBr5HXvzAt99Nj", "NotificationNetworkHandle");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../../LobbyConst"), a = t("../GateJackpotNoti"), s = cc._decorator, p = s.ccclass, l = (s.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSignalr = null;
e.mListenerKey = "notify_event";
e.isConnect = !1;
return e;
}
n = e;
Object.defineProperty(e, "instance", {
get: function() {
n._instance || (n._instance = new n());
return n._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
n._instance = this;
};
e.prototype.connect = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
cc.systemEvent.on(this.mListenerKey, this.onResponeData, this);
cc.systemEvent.off(c.LobbyConst.EVENT_NAME.GET_LIST_MAIL, this.getUnReadMail, this);
cc.systemEvent.on(c.LobbyConst.EVENT_NAME.GET_LIST_MAIL, this.getUnReadMail, this);
cc.systemEvent.off(c.LobbyConst.EVENT_NAME.GET_DETAIL_MAIL, this.getDetailMail, this);
cc.systemEvent.on(c.LobbyConst.EVENT_NAME.GET_DETAIL_MAIL, this.getDetailMail, this);
this.mSignalr = new fzgui.GateSignalR();
this.mSignalr.connect(this.mListenerKey, "https://noti.banghe.xyz/signalr/negotiate", "GateHub", "", !1);
fzgui.GateWebSocketManager.pushSignalR(this.mSignalr);
};
e.prototype.onEnable = function() {
fzgui.EventDispatch.instance.add(fzgui.EVENT_GAMECORE.LOGIN_SUCCESS, this.connect, this);
};
e.prototype.onDisable = function() {
fzgui.EventDispatch.instance.remove(fzgui.EVENT_GAMECORE.LOGIN_SUCCESS, this.connect, this);
this.closeWS();
fzgui.ZLog.log("=====================CLOSE WS NOTI===============================");
};
e.prototype.onResponeData = function(t) {
this.isEmpty(t) || t.s && "error" == t.s || this.onWebSocketCallback(t);
};
e.prototype.isEmpty = function(t) {
for (var e in t) if (t.hasOwnProperty(e)) return !1;
return JSON.stringify(t) === JSON.stringify({});
};
e.prototype.onWebSocketCallback = function(t) {
if (("open" == t.s || "reconnect" == t.s || "1" == t.s) && !this.isConnect) {
this.isConnect = !0;
this.connectSuccess();
}
t.R < 0 && fzgui.UITextManager.showCenterNotification("Lỗi " + t.R);
if (t.M && Array.isArray(t.M) && 0 != t.M.length) for (var e = t.M.length, n = 0; n < e; ++n) {
var o = t.M[n];
if (o.A && null != o.A[0] && null != o.A[0]) {
var i = o.A[0];
switch (o.M) {
case "jackpots":
this.onGetListJackPot(i);
break;

case "UserMail":
fzgui.EventDispatch.instance.emit(c.LobbyConst.EVENT_NAME.USER_MAIL, i);
break;

case "notifyNewMail":
break;

case "mailContent":
fzgui.EventDispatch.instance.emit(c.LobbyConst.EVENT_NAME.EVENT_DETAIL_MAIL, i);
}
}
}
};
e.prototype.getMail = function() {
this.sendSignalR("GetUserMail", []);
};
e.prototype.getDetailMail = function(t) {
this.sendSignalR("GetUserMailContent", [ t ]);
};
e.prototype.deleteMail = function(t) {
this.sendSignalR("DeleteUserMail", [ t ]);
};
e.prototype.getUnReadMail = function() {
this.sendSignalR("GetUnReadUserMailQuantity", []);
};
e.prototype.connectSuccess = function() {
fzgui.ZLog.log("NotificationNetworkHandle Sucesss");
};
e.prototype.closeWS = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
this.mSignalr.close();
fzgui.GateWebSocketManager.removeSignalR(this.mSignalr);
this.mSignalr = null;
};
e.prototype.sendSignalR = function(t, e) {
fzgui.ZLog.log("SendSocket==========================>" + t + "==data==" + JSON.stringify(e));
e = e || [];
this.mSignalr && this.mSignalr.send(t, e);
};
e.prototype.onTestSendSocketClicked = function() {
this.sendSignalR("GetUserMail", []);
};
e.prototype.onGetListJackPot = function(t) {
if (t && Array.isArray(t)) {
for (var e = t.length, n = 0; n < e; n++) {
for (var o = {
slotID: t[n].GameID,
listJackPot: t[n].JackpotFund.split("|")
}, i = o.listJackPot.length, r = [], a = 0; a < i; a++) r.push(parseInt(o.listJackPot[a]));
c.LobbyConst.slotByKeys.set(o.slotID, r);
}
fzgui.EventDispatch.instance.emit(c.LobbyConst.EVENT_NAME.EVENT_UPDATE_JACKPOT);
}
};
e.prototype.showJackpotNotify = function(t) {
var e = fzgui.EBundle_Name.LOBBY;
fzgui.BundleManager.instance.getPrefabFromBundle("prefabs/GateJackpotNotify", e, function(e) {
var n = cc.instantiate(e);
fzgui.GameCoreManager.instance.nWidgetShowJackpot.addChild(n);
var o = n.getComponent(a.default);
o && o.showJackpot(t);
});
};
var n;
e._instance = null;
return n = r([ p ], e);
}(cc.Component));
n.default = l;
cc._RF.pop();
}, {
"../../LobbyConst": "LobbyConst",
"../GateJackpotNoti": "GateJackpotNoti"
} ],
OpenUrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "fdad7/FnzVGQIEH3Ihxq/j2", "OpenUrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = (c.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onBtnClick = function(t, e) {
cc.sys.openURL(e);
};
return r([ a ], e);
}(cc.Component));
n.default = s;
cc._RF.pop();
}, {} ],
RegisterCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "f9766EnY81CLoCN+Ya8puza", "RegisterCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./MVUtils"), s = t("./utils/CapchaZ"), p = cc._decorator, l = p.ccclass, u = p.property, f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.edbAccount = null;
e.edbPass = null;
e.edbRePass = null;
e.edbCaptcha = null;
e.UICaptcha = null;
return e;
}
e.prototype.onClickReg = function() {
var t = this, e = this.edbAccount.string, n = this.edbPass.string, o = this.edbRePass.string, i = this.edbCaptcha.string;
if (e.length > 18 || e.length < 6 || e.indexOf(" ") > 0 || e.indexOf("@") > 0) fzgui.UIPopupManager.instance.showPopup("Tên tài khoản phải từ 6 - 18 ký tự, viết liền không dấu, không có ký tự đặc biệt!"); else if (n.length < 6 || n.length > 18) fzgui.UIPopupManager.instance.showPopup("Mật khẩu phải có độ dài từ 6 - 18 ký tự!"); else if (n === o) if (0 != i.length) {
fzgui.ZLog.log('======"PlatformID": LobbyConst.platform==============' + c.LobbyConst.platform);
var r = {
username: this.edbAccount.string,
password: window.md5(this.edbPass.string),
verify: this.UICaptcha.getComponent(s.default).getCapChaId(),
captcha: this.edbCaptcha.string,
Email: "fff",
PlatformID: c.LobbyConst.platform,
MerchantID: "1",
ServiceID: "1"
};
a.MVUtils.postRaw(c.LobbyConst.API.REGISTRY, r, function(e, n) {
if (e >= 200 && e < 400) t.onLoginSuccess(n, function() {
fzgui.Https.get(c.LobbyConst.API.GET_INFO_ACCOUNT, function(t) {
fzgui.UserManager.instance.mainUserInfo.TotalVipPoint = t.TotalVipPoint;
fzgui.UserManager.instance.mainUserInfo.VipPoint = t.VipPoint;
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_DISPLAYNAME);
fzgui.UserManager.instance.mainUserInfo.PassWord = r.password;
});
}); else {
t.onRefreshCaptchaClicked();
fzgui.UIPopupManager.instance.showPopup(n);
}
});
} else fzgui.UIPopupManager.instance.showPopup("Mã xác nhận không đúng"); else fzgui.UIPopupManager.instance.showPopup("Mật khẩu nhập lại không trùng với mật khẩu đã nhập.");
};
e.prototype.onLoginSuccess = function(t, e) {
fzgui.UserManager.instance.mainUserInfo = t;
this.hide();
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.LOGIN_SUCCESS);
e && e();
};
e.prototype.onRefreshCaptchaClicked = function() {
this.UICaptcha.refreshCapcha();
};
r([ u(cc.EditBox) ], e.prototype, "edbAccount", void 0);
r([ u(cc.EditBox) ], e.prototype, "edbPass", void 0);
r([ u(cc.EditBox) ], e.prototype, "edbRePass", void 0);
r([ u(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
r([ u(s.default) ], e.prototype, "UICaptcha", void 0);
return r([ l ], e);
}(fzgui.UIPopup);
n.default = f;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils",
"./utils/CapchaZ": "CapchaZ"
} ],
TabTypeGameCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "f9205OA5INPFLbKqXgtwJU3", "TabTypeGameCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.listAllGame = null;
e.listGameSlots = [];
e.listMiniGame = [];
e.listCardGame = [];
return e;
}
e.prototype.showAllGame = function() {
this.listAllGame.children.forEach(function(t) {
t && (t.active = !0);
});
};
e.prototype.showAllSlots = function() {
this.listAllGame.children.forEach(function(t) {
t && (t.active = !1);
});
this.listGameSlots.forEach(function(t) {
t && (t.active = !0);
});
};
e.prototype.showMiniGame = function() {
this.listAllGame.children.forEach(function(t) {
t && (t.active = !1);
});
this.listMiniGame.forEach(function(t) {
t && (t.active = !0);
});
};
e.prototype.showCardGame = function() {
this.listAllGame.children.forEach(function(t) {
t && (t.active = !1);
});
this.listCardGame.forEach(function(t) {
t && (t.active = !0);
});
};
e.prototype.onUITouchEvent = function(t, e) {
switch (e) {
case "showAll":
this.showAllGame();
break;

case "\bshowSlots":
this.showAllSlots();
break;

case "cardgame":
this.showCardGame();
break;

case "minigame":
this.showMiniGame();
}
};
r([ s(cc.Node) ], e.prototype, "listAllGame", void 0);
r([ s(cc.Node) ], e.prototype, "listGameSlots", void 0);
r([ s(cc.Node) ], e.prototype, "listMiniGame", void 0);
r([ s(cc.Node) ], e.prototype, "listCardGame", void 0);
return r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
WidgetIconCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "3c748uOw7NLXpHZ13WZ9nfN", "WidgetIconCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./utils/Lobby_MiniGameNavigator"), a = cc._decorator, s = a.ccclass, p = (a.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onClick = function() {
var t = fzgui.EBundle_Name.LOBBY;
fzgui.UIPopupManager.instance.has(c.default) || fzgui.BundleManager.instance.getPrefabFromBundle("prefabs/Prefab_Minigame_Popup", t, function(t) {
fzgui.UIPopupManager.instance.showPopupFromPrefab(t);
});
};
return r([ s ], e);
}(cc.Component));
n.default = p;
cc._RF.pop();
}, {
"./utils/Lobby_MiniGameNavigator": "Lobby_MiniGameNavigator"
} ]
}, {}, [ "LobbyConst", "BannerPromition", "BannerPromotion", "CellDuDayTX", "CellHomQuaTXCtrl", "EventX3Nap", "GUIAccountChangePass", "GUIAccountDetail", "GUIAccountMail", "GUIAccountSafe", "GUIAccountSecurity", "GUIAccountsCtrl", "GUIEventDuDay", "GUIEventsCtrl", "GUIGiftCode", "GUIMissionCtrl", "GUIOTP", "GUISettingCtrl", "GUISpinner", "GUITopJackpotCtrl", "GUITopupBank", "GUITopupCtrl", "GUITopupEWallet", "GUITopupExchange", "GUITopupHistory", "GUITopupHistoryAllGame", "GUITopupIAP", "GUITopupRutBank", "GUITopupTelco", "GUITopupTranfers", "GUIUpdateDisplayName", "GUIVipPointCtrl", "GateJackpotNoti", "HeaderAccountCtrl", "HeaderCtrl", "ItemMail", "ItemTopJackpotCtrl", "JackpotBySlotCtrl", "LobbyCtrl", "LoginCtrl", "MVUtils", "OpenUrl", "RegisterCtrl", "TabTypeGameCtrl", "WidgetIconCtrl", "LobbAudioDefined", "BundleMiniGame", "BundleSceneGame", "IconBanCa", "IconGameCards", "IconMiniET", "IconMiniLarva", "IconMiniPoker", "IconMiniTaiXiu", "IconMiniTomCuaCa", "IconSlotLienMinh", "IconSlotLongVuong", "IconSlotRungRam", "IconSlotTayDuKy", "IconSlotThienDia", "LobbyBundleDownload", "NetworkHandleTemp", "NetworkPortal", "NotificationNetworkHandle", "CapchaZ", "Lobby_MiniGameNavigator", "Lobby_UINumericLabelHelper", "Lobby_UIScrollBar", "Lobby_UIScrollView", "Lobby_UIShowPopupHelp", "Lobby_UITableCell", "Lobby_UITableView" ]);