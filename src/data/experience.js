/**
 * Experience & Education timeline data
 * type: 'work' | 'education' | 'certificate'
 */

export const timeline = [
  {
    id: 1,
    type: 'work',
    role: 'iOS Developer (Freelance)',
    company: 'Self-Employed',
    location: 'Bangkok, Thailand',
    startDate: '2025',
    endDate: 'Present',
    description: [
      'Designed and developed multiple iOS applications using Swift, SwiftUI, and UIKit.',
      'Integrated Firebase for real-time data, authentication, and cloud functions.',
      'Followed Apple Human Interface Guidelines to deliver polished, accessible apps.',
      'Managed end-to-end app lifecycle: architecture, UI, testing, and TestFlight distribution.',
    ],
    current: true,
  },
  {
    id: 2,
    type: 'certificate',
    role: 'iOS Development',
    company: 'Hacking with Swift & CodeWithChris',
    location: 'Online',
    startDate: '2023',
    endDate: '2025',
    description: [
      'Completed in-depth SwiftUI, UIKit, Networking & Database certification courses.',
      'Built multiple hands-on projects covering navigation, animations, data persistence, and networking.',
    ],
    current: false,
  },
  {
    id: 3,
    type: 'certificate',
    role: 'Android Development',
    company: 'PADC.com.mm',
    location: 'Myanmar',
    startDate: '2022',
    endDate: '2023',
    description: [
      'Completed the PADC program — a rigorous industry-recognized certification for android developer in Myanmar.',
      'Covered android fundamentals, design patterns, API integration, and app deployment.',
    ],
    current: false,
  },
  {
    id: 4,
    type: 'education',
    role: 'Bachelor of Science — Geology',
    company: 'University of Yangon',
    location: 'Yangon, Myanmar',
    startDate: '2016',
    endDate: '2020',
    description: [
      'Graduated with a B.Sc. in Geology, developing strong analytical and problem-solving skills.',
      'Applied scientific methodology and data analysis — skills that transfer directly into software engineering.',
    ],
    current: false,
  },
  {
    id: 5,
    type: 'education',
    role: 'Diploma in Information Technology',
    company: 'Institute of Information Technology',
    location: 'Myanmar',
    startDate: '2016',
    endDate: '2017',
    description: [
      'Studied core computer science fundamentals including programming, databases, networking, and software engineering.',
      'Transitioned from Geology background into a technical IT career path.',
    ],
    current: false,
  },
];
