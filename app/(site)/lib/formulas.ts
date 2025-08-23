export function emiAmount(principal: number, annualRate: number, months: number) {
  const r = (annualRate / 12) / 100; // monthly rate as decimal
  if (r === 0) return principal / months;
  const pow = Math.pow(1 + r, months);
  return principal * r * pow / (pow - 1);
}

export function affordabilityFromTargetEMI(targetEmi: number, annualRate: number, months: number) {
  const r = (annualRate / 12) / 100;
  if (r === 0) return targetEmi * months;
  const pow = Math.pow(1 + r, months);
  // Rearranged EMI formula to solve for principal
  return targetEmi * (pow - 1) / (r * pow);
}

export function formatINR(n: number) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);
}
