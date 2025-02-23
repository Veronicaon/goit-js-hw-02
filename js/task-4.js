`use scrict`
function checkForSpam(message) {
    // Приведення рядка до нижнього регістру для коректної перевірки
    const lowerCaseMessage = message.toLowerCase();
    
    // Перевірка на наявність заборонених слів "spam" або "sale"
    return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
}

// Перевірка коректності функції
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
