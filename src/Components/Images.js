let imgLink = [
  "wp/wp5501287.png",
  "wp/wp5501288.jpg",
  "wp/wp5501309.jpg",
  "wp/wp5501319.jpg",
  "wp/wp5501344.jpg",
  "wp/wp5243211.jpg",
  "wp/wp5501354.jpg",
  "wp/wp5501403.jpg",
  "wp/wp5501422.jpg",
  "wp/wp3008970.jpg",
  "wp/wp5501506.jpg",
  "wp/wp5501503.jpg",
  "wp/wp5501537.jpg",
  "wp/wp5501557.jpg",
  "wp/wp2713320.png",
  "wp/wp5501570.jpg",
  "wp/wp5501587.jpg",
  "wp/wp5501719.jpg",
  "wp/wp5501740.jpg",
  "wp/wp5501832.jpg",
];

let headerImages = [];

imgLink.forEach((v) => {
  headerImages.push(`https://wallpapercave.com/${v}`);
});
let random = Math.floor(Math.random() * headerImages.length);
console.log(random);
console.log(headerImages[random]);
export { headerImages, random };

//https://wallpapercave.com/wp/wp5501287.png
// https://wallpapercave.com/wp/wp5501288.jpg
