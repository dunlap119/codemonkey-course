/**
 * Progress tracker — sends events to Google Sheets via Apps Script.
 * Fire-and-forget: never blocks the UI or throws errors.
 */

// Paste your Google Apps Script Web App URL here:
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyzhcLfc7voVYyCTC3gkE9hkpkEsC8o25OzrUbvrGorwQ14jtO2-YggX7BQKpg5CJC6/exec';

import { getStudentName } from '../ui/nameEntry.js';

export function trackEvent(eventType, data) {
  if (!SCRIPT_URL) return; // tracking disabled until URL is set

  const student = getStudentName();
  if (!student) return;

  const payload = {
    student,
    event: eventType,
    data: JSON.stringify(data),
    timestamp: new Date().toISOString(),
  };

  // Fire-and-forget POST
  fetch(SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify(payload),
  }).catch(() => {
    // Silently ignore network errors — don't disrupt the course
  });
}
