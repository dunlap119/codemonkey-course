# Student Progress Tracking Setup

Track student progress in a Google Sheet. Each time a student completes a section, solves a puzzle, or finishes a quiz, a row is added to your spreadsheet.

## Step 1: Create the Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Name it **"CodeMonkey Course Progress"**
3. In Row 1, add these headers:
   - A1: `Student`
   - B1: `Event`
   - C1: `Details`
   - D1: `Client Time`
   - E1: `Server Time`

## Step 2: Create the Apps Script

1. In your spreadsheet, go to **Extensions > Apps Script**
2. Delete any existing code and paste this:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    data.student,
    data.event,
    data.data,
    data.timestamp,
    new Date()
  ]);
  return ContentService.createTextOutput('ok');
}
```

3. Click **Save** (Ctrl+S)

## Step 3: Deploy the Script

1. Click **Deploy > New deployment**
2. Click the gear icon next to "Select type" and choose **Web app**
3. Set:
   - **Description**: "CodeMonkey Progress Tracker"
   - **Execute as**: Me
   - **Who has access**: **Anyone**
4. Click **Deploy**
5. Click **Authorize access** and follow the prompts (choose your Google account, click "Advanced" > "Go to..." if needed)
6. **Copy the Web App URL** — it looks like `https://script.google.com/macros/s/ABC.../exec`

## Step 4: Add the URL to the Course

1. Open `src/progress/tracker.js`
2. Paste your URL into the `SCRIPT_URL` line:
   ```javascript
   const SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_URL_HERE/exec';
   ```
3. Save, commit, and push to GitHub

## What You'll See

Your spreadsheet will fill with rows like:

| Student | Event | Details | Client Time | Server Time |
|---|---|---|---|---|
| Maria Garcia | section_complete | {"sectionId":"L1S1"} | 2026-04-06T... | 4/6/2026 ... |
| Maria Garcia | puzzle_complete | {"sectionId":"L1S4","puzzleIndex":0,"stars":3} | 2026-04-06T... | 4/6/2026 ... |
| James Smith | quiz_complete | {"quizId":"L1S5","score":3,"total":3} | 2026-04-06T... | 4/6/2026 ... |

## Tips

- **Filter by student**: Use Google Sheets' filter feature to see one student's progress
- **Sort by time**: Sort by column E to see activity in chronological order
- **Count completions**: Use `=COUNTIF(A:A, "Maria Garcia")` to count a student's events
- **Disable tracking**: Set `SCRIPT_URL = ''` in tracker.js to turn off tracking without removing the code
