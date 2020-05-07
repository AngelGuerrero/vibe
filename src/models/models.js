//
// Project
export const Project = {
  id: 0,
  Name: '',
  Description: '',
  Progress: 0,
  Color: '#000000',

  // PriorityId
  Priority: null,

  // Datetime format: '02/04/2020 20:00:15'
  createdAt: null,
  editedAt: null,
  // Date format: '02/04/2020'
  Deadline: null,

  Comments: [
    'comment1',
  ],

  Tasks: [{
    Name: 'Something',
    Description: 'Desc',
    Priority: 'PriorityId',
    // Datetime format: '02/04/2020 20:25:04'
    createdAt: null,
    editedAt: null,
    // Date format: '02/04/2020'
    Deadline: null,
    Done: false
  }],

  Tags: [
    'tagsId',
  ]
}

//
//Priority
export const Priority = [{
    Name: 'High',
    Description: 'Priority'
  },
  {
    Name: 'Medium',
    Description: 'Not priority'
  },
  {
    Name: 'Low',
    Description: 'Do it later'
  }
]

//
// Tags
export const TagModel = {
  Name: null,
  Color: null
}

//
// Resource
export const Resource = [{
  Title: '',
  Description: '',
  Link: '',
  // TagId
  Tags: []
}]

//
// Issues, the issues and or problems linked with a tag, or project
export const Issue = {
  Title: '',
  ProblemDescription: '',
  Solution: '',
  Tags: []
}

//
// Personal data
export const Person = {
  Name: '',
  Username: '',
  Email: '',
}