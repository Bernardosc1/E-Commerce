const products = [
    {
        name: "Syltherine",
        description: "Stylish cafe chair",
        currentPrice: "Rp 2.500.000",
        originalPrice: "Rp 3.500.000",
        discount: "30%",
        image: "../imgs/home/image 1.png",
        isNew: false
    },
    {
        name: "Leviosa",
        description: "Stylish cafe chair",
        currentPrice: "Rp 2.500.000",
        originalPrice: null,
        discount: null,
        image: "../imgs/home/image 2.png",
        isNew: false
    },
    {
        name: "Lolito",
        description: "Luxury big sofa",
        currentPrice: "Rp 7.000.000",
        originalPrice: "Rp 14.000.000",
        discount: null,
        image: "../imgs/home/image 3.png",
        isNew: false
    },
    {
        name: "Respira",
        description: "Outdoor bar table and stool",
        currentPrice: "Rp 500.000",
        originalPrice: null,
        discount: null,
        image: "../imgs/home/image 4.png",
        isNew: false
    },
    {
        name: "Grifo",
        description: "Night lamp",
        currentPrice: "Rp 1.500.000",
        originalPrice: null,
        discount: null,
        image: "../imgs/home/image 5.png",
        isNew: false
    },
    {
        name: "Muggo",
        description: "Small mug",
        currentPrice: "Rp 150.000",
        originalPrice: null,
        discount: null,
        image: "../imgs/home/image 6.png",
        isNew: false
    },
    {
        name: "Pingky",
        description: "Cute bed set",
        currentPrice: "Rp 7.000.000",
        originalPrice: "Rp 14.000.000",
        discount: null,
        image: "../imgs/home/image 7.png",
        isNew: false
    },
    {
        name: "Potty",
        description: "Minimalist flower pot",
        currentPrice: "Rp 500.000",
        originalPrice: null,
        discount: null,
        image: "../imgs/home/image 8.png",
        isNew: false
    }
    // Adicione mais produtos conforme necessário
];

document.addEventListener('DOMContentLoaded', () => {
    const productsGrid = document.querySelector('.section-products');
    if (productsGrid) {
        productsGrid.innerHTML = products.map(product => createProductCard(product)).join('');
    } else {
        console.error("Container de produtos não encontrado.");
    }
});

function createProductCard(product) {
    return `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                ${product.discount ? 
                    `<span class="product-badge badge-discount">-${product.discount}</span>` : 
                    product.isNew ? 
                    `<span class="product-badge badge-new">New</span>` : 
                    ''}
            </div>
            <div class="product-info">
                <h2 class="product-name">${product.name}</h2>
                <p class="product-description">${product.description}</p>
                <div class="product-price">
                    <span class="current-price">${product.currentPrice}</span>
                    ${product.originalPrice ? 
                        `<span class="original-price">${product.originalPrice}</span>` : 
                        ''}
                </div>
                <div class="product-actions">
                    <button class="action-button add-to-cart">Add to cart</button>
                    <button class="action-button action-icon">♡</button>
                    <button class="action-button action-icon">⇄</button>
                </div>
            </div>
        </div>
    `;
}

        // Adicionar eventos aos botões
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('add-to-cart')) {
                // Implementar lógica do carrinho
                console.log('Adicionado ao carrinho');
            } else if (e.target.classList.contains('action-icon')) {
                // Implementar lógica para favoritos/comparar
                console.log('Ação do ícone clicada');
            }
        });

        // Inicializar a página
        renderProducts();

// Adicionar eventos aos botões
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
        // Implementar lógica do carrinho
        console.log('Adicionado ao carrinho');
    } else if (e.target.classList.contains('action-icon')) {
        // Implementar lógica para favoritos/comparar
        console.log('Ação do ícone clicada');
    }
     
});

// Inicializar a página
function showed() {
    try {
        const showedResults = document.getElementById("showed-results");
        const totalResults = document.getElementById("total-results");
        const selectShow = document.getElementById("select-show");
        
        // Verifique se os elementos existem
        if (!showedResults || !totalResults || !selectShow) {
            console.error("Elementos não encontrados");
            return;
        }
        
        // Atualiza os valores diretamente
        showedResults.innerText = selectShow.value;
        
        // Certifique-se de que `products` está definido
        if (typeof products !== 'undefined') {
            totalResults.innerText = products.length;
        } else {
            console.error("A variável 'products' não está definida.");
        }
        
    } catch (error) {
        console.error("Erro ao atualizar os resultados:", error);
    }
}

// Função de inicialização
function initializeShop() {
    try {
        showed();
        
        const selectShow = document.getElementById("select-show");
        if (selectShow) {
            selectShow.addEventListener('change', showed);
        }
    } catch (error) {
        console.error("Erro na inicialização:", error);
    }
}

// Aguarda o DOM carregar
document.addEventListener('DOMContentLoaded', initializeShop);
