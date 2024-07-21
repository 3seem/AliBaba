
        document.getElementById('searchInput').addEventListener('focus', function () {
            this.classList.add('expanded');
        });

        document.getElementById('searchInput').addEventListener('blur', function () {
            this.classList.remove('expanded');
        });

        const iconGrid = document.querySelector('.icon-grid');
        const icons = document.querySelectorAll('.icon');
        const iconWidth = icons[0].offsetWidth + 20;

        function slideIcons() {
            iconGrid.style.transition = 'transform 1s ease-in-out';
            iconGrid.style.transform = `translateX(-${iconWidth}px)`;

            setTimeout(() => {
                iconGrid.style.transition = 'none';
                iconGrid.style.transform = 'translateX(0)';
                iconGrid.appendChild(iconGrid.firstElementChild);
            }, 1000);
        }

        setInterval(slideIcons, 3000); 
       
window.onload = CAR; 
function CAR(){
const keys = Object.keys(localStorage);
x=keys.length;
        h6 = document.createElement('span');
        h6.textContent = ` ${x}`;
        const cartItemCount = document.getElementById('cartItemCount');
        cartItemCount.appendChild(h6);
}