// Utility for matching religion and caste with variations and synonyms

// Religion synonyms and variations
const RELIGION_SYNONYMS: Record<string, string[]> = {
  'hindu': ['hindu', 'hinduism', 'sanatan', 'sanatan dharma'],
  'muslim': ['muslim', 'islam', 'islamic', 'mohammedan'],
  'christian': ['christian', 'christianity', 'catholic', 'protestant'],
  'sikh': ['sikh', 'sikhism', 'punjabi sikh'],
  'buddhist': ['buddhist', 'buddhism', 'buddha'],
  'jain': ['jain', 'jainism', 'jaina'],
  'parsi': ['parsi', 'parsee', 'zoroastrian'],
  'jewish': ['jewish', 'judaism', 'jew'],
  'other': ['other', 'others', 'no religion', 'atheist', 'agnostic']
};

// Caste synonyms and variations
const CASTE_SYNONYMS: Record<string, string[]> = {
  // Brahmin variations (consolidated)
  'brahmin': [
    'brahmin', 'brahman', 'brahmana', 'bhraman', 'brahaman', 
    'deshastha brahmin', 'chitpavan brahmin', 'karhade brahmin', 'devrukhe brahmin', 'saraswat brahmin',
    'konkani brahmin', 'gaud saraswat', 'smartha', 'rigvedi', 'yajurvedi', 'gowd saraswat', 'gowd saraswat brahmin', 
    'chitpavan', 'kokanastha', 'deshastha', 'karhade', 'saraswat', 'konkani', 'goud', 'gowd'
  ],
  
  // Kshatriya variations
  'kshatriya': ['kshatriya', 'kshtriya', 'kshatri', 'rajput', 'thakur'],
  
  // Vaishya variations
  'vaishya': ['vaishya', 'vaisya', 'baniya', 'bania', 'merchant'],
  
  // Shudra variations
  'shudra': ['shudra', 'sudra', 'shoodra'],
  
  // OBC variations (consolidated)
  'obc': [
    'obc', 'other backward class', 'other backward classes', 'backward class', 'bc', 
    'kunbi', 'mali', 'teli', 'koshti', 'nhavi', 'shimpi', 'sutar', 'lohar', 'kumbhar', 
    'bhoi', 'gavli', 'dhangar', 'vaidya', 'gurav', 'bhandari', 'agri', 'koli', 'vanjari', 
    'kaikadi', 'dhobi', 'rajput', 'thakur', 'gujar', 'kolhati', 'matang', 'pardhi'
  ],
  
  // SC variations (consolidated)
  'sc': [
    'sc', 'scheduled caste', 'scheduled castes', 'dalit', 'mahar', 'chambhar', 'matang', 
    'bhangi', 'mang', 'dhor', 'maang', 'maangs'
  ],
  
  // ST variations (consolidated)
  'st': [
    'st', 'scheduled tribe', 'scheduled tribes', 'tribal', 'adivasi', 'warli', 'kokna', 
    'katkari', 'kolam', 'thakar', 'korku'
  ],
  
  // General variations
  'general': ['general', 'open', 'unreserved', 'forward caste'],
  
  // Maharashtra specific castes
  'maratha': ['maratha', 'maratha-kunbi', 'kunbi', 'maratha kunbi', 'marathas', '96 kuli maratha'],
  'ckp': ['ckp', 'chandraseniya kayastha prabhu', 'kayastha prabhu'],
  'kayastha': ['kayastha', 'kayasth', 'kaystha', 'prabhu', 'cks', 'chandraseniya kayastha prabhu'],
  'bhandari': ['bhandari', 'bhandaris', 'koli', 'agri'],
  'agri': ['agri', 'agris', 'koli', 'fisherman'],
  'koli': ['koli', 'kolis', 'mahadev koli', 'son koli', 'fisherman'],
  'gavli': ['gavli', 'gavlis', 'dhangar', 'gawli', 'gawlis', 'golla', 'gollas', 'yadav', 'ahir'],
  'dhangar': ['dhangar', 'dhangars', 'golla', 'gollas', 'shepherd', 'gadaria', 'gadri'],
  'mali': ['mali', 'malis', 'phulmali', 'bagban', 'gardener'],
  'teli': ['teli', 'telis', 'oil merchant'],
  'sonar': ['sonar', 'sonars', 'goldsmith', 'soni'],
  'lohar': ['lohar', 'lohars', 'blacksmith', 'panchal'],
  'sutar': ['sutar', 'sutars', 'carpenter', 'wadhai'],
  'kumbhar': ['kumbhar', 'kumhars', 'potter', 'prajapat'],
  'shimpi': ['shimpi', 'shimpis', 'tailor', 'darji'],
  'nhavi': ['nhavi', 'nhavis', 'barber', 'hajam'],
  'vanjari': ['vanjari', 'vanjaris', 'banjara', 'lambadi'],
  'chambhar': ['chambhar', 'chamaar', 'chamar', 'mochi'],
  'mahar': ['mahar', 'mahars', 'buddhist'],
  'mang': ['mang', 'mangs', 'matang'],
  'kaikadi': ['kaikadi', 'kaikadis', 'nomadic'],
  'vaidya': ['vaidya', 'vaidyas', 'physician'],
  'gurav': ['gurav', 'guravs', 'priest', 'temple priest'],
  'bhoi': ['bhoi', 'bhois', 'fisherman', 'kharvi'],
  'kharvi': ['kharvi', 'kharvis', 'fisherman'],
  'koshti': ['koshti', 'hatgar koshti', 'koshtis', 'koshty'],
  'warli': ['warli', 'varli', 'adivasi', 'tribal'],
  'kokna': ['kokna', 'koknas', 'adivasi', 'tribal'],
  'kolhati': ['kolhati', 'kolhatis'],
  'matang': ['matang', 'matangs'],
  'pardhi': ['pardhi', 'phase pardhi', 'pardhis'],
  'katkari': ['katkari', 'katkaris'],
  'dhobi': ['dhobi', 'dhobis', 'washerman'],
  'rajput': ['rajput', 'rajputs', 'kshatriya', 'thakur'],
  'thakur': ['thakur', 'thakurs', 'rajput'],
  'gujar': ['gujar', 'gujjar', 'gujjars', 'gurjar'],
  'nt': ['nt', 'nomadic tribe', 'vimukt jati', 'kaikadi', 'pardhi', 'phase pardhi', 'kolhati', 'katkari'],
  'vijapurkar': ['vijapurkar'],
  'deshmukh': ['deshmukh'],
  'patil': ['patil'],
  
  // Patel variations
  'patel': ['patel', 'patil', 'patidar', 'kadva patel', 'leuva patel'],
  
  // Jat variations
  'jat': ['jat', 'jatt', 'jaats', 'jats'],
  
  // Reddy variations
  'reddy': ['reddy', 'reddys', 'reddi'],
  
  // Chetty variations
  'chetty': ['chetty', 'chettiar', 'chetti', 'setty'],
  
  // Nair variations
  'nair': ['nair', 'nayar', 'nayers'],
  
  // Agarwal variations
  'agarwal': ['agarwal', 'aggarwal', 'agrawal', 'agarwala'],
  
  // Gupta variations
  'gupta': ['gupta', 'guptas', 'guptaa'],
  
  // Sharma variations
  'sharma': ['sharma', 'sharmas', 'sharmaa'],
  
  // Singh variations
  'singh': ['singh', 'singhs'],
  
  // Religious communities (consolidated)
  'muslim': ['muslim', 'muslims', 'shaikh', 'pathan', 'syed', 'qureshi', 'ansari'],
  'christian': ['christian', 'christians', 'east indian', 'mangalorean'],
  'parsi': ['parsi', 'parsee', 'zoroastrian'],
  'jain': ['jain', 'jains', 'jaina', 'shah'],
  'sikh': ['sikh', 'sikhs', 'punjabi'],
  'buddhist': ['buddhist', 'buddhists', 'mahar', 'navayana'],
  
  // Other common variations
  'bhumihar': ['bhumihar', 'bhumihaar', 'bhumihaars'],
  'lingayat': ['lingayat', 'lingayats','Lingayat Koshti', 'Hatgar Koshti','Koshti', 'veerashaiva'],
  'vokkaligas': ['vokkaliga', 'vokkaligas', 'vokkaligaru'],
  'ezhava': ['ezhava', 'ezhavas', 'thiyya'],
  'nadar': ['nadar', 'nadars', 'shanar'],
  'yadav': ['yadav', 'yadavs', 'ahir', 'gavli', 'goal'],
  
  // Default for unmatched
  'other': ['other', 'others', 'not specified', 'prefer not to say']
};

