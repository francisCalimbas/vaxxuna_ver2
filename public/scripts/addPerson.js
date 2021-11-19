$(document).ready(function() {
    $("#submit").click(function() {
        const data = {
            
        }
        $.ajax({
            type: 'POST',
            data: data,
            url: '/'
        })
    });
});