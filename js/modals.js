$('#linkDev').click(function () {
    var src = 'https://www.youtube.com/embed/AawSodrxE5w';
    $('#modalDev').modal('show');
    $('#modalDev iframe').attr('src', src);
});

$('#modalDev button').click(function () {
    $('#modalDev iframe').removeAttr('src');
});

 $('#linkData').click(function () {
    var src = 'https://www.youtube.com/embed/24FA6h3MdYg';
    $('#modalData').modal('show');
    $('#modalData iframe').attr('src', src);
});

$('#modalData button').click(function () {
    $('#modalData iframe').removeAttr('src');
});

$('#linkDesign').click(function () {
    var src = 'https://www.youtube.com/embed/kAIHFMoaiAo';
    $('#modalDesign').modal('show');
    $('#modalDesign iframe').attr('src', src);
});

$('#modalDesign button').click(function () {
    $('#modalDesign iframe').removeAttr('src');
});