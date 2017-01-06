(function($) {

  function getFullName(contact) {
    var fullName = '';
    if (!contact || !contact.name) {
      return fullName;
    }
    fullName = contact.name;
    if (!contact.surname) {
      return fullName;
    }
    fullName = contact.name + ' ' + contact.surname;
    return fullName;
  }

  function init() {
    // TODO: wyczyść zawartość elementu o id 'contact-list'
  }

  init();

}(jQuery));
