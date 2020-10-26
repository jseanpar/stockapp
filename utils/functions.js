const dateCurrent = () => {
    const fecha = new Date();

    let day = fecha.getDate()
    let month = fecha.getMonth() + 1
    let year = fecha.getFullYear()
    var hour = fecha.getHours();
    var min = fecha.getMinutes();
    var sec = fecha.getSeconds();

    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }
    if (hour < 10) {
        hour = '0' + hour;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }

    const currentDateFMT = `${day}/${month}/${year} ${hour}:${min}:${sec}`;

    return currentDateFMT
}



const lib = {
    currentDate: dateCurrent()
}

export default lib