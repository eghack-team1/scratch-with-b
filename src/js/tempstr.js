export var dn = [
    {
        id: 0,
        corpo: "株式会社優劣",
        posit: "営業課",
        tp: "高橋一"
    },
    {
        id: 1,
        corpo: "trading株式会社",
        posit: "設備課",
        tp: "斎藤和樹"
    }
];

export var ana = [
    {
        id: 0,
        greeting: "お疲れ様です",
        belong: "株式会社S",
        initisl: "佐藤"
    },
    {
        id: 1,
        greeting: "お世話になっております",
        belong: "start株式会社",
        initisl: "千葉"
    }
];
export var abst = [
    {
        id: 0,
        pur: "打合せの日程について，ご連絡いたします",
        det: "9月4日行いたいと思います"
    },
    {
        id: 1,
        pur: "ご検討のほど宜しくお願い致します",
        det: "ご協力お願い致します"
    }
];

export var con = [
    {
        id: 0,
        rep: "今後とも宜しくお願い致します"
    },

    {
        id: 1,
        rep: "ご検討の程よろしくお願いいたします"
    }
];


var checktext = "___tri___。\n___ltd___の___name___です。\n";

//テキスト置換操作 関数としてはテキストとuserid必要

export default function replace_sentence(text) {
    let checktext = text;
    for (let prop in dn[0]) {
        checktext = checktext.replace(new RegExp(`___${prop}___`), dn[0][`${prop}`]);
    }
    for (let prop in ana[0]) {
        checktext = checktext.replace(new RegExp(`___${prop}___`), ana[0][`${prop}`]);
    }
    for (let prop in abst[0]) {
        checktext = checktext.replace(new RegExp(`___${prop}___`), abst[0][`${prop}`]);
    }
    for (let prop in con[0]) {
        checktext = checktext.replace(new RegExp(`___${prop}___`), con[0][`${prop}`]);
    }
    return checktext;
}
