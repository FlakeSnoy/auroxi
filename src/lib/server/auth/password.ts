/**
 * Password validation rules for Auroxi.
 */

const COMMON_PASSWORDS = new Set([
  'password','password1','12345678','123456789','qwerty123',
  'iloveyou','monkey123','dragon123','master123','welcome1',
  'sunshine','princess','football','abc12345','letmein1',
]);

export function validatePassword(password: string): string | null {
  if (password.length < 8) return 'Password must be at least 8 characters.';
  if (password.length > 128) return 'Password is too long.';
  if (!/[A-Z]/.test(password)) return 'Password must contain at least one uppercase letter.';
  if (!/[0-9]/.test(password)) return 'Password must contain at least one number.';
  if (!/[^a-zA-Z0-9]/.test(password)) return 'Password must contain at least one special character.';
  if (/^(.)\1+$/.test(password)) return 'Password is too repetitive.';
  if (COMMON_PASSWORDS.has(password.toLowerCase())) return 'Password is too common. Try something more unique.';
  if (/^\d+$/.test(password)) return 'Password cannot be numbers only.';
  return null;
}

export function validateEmail(email: string): string | null {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!email || !emailRegex.test(email)) return 'Please enter a valid email address.';
  if (email.length > 254) return 'Email address is too long.';
  return null;
}

export function validateUsername(username: string): string | null {
  if (username.length < 3) return 'Username must be at least 3 characters.';
  if (username.length > 20) return 'Username must be 20 characters or less.';
  if (!/^[a-zA-Z0-9_]+$/.test(username)) return 'Username can only contain letters, numbers and underscores.';
  if (/^_|_$/.test(username)) return 'Username cannot start or end with an underscore.';
  if (/__/.test(username)) return 'Username cannot contain consecutive underscores.';
  if (/^\d+$/.test(username)) return 'Username cannot be numbers only.';
  const RESERVED = new Set(['admin','auroxi','moderator','support','root','system','official','staff','help','bot']);
  if (RESERVED.has(username.toLowerCase())) return 'That username is reserved.';
  return null;
}