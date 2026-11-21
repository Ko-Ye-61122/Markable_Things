function preLoadImg(url) {
    return new Promise((resolve, reject) => {
    // const img = new Image();
    // img.onload = () => resolve(img);
    // img.onerror = () => reject(new Error(`Failed to load image at ${url}`));
    // img.src = url;
    // img.alt = 'a beautiful scene';

    const img = new Image();
    img.src = url;
    img.alt = 'a beautiful scene';
    img.addEventListener('load', () => resolve(img));
    img.addEventListener('error', () => reject('img has NOT loaded'));
  });
}

try {
    const results = await preLoadImg('https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenic1.jpg');
    console.log(results)
    document.getElementById('img-container').appendChild(results)
} catch (err) {
    console.log(err)
}