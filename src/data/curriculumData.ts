// IPC Scripture School Curriculum Data
// Aligned to official IPC Kumbanad, Kerala State curriculum structure
// Source: Scripture_School_Curriculum_Map - CURRICULUM_MAP.pdf

export interface Lesson {
  number: number;
  title: string;
  regionExamFocus?: boolean;
}

export interface Section {
  title: string;
  lessons: Lesson[];
}

export interface CurriculumGroup {
  group: string;
  ageRange: string;
  sections: Section[];
}

export const curriculumData: CurriculumGroup[] = [
  {
    group: "Sub-Junior",
    ageRange: "Below 6 Years",
    sections: [
      {
        title: "Beginners A",
        lessons: [
          { number: 1, title: "Creation" },
          { number: 2, title: "Trees" },
          { number: 3, title: "Birds" },
          { number: 4, title: "God", regionExamFocus: true },
          { number: 5, title: "Parents" },
          { number: 6, title: "Family" },
          { number: 7, title: "Love" },
          { number: 8, title: "Prayer" },
          { number: 9, title: "Strengthening God" },
          { number: 10, title: "Jesus", regionExamFocus: true },
          { number: 11, title: "Peace" },
          { number: 12, title: "Child Jesus in the Temple" },
          { number: 13, title: "Wedding in Cana" },
          { number: 14, title: "The Good Boy" },
          { number: 15, title: "The Lost Sheep" },
          { number: 16, title: "The Miraculous Fishing", regionExamFocus: true },
          { number: 17, title: "The Daughter of Jairus" },
        ],
      },
      {
        title: "Beginners B",
        lessons: [
          { number: 1, title: "Jesus Calms the Storm" },
          { number: 2, title: "Jesus Heals the Blind" },
          { number: 3, title: "Jesus Heals the Officer's Son" },
          { number: 4, title: "Jesus Walks on Sea", regionExamFocus: true },
          { number: 5, title: "The House of the Wiseman" },
          { number: 6, title: "Ephphatha" },
          { number: 7, title: "Lazarus Resurrected" },
          { number: 8, title: "Jesus Dies for Us" },
          { number: 9, title: "Jesus – Burial and Resurrection" },
          { number: 10, title: "Jesus Is Coming Again", regionExamFocus: true },
          { number: 11, title: "Heaven" },
          { number: 12, title: "Family Prayer" },
          { number: 13, title: "Worship" },
          { number: 14, title: "Hosanna" },
          { number: 15, title: "The Crucifixion of Jesus" },
          { number: 16, title: "The Resurrection of Jesus", regionExamFocus: true },
          { number: 17, title: "Healing the Lame Man" },
          { number: 18, title: "Jesus Will Come Again" },
        ],
      },
    ],
  },
  {
    group: "Junior",
    ageRange: "6–9 Years",
    sections: [
      {
        title: "Grade 1",
        lessons: [
          { number: 1, title: "Creation Poem – I" },
          { number: 2, title: "Creation Poem – II" },
          { number: 3, title: "Faith" },
          { number: 4, title: "God Who Keeps", regionExamFocus: true },
          { number: 5, title: "Obedience" },
          { number: 6, title: "Sin" },
          { number: 7, title: "Jealousy" },
          { number: 8, title: "Baby in the Basket" },
          { number: 9, title: "Revealing God" },
          { number: 10, title: "God Who Fights for Us", regionExamFocus: true },
          { number: 11, title: "Prayer" },
          { number: 12, title: "The Prophet Fed by the Crow" },
        ],
      },
      {
        title: "Grade 2",
        lessons: [
          { number: 1, title: "God Punishes Disobedience" },
          { number: 2, title: "Holy Bible" },
          { number: 3, title: "Christmas" },
          { number: 4, title: "Jesus – King and Saviour", regionExamFocus: true },
          { number: 5, title: "The Good Friend" },
          { number: 6, title: "Happiness – Jesus and Zacchaeus" },
          { number: 7, title: "Jesus Heals the Man with the Withered Hand" },
          { number: 8, title: "Jesus Heals the Paralysed" },
          { number: 9, title: "The Shepherds See Jesus" },
          { number: 10, title: "The Wise Men See Jesus", regionExamFocus: true },
          { number: 11, title: "The First Miracle of Jesus" },
          { number: 12, title: "Jesus and Zacchaeus" },
        ],
      },
      {
        title: "Grade 3",
        lessons: [
          { number: 1, title: "The Blind Men Who Received Sight" },
          { number: 2, title: "The Man Whom Jesus Raised from the Dead" },
          { number: 3, title: "The Good Friend" },
          { number: 4, title: "Five Loaves and Two Fish", regionExamFocus: true },
          { number: 5, title: "The Lost Sheep" },
          { number: 6, title: "Healing of the Paralytic" },
          { number: 7, title: "Jesus: His Crucifixion" },
          { number: 8, title: "Jesus: His Resurrection and Ascension to Heaven" },
          { number: 9, title: "Stephen Who Sacrificed His Life for Jesus" },
          { number: 10, title: "Paul the Apostle", regionExamFocus: true },
          { number: 11, title: "Jesus Resurrected and Is Alive" },
        ],
      },
    ],
  },
  {
    group: "Intermediate",
    ageRange: "9–12 Years",
    sections: [
      {
        title: "Grade 4",
        lessons: [
          { number: 1, title: "Our Creator God" },
          { number: 2, title: "The Disobedience of Adam" },
          { number: 3, title: "Cain and Abel" },
          { number: 4, title: "Noah's Ark", regionExamFocus: true },
          { number: 5, title: "Abraham" },
          { number: 6, title: "The Destruction of Sodom" },
          { number: 7, title: "Obedience Is Important for Children" },
          { number: 8, title: "Joseph" },
          { number: 9, title: "The Birth of Moses" },
          { number: 10, title: "God Calls Moses", regionExamFocus: true },
          { number: 11, title: "The Deliverance of Israel" },
          { number: 12, title: "The Fall of Jericho" },
        ],
      },
      {
        title: "Grade 5",
        lessons: [
          { number: 1, title: "Achan's Theft" },
          { number: 2, title: "Samson" },
          { number: 3, title: "The Young Lad Samuel" },
          { number: 4, title: "The Brave Boy Who Killed the Giant", regionExamFocus: true },
          { number: 5, title: "The Young Men Who Escaped the Fire" },
          { number: 6, title: "The Administrator Who Revealed the True God" },
          { number: 7, title: "The Disobedient Prophet" },
          { number: 8, title: "The Human Incarnation of Jesus" },
          { number: 9, title: "The Birth of Jesus" },
          { number: 10, title: "Jesus: His Childhood", regionExamFocus: true },
          { number: 11, title: "Jesus: His Temptations" },
          { number: 12, title: "The Cleansing of the Temple" },
        ],
      },
      {
        title: "Grade 6",
        lessons: [
          { number: 1, title: "The Father Who Lost His Son" },
          { number: 2, title: "God Our Shield" },
          { number: 3, title: "Jesus and Children" },
          { number: 4, title: "The Family Whom Jesus Loved", regionExamFocus: true },
          { number: 5, title: "Prayer – What Is It and What Not" },
          { number: 6, title: "God Gives Commandments" },
          { number: 7, title: "Christian Martyrs (An Introduction)" },
          { number: 8, title: "The Tabernacle" },
          { number: 9, title: "The Sower of the Seed" },
          { number: 10, title: "John the Baptist", regionExamFocus: true },
          { number: 11, title: "Jesus and Disciples" },
        ],
      },
    ],
  },
  {
    group: "Senior",
    ageRange: "12–15 Years",
    sections: [
      {
        title: "Grade 7",
        lessons: [
          { number: 1, title: "First Parents and Disobedience" },
          { number: 2, title: "True Worship" },
          { number: 3, title: "The Person Who Walked with God" },
          { number: 4, title: "Rainbow", regionExamFocus: true },
          { number: 5, title: "Babel Tower" },
          { number: 6, title: "Abraham: His Call and Obedience" },
          { number: 7, title: "Lot's Selection" },
          { number: 8, title: "A Father Who Fully Obeyed God" },
          { number: 9, title: "Let Us Go for a Wedding" },
          { number: 10, title: "Esau and Jacob", regionExamFocus: true },
          { number: 11, title: "The Story of Dreamer Joseph Who Became a Minister" },
        ],
      },
      {
        title: "Grade 8",
        lessons: [
          { number: 1, title: "Joseph's Dream Fulfilled" },
          { number: 2, title: "Belief Brings Relief" },
          { number: 3, title: "God Who Cares for Israel in the Wilderness" },
          { number: 4, title: "The Blessed Grandmother", regionExamFocus: true },
          { number: 5, title: "Youths at the Blazing Furnace" },
          { number: 6, title: "The Shepherd Who Defeated the Giant" },
          { number: 7, title: "Samuel: The Answer of Prayer" },
          { number: 8, title: "Jesus Baptism and Ministry" },
          { number: 9, title: "Jesus Triumphs Over Death" },
          { number: 10, title: "John the Baptist (Part II)", regionExamFocus: true },
          { number: 11, title: "Jesus: His Crucifixion" },
        ],
      },
      {
        title: "Grade 9",
        lessons: [
          { number: 1, title: "Jesus: His Resurrection and Ascension to Heaven" },
          { number: 2, title: "Ruth" },
          { number: 3, title: "Geronimo" },
          { number: 4, title: "Timothy", regionExamFocus: true },
          { number: 5, title: "The Life History of Jesus Christ – Baptism of Jesus" },
          { number: 6, title: "Healing" },
          { number: 7, title: "Christology: Pedagogy of the Master Teacher" },
          { number: 8, title: "First and Second Missionary Journeys of Apostle Paul" },
          { number: 9, title: "He Who Has an Ear, Let Him Hear – II" },
          { number: 10, title: "Esther", regionExamFocus: true },
        ],
      },
    ],
  },
  {
    group: "Super-Senior",
    ageRange: "15–18 Years",
    sections: [
      {
        title: "Grade 10",
        lessons: [
          { number: 1, title: "Noah and the Flood" },
          { number: 2, title: "Abraham: Father of All Believers" },
          { number: 3, title: "How Jacob Became the Nation Israel" },
          { number: 4, title: "Joseph – A Minister from Prison", regionExamFocus: true },
          { number: 5, title: "Jacob Gathered to God's Presence" },
          { number: 6, title: "Jesus Saves Sinners" },
          { number: 7, title: "Joshua" },
          { number: 8, title: "Job" },
          { number: 9, title: "Isaac" },
          { number: 10, title: "Israel's Election and Their Stay at Egypt", regionExamFocus: true },
          { number: 11, title: "The Ways to Find God" },
          { number: 12, title: "Sacrifices of Israel" },
        ],
      },
      {
        title: "Grade 11",
        lessons: [
          { number: 1, title: "Theory of Evolution" },
          { number: 2, title: "The Special Features of the Prophecy of Daniel" },
          { number: 3, title: "The Attributes of God – Part I" },
          { number: 4, title: "Sweet-Smelling Sacrifices", regionExamFocus: true },
          { number: 5, title: "God Is Triune" },
          { number: 6, title: "The Dream of Nebuchadnezzar" },
          { number: 7, title: "The Tabernacle: Structure and Importance" },
          { number: 8, title: "Baptism of the Holy Spirit" },
          { number: 9, title: "The Prayer of Daniel" },
          { number: 10, title: "The Tabernacle: Rooms and Articles", regionExamFocus: true },
          { number: 11, title: "Functions of the Holy Spirit" },
        ],
      },
      {
        title: "Grade 12",
        lessons: [
          { number: 1, title: "Seventy Weeks" },
          { number: 2, title: "Salvation – In Jesus Christ" },
          { number: 3, title: "The Tabernacle: Spiritual Representations" },
          { number: 4, title: "Symbols of the Holy Spirit", regionExamFocus: true },
          { number: 5, title: "Seventieth Week Appearance of 'The Man of Iniquity' and Related Events" },
          { number: 6, title: "The Life History of Jesus Christ – Birth and Childhood of Jesus Christ" },
          { number: 7, title: "Separation" },
          { number: 8, title: "Christology: Person of Christ and Christological Controversies" },
          { number: 9, title: "The Intrusion of False Teachings into the Christian Community – Part IV (Modern Age)" },
          { number: 10, title: "He Who Has an Ear, Let Him Hear – I", regionExamFocus: true },
          { number: 11, title: "Nehemiah" },
        ],
      },
    ],
  },
];

