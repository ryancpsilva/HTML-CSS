var num = []
var n = 0
for (let i = 0; i <= 100; i++ ) {
    num.push(n)
    n++
}

for (j in num){
    for (k in num){
        if (num[j] != 0 && num[j] % num[k] == 0){
            console.log(num[j] + ' j é divisível por ' + num[k])
        }
        if (num[j] != 1 && num[k] % num[j] == 0) {
            console.log(num[k] + " k é divisível por " + num[j])
        }
    }
}