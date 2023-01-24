var clicks = 0;
var level = 1;
var upgradeCost = level * 10;

button.addEventListener('click', buttonClick)
upgrade.addEventListener('click', buttonUpgrade)

counter.innerText = 'Сlicks: ' + clicks;
upgrade.innerText = 'Upgrade (' + level + '|' + upgradeCost + ')';

function buttonClick() {
    clicks = clicks + level;
    showclicks();
}

function buttonUpgrade() {
    if (clicks >= upgradeCost) {
        clicks = clicks - upgradeCost;
        level = level + 1
        upgradeCost = level * 10;
        upgrade.innerText = 'Upgrade (' + level + '|' + upgradeCost + ')';
        showclicks();
        console.log('Успешная покупка');
    } else {
        console.log('Не хватает', upgradeCost - clicks + ' кликов');
    }
}

function addclicks(x) {
    clicks = clicks + x;
    showclicks();
    console.log(x, 'кликов успешно добавлено');
}

function setclicks(x) {
    clicks = x;
    showclicks();
    console.log(x, 'кликов успешно установлено');
}

function showclicks() {
    counter.innerText = 'clicks: ' + clicks;
    console.log('clicks: ' + clicks);
}