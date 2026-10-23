function favoriteSongs(playlist) {
  let orderedList = playlist.sort((a, b) => b.plays - a.plays);

  let first = orderedList[0].title;
  let second = orderedList[1].title;

  return [first, second];
}

/*

P - array (of objects)
R - array
E - to the left
P
i need to access the array of objects plays
order it by most to lease
take the first two
return in array

*/
