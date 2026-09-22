import {
  Certification,
  EducationItem,
  ExperienceItem,
  Expertise,
  HealthcareArea,
  NavLink,
  Profile,
  SkillGroup,
} from '../models/portfolio.models';

export const PROFILE: Profile = {
  name: 'Naidu Tamarana',
  initials: 'NT',
  role: 'Frontend Developer',
  headline:
    'I build healthcare web applications with Angular and AngularJS — from Figma-accurate screens to the REST APIs and .NET Core services behind them.',
  location: 'Hyderabad, India',
  experience: '2+ years',
  company: 'EHNOTE',
  email: 'naidutamarana465@gmail.com',
  phone: '+91 79936 76751',
  photo: 'images/profile.png',
  about: [
    "I'm a Frontend Developer based in Hyderabad with 2+ years of experience building healthcare products at EHNOTE. My work lives inside clinical software — EHR/EMR, ASC, patient registration, appointment booking and patient-facing portals.",
    'I work across the whole frontend of a feature: turning Figma designs into responsive screens, building reusable components in Angular and AngularJS, wiring those screens to .NET Core Web APIs over REST, and handling the data binding and dynamic forms that clinical workflows depend on.',
    "I've also migrated legacy AngularJS features to Angular 20, integrated third-party healthcare APIs and supported production releases — so I care about code that stays maintainable after it ships.",
  ],
};

export const NAV_LINKS: NavLink[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'demos', label: 'Demos' },
  { id: 'healthcare', label: 'Healthcare' },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Frontend',
    icon: 'code',
    skills: ['Angular 20', 'AngularJS', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    title: 'API & Backend',
    icon: 'server',
    skills: ['REST APIs', 'HTTP requests', 'API integration', '.NET Core Web API', 'C# / .NET'],
  },
  {
    title: 'UI Engineering',
    icon: 'layers',
    skills: ['Data binding', 'Reusable components', 'Dynamic forms', 'Responsive UI', 'Figma-to-UI', 'AngularJS → Angular migration'],
  },
  {
    title: 'Tools & Quality',
    icon: 'git',
    skills: ['Git', 'VS Code', 'Visual Studio', 'Unit testing', 'Debugging'],
  },
];

export const EXPERTISE: Expertise[] = [
  {
    title: 'Angular & AngularJS',
    icon: 'code',
    description: 'Feature development in AngularJS and Angular 20, including moving legacy AngularJS features to Angular.',
    points: ['AngularJS feature development', 'Angular 20 with TypeScript', 'AngularJS → Angular 20 migration'],
  },
  {
    title: 'API integration & HTTP',
    icon: 'plug',
    description: 'Connecting screens to REST endpoints and turning responses into dependable UI state.',
    points: ['REST API communication', 'HTTP requests for CRUD operations', 'Third-party healthcare APIs'],
  },
  {
    title: '.NET Core Web API',
    icon: 'server',
    description: 'Working on the backend side of a feature in C#/.NET so the UI and the API contract line up.',
    points: ['AngularJS + .NET API integration', 'Business logic in C#/.NET modules', 'Debugging across UI and API'],
  },
  {
    title: 'Data binding & dynamic forms',
    icon: 'form',
    description: 'Clinical forms where fields, sections and validation respond to the data behind them.',
    points: ['Two-way data binding', 'Dynamic, data-driven forms', 'Multi-step workflows'],
  },
  {
    title: 'Reusable components',
    icon: 'layers',
    description: 'Modular components built once and shared across modules, following Angular best practices.',
    points: ['Custom dropdowns', 'Date picker', 'Shared UI components'],
  },
  {
    title: 'Responsive, Figma-to-UI',
    icon: 'layout',
    description: 'Accurate implementation of designs that hold up on desktop, tablet and mobile.',
    points: ['Figma-to-UI development', 'Responsive layouts', 'UI modernization of legacy screens'],
  },
];

