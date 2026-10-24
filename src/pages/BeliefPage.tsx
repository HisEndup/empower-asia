type BeliefSection = {
  title: string;
  paragraphs: string[];
  references?: string;
};

const CONTEXTUALIZATION_SCALE = 'Contextualization Scale';

const sections: BeliefSection[] = [
  {
    title: "The Scriptures",
    paragraphs: [
      "The Holy Bible was written by men divinely inspired and is God's revelation of Himself to man. It is a perfect treasure of divine instruction. It has God for its author, salvation for its end, and truth, without any mixture of error, for its matter. Therefore, all Scripture is totally true and trustworthy. It reveals the principles by which God judges us, and therefore is, and will remain to the end of the world, the true center of Christian union, and the supreme standard by which all human conduct, and religious opinions should be tried. All Scripture is a testimony to Christ, who is Himself the focus of divine revelation."
    ],
    references: "Exodus 24:4; Deuteronomy 4:1-2; 17:19; Joshua 8:34; Psalms 19:7-10; 119:11,89,105,140; Isaiah 34:16; 40:8; Jeremiah 15:16; 36:1-32; Matthew 5:17-18; 22:29; Luke 21:33; 24:44-46; John 5:39; 16:13-15; 17:17; Acts 2:16ff.; 17:11; Romans 15:4; 16:25-26; 2 Timothy 3:15-17; Hebrews 1:1-2; 4:12; 1 Peter 1:25; 2 Peter 1:19-21.",
  },
  {
    title: "God",
    paragraphs: [
      "There is one and only one living and true God. He is an intelligent, spiritual, and personal Being, the Creator, Redeemer, Preserver, and Ruler of the universe. God is infinite in holiness and all other perfections. God is all powerful and all knowing; and His perfect knowledge extends to all things, past, present, and future, including the future decisions of His free creatures. To Him we owe the highest love, reverence, and obedience. The eternal triune God reveals Himself to us as Father, Son, and Holy Spirit, with distinct personal attributes, but without division of nature, essence, or being."
    ],
  },
  {
    title: "God the Father",
    paragraphs: [
      "God as Father reigns with providential care over His universe, His creatures, and the flow of the stream of human history according to the purposes of His grace. He is all powerful, all knowing, all loving, and all wise. God is Father in truth to those who become children of God through faith in Jesus Christ. He is fatherly in His attitude toward all men."
    ],
    references: "Genesis 1:1; 2:7; Exodus 3:14; 6:2-3; 15:11ff.; 20:1ff.; Leviticus 22:2; Deuteronomy 6:4; 32:6; 1 Chronicles 29:10; Psalm 19:1-3; Isaiah 43:3,15; 64:8; Jeremiah 10:10; 17:13; Matthew 6:9ff.; 7:11; 23:9; 28:19; Mark 1:9-11; John 4:24; 5:26; 14:6-13; 17:1-8; Acts 1:7; Romans 8:14-15; 1 Corinthians 8:6; Galatians 4:6; Ephesians 4:6; Colossians 1:15; 1 Timothy 1:17; Hebrews 11:6; 12:9; 1 Peter 1:17; 1 John 5:7.",
  },
  {
    title: "God the Son",
    paragraphs: [
      "Christ is the eternal Son of God. In His incarnation as Jesus Christ He was conceived of the Holy Spirit and born of the virgin Mary. Jesus perfectly revealed and did the will of God, taking upon Himself human nature with its demands and necessities and identifying Himself completely with mankind yet without sin. He honored the divine law by His personal obedience, and in His substitutionary death on the cross He made provision for the redemption of men from sin. He was raised from the dead with a glorified body and appeared to His disciples as the person who was with them before His crucifixion. He ascended into heaven and is now exalted at the right hand of God where He is the One Mediator, fully God, fully man, in whose Person is effected the reconciliation between God and man. He will return in power and glory to judge the world and to consummate His redemptive mission. He now dwells in all believers as the living and ever present Lord."
    ],
    references: "Genesis 18:1ff.; Psalms 2:7ff.; 110:1ff.; Isaiah 7:14; 53; Matthew 1:18-23; 3:17; 8:29; 11:27; 14:33; 16:16,27; 17:5; 27; 28:1-6,19; Mark 1:1; 3:11; Luke 1:35; 4:41; 22:70; 24:46; John 1:1-18,29; 10:30,38; 11:25-27; 12:44-50; 14:7-11; 16:15-16,28; 17:1-5, 21-22; 20:1-20,28; Acts 1:9; 2:22-24; 7:55-56; 9:4-5,20; Romans 1:3-4; 3:23-26; 5:6-21; 8:1-3,34; 10:4; 1 Corinthians 1:30; 2:2; 8:6; 15:1-8,24-28; 2 Corinthians 5:19-21; 8:9; Galatians 4:4-5; Ephesians 1:20; 3:11; 4:7-10; Philippians 2:5-11; Colossians 1:13-22; 2:9; 1 Thessalonians 4:14-18; 1 Timothy 2:5-6; 3:16; Titus 2:13-14; Hebrews 1:1-3; 4:14-15; 7:14-28; 9:12-15,24-28; 12:2; 13:8; 1 Peter 2:21-25; 3:22; 1 John 1:7-9; 3:2; 4:14-15; 5:9; 2 John 7-9; Revelation 1:13-16; 5:9-14; 12:10-11; 13:8; 19:16.",
  },
  {
    title: "God the Holy Spirit",
    paragraphs: [
      "The Holy Spirit is the Spirit of God, fully divine. He inspired holy men of old to write the Scriptures. Through illumination He enables men to understand truth. He exalts Christ. He convicts men of sin, of righteousness, and of judgment. He calls men to the Saviour, and effects regeneration. At the moment of regeneration He baptizes every believer into the Body of Christ. He cultivates Christian character, comforts believers, and bestows the spiritual gifts by which they serve God through His church. He seals the believer unto the day of final redemption. His presence in the Christian is the guarantee that God will bring the believer into the fullness of the stature of Christ. He enlightens and empowers the believer and the church in worship, evangelism, and service."
    ],
    references: "Genesis 1:2; Judges 14:6; Job 26:13; Psalms 51:11; 139:7ff.; Isaiah 61:1-3; Joel 2:28-32; Matthew 1:18; 3:16; 4:1; 12:28-32; 28:19; Mark 1:10,12; Luke 1:35; 4:1,18-19; 11:13; 12:12; 24:49; John 4:24; 14:16-17,26; 15:26; 16:7-14; Acts 1:8; 2:1-4,38; 4:31; 5:3; 6:3; 7:55; 8:17,39; 10:44; 13:2; 15:28; 16:6; 19:1-6; Romans 8:9-11,14-16,26-27; 1 Corinthians 2:10-14; 3:16; 12:3-11,13; Galatians 4:6; Ephesians 1:13-14; 4:30; 5:18; 1 Thessalonians 5:19; 1 Timothy 3:16; 4:1; 2 Timothy 1:14; 3:16; Hebrews 9:8,14; 2 Peter 1:21; 1 John 4:13; 5:6-7; Revelation 1:10; 22:17.",
  },
  {
    title: "Man",
    paragraphs: [
      "Man is the special creation of God, made in His own image. He created them male and female as the crowning work of His creation. The gift of gender is thus part of the goodness of God's creation. In the beginning man was innocent of sin and was endowed by his Creator with freedom of choice. By his free choice man sinned against God and brought sin into the human race. Through the temptation of Satan man transgressed the command of God, and fell from his original innocence whereby his posterity inherit a nature and an environment inclined toward sin. Therefore, as soon as they are capable of moral action, they become transgressors and are under condemnation. Only the grace of God can bring man into His holy fellowship and enable man to fulfill the creative purpose of God. The sacredness of human personality is evident in that God created man in His own image, and in that Christ died for man; therefore, every person of every race possesses full dignity and is worthy of respect and Christian love."
    ],
    references: "Genesis 1:26-30; 2:5,7,18-22; 3; 9:6; Psalms 1; 8:3-6; 32:1-5; 51:5; Isaiah 6:5; Jeremiah 17:5; Matthew 16:26; Acts 17:26-31; Romans 1:19-32; 3:10-18,23; 5:6,12,19; 6:6; 7:14-25; 8:14-18,29; 1 Corinthians 1:21-31; 15:19,21-22; Ephesians 2:1-22; Colossians 1:21-22; 3:9-11.",
  },
  {
    title: "Salvation",
    paragraphs: [
      "Salvation involves the redemption of the whole man, and is offered freely to all who accept Jesus Christ as Lord and Saviour, who by His own blood obtained eternal redemption for the believer. In its broadest sense salvation includes regeneration, justification, sanctification, and glorification. There is no salvation apart from personal faith in Jesus Christ as Lord.",
      "Regeneration, or the new birth, is a work of God's grace whereby believers become new creatures in Christ Jesus. It is a change of heart wrought by the Holy Spirit through conviction of sin, to which the sinner responds in repentance toward God and faith in the Lord Jesus Christ. Repentance and faith are inseparable experiences of grace.",
      "Repentance is a genuine turning from sin toward God. Faith is the acceptance of Jesus Christ and commitment of the entire personality to Him as Lord and Saviour.",
      "Justification is God's gracious and full acquittal upon principles of His righteousness of all sinners who repent and believe in Christ. Justification brings the believer unto a relationship of peace and favor with God.",
      "Sanctification is the experience, beginning in regeneration, by which the believer is set apart to God's purposes, and is enabled to progress toward moral and spiritual maturity through the presence and power of the Holy Spirit dwelling in him. Growth in grace should continue throughout the regenerate person's life.",
      "Glorification is the culmination of salvation and is the final blessed and abiding state of the redeemed."
    ],
    references: "Genesis 3:15; Exodus 3:14-17; 6:2-8; Matthew 1:21; 4:17; 16:21-26; 27:22-28:6; Luke 1:68-69; 2:28-32; John 1:11-14,29; 3:3-21,36; 5:24; 10:9,28-29; 15:1-16; 17:17; Acts 2:21; 4:12; 15:11; 16:30-31; 17:30-31; 20:32; Romans 1:16-18; 2:4; 3:23-25; 4:3ff.; 5:8-10; 6:1-23; 8:1-18,29-39; 10:9-10,13; 13:11-14; 1 Corinthians 1:18,30; 6:19-20; 15:10; 2 Corinthians 5:17-20; Galatians 2:20; 3:13; 5:22-25; 6:15; Ephesians 1:7; 2:8-22; 4:11-16; Philippians 2:12-13; Colossians 1:9-22; 3:1ff.; 1 Thessalonians 5:23-24; 2 Timothy 1:12; Titus 2:11-14; Hebrews 2:1-3; 5:8-9; 9:24-28; 11:1-12:8,14; James 2:14-26; 1 Peter 1:2-23; 1 John 1:6-2:11; Revelation 3:20; 21:1-22:5.",
  },
  {
    title: "The Church",
    paragraphs: [
      "A New Testament church of the Lord Jesus Christ is an autonomous local congregation of baptized believers, associated by covenant in the faith and fellowship of the gospel; observing the two ordinances of Christ, governed by His laws, exercising the gifts, rights, and privileges invested in them by His Word, and seeking to extend the gospel to the ends of the earth. Each congregation operates under the Lordship of Christ through democratic processes. In such a congregation each member is responsible and accountable to Christ as Lord. Its scriptural officers are pastors and deacons. While both men and women are gifted for service in the church, the office of pastor is limited to men as qualified by Scripture.",
      "The New Testament speaks also of the church as the Body of Christ which includes all of the redeemed of all the ages, believers from every tribe, and tongue, and people, and nation."
    ],
    references: "Matthew 16:15-19; 18:15-20; Acts 2:41-42,47; 5:11-14; 6:3-6; 13:1-3; 14:23,27; 15:1-30; 16:5; 20:28; Romans 1:7; 1 Corinthians 1:2; 3:16; 5:4-5; 7:17; 9:13-14; 12; Ephesians 1:22-23; 2:19-22; 3:8-11,21; 5:22-32; Philippians 1:1; Colossians 1:18; 1 Timothy 2:9-14; 3:1-15; 4:14; Hebrews 11:39-40; 1 Peter 5:1-4; Revelation 2-3; 21:2-3.",
  },
  {
    title: "The Lord's Day",
    paragraphs: [
      "The first day of the week is the Lord's Day. It is a Christian institution for regular observance. It commemorates the resurrection of Christ from the dead and should include exercises of worship and spiritual devotion, both public and private. Activities on the Lord's Day should be commensurate with the Christian's conscience under the Lordship of Jesus Christ."
    ],
    references: "Exodus 20:8-11; Matthew 12:1-12; 28:1ff.; Mark 2:27-28; 16:1-7; Luke 24:1-3,33-36; John 4:21-24; 20:1,19-28; Acts 20:7; Romans 14:5-10; I Corinthians 16:1-2; Colossians 2:16; 3:16; Revelation 1:10.",
  },
  {
    title: "Divine Healing",
    paragraphs: [
      "Divine healing is an integral part of the gospel. Deliverance from sickness is provided for in the Atonement, and is the privilege of all believers (Isaiah 53:4,5; Matthew 8:16,17; James 5:14-16)."
    ],
  },
  {
    title: "The Kingdom",
    paragraphs: [
      "The Kingdom of God includes both His general sovereignty over the universe and His particular kingship over men who willfully acknowledge Him as King. Particularly the Kingdom is the realm of salvation into which men enter by trustful, childlike commitment to Jesus Christ. Christians ought to pray and to labor that the Kingdom may come and God's will be done on earth. The full consummation of the Kingdom awaits the return of Jesus Christ and the end of this age."
    ],
    references: "Genesis 1:1; Isaiah 9:6-7; Jeremiah 23:5-6; Matthew 3:2; 4:8-10,23; 12:25-28; 13:1-52; 25:31-46; 26:29; Mark 1:14-15; 9:1; Luke 4:43; 8:1; 9:2; 12:31-32; 17:20-21; 23:42; John 3:3; 18:36; Acts 1:6-7; 17:22-31; Romans 5:17; 8:19; 1 Corinthians 15:24-28; Colossians 1:13; Hebrews 11:10,16; 12:28; 1 Peter 2:4-10; 4:13; Revelation 1:6,9; 5:10; 11:15; 21-22.",
  },
  {
    title: "Last Things",
    paragraphs: [
      "God, in His own time and in His own way, will bring the world to its appropriate end. According to His promise, Jesus Christ will return personally and visibly in glory to the earth; the dead will be raised; and Christ will judge all men in righteousness. The unrighteous will be consigned to Hell, the place of everlasting punishment. The righteous in their resurrected and glorified bodies will receive their reward and will dwell forever in Heaven with the Lord."
    ],
    references: "Isaiah 2:4; 11:9; Matthew 16:27; 18:8-9; 19:28; 24:27,30,36,44; 25:31-46; 26:64; Mark 8:38; 9:43-48; Luke 12:40,48; 16:19-26; 17:22-37; 21:27-28; John 14:1-3; Acts 1:11; 17:31; Romans 14:10; 1 Corinthians 4:5; 15:24-28,35-58; 2 Corinthians 5:10; Philippians 3:20-21; Colossians 1:5; 3:4; 1 Thessalonians 4:14-18; 5:1ff.; 2 Thessalonians 1:7ff.; 2; 1 Timothy 6:14; 2 Timothy 4:1,8; Titus 2:13; Hebrews 9:27-28; James 5:8; 2 Peter 3:7ff.; 1 John 2:28; 3:2; Jude 14; Revelation 1:18; 3:11; 20:1-22:13.",
  },
  {
    title: "Evangelism and Missions",
    paragraphs: [
      "It is the duty and privilege of every follower of Christ and of every church of the Lord Jesus Christ to endeavor to make disciples of all nations. The new birth of man's spirit by God's Holy Spirit means the birth of love for others. Missionary effort on the part of all rests thus upon a spiritual necessity of the regenerate life, and is expressly and repeatedly commanded in the teachings of Christ. The Lord Jesus Christ has commanded the preaching of the gospel to all nations. It is the duty of every child of God to seek constantly to win the lost to Christ by verbal witness undergirded by a Christian lifestyle, and by other methods in harmony with the gospel of Christ.",
      "We believe that seekers should be called to faith and repentance to Christ and be water immersed. Empower Asia holds to a belief in \"C4 and no more” on the Contextualization Scale."
    ],
    references: "Genesis 12:1-3; Exodus 19:5-6; Isaiah 6:1-8; Matthew 9:37-38; 10:5-15; 13:18-30, 37-43; 16:19; 22:9-10; 24:14; 28:18-20; Luke 10:1-18; 24:46-53; John 14:11-12; 15:7-8,16; 17:15; 20:21; Acts 1:8; 2; 8:26-40; 10:42-48; 13:2-3; Romans 10:13-15; Ephesians 3:1-11; 1 Thessalonians 1:8; 2 Timothy 4:5; Hebrews 2:1-3; 11:39-12:2; 1 Peter 2:4-10; Revelation 22:17.",
  },
  {
    title: "Ordinances, Baptism, and the Lord's Supper",
    paragraphs: [
      "Christian baptism is the immersion of a believer in water in the name of the Father, the Son, and the Holy Spirit. It is an act of obedience symbolizing the believer's faith in a crucified, buried, and risen Saviour, the believer's death to sin, the burial of the old life, and the resurrection to walk in newness of life in Christ Jesus. It is a testimony to his faith in the final resurrection of the dead. Being a church ordinance, it is prerequisite to the privileges of church membership and to the Lord's Supper.",
      "The Lord's Supper is a symbolic act of obedience whereby members of the church, through partaking of the bread and the fruit of the vine, memorialize the death of the Redeemer and anticipate His second coming."
    ],
    references: "Matthew 3:13-17; 26:26-30; 28:19-20; Mark 1:9-11; 14:22-26; Luke 3:21-22; 22:19-20; John 3:23; Acts 2:41-42; 8:35-39; 16:30-33; 20:7; Romans 6:3-5; 1 Corinthians 10:16,21; 11:23-29; Colossians 2:12.",
  },
];

function renderParagraph(text: string) {
  const i = text.indexOf(CONTEXTUALIZATION_SCALE);
  if (i === -1) return text;
  return (
    <>
      {text.slice(0, i)}
      <a
        href="https://www.frontlinemissions.info/the-c1-to-c6-spectrum"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        {CONTEXTUALIZATION_SCALE}
      </a>
      {text.slice(i + CONTEXTUALIZATION_SCALE.length)}
    </>
  );
}

export default function BeliefPage() {
  return (
    <div>
      <section className="pt-40 pb-12 bg-gray-950">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">Our Beliefs</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Statement of Faith</h1>
          <p className="text-gray-400 text-sm">Empower Asia &middot; empowerasia.org</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-10 text-gray-700 leading-relaxed">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h2>
                <div className="space-y-4">
                  {s.paragraphs.map((p, i) => (
                    <p key={i}>{renderParagraph(p)}</p>
                  ))}
                </div>
                {s.references && (
                  <p className="mt-4 text-sm text-gray-500 italic">{s.references}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
