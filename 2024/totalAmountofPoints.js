function points(games) {
  let point = 0;
  games.map((game) => {
    if (game[0] > game[2]) {
      point += 3;
    } else if (game[0] == game[2]) {
      point += 1;
    }
  });
  return point;
}

// Done by me🫡 (but i look up the video by WPU, so it's not me 100%, hehe)
