let selectedProductName = '';
let selectedProductPrice = 0;

function buyProduct(productName, productPrice) {
    selectedProductName = productName;
    selectedProductPrice = productPrice + 2000; // Tambahkan biaya admin tetap Rp 2000
    openModal();
}

function openModal() {
    $('#payment-modal').modal('show');
}

function closeModal() {
    $('#payment-modal').modal('hide');
}

function confirmPayment() {
    const paymentMethod = document.getElementById('payment-method').value;
    const phoneNumber = '6281535378718'; // Ganti dengan nomor WhatsApp Anda
    const message = `Selamat pagi min, aku mau beli *${selectedProductName}*\n\nHarga: Rp *${selectedProductPrice}*\nMetode Pembayaran: *${paymentMethod}*`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}
