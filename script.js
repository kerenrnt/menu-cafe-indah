// Data menu dalam bentuk JSON
const menuData = [
    {
        category: "Nasi Goreng",
        type: "makanan",
        items: [
            { name: "Nasi Goreng Biasa", price: 17000 },
            { name: "Nasi Goreng Jakarta", price: 19000 },
            { name: "Nasi Goreng Terasi", price: 19000 },
            { name: "Nasi Goreng Terasi Pedas", price: 19000 },
            { name: "Nasi Goreng Merah Spesial", price: 23000 },
            { name: "Nasi Goreng Kecap Spesial", price: 23000 },
            { name: "Nasi Goreng Putih Spesial", price: 23000 },
            { name: "Nasi Goreng Ikan Asin", price: 20000 },
            { name: "Nasi Goreng Terasi dan Ikan Asing", price: 22000 },
            { name: "Nasi Goreng Komplit", price: 25000 }
        ]
    },
    {
        category: "Nasi Ayam",
        type: "makanan",
        items: [
            { name: "Nasi Ayam Lalapan", price: 20000 },
            { name: "Nasi Ayam Geprek", price: 20000 },
            { name: "Nasi Putih", price: 5000 }
        ]
    },
    {
        category: "Mie",
        type: "makanan",
        items: [
            { name: "Mie Kuah Biasa", price: 18000 },
            { name: "Mie Kuah Spesial", price: 22000 },
            { name: "Mie Goreng Biasa", price: 18000 },
            { name: "Mie Goreng Spesial", price: 22000 },
            { name: "Mie Bakso", price: 17000 }
        ]
    },
    {
        category: "Indomie",
        type: "makanan",
        items: [
            { name: "Indomie Soto dan Telur", price: 15000 },
            { name: "Indomie Kaldu dan Telur", price: 15000 },
            { name: "Indomie Goreng dan Telur", price: 15000 },
            { name: "Indomie Jumbo dan Telur", price: 20000 },
            { name: "Indomie Kaldu", price: 10000},
            { name: "Indomie Goreng", price: 10000 },
            { name: "Indomie Soto", price: 10000 },
            { name: "Kacang", price: 5000 },
        ]
    },
    {
        category: "Gorengan",
        type: "makanan",
        items: [
            { name: "Pisang Peppe", price: 15000 },
            { name: "Pisang Goreng Original", price: 13000 },
            { name: "Pisang Goreng Coklat", price: 17000 },
            { name: "Pisang Goreng Keju", price: 17000 },
            { name: "Pisang Nugget Original", price: 15000 },
            { name: "Pisang Nugget Coklat", price: 17000 },
            { name: "Pisang Nugget Milo", price: 17000 },
            { name: "Pisang Nugget Keju", price: 17000 },
            { name: "Pisang Nugget (Mix 2 rasa)", price: 20000 },
            { name: "Pisang Goreng (Mix 2 rasa)", price: 20000 },
            { name: "Pisang Goreng Palem Sugar", price: 17000 },
            { name: "Pisang Roll Keju", price: 17000 },
            { name: "Pisang Roll Milo", price: 17000 },
            { name: "Pisang Roll Coklat", price: 17000 },
            { name: "Pisang Roll Palem Sugar", price: 17000 },
            { name: "Pisang Roll (Mix 2 rasa)", price: 20000 },
            { name: "Kentang Goreng", price: 17000 },
            { name: "Ubi Goreng", price: 13000 }
        ]
    },
    {
        category: "Roti Bakar",
        type: "makanan",
        items: [
            { name: "Roti Bakar Coklat", price: 17000 },
            { name: "Roti Bakar Keju", price: 17000 },
            { name: "Roti Bakar Mentega Gula", price: 17000 },
            { name: "Roti Bakar Palem Sugar", price: 17000 },
            { name: "Roti Bakar Milo", price: 20000 },
            { name: "Roti Bakar (Mix 2 rasa)", price: 17000 },   
        ]
    },
    {
        category: "Juice",
        type: "minuman",
        items: [
            { name: "Juice Alpokat", price: 18000 },
            { name: "Juice Durian", price: 18000 },
            { name: "Juice Sirsak", price: 18000 },
            { name: "Juice Nangka", price: 18000 },
            { name: "Juice Buah Naga", price: 18000 },
            { name: "Juice Melon", price: 18000 },
            { name: "Juice Mangga", price: 18000 },
            { name: "Juice Apel", price: 18000 },
            { name: "Juice Wortel", price: 17000 },
            { name: "Juice Tomat", price: 17000 },
            { name: "Juice Jeruk", price: 18000 }
        ]
    },
    {
        category: " Minuman Dingin",
        type: "minuman",
        items: [
            { name: "Teh Tarik", price: 15000 },
            { name: "Capucino", price: 15000 },
            { name: "Milo", price: 15000 },
            { name: "Lemon Press", price: 15000 },
            { name: "Lemon Tea", price: 15000 },
            { name: "Sirup Susu", price: 13000 },
            { name: "Green Tea", price: 18000 },
            { name: "Thai Tea", price: 18000 },
            { name: "Es Teh", price: 8000 },
            { name: "Es Teh Jumbo", price: 15000 }
        ]
    },
    {
        category: "Minuman Panas",
        type: "minuman",
        items: [
            { name: "Sarabba Susu", price: 10000 },
            { name: "Sarabba Biasa", price: 5000 },
            { name: "Sarabba Susu dan Telur", price: 15000 },
            { name: "Sarabba Susu, Telur dan Madu", price: 18000 },
            { name: "Capucino Susu", price: 10000 },
            { name: "Milo Susu", price: 10000 },
            { name: "Kopi Susu", price: 10000 },
            { name: "Kopi Hitam", price: 6000 },
            { name: "Teh Susu", price: 10000 },
            { name: "Teh Biasa ", price: 6000 },
            { name: "Teh Biasa Jumbo", price: 10000 },
            { name: "Nescafe Susu", price: 10000 },
            { name: "Coffeemix Susu", price: 10000 },
            { name: "Jeruk Hangat", price: 15000 },
            { name: "Green Tea Panas", price: 15000 },
            { name: "Thai Tea Panas", price: 15000 },
            { name: "Ovaltine Panas", price: 10000 },
            { name: "Lemon Tea Panas", price: 10000 },
            { name: "Lemon Press Panas", price: 13000 }
        ]
    },
    {
        category: "Botol Kaleng",
        type: "minuman",
        items: [
            { name: "Extra Joss", price: 10000 },
            { name: "Kukubima", price: 10000 },
            { name: "Soda Susu", price: 15000 },
            { name: "Karating Daeng", price: 10000 },
            { name: "Maizone", price: 10000 },
            { name: "Susu Beruang", price: 15000 },
            { name: "You C1000", price: 15000 },
            { name: "Fanta Susu", price: 13000 },
            { name: "Sprite Susu", price: 13000 },
            { name: "Cocacola Susu", price: 13000 },
            { name: "Pulpy", price: 10000 },
            { name: "Teh Pucuk", price: 5000 },
            { name: "Air Botol", price: 5000 },
            { name: "Pocari Sweat", price: 10000 }
        ]
    }
];

