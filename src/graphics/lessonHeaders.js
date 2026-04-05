/**
 * Lesson header illustrations — uses CodeMonkey character images.
 * Returns HTML img tags sized for lesson banners.
 */

const LESSON_IMAGES = {
  1: 'assets/images/monkey-wave.png',
  2: 'assets/images/monkey-wave.png',
  3: 'assets/images/turtle.png',
  4: 'assets/images/bush.png',
  5: 'assets/images/monkey-wave.png',
  6: 'assets/images/monkey-wave.png',
  7: 'assets/images/monkey-wave.png',
  8: 'assets/images/monkey-wave.png',
  9: 'assets/images/goat.png',
  10: 'assets/images/goat.png',
  11: 'assets/images/cat.png',
  12: 'assets/images/cat.png',
  13: 'assets/images/penguin.png',
  14: 'assets/images/penguin.png',
  15: 'assets/images/penguin.png',
  16: 'assets/images/bear.png',
  17: 'assets/images/bear.png',
  18: 'assets/images/gorilla.png',
  19: 'assets/images/gorilla.png',
  20: 'assets/images/gorilla.png',
  21: 'assets/images/gorilla.png',
  22: 'assets/images/gorilla.png',
};

export function getLessonHeaderHtml(lessonNum) {
  const src = LESSON_IMAGES[lessonNum] || LESSON_IMAGES[1];
  return `<img src="${src}" alt="Lesson ${lessonNum}" style="width:100%;height:100%;object-fit:contain">`;
}
