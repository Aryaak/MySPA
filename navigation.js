// Dapatkan semua element a untuk navigasi

const pages = document.querySelectorAll(".page-item a");

// Beri fungsi saat salah satu element a di klik

pages.forEach(function (page) {

    page.addEventListener("click", function () {

        // Dapatkan nilai dari attibut href pada element a

        let target = page.getAttribute("href").substring(1);

        // Jalankan fungsi loadPage

        loadPage(target)

    })

})

function loadPage(page) {

    const main = document.querySelector("main");

    page = (page == undefined) ? "home" : page;

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4 && xhr.status == 200) {
            main.innerHTML = xhr.responseText;
        }

    }

    xhr.open("GET", `page/${page}.html`, true);
    xhr.send();

}

loadPage();