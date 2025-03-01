document.addEventListener("DOMContentLoaded", () => {
    const filtros = document.querySelectorAll(".filtro");
    const productos = document.querySelectorAll(".producto");

    filtros.forEach(filtro => {
        filtro.addEventListener("click", () => {
            document.querySelector(".filtro.activo").classList.remove("activo");
            filtro.classList.add("activo");

            const categoria = filtro.getAttribute("data-categoria");

            productos.forEach(producto => {
                if (categoria === "todos") {
                    producto.style.display = "block"; 
                } else {
                    if (producto.classList.contains(categoria)) {
                        producto.style.display = "block"; 
                    } else {
                        producto.style.display = "none"; 
                    }
                }
            });
        });
    });
});
