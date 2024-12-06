//  Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.

'use strict';


'use strict';
const urlArr = [
  'https://placebear.com/200/201.jpg',
  'https://placebear.com/200/202.jpg',
  'https://placebear.com/200/203.jpg',
]

const downloadContent = async function (urlArr) {
  try {
    const contents = urlArr.map(url => {
      fetch(url)
        .then(res => {
          if (!res.ok) {
            throw new Error(`Failed to download ${url} with status ${res.statusText}`);
          }
          return res.text();
        })
    });

    return Promise.all(contents);
  }
  catch (err) {
    console.error(err)
  }
}

downloadContent(urlArr)
  .then(contents => {
    contents.forEach((data, i) => {
      console.log(`Data from URL ${urlArr[i]}:`);
      // console.log(data);
    })
  })
  .catch(err) {
  console.error(`Error while downloading, ${err.statusText}`)
}