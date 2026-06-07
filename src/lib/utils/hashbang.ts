export function getHash(): string {
  return window.location.hash.slice(1);
}

export function setHash(hash: string): void {
  window.location.hash = hash;
}