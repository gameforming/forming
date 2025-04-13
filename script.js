const clocks = [
    ["basic Clock", 60, 1],
    ["wooden Clock", 20, 2],
    ["stone Clock", 10, 5],
    ["iron Clock", 5, 10],
    ["gold Clock", 2, 50],
    ["diamond Clock", 1, 100],
    ["crystal clock", 0.9, 500],
    ["quantum clock", 0.1, 1000],
    ["matrix clock", 0.09, 2500],
    ["ultimate clock", 0.009, 10000],
    ["tick tack clock", 0.001, 50000],
    ["fantom clock", 0.000001, 5000000000],
    ["time lord", 0.000000001, 5000000000000000],
    ["time god", 0.000000000001, 50000000000000000000000]
];

let inventory = {};
let money = 100;
let turn = 1;
const rollCost = 25;

const moneyLabel = document.createElement("div");
const turnLabel = document.createElement("div");
const incomeLabel = document.createElement("div");
const inventoryDiv = document.createElement("pre");
const feedback = document.createElement("div");

document.body.appendChild(moneyLabel);
document.body.appendChild(turnLabel);
document.body.appendChild(incomeLabel);
document.body.appendChild(inventoryDiv);
document.body.appendChild(feedback);

const updateUI = () => {
    moneyLabel.textContent = `💰 Money: ${money}`;
    turnLabel.textContent = `📆 Turn: ${turn}`;
    incomeLabel.textContent = `💰 Income per turn: ${calculateIncome()}`;
    inventoryDiv.textContent = showInventory();
};

const getClockEarning = (name) => {
    for (let [clockName, _, earning] of clocks) {
        if (clockName === name) return earning;
    }
    return 0;
};

const calculateIncome = () => {
    let total = 0;
    for (let clock in inventory) {
        total += getClockEarning(clock) * inventory[clock];
    }
    return total;
};

const showInventory = () => {
    let result = "";
    for (let name in inventory) {
        const count = inventory[name];
        const earning = getClockEarning(name);
        const chance = getClockChance(name);
        result += `- ${name} x${count} (💰 ${earning} each, 🎲 chance: ${chance}%)\n`;
    }
    return result || "You have no clocks yet!";
};

const getClockChance = (name) => {
    for (let [clockName, chance] of clocks) {
        if (clockName === name) return chance;
    }
    return "Unknown";
};

const rollClock = () => {
    const roll = Math.random() * 100;
    let total = 0;
    for (let [name, chance] of clocks) {
        total += chance;
        if (roll <= total) return name;
    }
    return clocks[0][0];
};

const rollAction = (rolls = 1) => {
    if (money < rollCost * rolls) {
        feedback.textContent = "🚫 Not enough money!";
        return;
    }
    money -= rollCost * rolls;
    for (let i = 0; i < rolls; i++) {
        const clock = rollClock();
        if (!inventory[clock]) inventory[clock] = 0;
        inventory[clock]++;
    }
    feedback.textContent = `🎉 You rolled ${rolls}x!`;
    updateUI();
};

const nextTurn = () => {
    const earned = calculateIncome();
    money += earned;
    turn++;
    feedback.textContent = `✅ You earned ${earned} this turn!`;
    updateUI();
};

// Add delay before executing next turn
const nextTurnWithDelay = () => {
    setTimeout(() => {
        nextTurn();
    }, 2000); // Delay of 2 seconds
};

// Buttons
const createButton = (label, callback) => {
    const btn = document.createElement("button");
    btn.textContent = label;
    btn.style.margin = "5px";
    btn.onclick = callback;
    document.body.appendChild(btn);
};

createButton("🎲 Roll x1", () => rollAction(1));
createButton("🎲 Roll x10", () => rollAction(10));
createButton("🎲 Roll x100", () => rollAction(100));
createButton("🎲 Roll x1000", () => rollAction(1000));
createButton("🎲 Roll x100000", () => rollAction(100000));
createButton("🎲 Roll x1000000", () => rollAction(1000000));
createButton("🎲 Roll x10000000", () => rollAction(10000000));
document.body.appendChild(document.createElement("br"));
createButton("➡️ Next Turn", nextTurnWithDelay); // Using delayed nextTurn

// Start
updateUI();






