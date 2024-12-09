//  Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.


'use strict';
const urlArr = [
  'https://placebear.com/200/201.jpg',
  'https://placebear.com/200/202.jpg',
  'https://placebear.com/200/203.jpg',
]

// const urlArr = [
//   'https://placekitten.com/200/300',
//   'https://placebear.com/200/300',
//   'https://picsum.photos/200/307',
// ];

const downloadContent = async function (urlArr) {
  try {
    const contents = await Promise.all(
      urlArr.map(async url => {
        try {
          const res = await fetch(url, { mode: 'no-cors' });
          // return await res.text();
          return await res.blob();
        } catch (err) {
          console.error(`Failed to fetch ${url}: ${err.message}`);
          return null;
        }
      })
    );
    return contents;
  } catch (err) {
    console.error(`Error during download: ${err.message}`);
    throw err;
  }
};

downloadContent(urlArr)
  .then(contents => {
    contents.forEach((data, i) => {
      console.log(`Blob from URL ${urlArr[i]} downloaded.`);
    });
  })
  .catch(err => {
    console.error(`Error while downloading: ${err.message}`);
  });
