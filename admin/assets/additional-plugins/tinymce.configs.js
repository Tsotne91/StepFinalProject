$( document ).ready(function() {
    tinymce.init({
        selector: '.tinymce',
        height: 250,
        menubar: false,
        plugins: [
            'advlist autolink lists link charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime table contextmenu paste code'
        ],
        toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | fontselect fontsizeselect formatselect',
        content_css: '//www.tinymce.com/css/codepen.min.css',
        convert_urls : false,
        fontsize_formats: "8px 10px 12px 14px 18px 24px 36px"
    });
});