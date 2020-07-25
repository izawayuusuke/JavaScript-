// Utilモジュールに別名appを付与
import * as app from "./lib/Util";

var m = new app.Member("太郎", "山田");
console.log(m.getName());
