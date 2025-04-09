// Load boycott data
let boycottData = [];

fetch('assets/data/boycott-data.json')
    .then(response => response.json())
    .then(data => {
        boycottData = data;
        renderBoycottList(data);
    });

// Render boycott list
function renderBoycottList(data) {
    const container = document.getElementById('boycottList');
    container.innerHTML = '';

    data.forEach(category => {
        const categoryHtml = `
            <div class="boycott-category">
                <h3 class="mb-4">${category.category}</h3>
                <div class="row">
                    ${category.products.map(product => `
                        <div class="col-md-${category.columns} mb-4">
                            <div class="product-card">
                                <h5>${product.brand}</h5>
                                <p><strong>Reason:</strong> ${product.reason}</p>
                                <p><strong>Alternatives:</strong> ${product.alternatives.join(', ')}</p>
                                <small>Source: <a href="${product.source}" target="_blank">${product.source}</a></small>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        container.innerHTML += categoryHtml;
    });
}

// Search function
function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = boycottData.map(category => ({
        ...category,
        products: category.products.filter(product =>
            product.brand.toLowerCase().includes(query) ||
            product.alternatives.some(alt => alt.toLowerCase().includes(query)))
    }));
    renderBoycottList(filtered);
}

// Download CSV
function downloadList() {
    const flatData = boycottData.flatMap(category =>
        category.products.map(product => ({
            Category: category.category,
            Brand: product.brand,
            Reason: product.reason,
            Alternatives: product.alternatives.join(', '),
            Source: product.source
        }))
    );

    const csv = Papa.unparse(flatData);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'boycott-list.csv';
    a.click();
}