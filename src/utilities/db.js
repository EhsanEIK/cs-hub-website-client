// set the dark mode in local storage
const addToDb = value => {
    localStorage.setItem('dark', JSON.stringify(value))
}

// get the current mode from local storage
const getDataFromDb = () => {
    const getData = localStorage.getItem('dark');
    if (getData) {
        const data = JSON.parse(getData);
        return data;
    }
}

export { addToDb, getDataFromDb };