const extensionUrl = chrome.runtime.getURL('');
console.log(extensionUrl);
let arr = ['--black-king', '--black-queen', '--black-rook', '--black-bishop', '--black-knight', '--black-pawn', '--white-king', '--white-queen', '--white-rook', '--white-bishop', '--white-knight', '--white-pawn', '--hint'];
let match = {
    '--black-king': 'bk.png',
    '--black-queen': 'bq.png',
    '--black-rook': 'br.png',
    '--black-bishop': 'bb.png',
    '--black-knight': 'bn.png',
    '--black-pawn': 'bp.png',
    '--white-king': 'wk.png',
    '--white-queen': 'wq.png',
    '--white-rook': 'wr.png',
    '--white-bishop': 'wb.png',
    '--white-knight': 'wn.png',
    '--white-pawn': 'wp.png',
    '--hint': 'test.png'
}

arr.forEach((x) => {
    let value = getComputedStyle(document.documentElement).getPropertyValue(x);
    if (value) {
        document.documentElement.style.setProperty(x, `url('${extensionUrl}img/${match[x]}')`);
    }
});
