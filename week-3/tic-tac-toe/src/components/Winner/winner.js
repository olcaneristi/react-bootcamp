function Winner(combination, status) {
  // X veya O uclemesine denk geldiginde kazanmis sayilacak arrayleri tanimliyoruz
  const winnerLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [2, 5, 8],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6]
  ]

  // tum arrayleri donguye alip kazanan kareleri tek tek degisken icine atiyoruz
  // (orn:1,4,7 kazandiysa a=1, b=4, c=7)
  for (let i = 0; i < winnerLines.length; i++) {
    const [a, b, c] = winnerLines[i]

    // kareler icin tanimlanan a-b-c degerlerinin kazanacagi kosullari belirliyoruz
    // a=a , a=b (b=a) , a=c (c=a) durumu yasandiginda kazanani return ediyoruz.
    if (
      combination[a] &&
      combination[a] === combination[b] &&
      combination[a] === combination[c]
    ) {
      return combination[a]
    }
  }
  // kazanan yoksa null kalacak
  return null
}

export default Winner
