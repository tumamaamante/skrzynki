// Dane skrzynek
const cases = [
    {
        id: 1,
        name: "Skrzynka Przełamująca",
        image: "case_breakout.jpg",
        price: 50,
        skins: [
            { name: "M4A1-S | Cyrex", image: "skin_m4a1s_cyrex.jpg", value: 150, rarity: "Rzadki" },
            { name: "AK-47 | Czerwony Lamina", image: "skin_ak47_redline.jpg", value: 120, rarity: "Rzadki" },
            { name: "AWP | Asiimov", image: "skin_awp_asimov.jpg", value: 400, rarity: "Epicki" },
            { name: "Desert Eagle | Konspiracja", image: "skin_deagle_conspiracy.jpg", value: 20, rarity: "Powszechny" },
            { name: "USP-S | Caiman", image: "skin_usp_caiman.jpg", value: 15, rarity: "Powszechny" },
            { name: "M9 Bayonet | Fale", image: "skin_m9_bayonet_doppler.jpg", value: 2000, rarity: "Legendarny" }
        ]
    },
    {
        id: 2,
        name: "Skrzynka Chromowa",
        image: "case_chroma.jpg",
        price: 60,
        skins: [
            { name: "AK-47 | Wulkan", image: "skin_ak47_vulcan.jpg", value: 200, rarity: "Rzadki" },
            { name: "M4A4 | Desolate Space", image: "skin_m4a4_desolate_space.jpg", value: 180, rarity: "Rzadki" },
            { name: "AWP | Fever Dream", image: "skin_awp_fever_dream.jpg", value: 250, rarity: "Epicki" },
            { name: "P90 | Death by Kitty", image: "skin_p90_death_by_kitty.jpg", value: 30, rarity: "Powszechny" },
            { name: "Glock-18 | Water Elemental", image: "skin_glock_water_elemental.jpg", value: 25, rarity: "Powszechny" },
            { name: "Karambit | Doppler", image: "skin_karambit_doppler.jpg", value: 2500, rarity: "Legendarny" }
        ]
    },
    {
        id: 3,
        name: "Skrzynka Gamma",
        image: "case_gamma.jpg",
        price: 70,
        skins: [
            { name: "AK-47 | Neon Rider", image: "skin_ak47_neon_rider.jpg", value: 300, rarity: "Rzadki" },
            { name: "USP-S | Kill Confirmed", image: "skin_usp_kill_confirmed.jpg", value: 220, rarity: "Rzadki" },
            { name: "AWP | Prince", image: "skin_awp_prince.jpg", value: 350, rarity: "Epicki" },
            { name: "Desert Eagle | Code Red", image: "skin_deagle_code_red.jpg", value: 40, rarity: "Powszechny" },
            { name: "M4A4 | Evil Daimyo", image: "skin_m4a4_evil_daimyo.jpg", value: 35, rarity: "Powszechny" },
            { name: "Nóż Motylkowy | Gamma Doppler", image: "skin_butterfly_gamma_doppler.jpg", value: 3000, rarity: "Legendarny" }
        ]
    }
];

// Stan aplikacji
let balance = 1000;
let currentCase = null;
let rolling = false;
let rollInterval;

// Elementy DOM
const balanceEl = document.querySelector('.balance-value');
const casesGrid = document.getElementById('cases-grid');
const rollSection = document.getElementById('roll-section');
const caseNameEl = document.getElementById('case-name');
const caseCostEl = document.getElementById('case-cost');
const skinsTrack = document.getElementById('skins-track');
const rollButton = document.getElementById('roll-button');
const backButton = document.getElementById('back-button');
const resultDiv = document.getElementById('result');
const resultImg = document.getElementById('result-img');
const resultName = document.getElementById('result-name');
const resultValue = document.getElementById('result-value');
const resultRarity = document.getElementById('result-rarity');
const newBalanceEl = document.getElementById('new-balance');
const casesSection = document.getElementById('cases-section');

// Inicjalizacja
function init() {
    updateBalance();
    renderCases();
    
    // Event listeners
    rollButton.addEventListener('click', startRoll);
    backButton.addEventListener('click', backToCases);
}

