/*
红包雨
cron "2 2 29 2 *" jd_mfredrain.js
 */
const $ = new Env('红包雨');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';



var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxf4ead=["","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E","\x69\x73\x4E\x6F\x64\x65","\x70\x75\x73\x68","\x66\x6F\x72\x45\x61\x63\x68","\x6B\x65\x79\x73","\x4A\x44\x5F\x44\x45\x42\x55\x47","\x65\x6E\x76","\x66\x61\x6C\x73\x65","\x6C\x6F\x67","\x47\x49\x54\x48\x55\x42","\x69\x6E\x64\x65\x78\x4F\x66","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x65\x78\x69\x74","\x66\x69\x6C\x74\x65\x72","\x43\x6F\x6F\x6B\x69\x65\x4A\x44","\x67\x65\x74\x64\x61\x74\x61","\x43\x6F\x6F\x6B\x69\x65\x4A\x44\x32","\x63\x6F\x6F\x6B\x69\x65","\x6D\x61\x70","\x43\x6F\x6F\x6B\x69\x65\x73\x4A\x44","\x5B\x5D","\x74\x6F\x4F\x62\x6A","\x64\x6F\x6E\x65","\x66\x69\x6E\x61\x6C\x6C\x79","\u274C\x20","\x6E\x61\x6D\x65","\x2C\x20\u5931\u8D25\x21\x20\u539F\u56E0\x3A\x20","\x21","\x63\x61\x74\x63\x68","\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\u4EAC\u4E1C\u8D26\u53F7\u4E00\x63\x6F\x6F\x6B\x69\x65\x0A\u76F4\u63A5\u4F7F\u7528\x4E\x6F\x62\x79\x44\x61\u7684\u4EAC\u4E1C\u7B7E\u5230\u83B7\u53D6","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F","\x6D\x73\x67","\u52A0\u5165\u9891\u9053\x3A\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x2E\x6D\x65\x2F\x70\x72\x6F\x65\x6E\x76\x63","\x65\x6E\x63\x72\x79\x70\x74\x50\x72\x6F\x6A\x65\x63\x74\x49\x64","\x33\x43\x39\x4E\x6A\x35\x6B\x52\x38\x42\x4E\x72\x72\x42\x68\x39\x70\x59\x6B\x4D\x58\x4A\x58\x77\x4B\x41\x6D\x34","\x65\x6E\x63\x72\x79\x70\x74\x41\x73\x73\x69\x67\x6E\x6D\x65\x6E\x74\x49\x64","\x32\x41\x45\x6E\x56\x62\x53\x69\x6D\x57\x34\x45\x73\x4A\x4D\x75\x6F\x4C\x37\x35\x75\x39\x73\x62\x62\x39\x58\x46","\x6C\x65\x6E\x67\x74\x68","\x55\x41","\x55\x73\x65\x72\x4E\x61\x6D\x65","\x6D\x61\x74\x63\x68","\x69\x6E\x64\x65\x78","\x69\x73\x4C\x6F\x67\x69\x6E","\x62\x65\x61\x6E\x73","\x6E\x69\x63\x6B\x4E\x61\x6D\x65","\x2A\x2A\x2A\x2A\x2A\x2A\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7","\u3011","\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A","\x72\x61\x6E\x64\x6F\x6D","\x77\x61\x69\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x63\x6C\x69\x65\x6E\x74\x3D\x77\x68\x35\x26\x63\x6C\x69\x65\x6E\x74\x56\x65\x72\x73\x69\x6F\x6E\x3D\x31\x2E\x30\x2E\x30\x26\x61\x70\x70\x69\x64\x3D\x72\x65\x64\x72\x61\x69\x6E\x2D\x32\x30\x32\x31\x26\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x64\x6F\x49\x6E\x74\x65\x72\x61\x63\x74\x69\x76\x65\x41\x73\x73\x69\x67\x6E\x6D\x65\x6E\x74\x26\x62\x6F\x64\x79\x3D\x25\x37\x42\x25\x32\x32\x63\x6F\x6D\x70\x6C\x65\x74\x69\x6F\x6E\x46\x6C\x61\x67\x25\x32\x32\x3A\x74\x72\x75\x65\x2C\x25\x32\x32\x73\x6F\x75\x72\x63\x65\x43\x6F\x64\x65\x25\x32\x32\x3A\x25\x32\x32\x61\x63\x65\x68\x62\x79\x32\x30\x32\x31\x30\x39\x32\x34\x25\x32\x32\x2C\x25\x32\x32\x65\x6E\x63\x72\x79\x70\x74\x50\x72\x6F\x6A\x65\x63\x74\x49\x64\x25\x32\x32\x3A\x25\x32\x32\x33\x43\x39\x4E\x6A\x35\x6B\x52\x38\x42\x4E\x72\x72\x42\x68\x39\x70\x59\x6B\x4D\x58\x4A\x58\x77\x4B\x41\x6D\x34\x25\x32\x32\x2C\x25\x32\x32\x65\x6E\x63\x72\x79\x70\x74\x41\x73\x73\x69\x67\x6E\x6D\x65\x6E\x74\x49\x64\x25\x32\x32\x3A\x25\x32\x32\x32\x41\x45\x6E\x56\x62\x53\x69\x6D\x57\x34\x45\x73\x4A\x4D\x75\x6F\x4C\x37\x35\x75\x39\x73\x62\x62\x39\x58\x46\x25\x32\x32\x25\x37\x44","\x2A\x2F\x2A","\x67\x7A\x69\x70\x2C\x64\x65\x66\x6C\x61\x74\x65","\x6B\x65\x65\x70\x2D\x61\x6C\x69\x76\x65","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x70\x72\x6F\x64\x65\x76\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x70\x72\x6F\x64\x65\x76\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x6D\x61\x6C\x6C\x2F\x61\x63\x74\x69\x76\x65\x2F\x63\x55\x33\x6F\x66\x45\x35\x63\x36\x43\x54\x5A\x39\x63\x65\x6F\x58\x5A\x4E\x33\x6D\x71\x79\x70\x4A\x36\x6A\x2F\x69\x6E\x64\x65\x78\x2E\x68\x74\x6D\x6C","\x63\x6F\x6D\x2E\x6A\x69\x6E\x67\x64\x6F\x6E\x67\x2E\x61\x70\x70\x2E\x6D\x61\x6C\x6C","\x67\x65\x74\x52\x65\x64\x52\x61\x69\x6E\x20\x41\x50\x49\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5","\x70\x61\x72\x73\x65","\x6C\x6F\x67\x45\x72\x72","\x67\x65\x74","\x6F\x62\x6A\x65\x63\x74","\u4EAC\u4E1C\u670D\u52A1\u5668\u8BBF\u95EE\u6570\u636E\u4E3A\u7A7A\uFF0C\u8BF7\u68C0\u67E5\u81EA\u8EAB\u8BBE\u5907\u7F51\u7EDC\u60C5\u51B5","\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78","\x78","\x74\x6F\x55\x70\x70\x65\x72\x43\x61\x73\x65","\x72\x65\x70\x6C\x61\x63\x65","\x2E","\x5F","\x6A\x64\x61\x70\x70\x3B\x69\x50\x68\x6F\x6E\x65\x3B","\x3B","\x3B\x6E\x65\x74\x77\x6F\x72\x6B\x2F\x77\x69\x66\x69\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20","\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x3B\x73\x75\x70\x70\x6F\x72\x74\x4A\x44\x53\x48\x57\x4B\x2F\x31","\x6A\x64\x6C\x74\x61\x70\x70\x3B\x61\x6E\x64\x72\x6F\x69\x64\x3B\x33\x2E\x38\x2E\x31\x30\x3B\x31\x30\x3B\x6E\x65\x74\x77\x6F\x72\x6B\x2F\x77\x69\x66\x69\x3B\x6D\x6F\x64\x65\x6C\x2F\x4D\x49\x20\x38\x3B\x61\x64\x64\x72\x65\x73\x73\x69\x64\x2F\x31\x39\x36\x39\x39\x39\x38\x30\x35\x39\x3B\x61\x69\x64\x2F\x38\x35\x36\x36\x39\x37\x32\x64\x66\x64\x39\x61\x37\x39\x35\x64\x3B\x6F\x61\x69\x64\x2F\x34\x61\x38\x62\x37\x37\x33\x63\x33\x65\x33\x30\x37\x33\x38\x36\x3B\x6F\x73\x56\x65\x72\x2F\x32\x39\x3B\x61\x70\x70\x42\x75\x69\x6C\x64\x2F\x31\x34\x33\x36\x3B\x70\x73\x6E\x2F\x50\x68\x59\x62\x55\x74\x43\x73\x43\x4A\x6F\x20\x72\x20\x31\x62\x38\x68\x77\x78\x6A\x6E\x59\x38\x72\x45\x76\x35\x53\x38\x58\x43\x7C\x33\x38\x33\x3B\x70\x73\x71\x2F\x31\x34\x3B\x61\x64\x6B\x2F\x3B\x61\x64\x73\x2F\x3B\x70\x61\x70\x2F\x4A\x41\x32\x30\x32\x30\x5F\x33\x31\x31\x32\x35\x33\x31\x7C\x33\x2E\x38\x2E\x31\x30\x7C\x41\x4E\x44\x52\x4F\x49\x44\x20\x31\x30\x3B\x6F\x73\x76\x2F\x31\x30\x3B\x70\x76\x2F\x33\x37\x34\x2E\x31\x34\x3B\x6A\x64\x76\x2F\x30\x7C\x69\x6F\x73\x61\x70\x70\x7C\x74\x5F\x33\x33\x35\x31\x33\x39\x37\x37\x34\x7C\x6C\x69\x74\x65\x73\x68\x61\x72\x65\x7C\x43\x6F\x70\x79\x55\x52\x4C\x7C\x31\x36\x30\x39\x33\x30\x36\x35\x39\x30\x31\x37\x35\x7C\x31\x36\x30\x39\x33\x30\x36\x35\x39\x36\x3B\x72\x65\x66\x2F\x63\x6F\x6D\x2E\x6A\x64\x2E\x6A\x64\x6C\x69\x74\x65\x2E\x6C\x69\x62\x2E\x6A\x64\x6C\x69\x74\x65\x6D\x65\x73\x73\x61\x67\x65\x2E\x76\x69\x65\x77\x2E\x61\x63\x74\x69\x76\x69\x74\x79\x2E\x4D\x65\x73\x73\x61\x67\x65\x43\x65\x6E\x74\x65\x72\x4D\x61\x69\x6E\x41\x63\x74\x69\x76\x69\x74\x79\x3B\x70\x61\x72\x74\x6E\x65\x72\x2F\x6A\x73\x78\x64\x6C\x79\x71\x6A\x30\x39\x3B\x61\x70\x70\x72\x70\x64\x2F\x4D\x65\x73\x73\x61\x67\x65\x43\x65\x6E\x74\x65\x72\x5F\x4D\x65\x73\x73\x61\x67\x65\x4D\x65\x72\x67\x65\x3B\x65\x75\x66\x76\x2F\x31\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x4C\x69\x6E\x75\x78\x3B\x20\x41\x6E\x64\x72\x6F\x69\x64\x20\x31\x30\x3B\x20\x4D\x49\x20\x38\x20\x42\x75\x69\x6C\x64\x2F\x51\x4B\x51\x31\x2E\x31\x39\x30\x38\x32\x38\x2E\x30\x30\x32\x3B\x20\x77\x76\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x35\x33\x37\x2E\x33\x36\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x56\x65\x72\x73\x69\x6F\x6E\x2F\x34\x2E\x30\x20\x43\x68\x72\x6F\x6D\x65\x2F\x36\x36\x2E\x30\x2E\x33\x33\x35\x39\x2E\x31\x32\x36\x20\x4D\x51\x51\x42\x72\x6F\x77\x73\x65\x72\x2F\x36\x2E\x32\x20\x54\x42\x53\x2F\x30\x34\x35\x31\x34\x30\x20\x4D\x6F\x62\x69\x6C\x65\x20\x53\x61\x66\x61\x72\x69\x2F\x35\x33\x37\x2E\x33\x36","\x66\x6C\x6F\x6F\x72","\x31\x30\x2E\x31\x2E\x34","\x31\x30\x2E\x31\x2E\x32","\x31\x30\x2E\x31\x2E\x30","\x31\x30\x2E\x30\x2E\x31\x30","\x31\x30\x2E\x30\x2E\x38","\x31\x30\x2E\x30\x2E\x36","\x31\x30\x2E\x30\x2E\x35","\x31\x30\x2E\x30\x2E\x34","\x31\x30\x2E\x30\x2E\x32","\x31\x30\x2E\x30\x2E\x31","\x31\x30\x2E\x30\x2E\x30","\x31\x30\x2E\x31\x2E\x36","\x31\x30\x2E\x32\x2E\x30","\x31\x30\x2E\x32\x2E\x34","\x31\x30\x2E\x32\x2E\x36","\x31\x30\x2E\x33\x2E\x30","\x31\x30\x2E\x33\x2E\x32","\x31\x30\x2E\x33\x2E\x33","\x31\x30\x2E\x33\x2E\x34","\x31\x30\x2E\x33\x2E\x35","\x31\x30\x2E\x34\x2E\x30","\x31\x30\x2E\x34\x2E\x32","\x31\x30\x2E\x34\x2E\x33","\x31\x30\x2E\x34\x2E\x34","\x31\x30\x2E\x34\x2E\x35","\x31\x30\x2E\x34\x2E\x36","\x31\x30\x2E\x35\x2E\x30","\x31\x30\x2E\x35\x2E\x32","\x31\x30\x2E\x35\x2E\x34","\x31\x31\x2E\x30\x2E\x30","\x31\x31\x2E\x30\x2E\x32","\x31\x31\x2E\x30\x2E\x34","\x31\x31\x2E\x31\x2E\x30","\x31\x31\x2E\x31\x2E\x32","\x31\x31\x2E\x31\x2E\x34","\x31\x31\x2E\x32\x2E\x30","\x31\x31\x2E\x32\x2E\x34","\x31\x31\x2E\x32\x2E\x35","\x31\x31\x2E\x32\x2E\x36","\x31\x31\x2E\x33\x2E\x30","\x31\x31\x2E\x33\x2E\x31","\x31\x31\x2E\x33\x2E\x32","\x31\x31\x2E\x33\x2E\x34","\x31\x31\x2E\x34\x2E\x30","\x67\x65\x74\x4A\x44\x56\x65\x72\x73\x69\x6F\x6E","\x39\x2E\x30","\x39\x2E\x31","\x39\x2E\x32","\x39\x2E\x33","\x31\x30\x2E\x30","\x31\x30\x2E\x31","\x31\x30\x2E\x32","\x31\x30\x2E\x33","\x31\x31\x2E\x30","\x31\x31\x2E\x31","\x31\x31\x2E\x32","\x31\x31\x2E\x33","\x31\x31\x2E\x34","\x31\x32\x2E\x30","\x31\x32\x2E\x31","\x31\x32\x2E\x32","\x31\x32\x2E\x33","\x31\x32\x2E\x34","\x31\x32\x2E\x35","\x31\x33\x2E\x30","\x31\x33\x2E\x31","\x31\x33\x2E\x32","\x31\x33\x2E\x33","\x31\x33\x2E\x34","\x31\x33\x2E\x35","\x31\x33\x2E\x36","\x31\x33\x2E\x37","\x31\x34\x2E\x30","\x31\x34\x2E\x31","\x31\x34\x2E\x32","\x31\x34\x2E\x33","\x31\x34\x2E\x34","\x31\x34\x2E\x35","\x31\x34\x2E\x36","\x31\x34\x2E\x37","\x31\x34\x2E\x38","\x31\x35\x2E\x30","\x31\x35\x2E\x31","\x31\x35\x2E\x32","\x31\x35\x2E\x33","\x31\x35\x2E\x34","\x31\x35\x2E\x35","\x31\x35\x2E\x36","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];let cookiesArr=[],cookie=__Oxf4ead[0x0],message;const JD_API_HOST=__Oxf4ead[0x1];if($[__Oxf4ead[0x2]]()){Object[__Oxf4ead[0x5]](jdCookieNode)[__Oxf4ead[0x4]]((_0x88dfx5)=>{cookiesArr[__Oxf4ead[0x3]](jdCookieNode[_0x88dfx5])});if(process[__Oxf4ead[0x7]][__Oxf4ead[0x6]]&& process[__Oxf4ead[0x7]][__Oxf4ead[0x6]]=== __Oxf4ead[0x8]){console[__Oxf4ead[0x9]]= ()=>{}};if(JSON[__Oxf4ead[0xc]](process[__Oxf4ead[0x7]])[__Oxf4ead[0xb]](__Oxf4ead[0xa])>  -1){process[__Oxf4ead[0xd]](0)}}else {cookiesArr= [$[__Oxf4ead[0x10]](__Oxf4ead[0xf]),$[__Oxf4ead[0x10]](__Oxf4ead[0x11]),...$[__Oxf4ead[0x16]]($[__Oxf4ead[0x10]](__Oxf4ead[0x14])|| __Oxf4ead[0x15])[__Oxf4ead[0x13]]((_0x88dfx5)=>{return _0x88dfx5[__Oxf4ead[0x12]]})][__Oxf4ead[0xe]]((_0x88dfx5)=>{return !!_0x88dfx5})};!(async ()=>{if(!cookiesArr[0x0]){$[__Oxf4ead[0x20]]($[__Oxf4ead[0x1a]],__Oxf4ead[0x1e],__Oxf4ead[0x1f],{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxf4ead[0x1f]});return};console[__Oxf4ead[0x9]](__Oxf4ead[0x0]);console[__Oxf4ead[0x9]](__Oxf4ead[0x21]);$[__Oxf4ead[0x22]]= __Oxf4ead[0x23];$[__Oxf4ead[0x24]]= __Oxf4ead[0x25];for(let _0x88dfx7=0;_0x88dfx7< cookiesArr[__Oxf4ead[0x26]];_0x88dfx7++){if(cookiesArr[_0x88dfx7]){$[__Oxf4ead[0x27]]=  await getJDUA();cookie= cookiesArr[_0x88dfx7];$[__Oxf4ead[0x28]]= decodeURIComponent(cookie[__Oxf4ead[0x29]](/pt_pin=(.+?);/)&& cookie[__Oxf4ead[0x29]](/pt_pin=(.+?);/)[0x1]);$[__Oxf4ead[0x2a]]= _0x88dfx7+ 1;$[__Oxf4ead[0x2b]]= true;$[__Oxf4ead[0x2c]]= 0;$[__Oxf4ead[0x2d]]= __Oxf4ead[0x0];message= __Oxf4ead[0x0];console[__Oxf4ead[0x9]](`${__Oxf4ead[0x2e]}${$[__Oxf4ead[0x2a]]}${__Oxf4ead[0x2f]}${$[__Oxf4ead[0x2d]]|| $[__Oxf4ead[0x28]]}${__Oxf4ead[0x30]}`); await $[__Oxf4ead[0x32]](parseInt(Math[__Oxf4ead[0x31]]()* 1000+ 500,10));try{ await getRedRain()}catch(e){}; await $[__Oxf4ead[0x32]](parseInt(Math[__Oxf4ead[0x31]]()* 2500+ 2500,10))}}})()[__Oxf4ead[0x1d]]((_0x88dfx6)=>{$[__Oxf4ead[0x9]](__Oxf4ead[0x0],`${__Oxf4ead[0x19]}${$[__Oxf4ead[0x1a]]}${__Oxf4ead[0x1b]}${_0x88dfx6}${__Oxf4ead[0x1c]}`,__Oxf4ead[0x0])})[__Oxf4ead[0x18]](()=>{$[__Oxf4ead[0x17]]()});async function getRedRain(){options= {"\x75\x72\x6C":__Oxf4ead[0x33],headers:{"\x41\x63\x63\x65\x70\x74":__Oxf4ead[0x34],"\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67":__Oxf4ead[0x35],"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxf4ead[0x36],"\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65":__Oxf4ead[0x37],"\x43\x6F\x6F\x6B\x69\x65":cookie,"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":$[__Oxf4ead[0x27]],"\x6F\x72\x69\x67\x69\x6E":__Oxf4ead[0x38],"\x72\x65\x66\x65\x72\x65\x72":__Oxf4ead[0x39],"\x78\x2D\x72\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x77\x69\x74\x68":__Oxf4ead[0x3a]}}; await $[__Oxf4ead[0x32]](1500);return  new Promise((_0x88dfx9)=>{$[__Oxf4ead[0x3e]](options,async (_0x88dfxa,_0x88dfxb,_0x88dfxc)=>{try{if(_0x88dfxa){console[__Oxf4ead[0x9]](`${__Oxf4ead[0x0]}${JSON[__Oxf4ead[0xc]](_0x88dfxa)}${__Oxf4ead[0x0]}`);console[__Oxf4ead[0x9]](`${__Oxf4ead[0x3b]}`)}else {if(safeGet(_0x88dfxc)){console[__Oxf4ead[0x9]](_0x88dfxc);_0x88dfxc= JSON[__Oxf4ead[0x3c]](_0x88dfxc)}}}catch(e){$[__Oxf4ead[0x3d]](e,_0x88dfxb)}finally{_0x88dfx9()}})})}async function taskUrl(){return {"\x75\x72\x6C":__Oxf4ead[0x33],headers:{"\x41\x63\x63\x65\x70\x74":__Oxf4ead[0x34],"\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67":__Oxf4ead[0x35],"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxf4ead[0x36],"\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65":__Oxf4ead[0x37],"\x43\x6F\x6F\x6B\x69\x65":cookie,"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":$[__Oxf4ead[0x27]],"\x6F\x72\x69\x67\x69\x6E":__Oxf4ead[0x38],"\x72\x65\x66\x65\x72\x65\x72":__Oxf4ead[0x39],"\x78\x2D\x72\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x77\x69\x74\x68":__Oxf4ead[0x3a]}}}function safeGet(_0x88dfxc){try{if( typeof JSON[__Oxf4ead[0x3c]](_0x88dfxc)== __Oxf4ead[0x3f]){return true}}catch(e){console[__Oxf4ead[0x9]](`${__Oxf4ead[0x40]}`);return false}}function getUUID(_0x88dfx10= __Oxf4ead[0x41],_0x88dfx11= 0){return _0x88dfx10[__Oxf4ead[0x44]](/[xy]/g,function(_0x88dfx10){var _0x88dfx12=16* Math[__Oxf4ead[0x31]]()| 0,_0x88dfx13=__Oxf4ead[0x42]== _0x88dfx10?_0x88dfx12:3& _0x88dfx12| 8;return uuid= _0x88dfx11?_0x88dfx13.toString(36)[__Oxf4ead[0x43]]():_0x88dfx13.toString(36),uuid})}function getJDUA(){getVersion= getIphoneVersion();getVersion1= getVersion[__Oxf4ead[0x44]](__Oxf4ead[0x45],__Oxf4ead[0x46]);getJDversion= getJDVersion();$[__Oxf4ead[0x27]]= `${__Oxf4ead[0x47]}${getJDversion}${__Oxf4ead[0x48]}${getVersion}${__Oxf4ead[0x48]}${getUUID(__Oxf4ead[0x41])}${__Oxf4ead[0x49]}${getVersion1}${__Oxf4ead[0x4a]}`;return $[__Oxf4ead[0x27]]}function getJSUA(){return __Oxf4ead[0x4b]}function random(_0x88dfx17,_0x88dfx18){let _0x88dfx19=Math[__Oxf4ead[0x4c]](Math[__Oxf4ead[0x31]]()* (_0x88dfx18- _0x88dfx17))+ _0x88dfx17;return `${__Oxf4ead[0x0]}${_0x88dfx19}${__Oxf4ead[0x0]}`}function getJDVersion(){let _0x88dfx1b=[__Oxf4ead[0x4d],__Oxf4ead[0x4e],__Oxf4ead[0x4f],__Oxf4ead[0x50],__Oxf4ead[0x51],__Oxf4ead[0x52],__Oxf4ead[0x53],__Oxf4ead[0x54],__Oxf4ead[0x55],__Oxf4ead[0x56],__Oxf4ead[0x57],__Oxf4ead[0x58],__Oxf4ead[0x59],__Oxf4ead[0x5a],__Oxf4ead[0x5b],__Oxf4ead[0x5c],__Oxf4ead[0x5d],__Oxf4ead[0x5e],__Oxf4ead[0x5f],__Oxf4ead[0x60],__Oxf4ead[0x61],__Oxf4ead[0x62],__Oxf4ead[0x63],__Oxf4ead[0x64],__Oxf4ead[0x65],__Oxf4ead[0x66],__Oxf4ead[0x67],__Oxf4ead[0x68],__Oxf4ead[0x69],__Oxf4ead[0x6a],__Oxf4ead[0x6b],__Oxf4ead[0x6c],__Oxf4ead[0x6d],__Oxf4ead[0x6e],__Oxf4ead[0x6f],__Oxf4ead[0x70],__Oxf4ead[0x71],__Oxf4ead[0x72],__Oxf4ead[0x73],__Oxf4ead[0x74],__Oxf4ead[0x75],__Oxf4ead[0x76],__Oxf4ead[0x77],__Oxf4ead[0x78]];$[__Oxf4ead[0x79]]= _0x88dfx1b[random(0,_0x88dfx1b[__Oxf4ead[0x26]])];return _0x88dfx1b[random(0,_0x88dfx1b[__Oxf4ead[0x26]])]}function getIphoneVersion(){let _0x88dfx1b=[__Oxf4ead[0x7a],__Oxf4ead[0x7b],__Oxf4ead[0x7c],__Oxf4ead[0x7d],__Oxf4ead[0x7e],__Oxf4ead[0x7f],__Oxf4ead[0x80],__Oxf4ead[0x81],__Oxf4ead[0x82],__Oxf4ead[0x83],__Oxf4ead[0x84],__Oxf4ead[0x85],__Oxf4ead[0x86],__Oxf4ead[0x87],__Oxf4ead[0x88],__Oxf4ead[0x89],__Oxf4ead[0x8a],__Oxf4ead[0x8b],__Oxf4ead[0x8c],__Oxf4ead[0x8d],__Oxf4ead[0x8e],__Oxf4ead[0x8f],__Oxf4ead[0x90],__Oxf4ead[0x91],__Oxf4ead[0x92],__Oxf4ead[0x93],__Oxf4ead[0x94],__Oxf4ead[0x95],__Oxf4ead[0x96],__Oxf4ead[0x97],__Oxf4ead[0x98],__Oxf4ead[0x99],__Oxf4ead[0x9a],__Oxf4ead[0x9b],__Oxf4ead[0x9c],__Oxf4ead[0x9d],__Oxf4ead[0x9e],__Oxf4ead[0x9f],__Oxf4ead[0xa0],__Oxf4ead[0xa1],__Oxf4ead[0xa2],__Oxf4ead[0xa3],__Oxf4ead[0xa4]];return _0x88dfx1b[random(0,_0x88dfx1b[__Oxf4ead[0x26]])]}(function(_0x88dfx1d,_0x88dfx1e,_0x88dfx1f,_0x88dfx20,_0x88dfx21,_0x88dfx22){_0x88dfx22= __Oxf4ead[0xa5];_0x88dfx20= function(_0x88dfx23){if( typeof alert!== _0x88dfx22){alert(_0x88dfx23)};if( typeof console!== _0x88dfx22){console[__Oxf4ead[0x9]](_0x88dfx23)}};_0x88dfx1f= function(_0x88dfx24,_0x88dfx1d){return _0x88dfx24+ _0x88dfx1d};_0x88dfx21= _0x88dfx1f(__Oxf4ead[0xa6],_0x88dfx1f(_0x88dfx1f(__Oxf4ead[0xa7],__Oxf4ead[0xa8]),__Oxf4ead[0xa9]));try{_0x88dfx1d= __encode;if(!( typeof _0x88dfx1d!== _0x88dfx22&& _0x88dfx1d=== _0x88dfx1f(__Oxf4ead[0xaa],__Oxf4ead[0xab]))){_0x88dfx20(_0x88dfx21)}}catch(e){_0x88dfx20(_0x88dfx21)}})({})



// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }