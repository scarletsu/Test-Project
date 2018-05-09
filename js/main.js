
$(document).ready(function(){

    var url = window.location;
    $('ul.nav a[href="'+ url +'"]').parent().addClass('active');
    $('ul.nav a').parent().removeClass('active');
    $('ul.nav a').filter(function(){
            return this.href == url;
    }).parent().addClass('active');
});

function resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 300,
    headerEl = document.getElementById('js-header');
    
    if (distanceY > shrinkOn) {
      headerEl.classList.add("smaller","animated","slideInDown");
    } else {
      headerEl.classList.remove("smaller","animated","slideInDown");
    }
}

window.addEventListener('scroll', resizeHeaderOnScroll);







