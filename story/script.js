const topStories = [
    {
        title: "Iran Controls Strait of Hormuz",
        description: "Global oil supply at risk as tensions rise.",
        image: "/images/hormuz-hero.jpg",
        link: "/story/strait-of-hormuz-control.html"
    },
    {
        title: "India Economy 2026",
        description: "Inflation surge, FII exit and oil shock risks.",
        image: "/images/inr-chart.jpg",
        link: "/story/indian-2026-economic-outlook.html"
    },
    {
        title: "Iran–US War Strategy Shift",
        description: "Global oil risk and geopolitical changes.",
        image: "/images/iran-war.jpg",
        link: "/story/iran-us-war-end-game.html"
    },
    {
        title: "Trump Warns Allies on Oil Crisis",
        description: "Shift in alliances as oil disruption impacts markets.",
        image: "/images/trump-allies.jpg",
        link: "/story/trump-warns-allies-on-oil-supply.html"
    }
];

// Get current path
const currentPath = window.location.pathname;

// Filter current article
const filtered = topStories.filter(item => item.link !== currentPath);

// Shuffle and pick 3
const shuffled = filtered.sort(() => 0.5 - Math.random()).slice(0, 3);

// Render safely
const container = document.getElementById("related-container");

if (container) {
    shuffled.forEach(item => {
        const card = `
        <a href="${item.link}" class="related-card">
            <img src="${item.image}" alt="${item.title}" loading="lazy">
            <div class="related-card-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        </a>
        `;
        container.innerHTML += card;
    });
}