
// Donation page functionality
document.addEventListener('DOMContentLoaded', function() {
    const itemDonationType = document.getElementById('itemDonation');
    const moneyDonationType = document.getElementById('moneyDonation');
    const itemForm = document.getElementById('itemDonationForm');
    const moneyForm = document.getElementById('moneyDonationForm');
    const successMessage = document.getElementById('successMessage');

    // Toggle between donation types
    itemDonationType.addEventListener('click', function() {
        itemDonationType.classList.add('active');
        moneyDonationType.classList.remove('active');
        itemForm.classList.add('active');
        moneyForm.classList.remove('active');
    });

    moneyDonationType.addEventListener('click', function() {
        moneyDonationType.classList.add('active');
        itemDonationType.classList.remove('active');
        moneyForm.classList.add('active');
        itemForm.classList.remove('active');
    });

    // Amount selection for money donation
    const amountButtons = document.querySelectorAll('.amount-btn');
    const customAmountInput = document.querySelector('.custom-amount');
    let selectedAmount = 0;

    amountButtons.forEach(button => {
        button.addEventListener('click', function() {
            amountButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            selectedAmount = parseInt(this.dataset.amount);
            customAmountInput.value = '';
        });
    });

    customAmountInput.addEventListener('input', function() {
        amountButtons.forEach(btn => btn.classList.remove('active'));
        selectedAmount = parseInt(this.value) || 0;
    });

    // Item donation form submission
    const itemFormElement = document.getElementById('itemForm');
    if (itemFormElement) {
        itemFormElement.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Processando...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                document.querySelector('.donation-main').style.display = 'none';
                successMessage.style.display = 'block';
                document.getElementById('dropoffInfo').style.display = 'block';
                
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Money donation form submission
    const moneyFormElement = document.getElementById('moneyForm');
    if (moneyFormElement) {
        moneyFormElement.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (selectedAmount <= 0) {
                alert('Por favor, selecione um valor para doar.');
                return;
            }
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Processando...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                document.querySelector('.donation-main').style.display = 'none';
                successMessage.style.display = 'block';
                document.getElementById('paymentInfo').style.display = 'block';
                
                // Simulate redirect to payment
                setTimeout(() => {
                    alert(`Redirecionando para pagamento de R$ ${selectedAmount}...`);
                }, 3000);
                
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Format phone number input
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/(\d{2})(\d)/, '($1) $2');
            value = value.replace(/(\d{4})(\d)/, '$1-$2');
            e.target.value = value;
        });
    });
});
