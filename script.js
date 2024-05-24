document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const feedback = document.getElementById("feedback");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        
        fetch('send_email.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            feedback.textContent = data;
            form.reset();
        })
        .catch(error => {
            feedback.textContent = "Gagal mengirim pesan.";
            console.error('Error:', error);
        });
    });
});
// script.js
// Ketika pengguna scroll ke bawah 20px dari atas dokumen, tampilkan tombol
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

// Ketika tombol ditekan, scroll ke bagian atas dokumen
function scrollToTop() {
    document.body.scrollTop = 0; // Untuk Safari
    document.documentElement.scrollTop = 0; // Untuk Chrome, Firefox, IE dan Opera
}
