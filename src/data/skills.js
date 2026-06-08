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
      { name: 'SwiftUI & UIKit', proficiency: 88 },
      { name: 'Xcode', proficiency: 80 },
      { name: 'Core Data', proficiency: 70 },
      { name: 'Combine', proficiency: 70 },
    ],
  },
  {
    group: 'Backend & APIs',
    icon: 'FiServer',
    skills: [
      { name: 'Firebase', proficiency: 75 },
      { name: 'Realm', proficiency: 50 },
      { name: 'Alamofire', proficiency: 50 },
      { name: 'Async/Await', proficiency: 80 },
    ],
  },
  {
    group: 'Languages & Web',
    icon: 'FiCode',
    skills: [
      { name: 'Swift', proficiency: 90 },
      { name: 'JavaScript', proficiency: 50 },
      { name: 'HTML / CSS', proficiency: 50 },
    ],
  },
  {
    group: 'Tools & Workflow',
    icon: 'FiTool',
    skills: [
      { name: 'Git / GitHub', proficiency: 85 },
      { name: 'Figma', proficiency: 50 },
      { name: 'Agile / Scrum', proficiency: 0 },
    ],
  },
];
