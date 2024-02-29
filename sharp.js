const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/heroes');
const destination = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(destination)) {
fs.mkdirSync(destination);
}

fs.readdirSync(target)
      .forEach((image) => {
            sharp(`${target}/${image}`)
                  .resize(1300)
                  .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
                  .slice(0, -1)
                  .join('.')}-x_large.jpg`));

            sharp(`${target}/${image}`)
                  .resize(800)
                  .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
                  .slice(0, -1)
                  .join('.')}-large.jpg`));

            sharp(`${target}/${image}`)
                  .resize(600)
                  .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
                  .slice(0, -1)
                  .join('.')}-medium.jpg`));

            sharp(`${target}/${image}`)
                  .resize(430)
                  .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
                  .slice(0, -1)
                  .join('.')}-small.jpg`));

            sharp(`${target}/${image}`)
                  .resize(800)
                  .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
                  .slice(0, -1)
                  .join('.')}-large.webp`));

            sharp(`${target}/${image}`)
                  .resize(600)
                  .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
                  .slice(0, -1)
                  .join('.')}-medium.webp`));

            sharp(`${target}/${image}`)
                  .resize(430)
                  .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
                  .slice(0, -1)
                  .join('.')}-small.webp`));
});
