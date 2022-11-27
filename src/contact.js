function renderContact(){
    var page = document.getElementById('content')
    const contentCard = document.createElement('div');
    contentCard.setAttribute('id','content-card');

    const heading = document.createElement('h1');
    heading.textContent = 'Contact Us'

    const cardDiv = document.createElement('div');
    cardDiv.setAttribute('id','card')

    const paragraph = document.createElement('p')
    paragraph.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec iaculis aliquam lacinia. Praesent id nunc massa. Aenean at lorem ante. 
    Ut quam odio, tincidunt quis nunc eget, porta dignissim enim. Proin porttitor elit 
    eu eros fermentum, vitae ornare risus efficitur. Donec porta mauris a diam euismod pharetra. 
    In sollicitudin risus vel venenatis lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed iaculis quis felis ut dapibus. Ut non imperdiet dolor. Nullam tristique gravida tellus ultricies 
    bibendum. Nunc convallis vulputate velit vitae vehicula. Nunc nisi arcu, malesuada sit amet tincidunt 
    eget, luctus et purus. Aliquam sit amet scelerisque velit. Nulla ultricies ac nibh id commodo.`

    const paragraph2 = document.createElement('p')
    paragraph2.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec iaculis aliquam lacinia. Praesent id nunc massa. Aenean at lorem ante. 
    Ut quam odio, tincidunt quis nunc eget, porta dignissim enim. Proin porttitor elit 
    eu eros fermentum, vitae ornare risus efficitur. Donec porta mauris a diam euismod pharetra. 
    In sollicitudin risus vel venenatis lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed iaculis quis felis ut dapibus. Ut non imperdiet dolor. Nullam tristique gravida tellus ultricies 
    bibendum. Nunc convallis vulputate velit vitae vehicula. Nunc nisi arcu, malesuada sit amet tincidunt 
    eget, luctus et purus. Aliquam sit amet scelerisque velit. Nulla ultricies ac nibh id commodo.`

    contentCard.replaceChildren(heading, paragraph, paragraph2);
    page.replaceChildren(contentCard);
}

export {renderContact}