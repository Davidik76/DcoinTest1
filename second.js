let tg = window.Telegram.WebApp;

var BackButton = WebApp.BackButton;
BackButton.show();
BackButton.onClick(function() {
    WebApp.showAlert("BackButton clicked");
    BackButton.hide();
});
WebApp.onEvent('backButtonClicked', function() {
    ...
});