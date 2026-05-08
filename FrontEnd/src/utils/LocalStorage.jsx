const employees = [
  {
    id: 1,
    name: "Rampreet",
    email: "rkofficial1st@gmail.com",
    password: "123",
    taskCounts: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update website",
        taskDescription: "Revamp the homepage design with modern UI, better responsiveness, and improved accessibility for users.",
        taskDate: "2024-10-12",
        category: "Design",
        theam: "bg-purple-400"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client meeting",
        taskDescription: "Discuss project requirements, gather detailed feedback, and finalize the feature list with the client.",
        taskDate: "2024-10-10",
        category: "Meeting",
        theam: "bg-green-400"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix bugs",
        taskDescription: "Resolve bugs reported in the issue tracker and ensure all critical errors are fixed before release.",
        taskDate: "2024-10-14",
        category: "Development",
        theam: "bg-red-400"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "API integration",
        taskDescription: "Integrate third-party APIs and test endpoints to ensure smooth data flow between systems.",
        taskDate: "2024-10-15",
        category: "Backend",
        theam: "bg-blue-400"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix bugs",
        taskDescription: "Resolve bugs reported in the issue tracker and ensure all critical errors are fixed before release.",
        taskDate: "2024-10-14",
        category: "Development",
        theam: "bg-red-400"
      },
    ]
  },

  {
    id: 2,
    name: "Cutie",
    email: "jj6975871@gmail.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Database optimization",
        taskDescription: "Optimize database queries and indexing strategy to improve application performance and reduce load time.",
        taskDate: "2024-10-11",
        category: "Database",
        theam: "bg-yellow-400"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Design new feature",
        taskDescription: "Create detailed mockups and UI flow for the new feature and get approval from stakeholders.",
        taskDate: "2024-10-09",
        category: "Design",
        theam: "bg-pink-400"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Security audit",
        taskDescription: "Perform a complete security audit to identify vulnerabilities and implement necessary fixes.",
        taskDate: "2024-10-13",
        category: "Security",
        theam: "bg-red-500"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Backup system",
        taskDescription: "Set up automated backup system and verify data recovery procedures for safety.",
        taskDate: "2024-10-08",
        category: "DevOps",
        theam: "bg-indigo-400"
      },{
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Database optimization",
        taskDescription: "Optimize database queries and indexing strategy to improve application performance and reduce load time.",
        taskDate: "2024-10-11",
        category: "Database",
        theam: "bg-yellow-400"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Design new feature",
        taskDescription: "Create detailed mockups and UI flow for the new feature and get approval from stakeholders.",
        taskDate: "2024-10-09",
        category: "Design",
        theam: "bg-pink-400"
      },
    ]
  },

  {
    id: 3,
    name: "Sylen",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 3,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare presentation",
        taskDescription: "Prepare detailed slides with visuals, charts, and key points for the upcoming client presentation.",
        taskDate: "2024-10-13",
        category: "Presentation",
        theam: "bg-orange-400"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Code review",
        taskDescription: "Review codebase thoroughly and suggest improvements for performance and maintainability.",
        taskDate: "2024-10-12",
        category: "Development",
        theam: "bg-blue-500"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Testing",
        taskDescription: "Test the latest build, identify bugs, and ensure stability before deployment.",
        taskDate: "2024-10-08",
        category: "QA",
        theam: "bg-green-500"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Documentation",
        taskDescription: "Write technical documentation for new modules and update existing guides.",
        taskDate: "2024-10-14",
        category: "Documentation",
        theam: "bg-gray-400"
      }
    ]
  },

  {
    id: 4,
    name: "Priya",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 2,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write documentation",
        taskDescription: "Update and improve project documentation with proper formatting and examples.",
        taskDate: "2024-10-13",
        category: "Documentation",
        theam: "bg-indigo-400"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Set up CI/CD",
        taskDescription: "Implement CI/CD pipeline using modern tools for automated testing and deployment.",
        taskDate: "2024-10-11",
        category: "DevOps",
        theam: "bg-green-400"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Team coordination",
        taskDescription: "Coordinate with team members to ensure smooth progress and resolve blockers.",
        taskDate: "2024-10-15",
        category: "Management",
        theam: "bg-yellow-400"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Server setup",
        taskDescription: "Initial server setup failed due to configuration issues and needs rework.",
        taskDate: "2024-10-10",
        category: "DevOps",
        theam: "bg-red-400"
      }
    ]
  },

  {
    id: 5,
    name: "kriti",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 3,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "UI redesign",
        taskDescription: "Redesign UI to enhance user experience with modern layouts and improved usability.",
        taskDate: "2024-10-14",
        category: "Design",
        theam: "bg-pink-400"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Deploy new build",
        taskDescription: "Deploy the latest stable build to production and monitor for any issues.",
        taskDate: "2024-10-09",
        category: "DevOps",
        theam: "bg-green-400"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Client feedback",
        taskDescription: "Collect detailed feedback from clients and suggest improvements for next release.",
        taskDate: "2024-10-12",
        category: "Support",
        theam: "bg-blue-400"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Performance tuning",
        taskDescription: "Improve application speed by optimizing rendering and reducing unnecessary API calls.",
        taskDate: "2024-10-15",
        category: "Performance",
        theam: "bg-purple-500"
      }
    ]
  }
];


const admin = [{
    "id": 1,
    "email": "admin",
    "password": "123"
}];


export const setLocalStorage = () => {
    localStorage.setItem("employees",JSON.stringify(employees));
    localStorage.setItem("admin",JSON.stringify(admin));
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    
    return { employees, admin };

}
