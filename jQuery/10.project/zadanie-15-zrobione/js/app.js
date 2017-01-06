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
    var $fullName = $('#fullname');
    var fullName = getFullName(contact);
    $fullName.text(fullName);
    $('#tel').text(contact.telephone);
    $('#email').text(contact.email);
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
    var firstContact = contacts[0];
    displayContact(firstContact);
    var $contactButtons = $('.list-group-item');
    var $firstButton = $contactButtons.first();
    $firstButton.addClass('active');
    var $addNewContactForm = $('#addNewContactForm');
    $addNewContactForm.hide();
  }

  init(data.contacts);

}(jQuery));
