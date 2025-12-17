import { Layout } from "@/components/layout/Layout";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { BackToTop } from "@/components/ui/BackToTop";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen, GraduationCap, Star } from "lucide-react";
import scriptureSchoolLogo from "@/assets/scripture-school-logo-transparent.png";

interface Lesson {
  number: number;
  title: string;
  isExamFocus?: boolean;
}

interface Grade {
  name: string;
  lessons: Lesson[];
}

interface AgeBand {
  name: string;
  description: string;
  icon: React.ReactNode;
  grades: Grade[];
}

const curriculumData: AgeBand[] = [
  {
    name: "Beginners",
    description: "Ages 3-5 • Foundation of faith through stories and songs",
    icon: <Star className="w-5 h-5" />,
    grades: [
      {
        name: "Beginners Level 1",
        lessons: [
          { number: 1, title: "God Made the World", isExamFocus: true },
          { number: 2, title: "God Made Me Special" },
          { number: 3, title: "Adam and Eve in the Garden" },
          { number: 4, title: "Noah and the Ark", isExamFocus: true },
          { number: 5, title: "Baby Moses" },
          { number: 6, title: "David the Shepherd Boy" },
          { number: 7, title: "Daniel and the Lions" },
          { number: 8, title: "Baby Jesus is Born", isExamFocus: true },
          { number: 9, title: "Jesus Loves the Children" },
          { number: 10, title: "Jesus Calms the Storm" },
        ],
      },
      {
        name: "Beginners Level 2",
        lessons: [
          { number: 1, title: "God's Beautiful Creation", isExamFocus: true },
          { number: 2, title: "Abraham's Journey" },
          { number: 3, title: "Joseph's Colorful Coat" },
          { number: 4, title: "Moses and the Red Sea", isExamFocus: true },
          { number: 5, title: "Joshua and Jericho" },
          { number: 6, title: "Ruth and Naomi" },
          { number: 7, title: "Samuel Hears God" },
          { number: 8, title: "The Wise Men Visit Jesus", isExamFocus: true },
          { number: 9, title: "Jesus Feeds 5000" },
          { number: 10, title: "The Good Shepherd" },
        ],
      },
    ],
  },
  {
    name: "Primary",
    description: "Ages 6-8 • Building biblical foundations",
    icon: <BookOpen className="w-5 h-5" />,
    grades: [
      {
        name: "Grade 1",
        lessons: [
          { number: 1, title: "The Creation Story", isExamFocus: true },
          { number: 2, title: "The Fall of Man" },
          { number: 3, title: "Cain and Abel" },
          { number: 4, title: "Noah's Obedience", isExamFocus: true },
          { number: 5, title: "The Tower of Babel" },
          { number: 6, title: "God Calls Abraham" },
          { number: 7, title: "Isaac is Born" },
          { number: 8, title: "Jacob and Esau" },
          { number: 9, title: "Joseph in Egypt", isExamFocus: true },
          { number: 10, title: "Moses is Called" },
          { number: 11, title: "The Ten Plagues" },
          { number: 12, title: "The Passover", isExamFocus: true },
        ],
      },
      {
        name: "Grade 2",
        lessons: [
          { number: 1, title: "Crossing the Red Sea", isExamFocus: true },
          { number: 2, title: "The Ten Commandments" },
          { number: 3, title: "The Tabernacle" },
          { number: 4, title: "Balaam's Donkey" },
          { number: 5, title: "Joshua Leads Israel", isExamFocus: true },
          { number: 6, title: "Gideon's Army" },
          { number: 7, title: "Samson's Strength" },
          { number: 8, title: "Ruth's Loyalty", isExamFocus: true },
          { number: 9, title: "Hannah's Prayer" },
          { number: 10, title: "Samuel Anoints Saul" },
          { number: 11, title: "David and Goliath", isExamFocus: true },
          { number: 12, title: "David Becomes King" },
        ],
      },
      {
        name: "Grade 3",
        lessons: [
          { number: 1, title: "Solomon's Wisdom", isExamFocus: true },
          { number: 2, title: "Building the Temple" },
          { number: 3, title: "The Kingdom Divides" },
          { number: 4, title: "Elijah and the Prophets of Baal", isExamFocus: true },
          { number: 5, title: "Elisha's Miracles" },
          { number: 6, title: "Jonah and the Great Fish" },
          { number: 7, title: "Isaiah's Vision", isExamFocus: true },
          { number: 8, title: "Jeremiah's Call" },
          { number: 9, title: "Daniel in Babylon" },
          { number: 10, title: "The Fiery Furnace", isExamFocus: true },
          { number: 11, title: "Ezra Returns" },
          { number: 12, title: "Nehemiah Rebuilds" },
        ],
      },
    ],
  },
  {
    name: "Juniors",
    description: "Ages 9-11 • Deepening understanding of Scripture",
    icon: <BookOpen className="w-5 h-5" />,
    grades: [
      {
        name: "Grade 4",
        lessons: [
          { number: 1, title: "The Birth of Jesus", isExamFocus: true },
          { number: 2, title: "Jesus in the Temple" },
          { number: 3, title: "John the Baptist" },
          { number: 4, title: "Jesus' Baptism and Temptation", isExamFocus: true },
          { number: 5, title: "Calling the Disciples" },
          { number: 6, title: "The Sermon on the Mount" },
          { number: 7, title: "Parables of Jesus", isExamFocus: true },
          { number: 8, title: "Miracles of Healing" },
          { number: 9, title: "Jesus Walks on Water" },
          { number: 10, title: "The Transfiguration", isExamFocus: true },
          { number: 11, title: "Raising Lazarus" },
          { number: 12, title: "The Triumphal Entry" },
        ],
      },
      {
        name: "Grade 5",
        lessons: [
          { number: 1, title: "The Last Supper", isExamFocus: true },
          { number: 2, title: "Gethsemane" },
          { number: 3, title: "The Trial of Jesus" },
          { number: 4, title: "The Crucifixion", isExamFocus: true },
          { number: 5, title: "The Resurrection", isExamFocus: true },
          { number: 6, title: "Jesus Appears to Disciples" },
          { number: 7, title: "The Ascension" },
          { number: 8, title: "Pentecost", isExamFocus: true },
          { number: 9, title: "The Early Church" },
          { number: 10, title: "Peter's Ministry" },
          { number: 11, title: "Stephen the Martyr" },
          { number: 12, title: "Philip and the Ethiopian" },
        ],
      },
      {
        name: "Grade 6",
        lessons: [
          { number: 1, title: "Saul's Conversion", isExamFocus: true },
          { number: 2, title: "Peter's Vision" },
          { number: 3, title: "The Church at Antioch" },
          { number: 4, title: "Paul's First Journey", isExamFocus: true },
          { number: 5, title: "The Jerusalem Council" },
          { number: 6, title: "Paul's Second Journey" },
          { number: 7, title: "Paul in Corinth", isExamFocus: true },
          { number: 8, title: "Paul's Third Journey" },
          { number: 9, title: "Paul in Ephesus" },
          { number: 10, title: "Paul's Arrest", isExamFocus: true },
          { number: 11, title: "Paul Before Felix and Festus" },
          { number: 12, title: "Paul's Journey to Rome" },
        ],
      },
    ],
  },
  {
    name: "Intermediates",
    description: "Ages 12-14 • Exploring theological foundations",
    icon: <GraduationCap className="w-5 h-5" />,
    grades: [
      {
        name: "Grade 7",
        lessons: [
          { number: 1, title: "Introduction to the Bible", isExamFocus: true },
          { number: 2, title: "The Inspiration of Scripture" },
          { number: 3, title: "Old Testament Overview" },
          { number: 4, title: "New Testament Overview", isExamFocus: true },
          { number: 5, title: "The Nature of God" },
          { number: 6, title: "The Trinity Explained" },
          { number: 7, title: "Creation vs. Evolution", isExamFocus: true },
          { number: 8, title: "The Problem of Sin" },
          { number: 9, title: "God's Plan of Salvation" },
          { number: 10, title: "The Person of Christ", isExamFocus: true },
          { number: 11, title: "The Work of Christ" },
          { number: 12, title: "The Holy Spirit" },
        ],
      },
      {
        name: "Grade 8",
        lessons: [
          { number: 1, title: "What is the Church?", isExamFocus: true },
          { number: 2, title: "The Local Church" },
          { number: 3, title: "Baptism and Communion" },
          { number: 4, title: "Spiritual Gifts", isExamFocus: true },
          { number: 5, title: "Living by Faith" },
          { number: 6, title: "Prayer and Devotion" },
          { number: 7, title: "Witnessing for Christ", isExamFocus: true },
          { number: 8, title: "Christian Ethics" },
          { number: 9, title: "Dealing with Temptation" },
          { number: 10, title: "The Fruit of the Spirit", isExamFocus: true },
          { number: 11, title: "Christian Relationships" },
          { number: 12, title: "Preparing for the Future" },
        ],
      },
      {
        name: "Grade 9",
        lessons: [
          { number: 1, title: "The Life of Abraham", isExamFocus: true },
          { number: 2, title: "Abraham's Faith Journey" },
          { number: 3, title: "The Life of Moses" },
          { number: 4, title: "Moses as Leader", isExamFocus: true },
          { number: 5, title: "The Life of David" },
          { number: 6, title: "David's Psalms" },
          { number: 7, title: "The Life of Elijah", isExamFocus: true },
          { number: 8, title: "Elijah's Courage" },
          { number: 9, title: "The Life of Daniel" },
          { number: 10, title: "Daniel's Faithfulness", isExamFocus: true },
          { number: 11, title: "The Life of Peter" },
          { number: 12, title: "Peter's Transformation" },
        ],
      },
    ],
  },
  {
    name: "Seniors",
    description: "Ages 15-18 • Preparing for mature Christian life",
    icon: <GraduationCap className="w-5 h-5" />,
    grades: [
      {
        name: "Grade 10",
        lessons: [
          { number: 1, title: "Romans: Introduction", isExamFocus: true },
          { number: 2, title: "Justification by Faith" },
          { number: 3, title: "Life in the Spirit" },
          { number: 4, title: "God's Plan for Israel", isExamFocus: true },
          { number: 5, title: "Living Sacrifice" },
          { number: 6, title: "Ephesians: The Church" },
          { number: 7, title: "The Armor of God", isExamFocus: true },
          { number: 8, title: "Philippians: Joy in Christ" },
          { number: 9, title: "Colossians: Christ Supreme" },
          { number: 10, title: "1 Timothy: Church Leadership", isExamFocus: true },
          { number: 11, title: "2 Timothy: Perseverance" },
          { number: 12, title: "Hebrews: Christ Our High Priest" },
        ],
      },
      {
        name: "Grade 11",
        lessons: [
          { number: 1, title: "Christian Apologetics", isExamFocus: true },
          { number: 2, title: "Defending the Faith" },
          { number: 3, title: "World Religions Overview" },
          { number: 4, title: "Christianity and Culture", isExamFocus: true },
          { number: 5, title: "Ethics in Modern Life" },
          { number: 6, title: "Christian Worldview" },
          { number: 7, title: "Science and Faith", isExamFocus: true },
          { number: 8, title: "The Problem of Evil" },
          { number: 9, title: "Evidence for Resurrection" },
          { number: 10, title: "The Reliability of Scripture", isExamFocus: true },
          { number: 11, title: "Sharing Your Faith" },
          { number: 12, title: "Living with Purpose" },
        ],
      },
      {
        name: "Grade 12",
        lessons: [
          { number: 1, title: "Eschatology: End Times", isExamFocus: true },
          { number: 2, title: "The Second Coming" },
          { number: 3, title: "The Book of Revelation" },
          { number: 4, title: "Heaven and Eternity", isExamFocus: true },
          { number: 5, title: "Christian Leadership" },
          { number: 6, title: "Serving in Ministry" },
          { number: 7, title: "Marriage and Family", isExamFocus: true },
          { number: 8, title: "Career and Calling" },
          { number: 9, title: "Financial Stewardship" },
          { number: 10, title: "Missions and Outreach", isExamFocus: true },
          { number: 11, title: "Leaving a Legacy" },
          { number: 12, title: "Graduation: Go and Make Disciples", isExamFocus: true },
        ],
      },
    ],
  },
];

