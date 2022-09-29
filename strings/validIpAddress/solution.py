def validIPAddresses(string) {

}


def isValidPart(string):
  string_as_int = int(string)
  if string_as_int > 255:
    return False

  return len(string) == len(str(string_as_int))



##time and space:
