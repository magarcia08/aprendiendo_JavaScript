const figura = {
    ancho: 10,
    alto: 20,
    tipo: "circulo",
    area: (tipoFigura) => {
        switch (tipoFigura.toLowerCase()) {
            case "triangulo":
                return this.ancho * this.alto / 2;
            case "cuadrado":
                return this.ancho * this.alto;
            default:
                return NaN;
        }
    }
}

console.log("Area de la figura", figura.area ("cuadrado"));

