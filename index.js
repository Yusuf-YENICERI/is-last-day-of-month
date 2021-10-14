//                                       BİSMİLLAHİRRAHMANİRRAHİM


checkLastDay = () => {
    return new Date(Date.now() + 86400000).getDate() === 1;
}

module.exports = checkLastDay;