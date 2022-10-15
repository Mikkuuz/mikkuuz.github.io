const delay = ms => new Promise(res => setTimeout(res, ms));

const redirect = async (name) => {
    await delay(600);
    location.href=name;
}