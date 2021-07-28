var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));

var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

var clickables = document.getElementsByClassName("entity");

for (var c of clickables) {
    if (c.id && urls[c.id]) {
        var url = urls[c.id];

        c.addEventListener("click", function() {
            window.open(urls[this.id], '_blank');
        });
    }
}