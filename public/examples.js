function load_example(s,m,r){
    s_editor.value = s;
    map_editor.value = m;
    reduce_editor.value = r;
}

var example21_s = 'function(input){  \n return [ \n \
    [ "a" , "zz" ], \n \
    [ "aaa", "zzz"], \n \
    [ "aaaa", "bbbb"], \n \
    [ "bbbc", "cccc"], \n \
    [ "cccd" , "dddd"], \n \
    [ "ddde" , "eeee"] \n \
  ]; \n \
}';

var example2_s ='function(input) {\n return [ \n \
[ "a" , "buyd" ], \n \
[ "buyd" , "eqxg" ], \n \
[ "eqxg" , "hmwj" ], \n \
[ "hmwj" , "kivm" ], \n \
[ "kivm" , "neup" ], \n \
[ "neup" , "qats" ], \n \
[ "qats" , "swsv" ], \n \
[ "swsv" , "vsry" ], \n \
[ "vsry" , "yorb" ], \n \
[ "yorb" , "abkqe" ], \n \
[ "abkqe" , "aegph" ], \n \
[ "aegph" , "ahcok" ], \n \
[ "ahcok" , "ajynn" ], \n \
[ "ajynn" , "amumq" ], \n \
[ "amumq" , "apqlt" ], \n \
[ "apqlt" , "asmkw" ], \n \
[ "asmkw" , "avijz" ], \n \
[ "avijz" , "ayejc" ], \n \
[ "ayejc" , "bbaif" ], \n \
[ "bbaif" , "bdwhi" ], \n \
[ "bdwhi" , "bgsgl" ], \n \
[ "bgsgl" , "bjofo" ], \n \
[ "bjofo" , "bmker" ], \n \
[ "bmker" , "bpgdu" ], \n \
[ "bpgdu" , "bsccx" ], \n \
[ "bsccx" , "buyca" ], \n \
[ "buyca" , "bxubd" ], \n \
[ "bxubd" , "caqag" ], \n \
[ "caqag" , "cdlzj" ], \n \
[ "cdlzj" , "cghym" ], \n \
[ "cghym" , "cjdxp" ], \n \
[ "cjdxp" , "clzws" ], \n \
[ "clzws" , "covvv" ], \n \
[ "covvv" , "crruy" ], \n \
[ "crruy" , "cunub" ], \n \
[ "cunub" , "cxjte" ], \n \
[ "cxjte" , "dafsh" ], \n \
[ "dafsh" , "ddbrk" ], \n \
[ "ddbrk" , "dfxqn" ], \n \
[ "dfxqn" , "ditpq" ], \n \
[ "ditpq" , "dlpot" ], \n \
[ "dlpot" , "dolnw" ], \n \
[ "dolnw" , "drhmz" ], \n \
[ "drhmz" , "dudmc" ], \n \
[ "dudmc" , "dwzlf" ], \n \
[ "dwzlf" , "dzvki" ], \n \
[ "dzvki" , "ecrjl" ], \n \
[ "ecrjl" , "efnio" ], \n \
[ "efnio" , "eijhr" ], \n \
[ "eijhr" , "elfgu" ], \n \
[ "elfgu" , "eobfx" ], \n \
[ "eobfx" , "eqxfa" ], \n \
[ "eqxfa" , "etted" ], \n \
[ "etted" , "ewpdg" ], \n \
[ "ewpdg" , "ezlcj" ], \n \
[ "ezlcj" , "fchbm" ], \n \
[ "fchbm" , "ffdap" ], \n \
[ "ffdap" , "fhyzs" ], \n \
[ "fhyzs" , "fkuyv" ], \n \
[ "fkuyv" , "fnqxy" ], \n \
[ "fnqxy" , "fqmxb" ], \n \
[ "fqmxb" , "ftiwe" ], \n \
[ "ftiwe" , "fwevh" ], \n \
[ "fwevh" , "fzauk" ], \n \
[ "fzauk" , "gbwtn" ], \n \
[ "gbwtn" , "gessq" ], \n \
[ "gessq" , "ghort" ], \n \
[ "ghort" , "gkkqw" ], \n \
[ "gkkqw" , "gngpz" ], \n \
[ "gngpz" , "gqcpc" ], \n \
[ "gqcpc" , "gsyof" ], \n \
[ "gsyof" , "gvuni" ], \n \
[ "gvuni" , "gyqml" ], \n \
[ "gyqml" , "hbmlo" ], \n \
[ "hbmlo" , "heikr" ], \n \
[ "heikr" , "hheju" ], \n \
[ "hheju" , "hkaix" ], \n \
[ "hkaix" , "hmwia" ], \n \
[ "hmwia" , "hpshd" ], \n \
[ "hpshd" , "hsogg" ], \n \
[ "hsogg" , "hvkfj" ], \n \
[ "hvkfj" , "hygem" ], \n \
[ "hygem" , "ibcdp" ], \n \
[ "ibcdp" , "idycs" ], \n \
[ "idycs" , "igubv" ], \n \
[ "igubv" , "ijqay" ], \n \
[ "ijqay" , "immab" ], \n \
[ "immab" , "iphze" ], \n \
[ "iphze" , "isdyh" ], \n \
[ "isdyh" , "iuzxk" ], \n \
[ "iuzxk" , "ixvwn" ], \n \
[ "ixvwn" , "jarvq" ], \n \
[ "jarvq" , "jdnut" ], \n \
[ "jdnut" , "jgjtw" ], \n \
[ "jgjtw" , "jjfsz" ], \n \
[ "jjfsz" , "jmbsc" ], \n \
[ "jmbsc" , "joxrf" ], \n \
[ "joxrf" , "jrtqi" ], \n \
[ "jrtqi" , "juppl" ], \n \
[ "juppl" , "jxloo" ], \n \
[ "jxloo" , "kahnr" ], \n \
[ "kahnr" , "kddmu" ], \n \
[ "kddmu" , "kfzlx" ], \n \
[ "kfzlx" , "kivla" ], \n \
[ "kivla" , "klrkd" ], \n \
[ "klrkd" , "konjg" ], \n \
[ "konjg" , "krjij" ], \n \
[ "krjij" , "kufhm" ], \n \
[ "kufhm" , "kxbgp" ], \n \
[ "kxbgp" , "kzxfs" ], \n \
[ "kzxfs" , "lctev" ], \n \
[ "lctev" , "lfpdy" ], \n \
[ "lfpdy" , "lildb" ], \n \
[ "lildb" , "llhce" ], \n \
[ "llhce" , "lodbh" ], \n \
[ "lodbh" , "lqzak" ], \n \
[ "lqzak" , "ltuzn" ], \n \
[ "ltuzn" , "lwqyq" ], \n \
[ "lwqyq" , "lzmxt" ], \n \
[ "lzmxt" , "mciww" ], \n \
[ "mciww" , "mfevz" ], \n \
[ "mfevz" , "miavc" ], \n \
[ "miavc" , "mkwuf" ], \n \
[ "mkwuf" , "mnsti" ], \n \
[ "mnsti" , "mqosl" ], \n \
[ "mqosl" , "mtkro" ], \n \
[ "mtkro" , "mwgqr" ], \n \
[ "mwgqr" , "mzcpu" ], \n \
[ "mzcpu" , "nbyox" ], \n \
[ "nbyox" , "neuoa" ], \n \
[ "neuoa" , "nhqnd" ], \n \
[ "nhqnd" , "nkmmg" ], \n \
[ "nkmmg" , "nnilj" ], \n \
[ "nnilj" , "nqekm" ], \n \
[ "nqekm" , "ntajp" ], \n \
[ "ntajp" , "nvwis" ], \n \
[ "nvwis" , "nyshv" ], \n \
[ "nyshv" , "obogy" ], \n \
[ "obogy" , "oekgb" ], \n \
[ "oekgb" , "ohgfe" ], \n \
[ "ohgfe" , "okceh" ], \n \
[ "okceh" , "omydk" ], \n \
[ "omydk" , "opucn" ], \n \
[ "opucn" , "osqbq" ], \n \
[ "osqbq" , "ovmat" ], \n \
[ "ovmat" , "oyhzw" ], \n \
[ "oyhzw" , "pbdyz" ], \n \
[ "pbdyz" , "pdzyc" ], \n \
[ "pdzyc" , "pgvxf" ], \n \
[ "pgvxf" , "pjrwi" ], \n \
[ "pjrwi" , "pmnvl" ], \n \
[ "pmnvl" , "ppjuo" ], \n \
[ "ppjuo" , "psftr" ], \n \
[ "psftr" , "pvbsu" ], \n \
[ "pvbsu" , "pxxrx" ], \n \
[ "pxxrx" , "qatra" ], \n \
[ "qatra" , "qdpqd" ], \n \
[ "qdpqd" , "qglpg" ], \n \
[ "qglpg" , "qjhoj" ], \n \
[ "qjhoj" , "qmdnm" ], \n \
[ "qmdnm" , "qozmp" ], \n \
[ "qozmp" , "qrvls" ], \n \
[ "qrvls" , "qurkv" ], \n \
[ "qurkv" , "qxnjy" ], \n \
[ "qxnjy" , "rajjb" ], \n \
[ "rajjb" , "rdfie" ], \n \
[ "rdfie" , "rgbhh" ], \n \
[ "rgbhh" , "rixgk" ], \n \
[ "rixgk" , "rltfn" ], \n \
[ "rltfn" , "ropeq" ], \n \
[ "ropeq" , "rrldt" ], \n \
[ "rrldt" , "ruhcw" ], \n \
[ "ruhcw" , "rxdbz" ], \n \
[ "rxdbz" , "rzzbc" ], \n \
[ "rzzbc" , "scvaf" ], \n \
[ "scvaf" , "sfqzi" ], \n \
[ "sfqzi" , "simyl" ], \n \
[ "simyl" , "slixo" ], \n \
[ "slixo" , "soewr" ], \n \
[ "soewr" , "sravu" ], \n \
[ "sravu" , "stwux" ], \n \
[ "stwux" , "swsua" ], \n \
[ "swsua" , "szotd" ], \n \
[ "szotd" , "tcksg" ], \n \
[ "tcksg" , "tfgrj" ], \n \
[ "tfgrj" , "ticqm" ], \n \
[ "ticqm" , "tkypp" ], \n \
[ "tkypp" , "tnuos" ], \n \
[ "tnuos" , "tqqnv" ], \n \
[ "tqqnv" , "ttmmy" ], \n \
[ "ttmmy" , "twimb" ], \n \
[ "twimb" , "tzele" ], \n \
[ "tzele" , "ucakh" ], \n \
[ "ucakh" , "uewjk" ], \n \
[ "uewjk" , "uhsin" ], \n \
[ "uhsin" , "ukohq" ], \n \
[ "ukohq" , "unkgt" ], \n \
[ "unkgt" , "uqgfw" ], \n \
[ "uqgfw" , "utcez" ], \n \
[ "utcez" , "uvyec" ] \n \
]; }';

