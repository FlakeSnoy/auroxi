export function isValidUrl(url: string): boolean {
  try { new URL(url); return true; } catch { return false; }
}

export function truncate(str: string, max: number): string {
  return str.length > max ? str.slice(0, max) + '...' : str;
}