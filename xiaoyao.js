// function filterList(list,num) {
//     let arr = [];
//     var num=0;
//     for (let i = 0; i < list.length; i++) {
//         if (list[i] %2 === 0 ) {
//             arr.push(list[i]);
//         }
//     }
//     return arr;
// }

function filterList(list, num) {
    let arr = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i] % 2 === 0 && num === 0) {
            arr.push(list[i]);
        }
        else if (list[i] % 2 !== 0 && num === 1) {
            arr.push(list[i]);
        }
        else if (list[i] >= 0 && num === 2) {
            arr.push(list[i]);
        }
        else if (list[i] < 0 && num === 3) {
            arr.push(list[i]);
        }
    }
    return arr;
}

//0 偶数  1奇数   2整数  3负数
console.log(filterList([0, 0, -3, 2, -1, 0, 5], 0));

// 方法一：效率不高，很简洁
function filter_me(filter_arrays, opt) {
    let tmp_arrays = [];
    for (let filter_array of filter_arrays) {
        let filter_content = [filter_array > 0, filter_array < 0, filter_array % 2 === 0, filter_array % 2 !== 0];
        console.log(filter_content);
        if (filter_content[opt]) {
            tmp_arrays.push(filter_array);
        }
    }
    return tmp_arrays;
}
console.log(filter_me([0, -5, -4, -3, -2, -1, 0, 0, 1, 2, 3, 4, 5, 0], 3));

// 方法二：效率高，有点不简洁
function filter_me2(filter_arrays, opt) {
    let tmp_arrays = [];
    for (let filter_array of filter_arrays) {
        let filter_content = [() => filter_array > 0, () => filter_array < 0,
            () => filter_array % 2 === 0, () => filter_array % 2 !== 0];
        if (filter_content[opt]()) {
            tmp_arrays.push(filter_array);
        }
    }
    return tmp_arrays;
}

console.log(filter_me2([0, -5, -4, -3, -2, -1, 0, 0, 1, 2, 3, 4, 5, 0], 3));
