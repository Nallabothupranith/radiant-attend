// Dummy data for the dashboard

export interface Student {
  id: string;
  name: string;
  rollNo: string;
  branch: string;
  year: number;
  attendance: number;
  marks: { [subject: string]: number };
  feePaid: boolean;
  riskLevel: 'high' | 'medium' | 'low';
  counselorId?: string;
}

export interface Counselor {
  id: string;
  name: string;
  email: string;
  branch: string;
  specialization: string;
  assignedStudents: number;
}

export interface Meeting {
  id: string;
  counselorId: string;
  counselorName: string;
  date: string;
  time: string;
  agenda: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

export const branches = ['CSE', 'ECE', 'MECH', 'IT', 'CIVIL', 'EEE'];

export const subjects = {
  CSE: ['Data Structures', 'Algorithms', 'Database Systems', 'Web Development', 'Machine Learning'],
  ECE: ['Digital Electronics', 'Signal Processing', 'Communications', 'VLSI Design', 'Embedded Systems'],
  MECH: ['Thermodynamics', 'Fluid Mechanics', 'Manufacturing', 'CAD', 'Materials Science'],
  IT: ['Programming', 'Database Management', 'Software Engineering', 'Networks', 'Cybersecurity'],
  CIVIL: ['Structural Engineering', 'Transportation', 'Geotechnical', 'Environmental', 'Construction'],
  EEE: ['Power Systems', 'Control Systems', 'Electronics', 'Electrical Machines', 'Power Electronics']
};

// Generate dummy students
export const generateDummyStudents = (): Student[] => {
  const students: Student[] = [];
  const names = [
    'Arjun Kumar', 'Priya Sharma', 'Rahul Patel', 'Sneha Reddy', 'Vikram Singh',
    'Anita Gupta', 'Karan Joshi', 'Deepika Nair', 'Suresh Yadav', 'Meera Agarwal',
    'Rohit Sharma', 'Kavya Krishnan', 'Arun Mehta', 'Pooja Verma', 'Sanjay Kumar',
    'Riya Shah', 'Nikhil Jain', 'Shreya Pandey', 'Manish Tiwari', 'Nisha Kumari'
  ];

  for (let i = 0; i < 200; i++) {
    const branch = branches[Math.floor(Math.random() * branches.length)];
    const attendance = Math.floor(Math.random() * 40) + 60; // 60-100%
    const branchSubjects = subjects[branch as keyof typeof subjects];
    const marks: { [subject: string]: number } = {};
    
    branchSubjects.forEach(subject => {
      marks[subject] = Math.floor(Math.random() * 40) + 60; // 60-100 marks
    });

    const avgMarks = Object.values(marks).reduce((a, b) => a + b, 0) / Object.values(marks).length;
    
    let riskLevel: 'high' | 'medium' | 'low';
    if (attendance < 75 || avgMarks < 70) {
      riskLevel = 'high';
    } else if (attendance < 85 || avgMarks < 80) {
      riskLevel = 'medium';
    } else {
      riskLevel = 'low';
    }

    students.push({
      id: `STU${String(i + 1).padStart(3, '0')}`,
      name: names[Math.floor(Math.random() * names.length)],
      rollNo: `${branch}${String(i + 1).padStart(3, '0')}`,
      branch,
      year: Math.floor(Math.random() * 4) + 1,
      attendance,
      marks,
      feePaid: Math.random() > 0.2, // 80% fee payment rate
      riskLevel,
    });
  }

  return students;
};

// Generate dummy counselors
export const generateDummyCounselors = (): Counselor[] => {
  const counselors: Counselor[] = [];
  const names = [
    'Dr. Rajesh Kumar', 'Dr. Sunita Sharma', 'Prof. Amit Patel', 'Dr. Lakshmi Reddy',
    'Prof. Sunil Singh', 'Dr. Kavita Gupta', 'Prof. Ravi Joshi', 'Dr. Nandini Nair'
  ];

  const specializations = [
    'Academic Counseling', 'Career Guidance', 'Personal Development', 
    'Stress Management', 'Industry Mentoring', 'Research Guidance'
  ];

  branches.forEach((branch, index) => {
    counselors.push({
      id: `COUN${String(index + 1).padStart(2, '0')}`,
      name: names[index] || `Counselor ${index + 1}`,
      email: `counselor${index + 1}@schoolhub.edu`,
      branch,
      specialization: specializations[Math.floor(Math.random() * specializations.length)],
      assignedStudents: Math.floor(Math.random() * 15) + 5, // 5-20 students
    });
  });

  return counselors;
};

// Generate dummy meetings
export const generateDummyMeetings = (): Meeting[] => {
  const meetings: Meeting[] = [];
  const counselors = generateDummyCounselors();
  const agendas = [
    'Student Performance Review',
    'Career Guidance Session',
    'Academic Planning',
    'Industry Interaction Planning',
    'Student Welfare Discussion',
    'Placement Preparation Review'
  ];

  for (let i = 0; i < 10; i++) {
    const counselor = counselors[Math.floor(Math.random() * counselors.length)];
    const date = new Date();
    date.setDate(date.getDate() + Math.floor(Math.random() * 30));
    
    meetings.push({
      id: `MEET${String(i + 1).padStart(3, '0')}`,
      counselorId: counselor.id,
      counselorName: counselor.name,
      date: date.toISOString().split('T')[0],
      time: `${Math.floor(Math.random() * 8) + 9}:00`,
      agenda: agendas[Math.floor(Math.random() * agendas.length)],
      status: Math.random() > 0.7 ? 'completed' : 'scheduled',
    });
  }

  return meetings;
};

// Initialize localStorage with dummy data if empty
export const initializeDummyData = () => {
  if (!localStorage.getItem('students')) {
    localStorage.setItem('students', JSON.stringify(generateDummyStudents()));
  }
  if (!localStorage.getItem('counselors')) {
    localStorage.setItem('counselors', JSON.stringify(generateDummyCounselors()));
  }
  if (!localStorage.getItem('meetings')) {
    localStorage.setItem('meetings', JSON.stringify(generateDummyMeetings()));
  }
};

// Helper functions to get data from localStorage
export const getStudents = (): Student[] => {
  const data = localStorage.getItem('students');
  return data ? JSON.parse(data) : [];
};

export const getCounselors = (): Counselor[] => {
  const data = localStorage.getItem('counselors');
  return data ? JSON.parse(data) : [];
};

export const getMeetings = (): Meeting[] => {
  const data = localStorage.getItem('meetings');
  return data ? JSON.parse(data) : [];
};

export const updateStudents = (students: Student[]) => {
  localStorage.setItem('students', JSON.stringify(students));
};

export const updateCounselors = (counselors: Counselor[]) => {
  localStorage.setItem('counselors', JSON.stringify(counselors));
};

export const updateMeetings = (meetings: Meeting[]) => {
  localStorage.setItem('meetings', JSON.stringify(meetings));
};