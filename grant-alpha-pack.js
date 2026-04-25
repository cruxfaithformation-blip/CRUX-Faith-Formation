// One-time script: grant Alpha Pack to all existing CRUX users
//
// Setup (run once):
//   npm install firebase-admin
//
// Get your service account key:
//   Firebase Console → Project Settings → Service Accounts → Generate new private key
//   Save the downloaded file as service-account-key.json in this folder
//
// Run:
//   node grant-alpha-pack.js

const admin = require('firebase-admin');
const serviceAccount = require('./service-account-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: 'crux-faith-formation'
});

const db = admin.firestore();

const ALPHA_CARDS = ['thomas', 'cecilia', 'david', 'clare', 'bernadette', 'bvm'];

async function run() {
  const snap = await db.collection('userProgress').get();
  console.log(`\nFound ${snap.size} account${snap.size !== 1 ? 's' : ''}.\n`);

  let updated = 0;
  let skipped = 0;

  for (const docSnap of snap.docs) {
    const data = docSnap.data();

    if (data.alphaPackReceived) {
      console.log(`  skip  ${docSnap.id} (already has pack)`);
      skipped++;
      continue;
    }

    await docSnap.ref.update({
      cardsOwned:          ALPHA_CARDS,
      packsOpened:         1,
      alphaPackReceived:   true,
      alphaPackGifted:     true,
      alphaPackNotified:   false
    });

    console.log(`  ✓     ${docSnap.id}`);
    updated++;
  }

  console.log(`\nDone — ${updated} granted, ${skipped} already had the pack.\n`);
  process.exit(0);
}

run().catch(err => {
  console.error('\nError:', err.message, '\n');
  process.exit(1);
});