/**
 * Normalize a string by removing extra spaces, converting to lowercase,
 * and removing special characters
 */
function normalizeString(str: string): string {
  if (!str) return '';
  return str.toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, '') // Remove special characters
    .replace(/\s+/g, ' '); // Replace multiple spaces with single space
}

/**
 * Find the canonical form of a religion from synonyms
 */
function getCanonicalReligion(religion: string): string {
  const normalized = normalizeString(religion);
  
  for (const [canonical, synonyms] of Object.entries(RELIGION_SYNONYMS)) {
    if (synonyms.some(synonym => normalizeString(synonym) === normalized)) {
      return canonical;
    }
  }
  
  return normalized; // Return normalized form if no match found
}

/**
 * Find the canonical form of a caste from synonyms
 */
function getCanonicalCaste(caste: string): string {
  const normalized = normalizeString(caste);
  
  for (const [canonical, synonyms] of Object.entries(CASTE_SYNONYMS)) {
    if (synonyms.some(synonym => normalizeString(synonym) === normalized)) {
      return canonical;
    }
  }
  
  return normalized; // Return normalized form if no match found
}

/**
 * Check if two religions match (considering synonyms and variations)
 */
export function isReligionMatch(religion1: string, religion2: string): boolean {
  if (!religion1 || !religion2) return false;
  
  const canonical1 = getCanonicalReligion(religion1);
  const canonical2 = getCanonicalReligion(religion2);
  
  return canonical1 === canonical2;
}

