// Test file to validate caste and religion matching functionality
import { 
  isReligionMatch, 
  isCasteMatch, 
  isProfileMatch,
  getSimilarCastes,
  getSimilarReligions
} from './casteReligionMatcher';

// Test cases for religion matching
console.log('=== RELIGION MATCHING TESTS ===');
console.log('Hindu variants:');
console.log('Hindu vs Hindu:', isReligionMatch('Hindu', 'Hindu')); // true
console.log('Hindu vs HINDU:', isReligionMatch('Hindu', 'HINDU')); // true
console.log('Hindu vs hinduism:', isReligionMatch('Hindu', 'hinduism')); // true
console.log('Hindu vs Sanatan:', isReligionMatch('Hindu', 'Sanatan')); // true

console.log('\nMuslim variants:');
console.log('Muslim vs Islam:', isReligionMatch('Muslim', 'Islam')); // true
console.log('Muslim vs Islamic:', isReligionMatch('Muslim', 'Islamic')); // true

console.log('\nDifferent religions:');
console.log('Hindu vs Muslim:', isReligionMatch('Hindu', 'Muslim')); // false

// Test cases for caste matching
console.log('\n=== CASTE MATCHING TESTS ===');
console.log('Brahmin variants:');
console.log('Brahmin vs Brahman:', isCasteMatch('Brahmin', 'Brahman')); // true
console.log('Brahmin vs BRAHMIN:', isCasteMatch('Brahmin', 'BRAHMIN')); // true
console.log('Brahmin vs Brahmana:', isCasteMatch('Brahmin', 'Brahmana')); // true

console.log('\nOBC variants:');
console.log('OBC vs Other Backward Class:', isCasteMatch('OBC', 'Other Backward Class')); // true
console.log('OBC vs other backward classes:', isCasteMatch('OBC', 'other backward classes')); // true
console.log('OBC vs BC:', isCasteMatch('OBC', 'BC')); // true

console.log('\nMaratha variants:');
console.log('Maratha vs Maratha-Kunbi:', isCasteMatch('Maratha', 'Maratha-Kunbi')); // true
console.log('Maratha vs Kunbi:', isCasteMatch('Maratha', 'Kunbi')); // true

console.log('\nDifferent castes:');
console.log('Brahmin vs Kshatriya:', isCasteMatch('Brahmin', 'Kshatriya')); // false

// Test complete profile matching
console.log('\n=== PROFILE MATCHING TESTS ===');
console.log('Complete match:');
console.log('Hindu Brahmin vs Hindu Brahman:', 
  isProfileMatch('Hindu', 'Brahmin', 'Hindu', 'Brahman')); // true

console.log('Religion mismatch:');
console.log('Hindu Brahmin vs Muslim Brahmin:', 
  isProfileMatch('Hindu', 'Brahmin', 'Muslim', 'Brahmin')); // false

console.log('Caste mismatch:');
console.log('Hindu Brahmin vs Hindu Kshatriya:', 
  isProfileMatch('Hindu', 'Brahmin', 'Hindu', 'Kshatriya')); // false

// Test suggestions
console.log('\n=== SUGGESTION TESTS ===');
console.log('Similar castes for "brahm":', getSimilarCastes('brahm'));
console.log('Similar religions for "hind":', getSimilarReligions('hind'));

export {};