// Inisialisasi keranjang dari localStorage
let cart = {};

// Fungsi untuk memperbarui jumlah item dalam keranjang
function updateQuantity(itemName, change) {
    cart[itemName] = Math.max(0, (cart[itemName] || 0) + change);

    let quantityInput = document.querySelector(`input[data-quantity="${itemName}"]`);
    if (quantityInput) {
        quantityInput.value = cart[itemName];
    }

    updateCartIcon();
}

// Fungsi untuk filter kategori dan update menu dengan efek transisi
function filterMenu(type) {
    const menuContainer = document.getElementById("menu-container");

    // Tambahkan efek fade-out sebelum mengganti menu
    menuContainer.classList.add("opacity-0", "transition-opacity", "duration-300");

    setTimeout(() => {
        menuContainer.innerHTML = "";

        menuData.forEach(category => {
            if ((type === "all" || category.type === type) && category.items.length > 0) {        
                let categoryDiv = document.createElement("div");
                categoryDiv.classList.add(
                    "p-4", "bg-white", "rounded-lg", "shadow-lg",
                    "transition-all", "duration-300", "hover:scale-105"
                );

                let categoryTitle = document.createElement("h3");
                categoryTitle.classList.add("text-lg", "font-bold", "text-gray-800");
                categoryTitle.textContent = category.category;

                let variantButton = document.createElement("button");
                variantButton.textContent = "Pilih Varian";
                variantButton.classList.add(
                    "bg-yellow-500", "text-white", "px-4", "py-2", 
                    "rounded-full", "mt-3", "hover:bg-yellow-600", 
                    "transition-all", "duration-300"
                );
                variantButton.onclick = () => toggleVariants(category.category);

                let variantContainer = document.createElement("div");
                variantContainer.classList.add(
                    "hidden", "mt-4", "space-y-2", "transition-all", 
                    "duration-500", "ease-in-out"
                );
                variantContainer.id = `variants-${category.category}`;

                category.items.forEach(item => {
                    let itemDiv = document.createElement("div");
                    itemDiv.classList.add(
                        "bg-gray-100", "p-3", "rounded-lg", "flex", 
                        "justify-between", "items-center", "shadow-md"
                    );

                    let itemInfo = document.createElement("div");

                    let itemName = document.createElement("h4");
                    itemName.textContent = item.name;
                    itemName.classList.add("font-semibold", "text-gray-700");

                    let itemPrice = document.createElement("p");
                    itemPrice.textContent = `Rp ${item.price.toLocaleString()}`;
                    itemPrice.classList.add("text-gray-500");

                    itemInfo.appendChild(itemName);
                    itemInfo.appendChild(itemPrice);

                    // Tombol tambah & kurang dengan animasi
                    let quantityContainer = document.createElement("div");
                    quantityContainer.classList.add("flex", "items-center");

                    let minusButton = document.createElement("button");
                    minusButton.textContent = "-";
                    minusButton.classList.add(
                        "bg-red-500", "text-white", "px-3", "py-1", 
                        "rounded-l-lg", "hover:bg-red-600", 
                        "transition-all", "duration-300"
                    );
                    minusButton.onclick = () => updateQuantity(item.name, -1);

                    let quantityInput = document.createElement("input");
                    quantityInput.type = "text";
                    quantityInput.value = cart[item.name] || 0;
                    quantityInput.classList.add("w-10", "text-center", "border", "border-gray-300", "mx-1");
                    quantityInput.readOnly = true;
                    quantityInput.setAttribute("data-quantity", item.name);

                    let plusButton = document.createElement("button");
                    plusButton.textContent = "+";
                    plusButton.classList.add(
                        "bg-blue-500", "text-white", "px-3", "py-1", 
                        "rounded-r-lg", "hover:bg-blue-600", 
                        "transition-all", "duration-300"
                    );
                    plusButton.onclick = () => updateQuantity(item.name, 1);

                    quantityContainer.appendChild(minusButton);
                    quantityContainer.appendChild(quantityInput);
                    quantityContainer.appendChild(plusButton);

                    itemDiv.appendChild(itemInfo);
                    itemDiv.appendChild(quantityContainer);

                    variantContainer.appendChild(itemDiv);
                });

                categoryDiv.appendChild(categoryTitle);
                categoryDiv.appendChild(variantButton);
                categoryDiv.appendChild(variantContainer);

                menuContainer.appendChild(categoryDiv);
            }
        });

        // Tambahkan efek fade-in setelah menu diperbarui
        menuContainer.classList.remove("opacity-0");
    }, 300);
}

