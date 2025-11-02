// Simple server-side user checker (stub).
// Returns a user object when signed in, or null when not.
// Replace with real auth logic (Clerk session lookup, next-auth, DB, etc).
export async function checkUser() {
  try {
    // Default: no authenticated user.
    // For local testing return a mock user, e.g.:
    // return { id: '1', name: 'Test User', role: 'USER', image: '/default-avatar.png' };
    return null;
  } catch (err) {
    return null;
  }
}
