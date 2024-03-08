(function () {
    'use strict';

    const modal = document.createElement('div');
    modal.classList.add('fixed', 'inset-0', 'flex', 'justify-center', 'items-center', 'bg-gray-900', 'bg-opacity-50', 'z-50', 'transition', 'duration-300', 'ease-in-out', 'hidden');
    modal.innerHTML = `
        <div class="bg-white p-4 rounded-lg shadow-lg w-1/3">
            <div class="flex justify-end">
                <button id="closeModalBtn" class="px-4 py-2 text-gray-500 transition duration-300 ease-in-out hover:bg-gray-200 rounded">
                  Close Menu
                </button>
            </div>
            <h3 class="mb-4 text-2xl font-bold text-center text-blue-600">TR Menus</h3>
            <p class="mb-4 text-gray-600 text-opacity-75 text-center">Open DevTools - Console.</p>
            <hr class="my-4 border-gray-300">
            <h1 class="mb-4 text-xl font-bold text-center text-blue-600">Commands Dev</h1>
            <button id="esp" class="px-4 py-2 bg-gray-100 text-gray-500 transition duration-300 ease-in-out hover:bg-gray-200 rounded">ESP Site</button>
        </div>
    `;

    const script = document.createElement('script');
    script.src = 'https://cdn.tailwindcss.com';
    document.head.appendChild(script);
    document.body.classList.add('tailwind');

    function toggleModal() {
        modal.classList.toggle('hidden');
    }

    function closeModal() {
        modal.classList.add('hidden');
    }

    document.addEventListener('click', function (e) {
        if (e.target.id === 'closeModalBtn') {
            closeModal();
        }
    });


    let espActive = false;

    function esp() {
        if (espActive) {
            const style = document.querySelector('#esp-style');
            if (style) {
                style.remove();
            }
            espActive = false;
        } else {
            const style = document.createElement('style');
            style.id = 'esp-style';
            style.innerHTML = `
                *:not(html):not(head):not(style) {
                    outline: 1px solid magenta !important;
                    box-shadow: 0 0 0 2px rgba(255, 0, 255, 0.5) !important;
                }
            `;
            document.head.appendChild(style);
            espActive = true;
        }
    }
    document.addEventListener('click', function (e) {
        if (e.target.id === 'esp') {
            esp();
        }
    })

    const button = document.createElement('button');
    button.classList.add('fixed', 'top-20', 'right-4', 'bg-sky-600', 'text-white', 'py-2', 'px-4', 'rounded', 'shadow-sm');
    button.textContent = 'TR Menus';
    button.addEventListener('click', toggleModal);
    document.body.appendChild(button);

    document.body.insertBefore(modal, document.body.firstChild);
})();