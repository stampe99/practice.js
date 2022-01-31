let array = ["äppel", "banan", "apelsin", "päron"];
let results = [];

for (let i = 0; i < array.length - 1; i++) {
  for (let j = i + 1; j < array.length; j++) {
    results.push(`${array[i]} ${array[j]}`);
  }
}

console.log(results);