export default function ScriptureSchoolCurriculum() {
  return (
    <Layout>
      <BackToTop />
      <HeroBanner
        title="Scripture School"
        titleSecondLine="Curriculum Map"
        subtitle="A structured journey through biblical education from Beginners to Grade 12"
        logo={scriptureSchoolLogo}
        logoAlt="Scripture School Logo"
        showCurvedDivider={true}
      />

      {/* Introduction */}
      <section className="section-cream page-section">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our curriculum is thoughtfully designed to nurture spiritual growth at every stage of a child's development. 
              From Beginners through Grade 12, students progress through age-appropriate lessons that build a strong foundation in Scripture.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Lessons marked with <Badge variant="outline" className="mx-1 border-accent/50 text-accent bg-accent/5">Region Examination Focus</Badge> are 
              emphasized for regional examinations, helping students prepare for assessments while deepening their biblical knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Accordion */}
      <section className="section-light page-section">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <Accordion type="multiple" className="space-y-4">
              {curriculumData.map((ageBand, ageBandIndex) => (
                <AccordionItem
                  key={ageBand.name}
                  value={`age-band-${ageBandIndex}`}
                  className="border border-border/50 rounded-xl bg-card/50 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-muted/30 transition-colors">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-gold-soft flex items-center justify-center text-accent shrink-0">
                        {ageBand.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {ageBand.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-0.5">
                          {ageBand.description}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <Accordion type="multiple" className="space-y-3 mt-2">
                      {ageBand.grades.map((grade, gradeIndex) => (
                        <AccordionItem
                          key={grade.name}
                          value={`grade-${ageBandIndex}-${gradeIndex}`}
                          className="border border-border/30 rounded-lg bg-background/50 overflow-hidden"
                        >
                          <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-muted/20 transition-colors text-base">
                            <span className="font-medium text-foreground">
                              {grade.name}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-4">
                            <ul className="space-y-2.5 mt-2">
                              {grade.lessons.map((lesson) => (
                                <li
                                  key={lesson.number}
                                  className="flex items-start gap-3 py-2 px-3 rounded-lg bg-muted/20"
                                >
                                  <span className="text-sm font-medium text-accent min-w-[2rem]">
                                    {lesson.number}.
                                  </span>
                                  <span className="text-sm text-foreground flex-1">
                                    {lesson.title}
                                  </span>
                                  {lesson.isExamFocus && (
                                    <Badge
                                      variant="outline"
                                      className="border-accent/50 text-accent bg-accent/5 text-xs shrink-0"
                                    >
                                      Region Exam Focus
                                    </Badge>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );
}
