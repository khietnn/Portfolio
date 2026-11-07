// Toàn bộ nội dung của portfolio nằm ở đây — muốn sửa chữ, thêm project thì chỉ cần sửa file này.

export const profile = {
  name: 'Nguyen Ngoc Khiet',
  firstLine: 'Nguyen Ngoc',
  lastLine: 'Khiet',
  tagline:
    'Software Engineering student at FPT University, building full-stack apps with Java, Spring Boot, React and TypeScript.',
  statement: 'I turn real-world workflows into tools people can actually use.',
  bio: "I'm Nguyen Ngoc Khiet, based in Vietnam. I started with HTML & CSS and grew into full-stack development through university projects and real apps for small businesses. I care about clean structure, tests that matter, and interfaces that feel simple.",
  email: 'khietnguyenngoc.ttma@gmail.com',
  cv: './CV_NguyenNgocKhiet.pdf', // file nằm trong public/
  facts: [
    { key: 'school', value: 'FPT University' },
    { key: 'major', value: 'Software Engineering' },
    { key: 'location', value: 'Vietnam' },
    { key: 'status', value: 'open to internships', highlight: true },
  ],
}

// Đoạn code được "gõ" ra ở phần đầu trang. Mỗi phần tử: [loại màu, chữ].
export type TokenKind = 'keyword' | 'name' | 'prop' | 'string' | 'comment' | 'plain'
export const codeTokens: [TokenKind, string][] = [
  ['keyword', 'const '], ['name', 'khiet'], ['plain', ' = {\n'],
  ['prop', '  role'], ['plain', ': '], ['string', '"Full Stack Developer"'], ['plain', ',\n'],
  ['prop', '  school'], ['plain', ': '], ['string', '"FPT University"'], ['plain', ',\n'],
  ['prop', '  stack'], ['plain', ': ['], ['string', '"Java"'], ['plain', ', '], ['string', '"Spring Boot"'],
  ['plain', ', '], ['string', '"React"'], ['plain', ', '], ['string', '"TypeScript"'], ['plain', '],\n'],
  ['prop', '  openTo'], ['plain', ': '], ['string', '"internships & projects"'], ['plain', ',\n'],
  ['plain', '};\n\n'],
  ['comment', "// let's build something together"],
]

export const skills: { group: string; items: string[] }[] = [
  { group: 'languages', items: ['Java', 'TypeScript', 'JavaScript', 'SQL', 'HTML', 'CSS', 'Python'] },
  { group: 'backend', items: ['Spring Boot', 'Thymeleaf', 'Hibernate/JPA', 'REST API'] },
  { group: 'frontend', items: ['React', 'Vite', 'Tailwind CSS'] },
  { group: 'database', items: ['SQL Server', 'PostgreSQL (Supabase)', 'IndexedDB (Dexie)'] },
  { group: 'tools', items: ['Git/GitHub', 'Vercel', 'Maven', 'Vitest'] },
]

export type Project = {
  title: string
  description: string
  stack: string[]
  isPrivate?: boolean
  demo?: string
  code?: string
}

export const projects: Project[] = [
  {
    title: 'My An Hotel',
    description:
      'Hotel management app for a real family hotel: front-desk check-in, bookings calendar, room rates, guest declarations and export. Works offline as a PWA and syncs with Supabase.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Supabase/PostgreSQL', 'PWA'],
    isPrivate: true,
  },
  {
    title: 'Racehorse Transport',
    description:
      'Booking and management platform for racehorse transport, with a Spring Boot N-layer backend and a React frontend talking through a documented API contract.',
    stack: ['Java', 'Spring Boot', 'SQL Server', 'React', 'TypeScript'],
    demo: 'https://swp-racehorse-transport-sigma.vercel.app',
    code: 'https://github.com/khietnn/SWP_RacehorseTransport',
  },
  {
    title: 'Thegioihoatuoi',
    description:
      'Online flower shop with customer and admin roles, built on Spring Boot MVC with Thymeleaf and SQL Server, tested on H2.',
    stack: ['Java', 'Spring Boot', 'Thymeleaf', 'SQL Server'],
    isPrivate: true,
  },
  {
    title: 'Student Scam Defense E-Handbook',
    description:
      'Interactive e-handbook that helps students recognize common scams (fake tuition payments, job offers, and more), exportable as PDF.',
    stack: ['HTML', 'JavaScript', 'Python'],
    isPrivate: true,
    demo: 'https://ssg105-ehbook.vercel.app',
  },
  {
    title: 'Todo List',
    description: 'Simple task manager in vanilla JavaScript.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://todo-list-eight-sooty.vercel.app',
    code: 'https://github.com/khietnn/TodoList',
  },
]

export const research = [
  {
    title: 'An Efficient Unigram-Based Method for Functional and Non-Functional Requirement Classification',
    venue: 'EAI FISAT 2026 · Ho Chi Minh City',
    status: 'accepted · not presented',
    authors: 'Co-authored with lecturer Đỗ Phúc Thịnh (FPT University)',
    summary:
      'Automatically labels software requirements as functional (what the system does) or non-functional (how well it does it). Using single words only, the model keeps about 97% of the best n-gram model’s macro F1 on 6,086 requirements, with a 28× smaller vocabulary and 7.8× faster training.',
  },
]

export const socials = [
  { label: 'github', href: 'https://github.com/khietnn' },
  { label: 'zalo', href: 'https://zalo.me/0833942069' },
  { label: 'instagram', href: 'https://www.instagram.com/nng.khiet_06/' },
  { label: 'facebook', href: 'https://www.facebook.com/khiet.nguyenngoc.75/' },
  { label: 'x', href: 'https://x.com/kitehgn' },
]

export const navLinks = ['about', 'skills', 'projects', 'research', 'contact'] as const
