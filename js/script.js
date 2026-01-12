const resources = [
    { name: "Local Food Bank", category: "Food", description: "Provides food for families in need.", link: "https://foodbank.com" },
    { name: "Mental Health Support", category: "Health", description: "Support for individuals facing mental health challenges.", link: "https://mentalhealth.com" },
    { name: "Affordable Housing Info", category: "Housing", description: "Information on affordable housing in the area.", link: "https://housing.com" },
    { name: "Community Education Center", category: "Education", description: "Provides educational programs for the community.", link: "https://education.com" }
];

// Function to display resources in the directory
function displayResources(filteredResources) {
    const resourceList = document.getElementById("resource-list");
    resourceList.innerHTML = '';  // Clear existing list

    filteredResources.forEach(resource => {
        const div = document.createElement('div');
        div.classList.add('resource-card');
        div.innerHTML = `
            <h3>${resource.name}</h3>
            <p>${resource.description}</p>
            <a href="${resource.link}" target="_blank">Learn more</a>
        `;
        resourceList.appendChild(div);
    });
}

// Function to display featured resources
function populateHighlights() {
    const highlightResources = resources.slice(0, 3); // Get the first 3 resources
    highlightResources.forEach((resource, index) => {
        const highlightDiv = document.getElementById(`highlight-${index + 1}`);
        highlightDiv.innerHTML = `
            <h3>${resource.name}</h3>
            <p>${resource.description}</p>
            <a href="${resource.link}" target="_blank">Learn more</a>
        `;
    });
}

// Filter function for the directory
function filterResources() {
    const category = document.getElementById("filter-category").value;
    const filtered = category === "all" ? resources : resources.filter(r => r.category === category);
    displayResources(filtered);
}

// Search function for the directory
function searchResources() {
    const searchTerm = document.getElementById("search-bar").value.toLowerCase();
    const filtered = resources.filter(r => r.name.toLowerCase().includes(searchTerm));
    displayResources(filtered);
}

// Submit new resource
document.getElementById("resource-form")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const newResource = {
        name: document.getElementById("name").value,
        category: document.getElementById("category").value,
        description: document.getElementById("description").value,
        link: document.getElementById("link").value
    };

    resources.push(newResource);
    alert('New resource added successfully!');
});