// Fungsi untuk menampilkan varian dengan efek animasi
function toggleVariants(category) {
    const variantContainer = document.getElementById(`variants-${category}`);
    
    if (variantContainer.classList.contains("hidden")) {
        variantContainer.classList.remove("hidden");
        variantContainer.style.maxHeight = "0px";
        setTimeout(() => {
            variantContainer.style.maxHeight = variantContainer.scrollHeight + "px";
        }, 10);
    } else {
        variantContainer.style.maxHeight = "0px";
        setTimeout(() => {
            variantContainer.classList.add("hidden");
        }, 300);
    }
}

// Fungsi untuk menghitung total item di keranjang
function getTotalCartItems() {
    return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}

// Fungsi untuk memperbarui ikon keranjang
function updateCartIcon() {
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = getTotalCartItems();
}

// Fungsi untuk memilih metode pembayaran
let selectedPaymentMethod = "";

function selectPayment(method) {
    selectedPaymentMethod = method;
    document.getElementById('payment-method').textContent = method === 'cash' ? 'Cash' : 'QRIS';

    // Menampilkan atau menyembunyikan QRIS Image jika memilih QRIS
    if (method === "qris") {
        document.getElementById("qris-container").classList.remove("hidden"); // Menampilkan gambar QRIS
        document.getElementById("btn-confirm").classList.remove("hidden"); // Menampilkan tombol konfirmasi
    } else {
        document.getElementById("qris-container").classList.add("hidden"); // Menyembunyikan gambar QRIS
        document.getElementById("btn-confirm").classList.remove("hidden"); // Menampilkan tombol konfirmasi
    }
}