export const INTEGRATION_SNIPPET = `// patient.service.js — AngularJS service
app.factory('PatientService', ['$http', function ($http) {
  return {
    getVisits: (id) => $http.get('/api/patients/' + id + '/visits'),
    saveVisit: (visit) => $http.post('/api/visits', visit)
  };
}]);

// visits.controller.js — data binding
app.controller('VisitsCtrl', ['PatientService', function (PatientService) {
  const vm = this;
  vm.loading = true;
  PatientService.getVisits(vm.patientId)
    .then((res) => { vm.visits = res.data; })
    .finally(() => { vm.loading = false; });
}]);`;

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Software Developer — Frontend',
    company: 'EHNOTE',
    location: 'Hyderabad, India',
    period: 'Jan 2025 – Present',
    summary:
      'Frontend development for clinical healthcare applications — EHR/EMR, ASC and ophthalmology workflows — using Angular 20 and AngularJS with .NET APIs.',
    groups: [
      {
        title: 'Frontend engineering',
        items: [
          'Built and optimized responsive UI screens for clinical healthcare applications using Angular 20 and AngularJS.',
          'Migrated legacy features from AngularJS to Angular 20, improving performance and maintainability.',
          'Developed modular, reusable UI components following Angular best practices.',
        ],
      },
      {
        title: 'API & backend integration',
        items: [
          'Integrated RESTful APIs and implemented business logic using C#/.NET for various modules.',
          'Integrated Doctor First APIs to improve clinical data interoperability.',
          'Integrated Rcopia to support secure and compliant e-prescribing.',
          'Implemented role-based access control (RBAC) for structured user permissions.',
        ],
      },
      {
        title: 'Quality & delivery',
        items: [
          'Created unit and integration test cases to ensure stability and quality.',
          'Authored technical documentation, module-level design notes and release documentation.',
          'Collaborated with cross-functional teams and provided deployment support during production releases.',
        ],
      },
    ],
    modules: ['Patient Registration', 'Appointment Booking', 'Consultation', 'ASC', 'Settings', 'Admin', 'e-Modules'],
  },
];

export const HEALTHCARE_AREAS: HealthcareArea[] = [
  { title: 'Patient registration & onboarding', icon: 'user', description: 'Registration and intake flows that capture patient data securely.' },
  { title: 'Insurance verification', icon: 'shield', description: 'Capturing and verifying coverage details during intake.' },
  { title: 'Appointment booking', icon: 'calendar', description: 'Provider, calendar and slot selection with real-time availability.' },
  { title: 'Patient payments', icon: 'card', description: 'Bill pay workflows with NMI Payment Gateway integration.' },
  { title: 'E-prescribing', icon: 'form', description: 'Rcopia integration for secure, compliant e-prescribing.' },
  { title: 'Clinical interoperability', icon: 'link', description: 'Doctor First API integration for clinical data exchange.' },
  { title: 'ASC & ophthalmology', icon: 'pulse', description: 'Patient records, diagnostics, prescriptions and inventory workflows.' },
  { title: 'Access control', icon: 'database', description: 'Role-based access control and secure patient data flow across modules.' },
];

/** Healthcare Management System — Ophthalmology (EHNOTE). */
export const OPHTHALMOLOGY_WORK: string[] = [
  'Core modules for prescription and patient management',
  'Interfaces for patient records, diagnostics, appointments and prescriptions',
  'Rcopia integration for secure, compliant e-prescribing',
  'Inventory and stock management with real-time update logic',
  'Role-based access control (RBAC) for user permissions',
  'Secure, compliant patient data flow across modules',
];

export const EDUCATION: EducationItem[] = [
  {
    institution: 'Aditya Engineering College',
    program: 'Mechanical Engineering',
    period: '2019 – 2023',
    location: 'Surampalem, East Godavari',
  },
];

export const CERTIFICATIONS: Certification[] = [
  { title: 'Angular Advanced Development Certification', year: '2025' },
];
