const script = document.createElement('script');

script.src = 'https://ipinfo.io?callback=getJson';
document.body.appendChild(script);
document.body.removeChild(script);

function getJson(data) {
    var ipNode = document.createElement('h2');
    ipNode.innerHTML = "ip : " + data.ip;
    document.body.appendChild(ipNode);

    var hostnameNode = document.createElement('p');
    hostnameNode.innerHTML = "hostname : " + data.hostname;
    document.body.appendChild(hostnameNode);

    var cityNode = document.createElement('p');
    cityNode.innerHTML = "city : " + data.city;
    document.body.appendChild(cityNode);

    var regionNode = document.createElement('p');
    regionNode.innerHTML = "region : " + data.region;
    document.body.appendChild(regionNode);

    var countryNode = document.createElement('p');
    countryNode.innerHTML = "country : " + data.country;
    document.body.appendChild(countryNode);

    var locNode = document.createElement('p');
    locNode.innerHTML = "location : " + data.loc;
    document.body.appendChild(locNode);

    var orgNode = document.createElement('p');
    orgNode.innerHTML = "organization : " + data.org;
    document.body.appendChild(orgNode);

    var postalNode = document.createElement('p');
    postalNode.innerHTML = "postal : " + data.postal;
    document.body.appendChild(postalNode);

    var timezoneNode = document.createElement('p');
    timezoneNode.innerHTML = "timezone : " + data.timezone;
    document.body.appendChild(timezoneNode);

    var readmeNode = document.createElement('p');
    readmeNode.innerHTML = "readme : " + data.readme;
    document.body.appendChild(readmeNode);
}