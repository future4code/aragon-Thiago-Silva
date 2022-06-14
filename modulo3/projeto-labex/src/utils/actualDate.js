const actualDate = () => {
    const today = new Date()

    const actualYear = today.getFullYear()

    const actualMonth = today.getMonth() > 9 ?
    `${today.getMonth() + 1}`
    : '0' + (today.getMonth() + 1)

    const actualDay = today.getDate() > 9 ?
    `${today.getDate()}`
    : '0' + today.getDate()

    return actualDay + '/' + actualMonth + '/' + actualYear
} 

export default actualDate