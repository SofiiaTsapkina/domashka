var msg = 'INFO';
var notification = document.querySelector('.notification');

var INFO = 'INFO',
    WARNING = 'WARN',
    ERROR = 'ERR',
    CONFIRM = 'CONFIRM';

//if (msg === INFO) { 
//   notification.classList.add('info');
//  notification.innerText = 'info';
//} else if ( msg === WARNING) {
//    notification.classList.add('warning');
//    notification.innerText = 'warning';
//} else if (msg === ERROR) {
//    cnotification.classList.add('error');
//    notification.innerText = 'error';
//} else if (msg === CONFIRM) {
//    notification.classList.add('confirm');
//    notification.innerText = 'confirm';
//} else {
//    notification.innerText = 'default log';
//}

switch (msg) {
    case INFO:
        notification.classList.add('info');
        notification.innerText = 'info';
        break;
    case WARNING:
         notification.classList.add('warning');
         notification.innerText = 'warning';
         break;
    case ERROR:
        notification.classList.add('error');
        notification.innerText = 'error';
        break;
    case INFO:
    case CONFIRM: //if(msg === INFO || msg === CONFIRM)
        notification.classList.add('confirm');
        notification.innerText = 'confirm';
        break;
    default:// else
       notification.innerText = 'default.log';
       break;
       

}

var valid = false;

if ( msg == 'valid') {
    valid = true;
} else {
    valid =tru;
};

//var blockClass = msg === 'valid' ? 'valid' : 'error';