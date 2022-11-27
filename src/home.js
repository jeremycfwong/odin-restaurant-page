import placeholder from './placeholder.png';

function renderHome(){
    var page = document.getElementById('content')
    const contentCard = document.createElement('div');
    contentCard.setAttribute('id','content-card');

    const heading = document.createElement('h1');
    heading.textContent = 'A Restaurant Page!'

    const paraImage = document.createElement('img')
    paraImage.src = placeholder

    const paragraphText = document.createElement('p');
    paragraphText.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec iaculis aliquam lacinia. Praesent id nunc massa. Aenean at lorem ante. 
    Ut quam odio, tincidunt quis nunc eget, porta dignissim enim. Proin porttitor elit 
    eu eros fermentum, vitae ornare risus efficitur. Donec porta mauris a diam euismod pharetra. 
    In sollicitudin risus vel venenatis lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed iaculis quis felis ut dapibus. Ut non imperdiet dolor. Nullam tristique gravida tellus ultricies 
    bibendum. Nunc convallis vulputate velit vitae vehicula. Nunc nisi arcu, malesuada sit amet tincidunt 
    eget, luctus et purus. Aliquam sit amet scelerisque velit. Nulla ultricies ac nibh id commodo.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec iaculis aliquam lacinia. Praesent id nunc massa. Aenean at lorem ante. 
    Ut quam odio, tincidunt quis nunc eget, porta dignissim enim. Proin porttitor elit 
    eu eros fermentum, vitae ornare risus efficitur. Donec porta mauris a diam euismod pharetra. 
    In sollicitudin risus vel venenatis lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed iaculis quis felis ut dapibus. Ut non imperdiet dolor. Nullam tristique gravida tellus ultricies 
    bibendum. Nunc convallis vulputate velit vitae vehicula. Nunc nisi arcu, malesuada sit amet tincidunt 
    eget, luctus et purus. Aliquam sit amet scelerisque velit. Nulla ultricies ac nibh id commodo.`

    const paragraph = document.createElement('div')
    paragraph.setAttribute('class', 'side-by-side')
    paragraph.replaceChildren(paraImage, paragraphText)

    const para2Image = document.createElement('img')
    para2Image.src = placeholder

    const paragraph2Text = document.createElement('p')
    paragraph2Text.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec iaculis aliquam lacinia. Praesent id nunc massa. Aenean at lorem ante. 
    Ut quam odio, tincidunt quis nunc eget, porta dignissim enim. Proin porttitor elit 
    eu eros fermentum, vitae ornare risus efficitur. Donec porta mauris a diam euismod pharetra. 
    In sollicitudin risus vel venenatis lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed iaculis quis felis ut dapibus. Ut non imperdiet dolor. Nullam tristique gravida tellus ultricies 
    bibendum. Nunc convallis vulputate velit vitae vehicula. Nunc nisi arcu, malesuada sit amet tincidunt 
    eget, luctus et purus. Aliquam sit amet scelerisque velit. Nulla ultricies ac nibh id commodo.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec iaculis aliquam lacinia. Praesent id nunc massa. Aenean at lorem ante. 
    Ut quam odio, tincidunt quis nunc eget, porta dignissim enim. Proin porttitor elit 
    eu eros fermentum, vitae ornare risus efficitur. Donec porta mauris a diam euismod pharetra. 
    In sollicitudin risus vel venenatis lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed iaculis quis felis ut dapibus. Ut non imperdiet dolor. Nullam tristique gravida tellus ultricies 
    bibendum. Nunc convallis vulputate velit vitae vehicula. Nunc nisi arcu, malesuada sit amet tincidunt 
    eget, luctus et purus. Aliquam sit amet scelerisque velit. Nulla ultricies ac nibh id commodo.`
    const paragraph2 = document.createElement('div')
    paragraph2.setAttribute('class', 'side-by-side')
    paragraph2.replaceChildren(paragraph2Text, para2Image)
    
    contentCard.replaceChildren(heading, paragraph, paragraph2);
    page.replaceChildren(contentCard)
}

export {renderHome}