// Age group data for interactive cards (matching curriculum groups)
export const ageGroups = [
  {
    id: "sub-junior",
    group: "Sub-Junior",
    ageRange: "Below 6 Years",
    summary: "Foundation of faith through stories and songs",
    color: "text-amber-600",
    bg: "bg-amber-100",
    borderActive: "ring-amber-400",
  },
  {
    id: "junior",
    group: "Junior",
    ageRange: "6–9 Years",
    summary: "Building strong biblical foundations",
    color: "text-sky-600",
    bg: "bg-sky-100",
    borderActive: "ring-sky-400",
  },
  {
    id: "intermediate",
    group: "Intermediate",
    ageRange: "9–12 Years",
    summary: "Deepening understanding of Scripture",
    color: "text-emerald-600",
    bg: "bg-emerald-100",
    borderActive: "ring-emerald-400",
  },
  {
    id: "senior",
    group: "Senior",
    ageRange: "12–15 Years",
    summary: "Exploring theological foundations",
    color: "text-violet-600",
    bg: "bg-violet-100",
    borderActive: "ring-violet-400",
  },
  {
    id: "super-senior",
    group: "Super-Senior",
    ageRange: "15–18 Years",
    summary: "Preparing for life and ministry",
    color: "text-rose-600",
    bg: "bg-rose-100",
    borderActive: "ring-rose-400",
  },
];
