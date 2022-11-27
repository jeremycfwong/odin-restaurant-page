function renderMenu(){
    var page = document.getElementById('content')
    const contentCard = document.createElement('div');
    contentCard.setAttribute('id','content-card');
    
    const heading = document.createElement('h1');
    heading.textContent = 'Menu'

    const expand = createExpand('expand', 
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec iaculis aliquam lacinia. Praesent id nunc massa. Aenean at lorem ante. 
    Ut quam odio, tincidunt quis nunc eget, porta dignissim enim. Proin porttitor elit 
    eu eros fermentum, vitae ornare risus efficitur. Donec porta mauris a diam euismod pharetra. 
    In sollicitudin risus vel venenatis lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed iaculis quis felis ut dapibus. Ut non imperdiet dolor. Nullam tristique gravida tellus ultricies 
    bibendum. Nunc convallis vulputate velit vitae vehicula. Nunc nisi arcu, malesuada sit amet tincidunt 
    eget, luctus et purus. Aliquam sit amet scelerisque velit. Nulla ultricies ac nibh id commodo.`)

    const expand2 = createExpand('expand2', `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec iaculis aliquam lacinia. Praesent id nunc massa. Aenean at lorem ante. 
    Ut quam odio, tincidunt quis nunc eget, porta dignissim enim. Proin porttitor elit 
    eu eros fermentum, vitae ornare risus efficitur. Donec porta mauris a diam euismod pharetra. 
    In sollicitudin risus vel venenatis lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed iaculis quis felis ut dapibus. Ut non imperdiet dolor. Nullam tristique gravida tellus ultricies 
    bibendum. Nunc convallis vulputate velit vitae vehicula. Nunc nisi arcu, malesuada sit amet tincidunt 
    eget, luctus et purus. Aliquam sit amet scelerisque velit. Nulla ultricies ac nibh id commodo.`);

    const expand3 = createExpand('expand3', `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec iaculis aliquam lacinia. Praesent id nunc massa. Aenean at lorem ante. 
    Ut quam odio, tincidunt quis nunc eget, porta dignissim enim. Proin porttitor elit 
    eu eros fermentum, vitae ornare risus efficitur. Donec porta mauris a diam euismod pharetra. 
    In sollicitudin risus vel venenatis lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed iaculis quis felis ut dapibus. Ut non imperdiet dolor. Nullam tristique gravida tellus ultricies 
    bibendum. Nunc convallis vulputate velit vitae vehicula. Nunc nisi arcu, malesuada sit amet tincidunt 
    eget, luctus et purus. Aliquam sit amet scelerisque velit. Nulla ultricies ac nibh id commodo.`);

    contentCard.replaceChildren(heading, expand, expand2, expand3);
    page.replaceChildren(contentCard);

    collapse()
}

function collapse() {
    var collapseItem = document.getElementsByClassName('collapse');

    for (const item of collapseItem){
        item.addEventListener('click', function(){
            this.classList.toggle('active');
            var content = this.nextElementSibling;
            if (content.style.display === 'block'){
                content.style.display = 'none'
            } else {
                content.style.display = 'block'
            }
        })
    }
}

function createExpand(content, paraContent){
    const expandButton = document.createElement('button')
    expandButton.setAttribute('class', 'collapse')
    expandButton.textContent = content

    const paragraph = document.createElement('p')
    paragraph.setAttribute('class', 'content')
    paragraph.textContent = paraContent

    const wrapper = document.createElement('div')
    wrapper.setAttribute('class', 'wrap')

    wrapper.replaceChildren(expandButton,paragraph)

    return wrapper
}


export {renderMenu}