var md5_code = 'var hexcase = 0;var b64pad  = "";var chrsz   = 8; function hex_md5(s){ return binl2hex(core_md5(str2binl(s), s.length * chrsz));}function b64_md5(s){ return binl2b64(core_md5(str2binl(s), s.length * chrsz));}function str_md5(s){ return binl2str(core_md5(str2binl(s), s.length * chrsz));}function hex_hmac_md5(key, data) { return binl2hex(core_hmac_md5(key, data)); }function b64_hmac_md5(key, data) { return binl2b64(core_hmac_md5(key, data)); }function str_hmac_md5(key, data) { return binl2str(core_hmac_md5(key, data)); }function md5_vm_test(){  return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";}function core_md5(x, len){  x[len >> 5] |= 0x80 << ((len) % 32);  x[(((len + 64) >>> 9) << 4) + 14] = len;  var a =  1732584193;  var b = -271733879;  var c = -1732584194;  var d =  271733878;  for(var i = 0; i < x.length; i += 16)  {    var olda = a;    var oldb = b;    var oldc = c;    var oldd = d;    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);    c = md5_ff(c, d, a, b, x[i+10], 17, -42063);    b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);    a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);    d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);    c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);    b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);    c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);    d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);    c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);    d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);    a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);    b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);    c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);    b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);    b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);    a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);    d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);    c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);    c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);    a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);    c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);    d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);    b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);    d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);    a = safe_add(a, olda);    b = safe_add(b, oldb);    c = safe_add(c, oldc);    d = safe_add(d, oldd);  }  return Array(a, b, c, d);}function md5_cmn(q, a, b, x, s, t){  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);}function md5_ff(a, b, c, d, x, s, t){  return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);}function md5_gg(a, b, c, d, x, s, t){  return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);}function md5_hh(a, b, c, d, x, s, t){  return md5_cmn(b ^ c ^ d, a, b, x, s, t);}function md5_ii(a, b, c, d, x, s, t){  return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);}function core_hmac_md5(key, data){  var bkey = str2binl(key);  if(bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);  var ipad = Array(16), opad = Array(16);  for(var i = 0; i < 16; i++)  {    ipad[i] = bkey[i] ^ 0x36363636;    opad[i] = bkey[i] ^ 0x5C5C5C5C;  }  var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);  return core_md5(opad.concat(hash), 512 + 128);}function safe_add(x, y){  var lsw = (x & 0xFFFF) + (y & 0xFFFF);  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);  return (msw << 16) | (lsw & 0xFFFF);}function bit_rol(num, cnt){  return (num << cnt) | (num >>> (32 - cnt));}function str2binl(str){  var bin = Array();  var mask = (1 << chrsz) - 1;  for(var i = 0; i < str.length * chrsz; i += chrsz)    bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (i%32);  return bin;}function binl2str(bin){  var str = "";  var mask = (1 << chrsz) - 1;  for(var i = 0; i < bin.length * 32; i += chrsz)    str += String.fromCharCode((bin[i>>5] >>> (i % 32)) & mask);  return str;}function binl2hex(binarray){  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";  var str = "";  for(var i = 0; i < binarray.length * 4; i++)  {    str += hex_tab.charAt((binarray[i>>2] >> ((i%4)*8+4)) & 0xF) +           hex_tab.charAt((binarray[i>>2] >> ((i%4)*8  )) & 0xF);  }  return str;}function binl2b64(binarray){  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";  var str = "";  for(var i = 0; i < binarray.length * 4; i += 3)  {    var triplet = (((binarray[i   >> 2] >> 8 * ( i   %4)) & 0xFF) << 16)                | (((binarray[i+1 >> 2] >> 8 * ((i+1)%4)) & 0xFF) << 8 )                |  ((binarray[i+2 >> 2] >> 8 * ((i+2)%4)) & 0xFF);    for(var j = 0; j < 4; j++)    {      if(i * 8 + j * 6 > binarray.length * 32) str += b64pad;      else str += tab.charAt((triplet >> 6*(3-j)) & 0x3F);    }  }  return str;}';

