

let a = 7, b = 8, c = 10, d = 60, e = 50;

if (a <= b && a <= c && a <= d && a <= e) {
    console.log('A is min');
} else if (b <= c && b <= d && b <= e) {
    console.log('B is min');
} else if (c <= d && c <= e) {
    console.log('C is min');
} else if (d <= e) {
    console.log('D is min');
} else {
    console.log('E is min');
}