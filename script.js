let selectedProductName = '';
let selectedProductPrice = 0;
let selectedPaymentMethod = '';

function selectProduct(productName, productPrice) {
    selectedProductName = productName;
    selectedProductPrice = productPrice;
    alert(`Anda memilih ${productName} dengan harga Rp ${selectedProductPrice}`);
}

function selectPayment(paymentMethod) {
    selectedPaymentMethod = paymentMethod;
    alert(`Anda memilih metode pembayaran ${paymentMethod}`);
}

function proceedToWhatsApp() {
    const whatsappNumber = document.getElementById('whatsapp-number').value;
    if (!selectedProductName || !whatsappNumber || !selectedPaymentMethod) {
        alert('Lengkapi semua data terlebih dahulu.');
        return;
    }
    const phoneNumber = '6281234567890'; // Ganti dengan nomor WhatsApp Anda
    const message = `Selamat pagi min, aku mau beli *${selectedProductName}*\n\nHarga: Rp *${selectedProductPrice}*\nMetode Pembayaran: *${selectedPaymentMethod}*`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}
