const delay = ms => new Promise(res => setTimeout(res, ms));

const redirect = async (name) => {
    await delay(1600);
    location.href=name;
}