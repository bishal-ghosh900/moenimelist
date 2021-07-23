let imgLink = ["wp/wp5501354.jpg"];

let headerImages = [];

imgLink.forEach((v) => {
  headerImages.push(`https://wallpapercave.com/${v}`);
});
let random = Math.floor(Math.random() * headerImages.length);

export { headerImages, random };