/**
 * Check if two castes match (considering synonyms and variations)
 */
export function isCasteMatch(caste1: string, caste2: string): boolean {
  if (!caste1 || !caste2) return false;
  
  const canonical1 = getCanonicalCaste(caste1);
  const canonical2 = getCanonicalCaste(caste2);
  
  return canonical1 === canonical2;
}

/**
 * Check if a profile matches user's religion and caste preferences
 */
export function isProfileMatch(
  userReligion: string,
  userCaste: string,
  profileReligion: string,
  profileCaste: string
): boolean {
  const religionMatch = isReligionMatch(userReligion, profileReligion);
  const casteMatch = isCasteMatch(userCaste, profileCaste);
  
  return religionMatch && casteMatch;
}

/**
 * Get suggestions for similar castes (useful for user input)
 */
export function getSimilarCastes(inputCaste: string): string[] {
  const normalized = normalizeString(inputCaste);
  const suggestions: string[] = [];
  
  for (const [canonical, synonyms] of Object.entries(CASTE_SYNONYMS)) {
    if (synonyms.some(synonym => 
      normalizeString(synonym).includes(normalized) || 
      normalized.includes(normalizeString(synonym))
    )) {
      suggestions.push(canonical);
    }
  }
  
  return suggestions;
}

/**
 * Get suggestions for similar religions (useful for user input)
 */
export function getSimilarReligions(inputReligion: string): string[] {
  const normalized = normalizeString(inputReligion);
  const suggestions: string[] = [];
  
  for (const [canonical, synonyms] of Object.entries(RELIGION_SYNONYMS)) {
    if (synonyms.some(synonym => 
      normalizeString(synonym).includes(normalized) || 
      normalized.includes(normalizeString(synonym))
    )) {
      suggestions.push(canonical);
    }
  }
  
  return suggestions;
}
