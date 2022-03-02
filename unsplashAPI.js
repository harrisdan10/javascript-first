const endpoint = "https://api.unsplash.com/";
const accessKey = "O4gjqhjVctHFRgaJ01vzEldtUpBQl-lals7X_G3z_Tg"

const getRandomImage = async (destination) => {
    await fetch(endpoint + `photos/random/?query=${destination}&client_id=${accessKey}`)
    .then((response) => response.json())
    .then((response) => response.urls.full)
    .catch((error) => error);
};

