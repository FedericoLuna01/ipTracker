export const getInfo = async (ip) => {
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_dI8BlFjTv7BkwpS6Lo3j9tZ3baj9S&ipAddress=${ip}`
    try {
        const res = await fetch(url)
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error);
    }
}