
var deferredPrompt;

if (!window.Promise) {
  window.Promise = Promise;
}


// ********* The .register() checks to see if the SW has changed. If it has then the install event is raised ************** */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function () {
      console.log('Service worker registered!');
    })
    .catch(function(err) {
      console.log(err);
    });
}

// ********* This is called JUST before the browser decides to prompt the user to Add to Home Screen ******************** */
window.addEventListener('beforeinstallprompt', function(event) {
  console.log('beforeinstallprompt fired');
  event.preventDefault();  // *********** This says stop the browser from showing the Add to Home Screen Prompt
  deferredPrompt = event;  // *********** The developer saves this and will later programatically show the prompt to the user at a time
  return false;            //             when the developer feels that there would be a better chance of the user accepting it
});
