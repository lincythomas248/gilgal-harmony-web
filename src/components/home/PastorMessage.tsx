import { ScrollArea } from "@/components/ui/scroll-area";
import pastorImage from "@/assets/pastor-john-varghese.jpg";

const fullMessage = `Greetings in the name of our Lord and Savior Jesus Christ.

As we step into a new season, we pause with grateful hearts, thanking God for His grace, protection, and faithfulness that have brought us this far. The same God who guided us through yesterday continues to walk with us into tomorrow. Though the journey has included challenges, we give thanks for the strength, mercy, and assurance the Lord has provided every step of the way.

God's Word reminds us that He goes before us and prepares the way. When we place our trust in Him, we are never abandoned—even in moments of uncertainty. Our faithful God turns trials into testimonies and leads His people with hope, purpose, and direction.

In today's fast-changing world, we face many challenges as individuals, families, and communities. At such a time, the Church of God—called and set apart for His purpose—is invited to live out its faith through love, service, humility, and integrity. We are thankful for the privilege of worshipping, serving, and growing together as one body in Christ.

Jesus declared, "I am the light of the world." Through the work of the Holy Spirit, we are encouraged to reflect that light through lives shaped by prayer, compassion, faithful living, and godly character. It is the Lord who builds and strengthens His Church, and therefore we move forward with confidence, embracing the mission God has entrusted to us.

At IPC Gilgal Church, Sharjah & RAK, we seek to walk together in unity and mutual respect—supporting one another and serving the wider community with humility and care. We pray that God will grant us wisdom, courage, and grace as we continue this journey of faith, looking ahead with hope and trust in Him.

May the Lord bless every family, guard each life, and fill hearts with peace, good health, and spiritual strength. May this season be one of growth, renewal, and divine guidance for us all.`;

export function PastorMessage() {
  return (
    <section className="section-cream py-12 md:py-16 relative overflow-hidden">
      <div className="absolute top-12 left-12 w-72 h-72 bg-accent/6 rounded-full blur-3xl" />
      <div className="absolute bottom-12 right-12 w-64 h-64 bg-dove/6 rounded-full blur-3xl" />
      
      <div className="section-container relative">
        <div className="text-center mb-6">
          <span className="label-badge mb-2">A Word from Our Pastor</span>
          <h2 className="text-foreground text-2xl md:text-3xl">Pastor's Message</h2>
        </div>

        {/* Card with larger photo and inline message */}
        <div className="max-w-5xl mx-auto">
          <div className="card-warm p-5 md:p-8 rounded-2xl bg-gradient-to-br from-card via-gold-soft/20 to-card border border-gold/15 shadow-lg">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              
              {/* Pastor Photo - Large Visual Anchor */}
              <div className="flex-shrink-0 flex flex-col items-center lg:items-start">
                <img
                  src={pastorImage}
                  alt="Pr. John Varghese delivering a message"
                  className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-2xl object-cover shadow-xl ring-4 ring-white/60"
                />
                <div className="mt-4 text-center lg:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    Pr. John Varghese
                  </h3>
                  <p className="text-accent font-semibold text-sm">
                    Minister-in-Charge
                  </p>
                </div>
              </div>

              {/* Scrollable Message Content */}
              <div className="flex-1 min-w-0">
                <ScrollArea className="h-[280px] md:h-[320px] lg:h-[340px] pr-4">
                  <div className="space-y-4">
                    <p className="text-accent font-semibold italic text-lg">
                      Greetings in the name of our Lord and Savior Jesus Christ.
                    </p>
                    
                    {fullMessage.split('\n\n').slice(1).map((paragraph, index) => (
                      <p key={index} className="text-muted-foreground leading-relaxed text-[15px]">
                        {paragraph}
                      </p>
                    ))}

                    {/* Signature Block */}
                    <div className="pt-4 mt-4 border-t border-border/50">
                      <p className="text-foreground font-semibold">With prayers and blessings,</p>
                      <p className="text-foreground font-bold">Pr. John Varghese</p>
                      <p className="text-accent text-sm">Minister-in-Charge</p>
                      
                      <div className="mt-4 text-center">
                        <p className="text-primary font-bold tracking-wide">
                          Vision – Mission – Action
                        </p>
                        <p className="text-accent font-semibold italic mt-1">
                          May God bless you.
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollArea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
