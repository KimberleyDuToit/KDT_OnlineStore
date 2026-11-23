window.FrondCart = {
    quantity(item) {
        return Number.isInteger(item.quantity) && item.quantity > 0 ? item.quantity : 1;
    },

    normalize(items) {
        if (!Array.isArray(items)) {
            throw new TypeError('Saved cart data must be an array.');
        }

        return items.map(item => Object.assign({}, item, {
            quantity: this.quantity(item),
        }));
    },

    load() {
        const saved = localStorage.getItem('taskArrStorage');
        return saved === null ? [] : this.normalize(JSON.parse(saved));
    },

    save(items) {
        localStorage.setItem('taskArrStorage', JSON.stringify(items));
        localStorage.setItem('totalStorage', JSON.stringify(this.total(items)));
    },

    add(items, product, quantity) {
        const existing = items.find(item => item.name === product.name);

        if (existing) {
            existing.quantity = this.quantity(existing) + quantity;
            return;
        }

        items.push(Object.assign({}, product, { quantity }));
    },

    count(items) {
        return items.reduce((count, item) => count + this.quantity(item), 0);
    },

    total(items) {
        return items.reduce((total, item) => total + Number(item.price) * this.quantity(item), 0);
    },
};
