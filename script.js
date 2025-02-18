function buyProduct(productName, productPrice) {
    const buyerPhoneNumber = prompt("Masukkan nomor WhatsApp Anda:");
    if (buyerPhoneNumber) {
        document.getElementById('payment-amount').innerText = `Rp ${productPrice}`;
        const adminFee = 2000; // Biaya admin tetap Rp 2000
        document.getElementById('price-qris').innerText = ` (Rp ${productPrice + adminFee})`;
        document.getElementById('price-dana').innerText = ` (Rp ${productPrice + adminFee})`;
        document.getElementById('price-ovo').innerText = ` (Rp ${productPrice + adminFee})`;
        document.getElementById('price-gopay').innerText = ` (Rp ${productPrice + adminFee})`;
        document.getElementById('price-shopeepay').innerText = ` (Rp ${productPrice + adminFee})`;
        openModal();
    } else {
        alert("Pembelian dibatalkan. Nomor WhatsApp diperlukan untuk melanjutkan pembelian.");
    }
}

function openModal() {
    $('#payment-modal').modal('show');
}

function closeModal() {
    $('#payment-modal').modal('hide');
}

function confirmPayment() {
    const buyerPhoneNumber = prompt("Masukkan nomor WhatsApp Anda untuk konfirmasi pembayaran:");
    if (buyerPhoneNumber) {
        alert(`Pembayaran berhasil dikonfirmasi. Produk akan dikirim ke nomor WhatsApp ${buyerPhoneNumber}.`);
        closeModal();
        // Implementasi pengiriman WhatsApp ke admin bisa ditambahkan di sini
    } else {
        alert("Konfirmasi pembayaran dibatalkan. Nomor WhatsApp diperlukan untuk melanjutkan.");
    }
}
