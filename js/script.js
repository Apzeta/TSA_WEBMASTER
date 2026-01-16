// =====================
// Load Resources
// =====================
const defaultResources = [
    {
        name: "Local Food Bank",
        category: "food",
        description: "Provides food for families in need.",
        link: "https://foodbank.com"
    },
    {
        name: "Mental Health Support",
        category: "health",
        description: "Support for individuals facing mental health challenges.",
        link: "https://mentalhealth.com"
    },
    {
        name: "Affordable Housing Info",
        category: "housing",
        description: "Information on affordable housing in the area.",
        link: "https://housing.com"
    },
    {
        name: "Community Education Center",
        category: "education",
        description: "Provides educational programs for the community.",
        link: "https://education.com"
    }
];

// Load from localStorage or default
let resources = JSON.parse(localStorage.getItem("resources")) || defaultResources;

// =====================
// Display Resources
// =====================
function displayResources(list) {
    const resourceList = document.getElementById("resource-list");
    if (!resourceList) return;

    resourceList.innerHTML = "";

    list.forEach(resource => {
        const div = document.createElement("div");
        div.className = "resource-card";
        div.innerHTML = `
            <h3>${resource.name}</h3>
            <p>${resource.description}</p>
            <a href="${resource.link}" target="_blank">Learn more</a>
        `;
        resourceList.appendChild(div);
    });
}

// =====================
// Featured Resources
// =====================
function populateHighlights() {
    resources.slice(0, 3).forEach((resource, index) => {
        const el = document.getElementById(`highlight-${index + 1}`);
        if (!el) return;

        el.innerHTML = `
            <h3>${resource.name}</h3>
            <p>${resource.description}</p>
            <a href="${resource.link}" target="_blank">Learn more</a>
        `;
    });
}

// =====================
// Filters
// =====================
function filterResources() {
    const category = document.getElementById("filter-category")?.value;
    if (!category) return;

    const filtered =
        category === "all"
            ? resources
            : resources.filter(r => r.category === category);

    displayResources(filtered);
}

function searchResources() {
    const term = document.getElementById("search-bar")?.value.toLowerCase();
    if (!term) {
        displayResources(resources);
        return;
    }

    const filtered = resources.filter(r =>
        r.name.toLowerCase().includes(term)
    );

    displayResources(filtered);
}

// =====================
// Submit Form
// =====================
const form = document.getElementById("resource-form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const newResource = {
            name: name.value,
            category: category.value,
            description: description.value,
            link: link.value
        };

        resources.push(newResource);
        localStorage.setItem("resources", JSON.stringify(resources));

        alert("Resource added successfully!");
        form.reset();
    });
}

// =====================
// Init on Page Load
// =====================
displayResources(resources);
populateHighlights();
