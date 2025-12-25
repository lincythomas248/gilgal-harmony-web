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

        {/* Card with two-column layout */}
        <div className="max-w-5xl mx-auto">
          <div className="card-warm p-5 md:p-8 rounded-2xl bg-gradient-to-br from-card via-gold-soft/20 to-card border border-gold/15 shadow-lg">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
              
              {/* Left Column: Large Pastor Photo + Name/Role (single instance) */}
              <div className="flex-shrink-0 flex flex-col items-center lg:items-start lg:w-72">
                <img
                  src={pastorImage}
                  alt="Pr. John Varghese delivering a message"
                  className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-80 rounded-2xl object-cover shadow-xl ring-4 ring-white/60"
                />
                <div className="mt-5 text-center lg:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    Pr. John Varghese
                  </h3>
                  <p className="text-accent font-semibold text-sm mt-1">
                    Minister-in-Charge
                  </p>
                </div>
              </div>

              {/* Right Column: Scrollable Message Content with visible scroll */}
              <div className="flex-1 min-w-0 relative">
                {/* Custom scrollable area with always-visible scrollbar */}
                <div 
                  className="h-[300px] md:h-[360px] lg:h-[400px] overflow-y-auto pr-3"
                  style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: 'hsl(var(--accent) / 0.3) transparent'
                  }}
                >
                  <div className="space-y-4 pb-8">
                    <p className="text-accent font-semibold italic text-lg">
                      Greetings in the name of our Lord and Savior Jesus Christ.
                    </p>
                    
                    {fullMessage.split('\n\n').slice(1).map((paragraph, index) => (
                      <p key={index} className="text-muted-foreground leading-relaxed text-[15px]">
                        {paragraph}
                      </p>
                    ))}

                    {/* Signature Block - without duplicate name/title */}
                    <div className="pt-4 mt-4 border-t border-border/50">
                      <p className="text-foreground font-semibold">With prayers and blessings,</p>
                      
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
                </div>
                
                {/* Bottom fade gradient to indicate more content */}
                <div className="absolute bottom-0 left-0 right-3 h-12 bg-gradient-to-t from-card via-card/80 to-transparent pointer-events-none rounded-b-lg" />
                
                {/* Scroll hint */}
                <div className="absolute bottom-1 left-0 right-3 flex justify-center pointer-events-none">
                  <span className="text-xs text-muted-foreground/60 bg-card/90 px-2 py-0.5 rounded">
                    Scroll to read more
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
