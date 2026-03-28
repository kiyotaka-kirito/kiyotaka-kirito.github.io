/**
 * Skills data
 * Grouped by category. Proficiency is 0–100.
 * icon: React Icons name from 'react-icons/si' or 'react-icons/di'
 */

export const skillGroups = [
  {
    group: 'iOS Development',
    icon: 'FaApple',
    skills: [
      { name: 'Swift', proficiency: 90 },
      { name: 'SwiftUI', proficiency: 88 },
      { name: 'UIKit', proficiency: 82 },
      { name: 'Xcode', proficiency: 90 },
      { name: 'Core Data', proficiency: 75 },
    ],
  },
  {
    group: 'Backend & APIs',
    icon: 'FiServer',
    skills: [
      { name: 'Firebase', proficiency: 80 },
      { name: 'REST APIs', proficiency: 85 },
      { name: 'URLSession', proficiency: 82 },
      { name: 'Async/Await', proficiency: 78 },
    ],
  },
  {
    group: 'Languages & Web',
    icon: 'FiCode',
    skills: [
      { name: 'Swift', proficiency: 90 },
      { name: 'Python', proficiency: 65 },
      { name: 'JavaScript', proficiency: 60 },
      { name: 'HTML / CSS', proficiency: 70 },
    ],
  },
  {
    group: 'Tools & Workflow',
    icon: 'FiTool',
    skills: [
      { name: 'Git / GitHub', proficiency: 85 },
      { name: 'Figma', proficiency: 68 },
      { name: 'Agile / Scrum', proficiency: 70 },
    ],
  },
];
