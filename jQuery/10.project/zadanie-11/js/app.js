(function($) {

  function contactClick() {
    var $this = $(this);
    $('.active').removeClass('active');
    $this.addClass('active');
    var id = $this.attr('data-id');
    var contact = data.contacts[id];
    displayContact(contact);
  }

  function displayContact(contact) {
    // TODO: Napisz funkcję displayContact tak, aby wpisywała do elementu o id 'fullname', pełne imię swojego kontaktu
    // HINT: skorzystaj z funkcji 'getFullName'`
    // var $fullName = ...
    // var fullName = getFullName(...);
    // $fullName.???;
  }

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
    $contactButton.click(contactClick);
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