// Fungsi untuk mengonfirmasi pembayaran
function confirmPayment() {
    if (!selectedPaymentMethod) {
        alert("Pilih metode pembayaran terlebih dahulu.");
        return;
    }

    let message = selectedPaymentMethod === "cash" ? "Pembayaran berhasil secara tunai!" : "Pembayaran berhasil dengan QRIS!";
    alert(message);

    // Kosongkan keranjang setelah pembayaran
    cart = {};  // Mengosongkan objek keranjang
    
    // Update tampilan keranjang dan ikon keranjang
    updateCartDisplay();
    updateCartIcon();

    
}

// Fungsi untuk memperbarui tampilan keranjang belanja
// Fungsi untuk memperbarui tampilan keranjang belanja
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    cartItemsContainer.innerHTML = "";
    let totalPrice = 0;

    Object.entries(cart).forEach(([itemName, quantity]) => {
        if (quantity > 0) {
            let listItem = document.createElement("li");
            listItem.classList.add("flex", "justify-between", "items-center", "p-2", "border-b");

            let itemText = document.createElement("span");
            itemText.textContent = `${itemName} x ${quantity}`;

            // Tombol hapus item
            let removeButton = document.createElement("button");
            removeButton.textContent = "✖";
            removeButton.classList.add("text-red-500", "text-sm", "hover:text-red-700");
            removeButton.onclick = () => removeItemFromCart(itemName);

            listItem.appendChild(itemText);
            listItem.appendChild(removeButton);
            cartItemsContainer.appendChild(listItem);

            // Hitung total harga
            menuData.forEach(category => {
                category.items.forEach(item => {
                    if (item.name === itemName) {
                        totalPrice += item.price * quantity;
                    }
                });
            });
        }
    });

    // Format total harga ke format Rupiah
    totalPriceElement.textContent = formatRupiah(totalPrice); // Format hanya sekali di sini
}

// Fungsi untuk menghapus item dari keranjang
function removeItemFromCart(itemName) {
    if (cart[itemName]) {
        delete cart[itemName]; // Hapus item dari keranjang
        updateCartDisplay(); // Perbarui tampilan keranjang
    }
}

// Fungsi format harga ke Rupiah
function formatRupiah(angka) {
    return angka.toLocaleString("id-ID");
}

// Fungsi untuk membuka modal keranjang
function openCart() {
    const cartModal = document.getElementById("cart-modal");
    cartModal.classList.remove("hidden", "opacity-0");
    cartModal.classList.add("opacity-100");

    updateCartDisplay();
}

// Fungsi untuk menutup modal keranjang
function closeCart() {
    const cartModal = document.getElementById("cart-modal");
    cartModal.classList.add("opacity-0");

    setTimeout(() => {
        cartModal.classList.add("hidden");
    }, 300);
}

// Event listener untuk menutup modal jika klik di luar modal
document.getElementById("cart-modal").addEventListener("click", (event) => {
    if (event.target === document.getElementById("cart-modal")) {
        closeCart();
    }
});

// Jalankan menu saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    filterMenu("all");
    updateCartIcon();
});
