const COLORS = {
  primary: '#1E90FF',
  success: '#10B981',
  error: '#FF4D4F',
  placeholder: '#BFBFBF',
  white: '#F5F5F5',
  black: '#1F2A30',
  common_light_background: '#F5F5F5',//'#F3F3F3',
  common_dark_background: '#2A3D45',
  text: '#1F2A30',
  common_light_text: '#A0A0A0',
  common_dark_text: '#96A7AF',
  common_border: '#DDDDDD',

  /**
   * @gray
   */
  gray_50: '#F9FAFB',
  gray_100: '#F3F4F6',
  gray_200: '#E5E7EB',
  gray_300: '#D1D5DB',
  gray_400: '#9CA3AF',
  gray_500: '#6B7280',
  gray_600: '#4B5563',
  gray_700: '#374151',
  gray_800: '#1F2937',
  gray_900: '#111827',

  /**
   * @red
   */
  red_50: '#FEF2F2',
  red_100: '#FEE2E2',
  red_200: '#FECACA',
  red_300: '#FCA5A5',
  red_400: '#F87171',
  red_500: '#EF4444',
  red_600: '#DC2626',
  red_700: '#B91C1C',
  red_800: '#991B1B',
  red_900: '#7F1D1D',

  /**
   * @yellow
   */
  yellow_50: '#FFFBEB',
  yellow_100: '#FEF3C7',
  yellow_200: '#FDE68A',
  yellow_300: '#FCD34D',
  yellow_400: '#FBBF24',
  yellow_500: '#F59E0B',
  yellow_600: '#D97706',
  yellow_700: '#B45309',
  yellow_800: '#92400E',
  yellow_900: '#78350F',

  /**
   * @green
   */
  green_50: '#ECFDF5',
  green_100: '#D1FAE5',
  green_200: '#A7F3D0',
  green_300: '#6EE7B7',
  green_400: '#34D399',
  green_500: '#10B981',
  green_600: '#059669',
  green_700: '#047857',
  green_800: '#065F46',
  green_900: '#064E3B',

  /**
   * @blue
   */
  blue_50: '#EFF6FF',
  blue_100: '#DBEAFE',
  blue_200: '#BFDBFE',
  blue_300: '#93C5FD',
  blue_400: '#60A5FA',
  blue_500: '#3B82F6',
  blue_600: '#2563EB',
  blue_700: '#1D4ED8',
  blue_800: '#1E40AF',
  blue_900: '#1E3A8A',

  /**
   * @indigo
   */
  indigo_50: '#EEF2FF',
  indigo_100: '#E0E7FF',
  indigo_200: '#C7D2FE',
  indigo_300: '#A5B4FC',
  indigo_400: '#818CF8',
  indigo_500: '#6366F1',
  indigo_600: '#4F46E5',
  indigo_700: '#4338CA',
  indigo_800: '#3730A3',
  indigo_900: '#312E81',

  /**
   * @purple
   */
  purple_50: '#F5F3FF',
  purple_100: '#EDE9FE',
  purple_200: '#DDD6FE',
  purple_300: '#C4B5FD',
  purple_400: '#A78BFA',
  purple_500: '#8B5CF6',
  purple_600: '#7C3AED',
  purple_700: '#6D28D9',
  purple_800: '#5B21B6',
  purple_900: '#4C1D95',

  /**
   * @pink
   */
  pink_50: '#FDF2F8',
  pink_100: '#FCE7F3',
  pink_200: '#FBCFE8',
  pink_300: '#F9A8D4',
  pink_400: '#F472B6',
  pink_500: '#EC4899',
  pink_600: '#DB2777',
  pink_700: '#BE185D',
  pink_800: '#9D174D',
  pink_900: '#831843',

  /**
   * @orange
   */
  orange_50: '#FFF7ED',
  orange_100: '#FFEDD5',
  orange_200: '#FED7AA',
  orange_300: '#FDBA74',
  orange_400: '#FB923C',
  orange_500: '#F97316',
  orange_600: '#EA580C',
  orange_700: '#C2410C',
  orange_800: '#9A3412',
  orange_900: '#7C2D12',
};

// const dark = {
//   text: '#F5F5F5',
//   sub_text: '#96A7AF',
//   article_text: '#F5F5F5',
//   background: '#1F2A30',
//   secondary_background: '#2A3D45',
//   feeling_background: '#2A3D4560',
//   modal_feeling_background: '#1F2A3050',
//   card_background_one: '#475E69',
//   card_background_two: '#2A3D45',
//   border: '#A0A0A0',
//   milestone_header: '#475E69',
//   moment_full_screen: '#1F2A30CC',
//   ...COLORS,
// };

// const light = {
//   text: '#1F2A30',
//   sub_text: '#A0A0A0',
//   article_text: '#1F2A30',
//   background: '#F5F5F5',
//   secondary_background: '#EAEAEA',
//   feeling_background: '#EAEAEA60',
//   modal_feeling_background: '#F5F5F550',
//   card_background_one: '#DDDDDD',
//   card_background_two: '#EAEAEA',
//   border: '#A0A0A0',
//   milestone_header: '#DDDDDD',
//   moment_full_screen: '#F5F5F5CC',
//   ...COLORS,
// };


const dark = {
  text: '#F5F5F5', // White
  sub_text: '#B0B0B0', // Light Gray
  article_text: '#F5F5F5', // White
  background: '#1A1A1A', // Dark Grayish Blue
  secondary_background: '#262626', // Dark Gray
  feeling_background: '#262626', // Dark Gray
  modal_feeling_background: '#1A1A1A50', // Semi-transparent Dark Grayish Blue
  card_background_one: '#333333', // Dark Gray
  card_background_two: '#262626', // Dark Gray
  border: '#333333', // Dark Gray
  milestone_header: '#262626', // Dark Gray
  moment_full_screen: '#1A1A1ACC', // Semi-transparent Dark Grayish Blue
  ...COLORS,
};

const light = {
  text: '#333333', // Dark Grayish Blue
  sub_text: '#666666', // Grayish
  article_text: '#444444', // Dark Gray
  background: '#FDFDFD', // Light Grayish Blue
  secondary_background: '#E0E0E0', // Light Gray
  feeling_background: '#F5F5F5', // Light Gray
  modal_feeling_background: '#E0E0E050', // Semi-transparent Light Gray
  card_background_one: '#FFFFFF', // White
  card_background_two: '#F5F5F5', // Light Gray
  border: '#CCCCCC', // Grayish
  milestone_header: '#E0E0E0', // Light Gray
  moment_full_screen: '#FDFDFDCC', // Semi-transparent Light Grayish Blue
  ...COLORS,
};

export default {light, dark};
