function ManipulasiDeret(n) {
    var bilangDeret = ' ';
    for (i = 1; i <= n; i++) {
        if (i % 3 === 0) {
            bilangDeret += 'Chandra ';
        }else if (i % 4 === 0) {
            bilangDeret += 'Tera ';
        }else {
            bilangDeret += i + ' ';
        }
    }
    return bilangDeret;
}
console.log(ManipulasiDeret(10));
console.log(ManipulasiDeret(20));
console.log(ManipulasiDeret(30));