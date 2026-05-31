/**
 * Password validation rules for Auroxi.
 * Used on both register (server) and client-side for instant feedback.
 */
export function validatePassword(password: string): string | null {
  if (password.length < 8) return 'Password must be at least 8 characters.';
  if (!/[A-Z]/.test(password)) return 'Password must contain at least one uppercase letter.';
  if (!/[0-9]/.test(password)) return 'Password must contain at least one number.';
  return null; // null means valid
}

/**
 * Basic email format check.
 */
export function validateEmail(email: string): string | null {
  if (!email || !email.includes('@') || !email.includes('.')) {
    return 'Please enter a valid email address.';
  }
  return null;
}

/**
 * Username rules — alphanumeric + underscores, 3–20 chars.
 */
export function validateUsername(username: string): string | null {
  if (username.length < 3) return 'Username must be at least 3 characters.';
  if (username.length > 20) return 'Username must be 20 characters or less.';
  if (!/^[a-zA-Z0-9_]+$/.test(username)) return 'Username can only contain letters, numbers and underscores.';
  return null;
}