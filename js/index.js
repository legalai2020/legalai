function close_video () {
    var my_video = document.getElementById("legal_video");
    my_video.pause();
    $("#myModal").modal("hide");
}