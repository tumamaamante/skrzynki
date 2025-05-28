// Poprawione dane skrzynek i skórek
const cases = [
    {
        id: 1,
        name: "Skrzynka Przełamująca",
        image: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/730/9e03b8d20b9d199f9b6bcb0e0a2c4d2d8b0f8d0f.png",
        skins: [
            { name: "M4A1-S | Cyrex", image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU4naCaJDoQ74m7k4aPlfL1I77Ux29V4cB5j-vE8YijjFPl-EJkY2D7J9eWcVQ3Y1_B_FG_wu--1ZC7vJ_Nn3Bq6XZz5XfD30vL1RgbwUYbXlQ/360fx360f", rarity: "Rzadki", value: "150 zł" },
            { name: "AK-47 | Czerwony Lamina", image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU4naCaJDoQ74m7k4aPlfL1I77Ux29V4cB5j-vE8YijjFPl-EJkY2D7J9eWcVQ3Y1_B_FG_wu--1ZC7vJ_Nn3Bq6XZz5XfD30vL1RgbwUYbXlQ/360fx360f", rarity: "Rzadki", value: "120 zł" },
            { name: "AWP | Asiimov", image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU4naCaJDoQ74m7k4aPlfL1I77Ux29V4cB5j-vE8YijjFPl-EJkY2D7J9eWcVQ3Y1_B_FG_wu--1ZC7vJ_Nn3Bq6XZz5XfD30vL1RgbwUYbXlQ/360fx360f", rarity: "Epicki", value: "400 zł" },
            { name: "Desert Eagle | Konspiracja", image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU4naCaJDoQ74m7k4aPlfL1I77Ux29V4cB5j-vE8YijjFPl-EJkY2D7J9eWcVQ3Y1_B_FG_wu--1ZC7vJ_Nn3Bq6XZz5XfD30vL1RgbwUYbXlQ/360fx360f", rarity: "Powszechny", value: "20 zł" },
            { name: "USP-S | Caiman", image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU4naCaJDoQ74m7k4aPlfL1I77Ux29V4cB5j-vE8YijjFPl-EJkY2D7J9eWcVQ3Y1_B_FG_wu--1ZC7vJ_Nn3Bq6XZz5XfD30vL1RgbwUYbXlQ/360fx360f", rarity: "Powszechny", value: "15 zł" },
            { name: "M9 Bayonet | Fale", image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU4naCaJDoQ74m7k4aPlfL1I77Ux29V4cB5j-vE8YijjFPl-EJkY2D7J9eWcVQ3Y1_B_FG_wu--1ZC7vJ_Nn3Bq6XZz5XfD30vL1RgbwUYbXlQ/360fx360f", rarity: "Legendarny", value: "2000 zł" }
        ]
    },
    {
        id: 2,
        name: "Skrzynka Chromowa",
        image: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/730/5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d.png",
        skins: [
            { name: "AK-47 | Wulkan", image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU4naCaJDoQ74m7k4aPlfL1I77Ux29V4cB5j-vE8YijjFPl-EJkY2D7J9eWcVQ3Y1_B_FG_wu--1ZC7vJ_Nn3Bq6XZz5XfD30vL1RgbwUYbXlQ/360fx360f", rarity: "Rzadki", value: "200 zł" },
            { name: "M4A4 | Desolate Space", image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU4naCaJDoQ74m7k4aPlfL1I77Ux29V4cB5j-vE8YijjFPl-EJkY2D7J9eWcVQ3Y1_B_FG_wu--1ZC7vJ_Nn3Bq6XZz5XfD30vL1RgbwUYbXlQ/360fx360f", rarity: "Rzadki", value: "180 zł" },
            { name: "AWP | Fever Dream", image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU4naCaJDoQ74m7k4aPlfL1I77Ux29V4cB5j-vE8YijjFPl-EJkY2D7J9eWcVQ3Y1_B_FG_wu--1ZC7vJ_Nn3Bq6XZz5XfD30vL1RgbwUYbXlQ/360fx360f", rarity: "Epicki", value: "250 zł" },
            { name: "P90 | Death by Kitty", image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU4naCaJDoQ74m7k4aPlfL1I77Ux29V4cB5j-vE8YijjFPl-EJkY2D7J9eWcVQ3Y1_B_FG_wu--1ZC7vJ_Nn3Bq6XZz5XfD30vL1RgbwUYbXlQ/360fx360f", rarity: "Powszechny", value: "30 zł" },
            { name: "Glock-18 | Water Elemental", image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU4naCaJDoQ74m7k4aPlfL1I77Ux29V4cB5j-vE8YijjFPl-EJkY2D7J9eWcVQ3Y1_B_FG_wu--1ZC7vJ_Nn3Bq6XZz5XfD30vL1RgbwUYbXlQ/360fx360f", rarity: "Powszechny", value: "25 zł" },
            { name: "Karambit | Doppler", image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU4naCaJDoQ74m7k4aPlfL1I77Ux29V4cB5j-vE8YijjFPl-EJkY2D7J9eWcVQ3Y1_B_FG_wu--1ZC7vJ_Nn3Bq6XZz5XfD30vL1RgbwUYbXlQ/360fx360f", rarity: "Legendarny", value: "2500 zł" }
        ]
    },
    {
        id: 3,
        name: "Skrzynka Gamma",
        image: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/730/5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d.png",
        skins: [
            { name: "AK-47 | Neon Rider", image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU4naCaJDoQ74m7k4aPlfL1I77Ux29V4cB5j-vE8YijjFPl-EJkY2D7J9eWcVQ3Y1_B_FG_wu--1ZC7vJ_Nn3Bq6XZz5XfD30vL1RgbwUYbXlQ/360fx360f", rarity: "Rzadki", value: "300 zł" },
            { name: "USP-S | Kill Confirmed", image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU4naCaJDoQ74m7k4aPlfL1I77Ux29V4cB5j-vE8YijjFPl-EJkY2D7J9eWcVQ3Y1_B_FG_wu--1ZC7vJ_Nn3Bq6XZz5XfD30vL1RgbwUYbXlQ/360fx360f", rarity: "Rzadki", value: "220 zł" },
            { name: "AWP | Prince", image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU4naCaJDoQ74m7k4aPlfL1I77Ux29V4cB5j-vE8YijjFPl-EJkY2D7J9eWcVQ3Y1_B_FG_wu--1ZC7vJ_Nn3Bq6XZz5XfD30vL1RgbwUYbXlQ/360fx360f", rarity: "Epicki", value: "350 zł" },
            { name: "Desert Eagle | Code Red", image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU4naCaJDoQ74m7k4aPlfL1I77Ux29V4cB5j-vE8YijjFPl-EJkY2D7J9eWcVQ3Y1_B_FG_wu--1ZC7vJ_Nn3Bq6XZz5XfD30vL1RgbwUYbXlQ/360fx360f", rarity: "Powszechny", value: "40 zł" },
            { name: "M4A4 | Evil Daimyo", image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU4naCaJDoQ74m7k4aPlfL1I77Ux29V4cB5j-vE8YijjFPl-EJkY2D7J9eWcVQ3Y1_B_FG_wu--1ZC7vJ_Nn3Bq6XZz5XfD30vL1RgbwUYbXlQ/360fx360f", rarity: "Powszechny", value: "35 zł" },
            { name: "Nóż Motylkowy | Gamma Doppler", image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU4naCaJDoQ74m7k4aPlfL1I77Ux29V4cB5j-vE8YijjFPl-EJkY2D7J9eWcVQ3Y1_B_FG_wu--1ZC7vJ_Nn3Bq6XZz5XfD30vL1RgbwUYbXlQ/360fx360f", rarity: "Legendarny", value: "3000 zł" }
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
            <img src="${cs.image}" alt="${cs.name}" onerror="this.onerror=null; this.src='https://via.placeholder.com/260x198?text=${encodeURIComponent(cs.name)}'">
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
            <img src="${skin.image}" alt="${skin.name}" onerror="this.onerror=null; this.src='https://via.placeholder.com/260x194?text=${encodeURIComponent(skin.name)}'">
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