// //var count=0;
// var add=(function ()
// {
//     var count=0;
//     function plus() {
//         count++;
//         return plus();
//     }
//  //  plus()
//
// })()
// add()
// add()
// add()
// //count++
// console.log(add())
// console.log(add())

var add = (function () {
    var counter = 0;
    return function () {counter += 1; return counter}
})();

add();
add();
add();
console.log(counter)



