primos:
for (let z = 0; z < 11; z++) {
    if (z <= 1) {
        console.log(z + " Es numero primo");
        continue primos;
    }
    for (let i = 2; i < z; i++) {
        if (z % i == 0) {
        console.log(z + " Es numero primo");
        }
    continue primos;
    }
}
