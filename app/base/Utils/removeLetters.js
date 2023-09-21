function removeLetters(str) {
  return str.replace(
    /[a-z-áàãâäéèêëẽíìîïĩóòõôöúùûüũçĉǵĝĥḧĵḱĺḿńǹñṕŕśŝẗǘǜṽẃẁŵẅẍýỳŷỹÿźẑ]/gi,
    ''
  );
}

export default removeLetters;
