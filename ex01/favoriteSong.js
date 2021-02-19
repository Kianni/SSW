let favoriteSongs = [
    "Gene Pitney: Something's Gotten Hold of My Heart",
    "Kirka: Ei rakkaus yötä pelkää",
    "Jason Derulo: Take You Dancing",
    "Oxxxymiron: Переплетено",
    "Udo Jürgens: Liebe ohne Leiden",
    "Юрий Гуляев: Голубая тайга"
]

let number;
while (!(number in favoriteSongs)){
    number = Math.round(Math.random() * 10);
}
console.log(favoriteSongs[number]);