/**
 * Course mascot — uses CodeMonkey character images.
 * Returns HTML img tags for different poses.
 */

const POSES = {
  greeting: '<img src="assets/images/monkey-wave.png" alt="Monkey waving" style="width:100%;height:100%;object-fit:contain">',
  thinking: '<img src="assets/images/monkey-face.png" alt="Monkey thinking" style="width:100%;height:100%;object-fit:contain">',
  celebrating: '<img src="assets/images/monkey-celebrate.png" alt="Monkey celebrating" style="width:100%;height:100%;object-fit:contain">',
  pointing: '<img src="assets/images/monkey-wave.png" alt="Monkey pointing" style="width:100%;height:100%;object-fit:contain">',
};

export function getMascotSvg(pose = 'greeting') {
  return POSES[pose] || POSES.greeting;
}
