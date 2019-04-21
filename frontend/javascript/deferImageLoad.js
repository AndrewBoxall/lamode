export default function deferImageLoad() {
  let allImgTags = document.images;

  for (var i = 0; i < allImgTags.length; i++) {
    if(allImgTags[i].getAttribute('data-src')) {
      allImgTags[i].setAttribute('src', allImgTags[i].getAttribute('data-src'));
    }
  }

};