var str_code = 'function next(str) {   var last = str.charAt(str.length-1);   var re = new RegExp("^z+$");   if (str.match(re)) {      return(str.replace(/z/g,"a")+"a");   }   re = new RegExp("z+$");   if (str.match(re)) {      orig = str;      var ll = str.length;      tmp = str;      tmp = tmp.replace(/z+$/, "_");      zzz = str;      var i = tmp.indexOf("_");      var c = str.charAt(i-1);      newc = String.fromCharCode(c.charCodeAt()+1);         str = str.slice(0,i-1);      zzz = zzz.slice(i,ll);      zzz = zzz.replace(/z/g,"a");      return(str+newc+zzz);   }   else {      newc = String.fromCharCode(last.charCodeAt()+1);         str = str.slice(0,str.length-1);      return(str+newc);   }}';

var example2_m = 'function(array){ \n \
  var md5_target = "c13367945d5d4c91047b3b50234aa7ab"; \n \
  var res = []; \n \ ' + md5_code + ' \n \
  ' + str_code + ' \n \
  var n = array[0]; \n \
  var fim = array[1]; \n \
  while ( n != fim ) { \n \
    if (hex_md5(n) == md5_target ) res.push(n); \n \
    n = next(n); \n \
  } \n \
  return res; \n \
}';

var example2_r = 'function(results){ \n \
  var res = []; \n \
  for ( var i=0; i<results.length; i++){ \n \
    var myString = results[i].join(" "); \n \
    res.push(myString); \n \
  } \n \
  return res.join(" "); \n \
}';
var example2 = [ example2_s, example2_m, example2_r];
