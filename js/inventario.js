document.addEventListener("DOMContentLoaded", () => {
    const filtros = document.querySelectorAll(".filtro");
    const productos = document.querySelectorAll(".producto");

    filtros.forEach(filtro => {
        filtro.addEventListener("click", () => {
            // Remueve la clase 'activo' del botón anterior y la agrega al botón seleccionado
            document.querySelector(".filtro.activo").classList.remove("activo");
            filtro.classList.add("activo");

            const categoria = filtro.getAttribute("data-categoria");

            productos.forEach(producto => {
                if (categoria === "todos") {
                    producto.style.display = "block"; // Muestra todos los productos
                } else {
                    if (producto.classList.contains(categoria)) {
                        producto.style.display = "block"; // Muestra solo los de la categoría
                    } else {
                        producto.style.display = "none"; // Oculta los demás
                    }
                }
            });
        });
    });
});
