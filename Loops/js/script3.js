//         1
//       1 2 1 
//     1 2 3 2 1
//   1 2 3 4 3 2 1
// 1 2 3 4 5 4 3 2 1

for (let i = 1; i <=5; i++) {
    let str = "";
    for (let k=i;k<5;k++) {
        str += " " + " ";
    }
    for (let j=1;j<=i;j++) {
        str += j + " ";
    }
    for (let j=i-1;j>=1;j--) {
        str += j + " ";
    }
    console.log(str);
}