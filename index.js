document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });

        box.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
            this.style.transition = 'transform 0.3s ease';
        });
    });
});
const links = document.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.animation = 'blink 1s infinite';
    });

    link.addEventListener('mouseout', function() {
        this.style.animation = 'none';
    });
});

const style = document.createElement('style');
style.innerHTML = `
@keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
}`;
document.head.appendChild(style);