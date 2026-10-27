const values = [
  { title: "Reuse what already exists", text: "Give furniture, books, bikes and everyday essentials a useful second life instead of throwing them away." },
  { title: "Make student life easier", text: "Help students find affordable items when moving to Fulda, and help others pass on things they no longer need." },
  { title: "Keep it local", text: "Connect people in the Fulda community and arrange collection at public, convenient pickup areas." }
];

export default function AboutPage() {
  return <main className="container page">
    <section className="page-intro"><p className="eyebrow">ABOUT US</p><h1>A more useful way to reuse.</h1>
      <p className="lead">Fulda ReUse Market is a student marketplace concept that helps people pass useful things on to someone who needs them.</p>
    </section>
    <section className="about-feature">
      <div className="about-feature-copy"><p className="eyebrow">OUR PURPOSE</p><h2>Good for students. Better for resources.</h2>
        <p>Starting university or moving to a new city can be expensive. At the same time, useful items are often left behind when people move. Our project explores a simple way to connect those needs within the Fulda student community.</p>
        <p>People could offer items for sale, give them away for free, or lend them for a short time. Buyers and lenders would arrange collection directly with one another through the platform.</p>
      </div>
      <div className="feature-illustration" aria-hidden="true"><span className="illustration-circle circle-one">↻</span><span className="illustration-circle circle-two">+</span><div className="illustration-box">Use it<br/><strong>again.</strong></div><span className="illustration-leaf">✳</span></div>
    </section>
    <section className="section"><p className="eyebrow">WHAT MATTERS TO US</p><h2>Built around the student community</h2>
      <div className="values-grid">{values.map((value, index) => <article className="value-card" key={value.title}><span className="value-number">0{index + 1}</span><h3>{value.title}</h3><p>{value.text}</p></article>)}</div>
    </section>
    <section className="how-section"><p className="eyebrow">THE IDEA</p><h2>Pass it on, simply.</h2>
      <div className="steps-grid"><div><span>1</span><h3>Offer an item</h3><p>Describe an item you want to sell, give away or lend.</p></div><div><span>2</span><h3>Find a useful thing</h3><p>Browse items that fit your needs and budget.</p></div><div><span>3</span><h3>Arrange pickup</h3><p>Contact the other person and agree on a public pickup place.</p></div></div>
    </section>
    <section className="project-note"><p className="eyebrow">ABOUT THIS WEBSITE</p><h2>A software engineering team project</h2><p>This website is being developed as part of the Global Distributed Software Development course, Fall 2026, at Fulda University of Applied Sciences. It is a demonstration project, not a live commercial service.</p></section>
  </main>;
}
