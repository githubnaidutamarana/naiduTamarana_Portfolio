import { Project } from '../models/portfolio.models';

/**
 * Every project on the site comes from this list.
 * To add a project: append an object. To attach a prototype: drop the HTML file in
 * `public/prototypes/`, screenshots in `public/images/projects/`, and fill in `demo`.
 */

const PROTOTYPE_STACK = ['HTML5', 'CSS3', 'JavaScript'];
const OTP_HINT = 'Enter any 10-digit mobile number, then any 4 digits as the OTP.';

export const PROJECTS: Project[] = [
  {
    slug: 'ehr-emr-asc-modernization',
    title: 'EHR/EMR & ASC Platform — UI Modernization',
    category: 'Clinical platform',
    featured: true,
    summary:
      'Modernizing a production EHR/EMR and Ambulatory Surgery Center platform — AngularJS feature work, REST API integration with a .NET Core Web API, data binding, dynamic forms and reusable components.',
    overview: [
      'Modernization of an EHR/EMR and ASC (Ambulatory Surgery Center) platform. This was not a reskin: the work spans AngularJS development, REST API communication with a .NET Core Web API, data binding, dynamic forms and reusable components across clinical workflows.',
      'I modernize legacy screens into responsive layouts while wiring them to live data through HTTP requests, and build shared UI components such as custom dropdowns and a date picker.',
    ],
    highlights: [
      'UI modernization of legacy clinical screens',
      'AngularJS development',
      'REST API integration and HTTP requests',
      'AngularJS + .NET Core Web API integration',
      'Data binding and dynamic forms',
      'Reusable components: custom dropdowns, date picker',
      'Responsive design',
      'Healthcare / EHR workflows',
    ],
    tags: ['AngularJS', 'JavaScript', 'REST APIs', 'HTTP', '.NET Core Web API', 'HTML5', 'CSS3', 'Responsive UI'],
    focusAreas: [
      {
        title: 'UI modernization',
        icon: 'layout',
        points: ['Modernized legacy EHR/EMR and ASC screens', 'Responsive layouts for desktop, tablet and mobile', 'Figma-to-UI implementation'],
      },
      {
        title: 'AngularJS development',
        icon: 'code',
        points: ['Feature development in the AngularJS application', 'Data binding between views and models', 'Dynamic forms for clinical workflows'],
      },
      {
        title: 'API integration',
        icon: 'plug',
        points: ['REST API communication', 'HTTP requests to load and save clinical data', 'AngularJS + .NET Core Web API integration'],
      },
      {
        title: 'Reusable components',
        icon: 'layers',
        points: ['Components shared across modules', 'Custom dropdowns', 'Date picker'],
      },
      {
        title: 'Healthcare / EHR workflows',
        icon: 'pulse',
        points: ['Patient Registration', 'Appointment Booking', 'Consultation', 'ASC, Settings and Admin modules'],
      },
    ],
  },
  {
    slug: 'patient-onboarding',
    title: 'Patient Onboarding Form',
    category: 'Patient intake',
    summary:
      'A patient onboarding form built from scratch — patient registration, insurance verification, referral document upload and secure data capture.',
    overview: [
      'A patient onboarding (intake) form built from scratch, covering patient registration, insurance verification, referral document upload and secure capture of patient data.',
      'The interactive prototype walks through the complete intake journey on a mobile-first layout, from OTP verification to a reviewable summary and final submission.',
    ],
    highlights: [
      'Built from scratch',
      'Patient registration',
      'Insurance verification',
      'Referral document upload',
      'Secure data capture',
    ],
    tags: ['Patient Registration', 'Insurance Verification', 'Document Upload', 'Secure Data Capture'],
    demo: {
      url: 'prototypes/patient-onboarding.html',
      stack: PROTOTYPE_STACK,
      hint: OTP_HINT,
      flows: [
        'Mobile number and OTP verification',
        'Personal details with ID scan and auto-filled fields',
        'Profile photo capture or upload',
        'Insurance cards — scan, upload, add multiple, edit, remove',
        'Referral letter upload',
        'About you — language, emergency contact, preferred pharmacy',
        'Medical history — conditions, medications, habits, allergies',
        'HIPAA consent with e-signature',
        'Review summary with section-level edit, then submit',
      ],
      screens: [
        { src: 'images/projects/patient-onboarding-1.png', caption: 'Personal details with ID scan' },
        { src: 'images/projects/patient-onboarding-2.png', caption: 'Insurance card capture' },
        { src: 'images/projects/patient-onboarding-3.png', caption: 'Medical history' },
        { src: 'images/projects/patient-onboarding-4.png', caption: 'Review summary' },
      ],
    },
  },
  {
    slug: 'bill-pay',
    title: 'Patient Payments / Bill Pay',
    category: 'Payments',
    summary:
      'Patient bill payment with NMI Payment Gateway integration and a complete payment workflow.',
    overview: [
      'A patient payments module for paying outstanding medical bills online. My work covered the payment workflow and the NMI Payment Gateway integration.',
      'The prototype shows the patient-side experience: verifying the patient, reviewing balances by location, entering payment details and receiving a confirmation.',
    ],
    highlights: ['NMI Payment Gateway integration', 'End-to-end payment workflow'],
    tags: ['NMI Payment Gateway', 'Payment Workflow', 'API Integration'],
    demo: {
      url: 'prototypes/bill-pay.html',
      stack: PROTOTYPE_STACK,
      hint: OTP_HINT,
      flows: [
        'Mobile number and OTP verification',
        'Outstanding balance grouped by clinic location',
        'Itemized charge breakdown per location',
        'Payment amount and billing address with input validation',
        'Payment confirmation with transaction ID',
      ],
      screens: [
        { src: 'images/projects/bill-pay-1.png', caption: 'Balances by location' },
        { src: 'images/projects/bill-pay-2.png', caption: 'Secure payment form' },
        { src: 'images/projects/bill-pay-3.png', caption: 'Payment receipt' },
      ],
    },
  },
  {
    slug: 'book-appointment',
    title: 'Book Appointment Plugin',
    category: 'Scheduling',
    summary:
      'An embeddable booking plugin — authentication, doctor and slot selection, calendar-based booking and real-time appointment information.',
    overview: [
      'An appointment booking plugin that lets patients authenticate, choose a doctor and a time slot on a calendar, and see real-time appointment information.',
      'The prototype covers both new and existing patient paths, including OTP verification, provider availability and fallback options when no slots are open.',
    ],
    highlights: [
      'Authentication',
      'Doctor and slot selection',
      'Calendar-based booking',
      'Real-time appointment information',
    ],
    tags: ['Authentication', 'Calendar Booking', 'Slot Selection', 'Real-time Data'],
    demo: {
      url: 'prototypes/book-appointment.html',
      stack: PROTOTYPE_STACK,
      hint: OTP_HINT,
      flows: [
        'Clinic location selection',
        'New or existing patient path',
        'Existing patient verification by phone or email OTP',
        'Patient selection and personal details',
        'Visit reason and payor',
        'Provider selection with calendar availability and time slots',
        'No slots? Next available slot, waitlist or callback request',
        'Booking confirmation summary',
      ],
      screens: [
        { src: 'images/projects/book-appointment-2.png', caption: 'Provider calendar and slots' },
        { src: 'images/projects/book-appointment-1.png', caption: 'New or existing patient' },
        { src: 'images/projects/book-appointment-3.png', caption: 'Booking confirmation' },
      ],
    },
  },
  {
    slug: 'patient-portal',
    title: 'Patient Portal',
    category: 'Patient engagement',
    summary:
      'A patient portal with login, dashboard, visits, prescriptions, forms, profile and activity logs — with patient onboarding built in.',
    overview: [
      "A patient portal that brings a patient's care information into one place: login, dashboard, visits, prescriptions, forms, profile and activity logs, with patient onboarding built in.",
      'The prototype is a working walkthrough of the portal, including the embedded onboarding form, bill pay and appointment booking.',
    ],
    highlights: ['Login', 'Dashboard', 'My Visits', 'Prescriptions', 'Forms', 'Profile & Logs', 'Patient Onboarding'],
    tags: ['Authentication', 'Dashboard', 'Patient Records', 'Onboarding'],
    demo: {
      url: 'prototypes/patient-portal.html',
      stack: PROTOTYPE_STACK,
      hint: 'Log in with any username and password — or use “Login with OTP” with any 10-digit number and 4-digit code.',
      flows: [
        'Login, OTP login, sign up and account recovery',
        'Dashboard — appointments, billing, vision summary, reminders',
        'My Visits with date filters and visit summary export',
        'Prescriptions with medication details and refill requests',
        'Onboarding forms that open the full intake flow',
        'Activity logs with filters and pagination',
        'Education library with video and document viewer',
        'Profile — personal, demographics, insurance, documents, settings',
        'Bill pay and appointment booking inside the portal',
      ],
      screens: [
        { src: 'images/projects/patient-portal-1.png', caption: 'Dashboard' },
        { src: 'images/projects/patient-portal-2.png', caption: 'My Visits' },
        { src: 'images/projects/patient-portal-3.png', caption: 'Prescription details' },
        { src: 'images/projects/patient-portal-4.png', caption: 'Profile' },
      ],
    },
  },
];

export const findProject = (slug: string): Project | undefined =>
  PROJECTS.find((p) => p.slug === slug);

export const DEMO_PROJECTS = PROJECTS.filter((p) => !!p.demo);
