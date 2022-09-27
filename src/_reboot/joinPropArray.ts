export default function joinPropArray(
  input: string[] | string = '',
  prefix: string
) {
  if (Array.isArray(input)) {
    return input.map((prop) => prefix + prop).join(' ');
  } else {
    return prefix + input;
  }
}
