import { type ReactNode, useEffect } from 'react';
import { ArrowDown, ArrowDownRight, ArrowUpRight, BookOpen, Mail, MoveUpRight } from 'lucide-react';
import { useLocation } from 'wouter';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';

const cvHref = '/assets/cara-zhu-cv.pdf';
const articleHref = '/assets/presenting-the-augmented-self.pdf';
const featuredDoi = 'https://doi.org/10.1093/anncom/wlag029';

const publications = [
  {
    year: '2026',
    title: 'Presenting the augmented self: Extending sender effects of the hyperpersonal model in artificial intelligence-mediated communication',
    authors: 'Rui Zhu, David M. Markowitz & Brandon Van Der Heide',
    venue: 'Annals of the International Communication Association',
    doi: featuredDoi,
    featured: true,
  },
  {
    year: '2026',
    title: 'Exerting social influence by building human–AI chatbot relationships: A systematic review',
    authors: 'Yoo Jung Oh, J. M. Hu, Rui Zhu, J. I. Lim & Xinzhi Zhang',
    venue: 'International Journal of Human–Computer Interaction',
    doi: 'https://doi.org/10.1080/10447318.2026.2648799',
  },
  {
    year: '2025',
    title: 'Evaluating AI use and its psychological correlates via months of web-browsing data',
    authors: 'E. McKinley, David M. Markowitz, Rui Zhu & Brandon Van Der Heide',
    venue: 'Cyberpsychology, Behavior, and Social Networking',
    doi: 'https://doi.org/10.1177/21522715251379987',
  },
  {
    year: '2024',
    title: 'Does online dating make relationships more successful? Replication and extension of a previous study',
    authors: 'J. M. Hu, Rui Zhu & Y. Zhang',
    venue: 'Cyberpsychology, Behavior, and Social Networking',
    doi: 'https://doi.org/10.1089/cyber.2024.0136',
  },
  {
    year: '2024',
    title: 'Health journalists’ social media sourcing during the early outbreak of the public health emergency',
    authors: 'Xinzhi Zhang & Rui Zhu',
    venue: 'Journalism Practice',
    doi: 'https://doi.org/10.1080/17512786.2022.2110927',
  },
];

