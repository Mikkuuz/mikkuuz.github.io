const delay = ms => new Promise(res => setTimeout(res, ms));

const redirect = async () => {
    await delay(600);
    location.href="home.html";
}