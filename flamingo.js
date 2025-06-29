document.addEventListener('DOMContentLoaded', function() {
    const copyButton = document.querySelector('[data-copy-to-clipboard-target="npm-install"]');
    const inputElement = document.getElementById('npm-install');
    const defaultMessage = copyButton.querySelector('#default-message');
    const successMessage = copyButton.querySelector('#success-message');

    if (copyButton && inputElement && defaultMessage && successMessage) {
        copyButton.addEventListener('click', function() {
            // Select the text in the input field
            inputElement.select();
            inputElement.setSelectionRange(0, 99999); // For mobile devices

            // Copy the text to the clipboard
            navigator.clipboard.writeText(inputElement.value)
                .then(() => {
                    // Show success message
                    defaultMessage.classList.add('hidden');
                    successMessage.classList.remove('hidden');

                    // Revert to "Copy" after a short delay
                    setTimeout(() => {
                        defaultMessage.classList.remove('hidden');
                        successMessage.classList.add('hidden');
                    }, 2000); // 2 seconds
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                    alert('Failed to copy the link. Please try again or copy manually.');
                });
        });
    }
});


