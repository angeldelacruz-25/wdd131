
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    // Extra Temples
    {
        templeName: "San Juan Puerto Rico",
        location: "San Juan, Puerto Rico",
        dedicated: "2023, January, 15",
        area: 6988,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/b8e8764466cb11eda40eeeeeac1ead22054ff7fc/full/800%2C/0/default?lang=eng"
    },
    {
        templeName: "Santo Domingo Dominican Republic",
        location: "Santo Domingo, Dominican Republic",
        dedicated: "2000, September, 17",
        area: 67000,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/bd7519e3369d1f82b7470f7d16f1ab92504246b1/full/800%2C/0/default?lang=eng"
    },
    {
        templeName: "San Pedro Sula Honduras",
        location: "San Pedro Sula, Honduras",
        dedicated: "2024, October, 13",
        area: 35818,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/Usqhjku9xyRSHqRwNaqaXs8ONHRjxnruvehdhtcp/full/800%2C/0/default?lang=eng"
    }

];

// Generate temple cards
function displayTemples(templeList) {

    const container = document.querySelector("#temples-container");

    container.innerHTML = "";

    templeList.forEach((temple) => {

        const card = document.createElement("article");
        card.classList.add("temple-card");

        const name = document.createElement("h3");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

        const area = document.createElement("p");
        area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = `${temple.templeName} Temple`;
        image.loading = "lazy";

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        container.appendChild(card);
    });
}

// Filter temples
function filterTemples(category) {

    let filteredTemples = temples;

    if (category === "old") {
        filteredTemples = temples.filter(temple =>
            new Date(temple.dedicated).getFullYear() < 1900
        );
    }

    else if (category === "new") {
        filteredTemples = temples.filter(temple =>
            new Date(temple.dedicated).getFullYear() > 2000
        );
    }

    else if (category === "large") {
        filteredTemples = temples.filter(temple =>
            temple.area > 90000
        );
    }

    else if (category === "small") {
        filteredTemples = temples.filter(temple =>
            temple.area < 10000
        );
    }

    displayTemples(filteredTemples);
}

// Navigation events
document.querySelector("#home").addEventListener("click", (event) => {
    event.preventDefault();
    filterTemples("home");
});

document.querySelector("#old").addEventListener("click", (event) => {
    event.preventDefault();
    filterTemples("old");
});

document.querySelector("#new").addEventListener("click", (event) => {
    event.preventDefault();
    filterTemples("new");
});

document.querySelector("#large").addEventListener("click", (event) => {
    event.preventDefault();
    filterTemples("large");
});

document.querySelector("#small").addEventListener("click", (event) => {
    event.preventDefault();
    filterTemples("small");
});

// Footer information
document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    document.lastModified;

// Display all temples when page loads
displayTemples(temples);