function Home() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('.reveal');
    if (!('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const nav = [
    ['About', '#about'],
    ['Research', '#research'],
    ['Writing', '#writing'],
    ['Contact', '#contact'],
  ];

  return (
    <div className="site-shell min-h-[100dvh]">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-[#213b34] focus:px-4 focus:py-3 focus:text-[#f3f0e8]">Skip to content</a>
      <header className="topbar">
        <div className="topbar-inner mx-auto flex max-w-[1320px] items-center justify-between px-6 py-4 md:px-12">
          <a href="#top" aria-label="Rui Zhu, home" className="flex items-center gap-3 no-underline">
            <span className="serif text-[25px] leading-none">RZ</span>
            <span className="hidden h-6 border-l border-[#d5d0c3] sm:block" />
            <span className="mono hidden text-[10px] uppercase tracking-[.11em] text-[#65736c] sm:block">Communication · MSU</span>
          </a>
          <nav aria-label="Main navigation" className="desktop-nav anchor-list flex items-center gap-8 text-[13px]">
            {nav.map(([label, href]) => <a key={href} href={href} className="nav-link">{label}</a>)}
            <a data-testid="link-cv-nav" className="ml-1 inline-flex items-center gap-2 border border-[#213b34] px-3 py-2 text-[12px] no-underline transition-colors hover:bg-[#213b34] hover:text-[#f3f0e8]" href={cvHref} target="_blank" rel="noreferrer">
              CV <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section id="top" className="mx-auto max-w-[1320px] px-6 md:px-12">
          <div className="hero">
            <div className="hero-copy reveal">
              <p className="section-kicker mb-7 flex items-center gap-3">
                <span className="inline-block h-px w-8 bg-[#c86f55]" />
                Scholar of communication & emerging technology
              </p>
              <h1 className="display-title mb-7">Rui <span className="italic">(Cara)</span><br />Zhu</h1>
              <p className="max-w-[610px] text-[18px] leading-[1.65] text-[#4b5c54] md:text-[20px]">
                How does AI change the way we speak to one another—and the way we understand one another?
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
                <a href="#research" className="inline-flex items-center gap-3 border-b border-[#c86f55] pb-2 text-[14px] font-medium no-underline">
                  Explore my research <ArrowDown size={15} aria-hidden="true" />
                </a>
                <span className="mono text-[11px] tracking-[.04em] text-[#65736c]">Ph.D. candidate · Michigan State University</span>
              </div>
            </div>
            <div className="hero-portrait reveal" style={{ transitionDelay: '120ms' }}>
              <figure className="portrait-frame">
                <img src="/assets/cara-zhu-headshot.jpg" alt="Portrait of Rui (Cara) Zhu" />
                <figcaption className="relative z-[2] mt-3 px-1 text-[11px] text-[#65736c]">
                  East Lansing, Michigan
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="rule flex items-center justify-between py-5">
            <span className="section-kicker">Communication, connection, and the machine in between</span>
            <span className="mono hidden text-[10px] text-[#65736c] sm:block">SCROLL TO EXPLORE&nbsp; ↓</span>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-[1320px] px-6 py-24 md:px-12 md:py-32">
          <div className="grid gap-14 md:grid-cols-[.72fr_1.28fr] md:gap-24">
            <div className="reveal">
              <p className="section-kicker mb-5">01 / A little context</p>
              <h2 className="section-title max-w-[360px]">Communication is never just words.</h2>
            </div>
            <div className="reveal max-w-[700px]" style={{ transitionDelay: '100ms' }}>
              <p className="serif text-[25px] leading-[1.48] md:text-[30px]">
                I study what happens when artificial intelligence becomes part of how people communicate—with each other, and with machines.
              </p>
              <p className="mt-7 text-[16px] leading-[1.85] text-[#53645c]">
                I’m a Communication doctoral candidate at Michigan State University. My work examines AI-mediated interpersonal messages and human–AI interaction: how people use AI to shape what they say, and how language can shape relationships, perceptions, attitudes, and behavior.
              </p>
              <p className="mt-5 text-[16px] leading-[1.85] text-[#53645c]">
                Across these questions, I’m interested in the human choices inside new technologies—what we reveal, how we adapt, and how a message can feel more or less like us.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[#d5d0c3] pt-6 sm:grid-cols-3">
                <div><p className="section-kicker mb-2">Home department</p><p className="text-[14px]">Communication<br />Michigan State University</p></div>
                <div><p className="section-kicker mb-2">Doctoral study</p><p className="text-[14px]">Communication<br />Expected May 2027</p></div>
                <div className="col-span-2 sm:col-span-1"><p className="section-kicker mb-2">Earlier study</p><p className="text-[14px]">AI & Digital Media<br />Hong Kong Baptist University</p></div>
              </div>
            </div>
          </div>
        </section>

        <section id="research" className="soft-grid border-y border-[#d5d0c3]">
          <div className="mx-auto max-w-[1320px] px-6 py-24 md:px-12 md:py-32">
            <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div className="reveal">
                <p className="section-kicker mb-5">02 / Questions I follow</p>
                <h2 className="section-title max-w-[600px]">The human side of artificial intelligence.</h2>
              </div>
              <p className="reveal max-w-[370px] text-[15px] leading-[1.8] text-[#53645c]">
                A communication lens on tools that are increasingly present in ordinary, intimate, consequential conversations.
              </p>
            </div>
            <div className="research-grid grid grid-cols-3 gap-0 border-t border-[#bdc5bb]">
              <article className="reveal border-b border-[#bdc5bb] py-8 pr-7 md:border-b-0 md:border-r md:pr-10">
                <span className="mono text-[11px] text-[#c86f55]">A / MESSAGE-MAKING</span>
                <h3 className="serif mt-5 text-[28px] leading-tight">AI as a writing partner</h3>
                <p className="mt-4 text-[14px] leading-[1.8] text-[#53645c]">When people turn to AI to compose interpersonal messages, what changes in self-presentation—and what does that change communicate?</p>
                <div className="mt-8 flex items-center gap-2 text-[12px] text-[#65736c]"><span className="h-1.5 w-1.5 rounded-full bg-[#c86f55]" />AI-mediated communication</div>
              </article>
              <article className="reveal border-b border-[#bdc5bb] py-8 md:border-b-0 md:border-r md:px-10" style={{ transitionDelay: '100ms' }}>
                <span className="mono text-[11px] text-[#c86f55]">B / RELATIONSHIPS</span>
                <h3 className="serif mt-5 text-[28px] leading-tight">People relating to AI</h3>
                <p className="mt-4 text-[14px] leading-[1.8] text-[#53645c]">How do language and interaction shape human–AI relationships, social influence, and people’s perceptions of the technology?</p>
                <div className="mt-8 flex items-center gap-2 text-[12px] text-[#65736c]"><span className="h-1.5 w-1.5 rounded-full bg-[#c86f55]" />Human–AI interaction</div>
              </article>
              <article className="reveal py-8 md:pl-10" style={{ transitionDelay: '200ms' }}>
                <span className="mono text-[11px] text-[#c86f55]">C / LANGUAGE</span>
                <h3 className="serif mt-5 text-[28px] leading-tight">Language as social signal</h3>
                <p className="mt-4 text-[14px] leading-[1.8] text-[#53645c]">How do linguistic choices shape impressions, attitudes, and behavior across digital communication?</p>
                <div className="mt-8 flex items-center gap-2 text-[12px] text-[#65736c]"><span className="h-1.5 w-1.5 rounded-full bg-[#c86f55]" />Psychology of language</div>
              </article>
            </div>
            <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-[#bdc5bb] pt-8 sm:flex-row sm:items-center">
              <div className="flex items-center gap-6">
                <div className="focus-orbit" aria-hidden="true"><span className="orbit-dot" /><span className="serif text-center text-[18px] leading-tight">human<br /><i>×</i> machine</span></div>
                <p className="max-w-[310px] text-[13px] leading-[1.7] text-[#65736c]">Questions at the intersection of communication, technology, and everyday life.</p>
              </div>
              <a className="inline-flex items-center gap-2 border-b border-[#c86f55] pb-2 text-[13px] no-underline" href={cvHref} target="_blank" rel="noreferrer">
                More about my work <ArrowDownRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1320px] px-6 py-24 md:px-12 md:py-32">
          <div className="grid gap-14 md:grid-cols-[.72fr_1.28fr] md:gap-24">
            <div className="reveal">
              <p className="section-kicker mb-5">03 / How I approach it</p>
              <h2 className="section-title">Theory meets the texture of language.</h2>
            </div>
            <div className="reveal max-w-[700px]" style={{ transitionDelay: '100ms' }}>
              <p className="text-[16px] leading-[1.85] text-[#53645c]">
                My research draws on communication theory and the close study of language. I’m especially interested in how AI participates in message production, and in how that participation can matter to the people who send and receive those messages.
              </p>
              <div className="mt-10 space-y-0">
                {[
                  ['01', 'AI-mediated communication', 'What shifts when AI joins the process of interpersonal message-making?'],
                  ['02', 'Computer-mediated communication', 'How do digital contexts shape self-presentation and impressions?'],
                  ['03', 'Language & computational approaches', 'What can linguistic patterns tell us about communication and social life?'],
                ].map(([number, title, body]) => (
                  <div key={number} className="flex gap-5 border-t border-[#d5d0c3] py-5">
                    <span className="mono pt-1 text-[11px] text-[#c86f55]">{number}</span>
                    <div><h3 className="text-[15px] font-semibold">{title}</h3><p className="mt-1 text-[13px] leading-[1.7] text-[#65736c]">{body}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="writing" className="feature-panel">
          <div className="mx-auto max-w-[1320px] px-6 py-24 md:px-12 md:py-28">
            <div className="grid gap-10 md:grid-cols-[.7fr_1.3fr]">
              <div className="reveal">
                <p className="section-kicker mb-5 !text-[#e2957d]">04 / Featured article</p>
                <p className="mono text-[11px] tracking-[.1em] text-[#bfc9bd]">A THEORETICAL ACCOUNT OF AI-MEDIATED COMMUNICATION</p>
              </div>
              <div className="reveal" style={{ transitionDelay: '120ms' }}>
                <h2 className="serif max-w-[800px] text-[clamp(2.2rem,5vw,4.5rem)] leading-[1.08]">
                  Presenting the augmented self
                </h2>
                <p className="serif mt-3 max-w-[800px] text-[clamp(1.25rem,2.5vw,2rem)] italic leading-[1.25] text-[#d1d9ce]">
                  Extending sender effects of the hyperpersonal model in artificial intelligence-mediated communication
                </p>
                <p className="mt-6 text-[14px] text-[#c2cec2]">Rui Zhu, David M. Markowitz & Brandon Van Der Heide · 2026</p>
                <p className="mt-7 max-w-[650px] text-[15px] leading-[1.8] text-[#e0e5da]">
                  This article extends the hyperpersonal model to AI-mediated communication, examining how AI’s role in producing messages may reshape selective self-presentation through co-creation and adaptability.
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <a data-testid="link-featured-pdf" href={articleHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[#f3f0e8] px-5 py-3 text-[13px] font-medium text-[#213b34] no-underline transition-colors hover:bg-[#e2ddd1]">
                    <BookOpen size={16} aria-hidden="true" /> Read the article <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                  <a data-testid="link-featured-doi" href={featuredDoi} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-[#82958a] px-5 py-3 text-[13px] no-underline transition-colors hover:border-[#f3f0e8]">
                    DOI <MoveUpRight size={14} aria-hidden="true" />
                  </a>
                </div>
                <p className="mono mt-6 break-all text-[10px] text-[#bfc9bd]">Annals of the International Communication Association · https://doi.org/10.1093/anncom/wlag029</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1320px] px-6 py-24 md:px-12 md:py-32">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="reveal">
              <p className="section-kicker mb-5">05 / Selected publications</p>
              <h2 className="section-title">A few points of entry.</h2>
            </div>
            <a data-testid="link-cv-publications" href={cvHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 self-start border-b border-[#c86f55] pb-2 text-[13px] no-underline md:self-auto">
              Full publication record in CV <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
          <div className="border-t border-[#bdc5bb]">
            {publications.slice(1).map((publication, index) => (
              <article key={publication.doi} className="publication-row reveal grid grid-cols-[48px_1fr] gap-4 border-b border-[#d5d0c3] py-6 md:grid-cols-[64px_1fr_110px] md:gap-8" style={{ transitionDelay: `${index * 65}ms` }}>
                <span className="mono pt-1 text-[11px] text-[#c86f55]">{publication.year}</span>
                <div>
                  <h3 className="serif text-[20px] leading-[1.35] md:text-[23px]">{publication.title}</h3>
                  <p className="mt-2 text-[12px] leading-[1.7] text-[#65736c]">{publication.authors}</p>
                  <p className="mt-1 text-[12px] italic text-[#65736c]">{publication.venue}</p>
                </div>
                <a href={publication.doi} target="_blank" rel="noreferrer" aria-label={`Open DOI for ${publication.title}`} className="col-start-2 mt-1 inline-flex items-center gap-2 text-[11px] text-[#426457] no-underline hover:text-[#c86f55] md:col-start-3 md:mt-0 md:justify-end md:self-center">
                  View DOI <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
          <div className="mt-7 flex items-start gap-3 text-[12px] leading-[1.7] text-[#65736c]">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c86f55]" />
            <p>Selected peer-reviewed publications. For additional work and full citation details, see the CV.</p>
          </div>
        </section>

        <section className="border-y border-[#d5d0c3] bg-[#e9e5db]">
          <div className="mx-auto grid max-w-[1320px] gap-10 px-6 py-20 md:grid-cols-[.75fr_1.25fr] md:px-12 md:py-24">
            <div className="reveal">
              <p className="section-kicker mb-5">06 / Beyond the page</p>
              <h2 className="section-title">A scholar in progress.</h2>
            </div>
            <div className="reveal max-w-[720px]" style={{ transitionDelay: '100ms' }}>
              <p className="text-[15px] leading-[1.85] text-[#53645c]">
                Before doctoral study in Communication, I completed an M.Sc. with distinction in AI and Digital Media at Hong Kong Baptist University, where I specialized in computational communication research and digital journalism. I earned my B.A. in Ethnology from Southwest University.
              </p>
              <p className="mt-5 text-[15px] leading-[1.85] text-[#53645c]">
                The questions I carry across these fields are about people: how we communicate, how we interpret one another, and how emerging tools enter the spaces where relationships take shape.
              </p>
              <a href={cvHref} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 border-b border-[#c86f55] pb-2 text-[13px] no-underline">
                See the full academic CV <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-[1320px] px-6 py-24 md:px-12 md:py-32">
          <div className="reveal grid gap-12 md:grid-cols-[.7fr_1.3fr] md:gap-24">
            <div>
              <p className="section-kicker mb-5">07 / Get in touch</p>
              <h2 className="section-title">Good questions travel.</h2>
            </div>
            <div className="flex flex-col items-start">
              <p className="max-w-[600px] text-[16px] leading-[1.8] text-[#53645c]">I welcome conversations about communication, AI, language, and the questions that sit between them.</p>
              <a data-testid="link-contact-email" href="mailto:zhurui1@msu.edu" className="contact-link mt-8 inline-flex max-w-full items-center gap-4 border border-[#213b34] px-5 py-4 text-[clamp(1rem,3vw,1.35rem)] no-underline">
                <Mail size={19} aria-hidden="true" /><span className="break-all">zhurui1@msu.edu</span><ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <p className="mono mt-8 text-[10px] leading-[1.7] text-[#65736c]">Department of Communication · Michigan State University<br />East Lansing, Michigan</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#d5d0c3]">
        <div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-5 px-6 py-7 text-[11px] text-[#65736c] sm:flex-row sm:items-center md:px-12">
          <span>Rui (Cara) Zhu <span className="px-2 text-[#c86f55]">/</span> Communication & human–AI interaction</span>
          <a href="#top" className="inline-flex items-center gap-2 no-underline hover:text-[#c86f55]">Back to top <ArrowUpRight size={13} aria-hidden="true" /></a>
          <span className="mono">MICHIGAN STATE UNIVERSITY</span>
        </div>
      </footer>
    </div>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function App() {
  return (
    <TooltipProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Router />
      </WouterRouter>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
