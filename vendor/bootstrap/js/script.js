// event pada saat link di klik
$('.nav-link page-scroll').on('click', function(){

    // ambil href
    var tujuan = $(this).attr('href');
    // tangkap elemen ybs
    var elemenTujuan = $(yujuan);

    // pindah scroll
    $('body').animate({
       scrollTop: elemenTujuan.offset().top - 50
    }, 850, 'swing');

    e.preventDefault();

});