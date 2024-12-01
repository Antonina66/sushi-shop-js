class Products {
  render() {
    let htmlCatalog = '';

    CATALOG.forEach(({ id, name, cost, img, composition }) => {
      htmlCatalog += `
        <li class='products-element'>
            <span class='name'>${name}</span>
            <img class='img' src='${img}'></img>
            <span class='compositio'>${composition}</span>
            <div class='products-element__footer'>
                <span class='cost'>
                    <span class='rub'>₽</span>
                    ${cost}
                </span>
                <button class='products-element__btn'>Заказать</button>
            </div>
        </li>
        `;
    });

    const html = `
        <ul class='products-container'>
            ${htmlCatalog}
        </ul>
    `;

    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();
productsPage.render();
