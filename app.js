// Kalkulyator obyekti yaradılır
const Calculator = {
  // Yaddaş dəyəri
  memory: 0,

  // Toplama üçün metod
  add: function (a, b) {
    const result = a + b;
    this.memory = result;
    return result;
  },

  // Çıxma üçün metod
  subtract: function (a, b) {
    const result = a - b;
    this.memory = result;
    return result;
  },

  // Vurma üçün metod
  multiply: function (a, b) {
    const result = a * b;
    this.memory = result;
    return result;
  },

  // Bölmə üçün metod
  divide: function (a, b) {
    const result = a / b;
    this.memory = result;
    return result;
  },

  // Yaddaşdakı dəyəri oxumaq üçün metod
  recallMemory: function () {
    return this.memory;
  },

  // Yaddaşa dəyər əlavə etmək üçün metod
  addToMemory: function (value) {
    this.memory += value;
  },

  // Yaddaşı təmizləmək üçün metod
  clearMemory: function () {
    this.memory = 0;
  },
};

// Kalkulyatorun istifadəsi
console.log(Calculator.add(5, 3)); // 5 + 3 = 8, memory = 8
console.log(Calculator.subtract(8, 2)); // 8 - 2 = 6, memory = 6
console.log(Calculator.multiply(4, 2)); // 4 * 2 = 8, memory = 8
console.log(Calculator.divide(9, 3)); // 9 / 3 = 3, memory = 3
console.log(Calculator.recallMemory()); // memory dəyəri: 3
Calculator.addToMemory(5); // memory + 5
console.log(Calculator.recallMemory()); // memory dəyəri: 8
Calculator.clearMemory(); // memory təmizlənir
console.log(Calculator.recallMemory()); // memory dəyəri: 0
