{
    var slider = document.getElementById('slider');

    noUiSlider.create(slider, {
        start: [20, 250],
        connect: true,
        range: {
            'min': 0,
            'max': 1000
        }
    });

    var inputPrecios = [document.getElementById('precioMin'),document.getElementById('precioMax')]
  
    slider.noUiSlider.on('update', function (values, handle) {
        inputPrecios[handle].value = Math.round(values[handle]);
    });

    document.getElementById('precioMin').addEventListener('input', function (e) {
        slider.noUiSlider.set(e.target.value);
    });
    document.getElementById('precioMax').addEventListener('input', function (e) {
        slider.noUiSlider.set(e.target.value);
    });
}