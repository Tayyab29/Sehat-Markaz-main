export function phoneValidator(phone) {
    if (!phone) return "Phone No can't be empty."
    if (phone.length > 11 ) return 'Phone no must be 11 characters long.'
    if (phone.length < 11 ) return 'Phone no must be 11 characters long.'
    return ''
  }