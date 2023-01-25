export default function isLastLvl(data) {
  if (!data.subordinates) return true;
  for (const person of data.subordinates) {
    if (person.subordinates && person.subordinates.length > 0) return false;
  }
  return true;
}
