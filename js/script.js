document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.getElementById("searchIcon");
    const searchInput = document.getElementById("searchInput");
    const searchContainer = document.getElementById("searchContainer");

    searchIcon.addEventListener("click", function () {
        searchContainer.classList.add("bg-white", "ring-2", "ring-black", "w-52", "px-4");
        searchInput.classList.remove("w-0", "opacity-0");
        searchInput.classList.add("w-40", "opacity-100");

        // Geser ikon ke kiri
        searchIcon.classList.add("translate-x-[-70px]");

        searchInput.focus();
    });

    document.addEventListener("click", function (event) {
        if (!searchContainer.contains(event.target)) {
            searchContainer.classList.remove("bg-white", "ring-2", "ring-black", "w-52", "px-4");
            searchInput.classList.add("w-0", "opacity-0");
            searchInput.classList.remove("w-40", "opacity-100");

            // Kembalikan ikon ke posisi semula
            searchIcon.classList.remove("translate-x-[-70px]");
        }
    });
});

