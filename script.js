
function predictPrice() {
    var ram = parseInt(document.getElementById('ram').value);
    var ssd = parseInt(document.getElementById('ssd').value);
    var brand = document.getElementById('brand').value;
    var processor = document.getElementById('processor').value;


    var intercept = 28196.128;
    var ramCoeff = 239.142;
    var ssdCoeff = 8.587;
    var brandCoeff = getBrandCoeff(brand);
    var processorCoeff = getProcessorCoeff(processor);

    // Calculate the predicted price
    var predictedPrice = intercept + (ram * ramCoeff) + (ssd * ssdCoeff) + brandCoeff + processorCoeff;

    document.getElementById('predictedPrice').textContent = 'Rs.' + predictedPrice.toFixed(2);
}

function getBrandCoeff(brand) {
    switch (brand) {
        case 'Asus':
            return -3117.661;
        case 'Dell':
            return -2054.485;
        case 'HP':
            return -1925.683;
        case 'Lenovo':
            return -1961.304;
        default:
            return 0; // Default coefficient if brand is not found
    }
}

function getProcessorCoeff(processor) {
    switch (processor) {
        case 'AMD Ryzen 5':
            return 2511.349;
        case 'Intel i3':
            return -1765.940;
        case 'Intel i5':
            return 5446.647;
        case 'Intel i7':
            return 23057.631;
        default:
            return 0;
    }
}
