// Dane skrzynek i skórek
const cases = [
    {
        id: 1,
        name: "Skrzynka Przełamująca",
        image: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/cases/case_breakout.7d70a0e1d8d7d8b3d7a7b7b5b5b5b5b5b5b5b5b5.png",
        skins: [
            { name: "M4A1-S | Cyrex", image: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_cu_m4a1s_cyrex_light_large.6a2b9b7b1b8e6a9c1a0a0a0a0a0a0a0a0.png", rarity: "Rzadki", value: "150 zł" },
            { name: "AK-47 | Czerwony Lamina", image: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_redline_light_large.5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d.png", rarity: "Rzadki", value: "120 zł" },
            { name: "AWP | Asiimov", image: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_awp_asimov_light_large.5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d.png", rarity: "Epicki", value: "400 zł" },
            { name: "Desert Eagle | Konspiracja", image: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_cu_deagle_consiracy_light_large.5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d.png", rarity: "Powszechny", value: "20 zł" },
            { name: "USP-S | Caiman", image: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_cu_usp_caiman_light_large.5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d.png", rarity: "Powszechny", value: "15 zł" },
            { name: "M9 Bayonet | Fale", image: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_m9_bayonet_am_doppler_phase4_light_large.5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d.png", rarity: "Legendarny", value: "2000 zł" }
        ]
    },
    {
        id: 2,
        name: "Skrzynka Chromowa",
        image: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/cases/case_chroma.5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d.png",
        skins: [
            { name: "AK-47 | Wulkan", image: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_gs_ak47_bloodsport_light_large.5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d.png", rarity: "Rzadki", value: "200 zł" },
            { name: "M4A4 | Desolate Space", image: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_m4a4_hellfire_light_large.5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d.png", rarity: "Rzadki", value: "180 zł" },
            { name: "AWP | Fever Dream", image: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_gs_awp_fever_dream_light_large.5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d.png", rarity: "Epicki", value: "250 zł" },
            { name: "P90 | Death by Kitty", image: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_cu_p90_death_by_kitty_light_large.5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d.png", rarity: "Powszechny", value: "30 zł" },
            { name: "Glock-18 | Water Elemental", image: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_cu_glock_water_elmental_light_large.5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d.png", rarity: "Powszechny", value: "25 zł" },
            { name: "Karambit | Doppler", image: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_karambit_am_doppler_phase1_light_large.5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d.png", rarity: "Legendarny", value: "2500 zł" }
        ]
    },
    {
        id: 3,
        name: "Skrzynka Gamma",
        image: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/cases/case_gamma.5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d.png",
        skins: [
            { name: "AK-47 | Neon Rider", image: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_gs_ak47_neon_rider_light_large.5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d.png", rarity: "Rzadki", value: "300 zł" },
            { name: "USP-S | Kill Confirmed", image: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_cu_usp_kill_confirmed_light_large.5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d.png", rarity: "Rzadki", value: "220 zł" },
            { name: "AWP | Prince", image: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_gs_awp_prince_light_large.5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d.png", rarity: "Epicki", value: "350 zł" },
            { name: "Desert Eagle | Code Red", image: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_cu_deagle_code_red_light_large.5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d.png", rarity: "Powszechny", value: "40 zł" },
            { name: "M4A4 | Evil Daimyo", image: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_m4a4_evil_daimyo_light_large.5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d.png", rarity: "Powszechny", value: "35 zł" },
            { name: "Nóż Motylkowy | Gamma Doppler", image: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_butterfly_am_doppler_phase2_light_large.5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d.png", rarity: "Legendarny", value: "3000 zł" }
        ]
    }
];

// Zmienne globalne
let currentCase = null;
let rolling = false;
let rollInterval;
let skinsTrack = document.getElementById('skins-track');
let rollScreen = document.getElementById('roll-screen');
let casesGrid = document.getElementById('cases-grid');
let rollButton = document.getElementById('roll-button');
let resultDiv = document.getElementById('result');
let backButton = document.getElementById('back-button');

// Funkcja inicjalizująca - tworzy listę skrzynek
function init() {
    cases.forEach(cs => {
        let caseElement = document.createElement('div');
        caseElement.className = 'case';
        caseElement.innerHTML = `
            <img src="${cs.image}" alt="${cs.name}">
            <div class="case-info">
                <h3>${cs.name}</h3>
                <p>Zawiera ${cs.skins.length} skórek</p>
            </div>
        `;
        caseElement.addEventListener('click', () => openCase(cs));
        casesGrid.appendChild(caseElement);
    });

    // Dodajemy nasłuchiwanie na przycisk losowania
    rollButton.addEventListener('click', startRoll);
    
    // Dodajemy nasłuchiwanie na przycisk powrotu
    backButton.addEventListener('click', () => {
        rollScreen.style.display = 'none';
        resultDiv.style.display = 'none';
        casesGrid.style.display = 'grid';
    });
}

// Funkcja otwierająca skrzynkę
function openCase(cs) {
    currentCase = cs;
    casesGrid.style.display = 'none';
    rollScreen.style.display = 'block';
    document.getElementById('case-name').textContent = cs.name;
    
    // Wyczyszczenie poprzednich skórek
    skinsTrack.innerHTML = '';
    
    // Dodanie skórek do paska
    cs.skins.forEach((skin, index) => {
        let skinElement = document.createElement('div');
        skinElement.className = 'skin-item';
        skinElement.innerHTML = `
            <img src="${skin.image}" alt="${skin.name}">
            <div class="skin-name">${skin.name}</div>
            <div class="skin-rarity rarity-${getRarityClass(skin.rarity)}">${skin.rarity}</div>
        `;
        skinsTrack.appendChild(skinElement);
    });
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

// Funkcja rozpoczynająca losowanie
function startRoll() {
    if (rolling) return;
    
    rolling = true;
    rollButton.disabled = true;
    resultDiv.style.display = 'none';
    
    // Symulacja animacji losowania
    let startTime = Date.now();
    let duration = 3000; // 3 sekundy
    let speed = 20; // początkowa prędkość (ms)
    
    // Resetujemy pozycję
    skinsTrack.style.transform = 'translateX(0)';
    
    // Rozpoczynamy animację
    rollInterval = setInterval(() => {
        // Przesuwamy pasek
        let currentPosition = parseInt(skinsTrack.style.transform.replace('translateX(', '').replace('px)', '') || 0);
        let moveAmount = 180; // szerokość jednego skinu + margines
        skinsTrack.style.transform = `translateX(${currentPosition - moveAmount}px)`;
        
        // Sprawdzamy czy koniec animacji
        if (Date.now() - startTime > duration) {
            endRoll();
            clearInterval(rollInterval);
        }
    }, speed);
}

// Funkcja kończąca losowanie
function endRoll() {
    rolling = false;
    
    // Losujemy zwycięski skin
    let winnerIndex = Math.floor(Math.random() * currentCase.skins.length);
    let winnerSkin = currentCase.skins[winnerIndex];
    
    // Zaznaczamy zwycięski skin
    let skinItems = document.querySelectorAll('.skin-item');
    skinItems.forEach((item, index) => {
        if (index === winnerIndex) {
            item.classList.add('winner');
        } else {
            item.classList.remove('winner');
        }
    });
    
    // Pokazujemy wynik
    showResult(winnerSkin);
}

// Funkcja pokazująca wynik
function showResult(skin) {
    resultDiv.style.display = 'block';
    document.getElementById('result-img').src = skin.image;
    document.getElementById('result-name').textContent = skin.name;
    document.getElementById('result-rarity').textContent = skin.rarity;
    document.getElementById('result-rarity').className = `rarity-${getRarityClass(skin.rarity)}`;
    document.getElementById('result-value').textContent = skin.value;
}

// Inicjalizacja strony po załadowaniu
window.addEventListener('DOMContentLoaded', init);