// Renderowanie skrzynek
function renderCases() {
    casesGrid.innerHTML = '';
    
    cases.forEach(cs => {
        const caseEl = document.createElement('div');
        caseEl.className = 'case-card';
        caseEl.innerHTML = `
            <img src="images/${cs.image}" alt="${cs.name}">
            <div class="case-info">
                <h3>${cs.name}</h3>
                <p class="case-price">${cs.price} zł</p>
                <p class="case-rarity">Zawiera ${cs.skins.length} skórek</p>
            </div>
        `;
        caseEl.addEventListener('click', () => selectCase(cs));
        casesGrid.appendChild(caseEl);
    });
}

// Wybór skrzynki
function selectCase(cs) {
    currentCase = cs;
    caseNameEl.textContent = cs.name;
    caseCostEl.textContent = cs.price;
    rollSection.classList.remove('hidden');
    casesSection.classList.add('hidden');
    resultDiv.classList.add('hidden');
    
    // Wyczyszczenie i wypełnienie paska skórek
    skinsTrack.innerHTML = '';
    cs.skins.forEach(skin => {
        const skinEl = document.createElement('div');
        skinEl.className = 'skin-item';
        skinEl.innerHTML = `
            <img src="images/${skin.image}" alt="${skin.name}">
            <div class="skin-name">${skin.name}</div>
        `;
        skinsTrack.appendChild(skinEl);
    });
}

// Powrót do wyboru skrzynek
function backToCases() {
    rollSection.classList.add('hidden');
    casesSection.classList.remove('hidden');
}

// Rozpoczęcie losowania
function startRoll() {
    if (rolling || !currentCase) return;
    
    // Sprawdzenie salda
    if (balance < currentCase.price) {
        alert('Nie masz wystarczająco środków!');
        return;
    }
    
    // Pobranie opłaty
    balance -= currentCase.price;
    updateBalance();
    
    rolling = true;
    rollButton.disabled = true;
    resultDiv.classList.add('hidden');
    
    // Animacja losowania
    let startTime = Date.now();
    const duration = 3000; // 3 sekundy
    let speed = 50; // ms
    
    // Reset pozycji
    skinsTrack.style.transform = 'translateX(0)';
    
    // Rozpoczęcie animacji
    rollInterval = setInterval(() => {
        const currentPosition = parseInt(skinsTrack.style.transform.replace('translateX(', '').replace('px)', '') || 0);
        const moveAmount = 180; // szerokość skinu + margines
        skinsTrack.style.transform = `translateX(${currentPosition - moveAmount}px)`;
        
        // Zakończenie po czasie
        if (Date.now() - startTime > duration) {
            endRoll();
            clearInterval(rollInterval);
        }
    }, speed);
}

// Zakończenie losowania
function endRoll() {
    rolling = false;
    rollButton.disabled = false;
    
    // Losowanie skinu
    const winnerIndex = Math.floor(Math.random() * currentCase.skins.length);
    const winnerSkin = currentCase.skins[winnerIndex];
    
    // Zaznaczenie zwycięskiego skinu
    const skinItems = document.querySelectorAll('.skin-item');
    skinItems.forEach((item, index) => {
        if (index === winnerIndex) {
            item.classList.add('winner');
        } else {
            item.classList.remove('winner');
        }
    });
    
    // Aktualizacja salda (dodanie wartości skinu)
    balance += winnerSkin.value;
    updateBalance();
    
    // Wyświetlenie wyniku
    showResult(winnerSkin);
}

// Wyświetlenie wyniku
function showResult(skin) {
    resultImg.src = `images/${skin.image}`;
    resultName.textContent = skin.name;
    resultValue.textContent = skin.value;
    resultRarity.textContent = skin.rarity;
    resultRarity.className = `rarity-${getRarityClass(skin.rarity)}`;
    newBalanceEl.textContent = balance;
    resultDiv.classList.remove('hidden');
}

// Aktualizacja salda
function updateBalance() {
    balanceEl.textContent = balance;
}

// Pomocnicza funkcja do klasy rarytasu
function getRarityClass(rarity) {
    const rarities = {
        'Powszechny': 'common',
        'Niezwykły': 'uncommon',
        'Rzadki': 'rare',
        'Epicki': 'epic',
        'Legendarny': 'legendary'
    };
    return rarities[rarity] || 'common';
}

// Start aplikacji po załadowaniu DOM
document.addEventListener('DOMContentLoaded', init);