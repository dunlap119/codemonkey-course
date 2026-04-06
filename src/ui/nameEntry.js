/**
 * Student name entry — prompts for name on first visit.
 * Stores in localStorage so students don't re-enter each time.
 */

const NAME_KEY = 'cm_student_name';

export function getStudentName() {
  return localStorage.getItem(NAME_KEY) || null;
}

export function setStudentName(name) {
  localStorage.setItem(NAME_KEY, name.trim());
}

/**
 * Shows a name entry modal. Calls onComplete(name) when submitted.
 * The modal blocks interaction until a name is entered.
 */
export function showNameEntry(onComplete) {
  const overlay = document.createElement('div');
  overlay.className = 'name-entry-overlay';

  overlay.innerHTML = `
    <div class="name-entry-box">
      <div class="name-entry-logo">
        <img src="assets/images/monkey-wave.png" alt="Monkey" style="width:80px;height:80px;object-fit:contain">
      </div>
      <h2>Welcome to Coding Adventure!</h2>
      <p>Enter your name so your teacher can track your progress.</p>
      <form class="name-entry-form">
        <input type="text" class="name-entry-input" placeholder="Your first and last name" maxlength="50" required autocomplete="off">
        <button type="submit" class="name-entry-btn">Start Learning →</button>
      </form>
    </div>
  `;

  document.body.appendChild(overlay);

  const input = overlay.querySelector('.name-entry-input');
  const form = overlay.querySelector('.name-entry-form');

  // Focus the input
  setTimeout(() => input.focus(), 100);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = input.value.trim();
    if (!name) return;

    setStudentName(name);
    overlay.remove();
    onComplete(name);
  });
}
