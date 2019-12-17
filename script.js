var totalBananas = 0;
var bananasPerClick = 1;
var upgradeCost = 10;
var upgrade0Cost = 500;
var upgrade1Cost = 2000;
var autoClickerCost = 250;
var stats = document.getElementById('stats');
var ppc = document.getElementById('ppc');
var upgardeButton = document.getElementById('upgradeButton');
var upgrade0Button = document.getElementById('upgrade0Button');
var upgarde1Button = document.getElementById('upgrade1Button');
var autoClickerButton = document.getElementById('autoClick');

function buyBananas() {
    totalBananas = totalBananas + bananasPerClick;
    stats.innerHTML = 'Bananas Farmed: ' + totalBananas;
    ppc.innerHTML = 'Bananas Per Click: ' + bananasPerClick;
}

function upgrade() {
    if (totalBananas >= upgradeCost) {
        totalBananas = totalBananas - upgradeCost;
        bananasPerClick = bananasPerClick + 0.5;
        stats.innerHTML = 'Bananas Farmed: ' + totalBananas;
        upgradeCost = upgradeCost * 2;
        upgradeButton.innerHTML = 'double trouble (+0.5): ' + upgradeCost;
    } else {
        alert('You do not have enough Bananas!');
    }
}

function upgrade0() {
    if (totalBananas >= upgrade0Cost) {
        totalBananas = totalBananas - upgrade0Cost;
        bananasPerClick = bananasPerClick + 2.5;
        stats.innerHTML = 'Bananas Farmed: ' + totalBananas;
        upgrade0Cost = upgrade0Cost * 2;
        upgrade0Button.innerHTML = 'Pineapple Tree (+2.5): ' + upgrade0Cost;
    } else {
        alert('You do not have enough Bananas!');
    }
}

function upgrade1() {
    if (totalBananas >= upgrade1Cost) {
        totalBananas = totalBananas - upgrade1Cost;
        bananasPerClick = bananasPerClick + 5;
        stats.innerHTML = 'Bananas Farmed: ' + totalBananas;
        upgrade1Cost = upgrade1Cost * 2;
        upgrade1Button.innerHTML = 'Pineapple Farm (+5): ' + upgrade1Cost;
    } else {
        alert('You do not have enough Bananas!');
    }
}

function autoClickerStart() {
    totalBananas = totalBananas + 0.25;
    stats.innerHTML = 'Bananas Farmed: ' + totalBananas;
    //autoClicker;
}

function autoClicker() {
    if (totalBananas >= autoClickerCost) {
        totalBananas = totalBananas - autoClickerCost;
        autoClickerCost = autoClickerCost * 1.7;
        setInterval(autoClickerStart, 1000);
        autoClickerButton.innerHTML = 'auto clicker (+0.25/S): ' + autoClickerCost;
    } else {
        alert('You do not have enough Bananas!');
    }
}
