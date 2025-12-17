// IPC Scripture School Curriculum Data
// Aligned to official IPC Kumbanad, Kerala State curriculum structure

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
          { number: 1, title: "Creation", regionExamFocus: true },
          { number: 2, title: "God Made Me Special" },
          { number: 3, title: "Adam and Eve" },
          { number: 4, title: "Noah and the Ark", regionExamFocus: true },
          { number: 5, title: "Baby Moses" },
          { number: 6, title: "David the Shepherd Boy" },
          { number: 7, title: "Daniel and the Lions" },
          { number: 8, title: "Baby Jesus is Born", regionExamFocus: true },
          { number: 9, title: "Jesus Loves the Children" },
          { number: 10, title: "Jesus Calms the Storm" },
        ],
      },
      {
        title: "Beginners B",
        lessons: [
          { number: 1, title: "Creation Poem – I", regionExamFocus: true },
          { number: 2, title: "Creation Poem – II" },
          { number: 3, title: "Abraham's Journey" },
          { number: 4, title: "Joseph's Colorful Coat", regionExamFocus: true },
          { number: 5, title: "Moses and the Red Sea" },
          { number: 6, title: "Joshua and Jericho" },
          { number: 7, title: "Ruth and Naomi" },
          { number: 8, title: "Samuel Hears God", regionExamFocus: true },
          { number: 9, title: "The Wise Men Visit Jesus" },
          { number: 10, title: "Jesus Feeds 5000" },
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
          { number: 1, title: "Our Creator God", regionExamFocus: true },
          { number: 2, title: "The Fall of Man" },
          { number: 3, title: "Cain and Abel" },
          { number: 4, title: "Noah's Obedience", regionExamFocus: true },
          { number: 5, title: "The Tower of Babel" },
          { number: 6, title: "God Calls Abraham" },
          { number: 7, title: "Isaac is Born" },
          { number: 8, title: "Jacob and Esau" },
          { number: 9, title: "Joseph in Egypt", regionExamFocus: true },
          { number: 10, title: "Moses is Called" },
          { number: 11, title: "The Ten Plagues" },
          { number: 12, title: "The Passover", regionExamFocus: true },
        ],
      },
      {
        title: "Grade 2",
        lessons: [
          { number: 1, title: "Crossing the Red Sea", regionExamFocus: true },
          { number: 2, title: "The Ten Commandments" },
          { number: 3, title: "The Tabernacle" },
          { number: 4, title: "Balaam's Donkey" },
          { number: 5, title: "Joshua Leads Israel", regionExamFocus: true },
          { number: 6, title: "Gideon's Army" },
          { number: 7, title: "Samson's Strength" },
          { number: 8, title: "Ruth's Loyalty", regionExamFocus: true },
          { number: 9, title: "Hannah's Prayer" },
          { number: 10, title: "Samuel Anoints Saul" },
          { number: 11, title: "David and Goliath", regionExamFocus: true },
          { number: 12, title: "David Becomes King" },
        ],
      },
      {
        title: "Grade 3",
        lessons: [
          { number: 1, title: "Solomon's Wisdom", regionExamFocus: true },
          { number: 2, title: "Building the Temple" },
          { number: 3, title: "The Kingdom Divides" },
          { number: 4, title: "Elijah and the Prophets of Baal", regionExamFocus: true },
          { number: 5, title: "Elisha's Miracles" },
          { number: 6, title: "Jonah and the Great Fish" },
          { number: 7, title: "Isaiah's Vision", regionExamFocus: true },
          { number: 8, title: "Jeremiah's Call" },
          { number: 9, title: "Daniel in Babylon" },
          { number: 10, title: "The Fiery Furnace", regionExamFocus: true },
          { number: 11, title: "Ezra Returns" },
          { number: 12, title: "Nehemiah Rebuilds" },
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
          { number: 1, title: "The Birth of Jesus", regionExamFocus: true },
          { number: 2, title: "Jesus in the Temple" },
          { number: 3, title: "John the Baptist" },
          { number: 4, title: "Jesus' Baptism and Temptation", regionExamFocus: true },
          { number: 5, title: "Calling the Disciples" },
          { number: 6, title: "The Sermon on the Mount" },
          { number: 7, title: "Parables of Jesus", regionExamFocus: true },
          { number: 8, title: "Miracles of Healing" },
          { number: 9, title: "Jesus Walks on Water" },
          { number: 10, title: "The Transfiguration", regionExamFocus: true },
          { number: 11, title: "Raising Lazarus" },
          { number: 12, title: "The Triumphal Entry" },
        ],
      },
      {
        title: "Grade 5",
        lessons: [
          { number: 1, title: "The Last Supper", regionExamFocus: true },
          { number: 2, title: "Gethsemane" },
          { number: 3, title: "The Trial of Jesus" },
          { number: 4, title: "The Crucifixion", regionExamFocus: true },
          { number: 5, title: "The Resurrection", regionExamFocus: true },
          { number: 6, title: "Jesus Appears to Disciples" },
          { number: 7, title: "The Ascension" },
          { number: 8, title: "Pentecost", regionExamFocus: true },
          { number: 9, title: "The Early Church" },
          { number: 10, title: "Peter's Ministry" },
          { number: 11, title: "Stephen the Martyr" },
          { number: 12, title: "Philip and the Ethiopian" },
        ],
      },
      {
        title: "Grade 6",
        lessons: [
          { number: 1, title: "Saul's Conversion", regionExamFocus: true },
          { number: 2, title: "Peter's Vision" },
          { number: 3, title: "The Church at Antioch" },
          { number: 4, title: "Paul's First Missionary Journey", regionExamFocus: true },
          { number: 5, title: "The Jerusalem Council" },
          { number: 6, title: "Paul's Second Missionary Journey" },
          { number: 7, title: "Paul in Corinth", regionExamFocus: true },
          { number: 8, title: "Paul's Third Missionary Journey" },
          { number: 9, title: "Paul in Ephesus" },
          { number: 10, title: "Paul's Arrest", regionExamFocus: true },
          { number: 11, title: "Paul Before Felix and Festus" },
          { number: 12, title: "Paul's Journey to Rome" },
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
          { number: 1, title: "Introduction to the Bible", regionExamFocus: true },
          { number: 2, title: "The Inspiration of Scripture" },
          { number: 3, title: "Old Testament Overview" },
          { number: 4, title: "New Testament Overview", regionExamFocus: true },
          { number: 5, title: "The Nature of God" },
          { number: 6, title: "The Trinity Explained" },
          { number: 7, title: "Creation vs. Evolution", regionExamFocus: true },
          { number: 8, title: "The Problem of Sin" },
          { number: 9, title: "God's Plan of Salvation" },
          { number: 10, title: "The Person of Christ", regionExamFocus: true },
          { number: 11, title: "The Work of Christ" },
          { number: 12, title: "The Holy Spirit" },
        ],
      },
      {
        title: "Grade 8",
        lessons: [
          { number: 1, title: "What is the Church?", regionExamFocus: true },
          { number: 2, title: "The Local Church" },
          { number: 3, title: "Baptism and Communion" },
          { number: 4, title: "Spiritual Gifts", regionExamFocus: true },
          { number: 5, title: "Living by Faith" },
          { number: 6, title: "Prayer and Devotion" },
          { number: 7, title: "Witnessing for Christ", regionExamFocus: true },
          { number: 8, title: "Christian Ethics" },
          { number: 9, title: "Dealing with Temptation" },
          { number: 10, title: "The Fruit of the Spirit", regionExamFocus: true },
          { number: 11, title: "Christian Relationships" },
          { number: 12, title: "Preparing for the Future" },
        ],
      },
      {
        title: "Grade 9",
        lessons: [
          { number: 1, title: "The Life of Abraham", regionExamFocus: true },
          { number: 2, title: "Abraham's Faith Journey" },
          { number: 3, title: "The Life of Moses" },
          { number: 4, title: "Moses as Leader", regionExamFocus: true },
          { number: 5, title: "The Life of David" },
          { number: 6, title: "David's Psalms" },
          { number: 7, title: "The Life of Elijah", regionExamFocus: true },
          { number: 8, title: "Elijah's Courage" },
          { number: 9, title: "The Life of Daniel" },
          { number: 10, title: "Daniel's Faithfulness", regionExamFocus: true },
          { number: 11, title: "The Life of Peter" },
          { number: 12, title: "Peter's Transformation" },
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
          { number: 1, title: "Romans – Introduction", regionExamFocus: true },
          { number: 2, title: "Justification by Faith" },
          { number: 3, title: "Life in the Spirit" },
          { number: 4, title: "God's Plan for Israel", regionExamFocus: true },
          { number: 5, title: "Living Sacrifice" },
          { number: 6, title: "Ephesians – The Church" },
          { number: 7, title: "The Armor of God", regionExamFocus: true },
          { number: 8, title: "Philippians – Joy in Christ" },
          { number: 9, title: "Colossians – Christ Supreme" },
          { number: 10, title: "I Timothy – Church Leadership", regionExamFocus: true },
          { number: 11, title: "II Timothy – Perseverance" },
          { number: 12, title: "Hebrews – Christ Our High Priest" },
        ],
      },
      {
        title: "Grade 11",
        lessons: [
          { number: 1, title: "Christian Apologetics", regionExamFocus: true },
          { number: 2, title: "Defending the Faith" },
          { number: 3, title: "World Religions Overview" },
          { number: 4, title: "Christianity and Culture", regionExamFocus: true },
          { number: 5, title: "Ethics in Modern Life" },
          { number: 6, title: "Christian Worldview" },
          { number: 7, title: "Science and Faith", regionExamFocus: true },
          { number: 8, title: "The Problem of Evil" },
          { number: 9, title: "Evidence for Resurrection" },
          { number: 10, title: "The Reliability of Scripture", regionExamFocus: true },
          { number: 11, title: "Sharing Your Faith" },
          { number: 12, title: "Living with Purpose" },
        ],
      },
      {
        title: "Grade 12",
        lessons: [
          { number: 1, title: "Eschatology – End Times", regionExamFocus: true },
          { number: 2, title: "The Second Coming" },
          { number: 3, title: "The Book of Revelation" },
          { number: 4, title: "Heaven and Eternity", regionExamFocus: true },
          { number: 5, title: "Christian Leadership" },
          { number: 6, title: "Serving in Ministry" },
          { number: 7, title: "Marriage and Family", regionExamFocus: true },
          { number: 8, title: "Career and Calling" },
          { number: 9, title: "Financial Stewardship" },
          { number: 10, title: "Missions and Outreach", regionExamFocus: true },
          { number: 11, title: "Leaving a Legacy" },
          { number: 12, title: "Graduation – Go and Make Disciples", regionExamFocus: true },
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
