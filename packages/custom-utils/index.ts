export const toAnyCase = (
  str: string,
  targetCase: 'snake_case' | 'camelCase' | 'PascalCase' | 'kebab-case' | 'Start Case'
) => {
  // Remove special characters and replace with spaces
  let sanitizedInput = str.replace(/[^a-zA-Z0-9]+/g, ' ');

  const words = sanitizedInput.match(/[A-Z]?[a-z]+|[0-9]+/g);

  if (!words) return str;

  switch (targetCase) {
    case 'snake_case':
      return words.join('_').toLowerCase();
    case 'camelCase':
      return words
        .map((word, index) =>
          index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join('');
    case 'PascalCase':
      return words.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
    case 'kebab-case':
      return words.join('-').toLowerCase();
    case 'Start Case':
      return words.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    default:
      return this;
  }
};
