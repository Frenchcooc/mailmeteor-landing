var addons = document.getElementsByClassName("MXVRVd");
var addonsList = [];
var today = new Date();
var ajd = today.toISOString().substring(0, 10)

for (let key in addons) {
    let addon = addons[key]

    if (!addon || !addon.innerText) {
        continue;
    }

    let app = addon.childNodes

    addonsList.push({
        name: app[0].innerText,
        rating: app[1].innerText.replace('(', '').replace(')', ''),
        average: addon.querySelector('[itemprop=ratingValue]').getAttribute('content'),
        users: app[2].innerText.replace(/,/g, '.').replace(' users', '')
    })
}
console.log(addonsList);

for (let i = 0; i < 20; i++) {
    console.log(addonsList[i].name + '\t' + addonsList[i].users + '\t' + addonsList[i].rating + '\t' + addonsList[i].average + '\t' + ajd)
}

//si tu veux automatiser ça pour envoyer dans un google sheet, il te faudra .replace(/VM[0-9]+/ , ‘’)