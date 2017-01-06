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

  function addContactFromData(key, contact) {
    var fullName = getFullName(contact);
    var $contactButton = $('<a href="#" class="list-group-item">' + fullName + '</a>');
    $('#contact-list').append($contactButton);
    $contactButton.attr('data-id', key);
    // TODO: Dodaj reakcję na kliknięcie elementu
    // $contactButton.click(???);
  }

  function processContacts(contacts) {
    $.each(contacts, addContactFromData);
  }

  function init(contacts) {
    $('#contact-list').empty();
    processContacts(contacts);
  }

  init(data.contacts);

}(jQuery));
