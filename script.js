
document.addEventListener('DOMContentLoaded', function() {
    const target = document.querySelector('h1');
    const text = target.textContent;
    target.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            target.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        }
    }

    typeWriter();
});
