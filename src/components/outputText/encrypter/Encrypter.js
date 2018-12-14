export const Encrypter = text => {
  const arrayText = text.split('');
  const cryptedArray = [];
  const alfabeto = [
    'a','b','c',
    'd','e','f',
    'g','h','i',
    'j','k','l',
    'm','n','o',
    'p','q','r',
    's','t','u',
    'v','w','x',
    'y', 'z',
    'a','b','c'
  ];

  const pushing = letra => {
    var notNumber = isNaN(Number(letra));
    for(let i = 0; i < alfabeto.length; i++){
      if(letra === alfabeto[i])
        return cryptedArray.push(alfabeto[i+3]);
      if(letra === ' ')
        return cryptedArray.push(letra);
      if(!notNumber)
        return cryptedArray.push(letra);
    }
  }

  arrayText.forEach(letra => {
    pushing(letra);
  });
  return cryptedArray.join('');
}
