$('.toggleMeBtn').on('click', function () {
  if ($('.myInputToggleMe').hasClass('slidinput-inited')) {
    $('.myInputToggleMe').slidinput('destroy');
    $(this).text('Init it!');
  } else {
    $('.myInputToggleMe').slidinput();
    $(this).text('Destroy it!');
  }
});

$('.myInputAbove').slidinput({
  mode: 'above',
  offsetY: -2,
});

$('.myInputTextAlignCenter').slidinput();

$('.myInputDisabled').slidinput();

$('.myInputCssSized').slidinput();

$('.myInputCssColored').slidinput();
