const bootstrapScript = document.createElement("script");
bootstrapScript.src = "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js";
document.body.appendChild(bootstrapScript);


// CSS 
const style = document.createElement('style');
style.textContent = `
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }

  .main-image {
    width: 960px;
    height: 360px;
    background-color: #333;
    color: #fff;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }

  .small-images-container {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    width: 960px;
  }

  .small-image {
    width: 280px;
    height: 160px;
    background-color: #333;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border: 2px solid #ccc;
  }

  .text-container {
    text-align: left;
    padding-left: 5px;
  }

  .title {
    color: gray;
    font-style: italic;
    margin: 5px 0;
  }

  .description {
    color: gray;
    margin: 0;
  }

  .image-with-text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

// CSS 
document.head.appendChild(style);

const container = document.createElement('div');
container.className = 'container';

const mainImage = document.createElement('div');
mainImage.className = 'main-image';
mainImage.innerText = '960 x 360px';
container.appendChild(mainImage);

const smallImagesContainer = document.createElement('div');
smallImagesContainer.className = 'small-images-container';

for (let i = 0; i < 3; i++) {
  const smallImage = document.createElement('div');
  smallImage.className = 'small-image';
  smallImage.innerText = '280 x 160px';

  // Yazı üçün div
  const textContainer = document.createElement('div');
  textContainer.className = 'text-container';

  const title = document.createElement('h3');
  title.className = 'title';
  title.innerText = 'İndonectetus facilis';

  const description = document.createElement('p');
  description.className = 'description';
  description.innerText = 'Suç ve Ceza (Rus Reformu öncesi Rus Reformu sonrası Rus yazar Fyodor Dostoyevski tarafından yazılan psikolojik ve dram türündeki romandır..';

  textContainer.appendChild(title);
  textContainer.appendChild(description);

  const imageWithText = document.createElement('div');
  imageWithText.className = 'image-with-text';
  imageWithText.appendChild(smallImage);
  imageWithText.appendChild(textContainer);

  smallImagesContainer.appendChild(imageWithText);
}

container.appendChild(smallImagesContainer);
document.body.appendChild(container);
