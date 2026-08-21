// TightLines trip inbox — Google Apps Script web app.
// Runs as the commissioner's Google account and saves uploaded trip files
// into a "TightLines Catches" folder in their Drive (creates it if missing).
//
// Deploy: script.google.com → New project → paste this → Deploy →
// New deployment → Web app → Execute as: Me → Who has access: Anyone →
// copy the /exec URL into js/config.js TRIP_INBOX_URL.

const FOLDER_NAME = 'TightLines Catches';
const MAX_BYTES = 30 * 1024 * 1024;

function doPost(e) {
  try {
    const raw = e.postData && e.postData.contents;
    if (!raw) throw new Error('empty upload');
    if (raw.length > MAX_BYTES) throw new Error('file too large');
    const data = JSON.parse(raw);
    if (data.app !== 'TightLines' || !Array.isArray(data.catches)) throw new Error('not a TightLines trip file');

    const it = DriveApp.getFoldersByName(FOLDER_NAME);
    const folder = it.hasNext() ? it.next() : DriveApp.createFolder(FOLDER_NAME);

    const who = String(data.from || 'angler').replace(/[^\w -]/g, '').slice(0, 30) || 'angler';
    const stamp = Utilities.formatDate(new Date(), 'America/Toronto', 'yyyyMMdd-HHmmss');
    const name = 'tightlines-' + who + '-' + stamp + '.json';
    folder.createFile(name, raw, 'application/json');

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true, saved: name, catches: data.catches.length }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
