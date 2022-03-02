
const endpoint = "https://api.unsplash.com/";
const accessKey = "O4gjqhjVctHFRgaJ01vzEldtUpBQl-lals7X_G3z_Tg"

function getRandomImage(destination) {
    fetch(endpoint + `photos/random/?query=${destination}&client_id=${accessKey}`)
    .then(console.log(response));
};
