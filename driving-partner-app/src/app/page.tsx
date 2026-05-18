'use client';

import Link from 'next/link';

const instructors = [
  {
    name: 'David Miller',
    rating: 4.9,
    price: 45,
    lessons: 100,
    tags: ['Certified Instructor', 'Manual', 'Automatic'],
    tagColors: ['#1a56db', '#374151', '#374151'],
    initials: 'DM',
    color: '#1a56db',
  },
  {
    name: 'Sarah Jenkins',
    rating: 5.0,
    price: 30,
    lessons: 250,
    tags: ['Community Partner', 'Logbook Specialist'],
    tagColors: ['#065f46', '#92400e'],
    initials: 'SJ',
    color: '#059669',
  },
  {
    name: 'Michael Chen',
    rating: 4.8,
    price: 28,
    lessons: 80,
    tags: ['Community Partner', 'Logbook Specialist'],
    tagColors: ['#065f46', '#92400e'],
    initials: 'MC',
    color: '#d97706',
  },
  {
    name: 'Elena Rodriguez',
    rating: 5.0,
    price: 55,
    lessons: 400,
    tags: ['Certified Instructor', 'Automatic', 'English/Spanish'],
    tagColors: ['#1a56db', '#374151', '#374151'],
    initials: 'ER',
    color: '#7c3aed',
  },
];

const reviews = [
  {
    text: 'I was so nervous about my driving test, but Sarah made everything feel simple. I passed on my first try! The booking process was seamless.',
    name: 'Jordan Smith',
    sub: 'Passed 2 weeks ago',
    initials: 'JS',
    color: '#1a56db',
  },
  {
    text: 'The best platform for finding reliable instructors. Being able to see ratings and pricing upfront saved me so much time and effort.',
    name: 'Avery Miller',
    sub: 'Student Driver',
    initials: 'AM',
    color: '#059669',
  },
  {
    text: 'Michael was incredibly patient and adjusted his teaching style to my needs. DrivePass made it easy to manage all my lesson bookings.',
    name: 'Kevin Lee',
    sub: 'Passed 1 month ago',
    initials: 'KL',
    color: '#7c3aed',
  },
];

export default function HomePage() {
  return (
    <div style={{ fontFamily: "'DM Sans', Arial, sans-serif", color: '#111827', background: '#fff' }}>

      {/* Navbar */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: '#fff', borderBottom: '1px solid #e5e7eb',
        padding: '0 2rem', height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          <span style={{ fontWeight: 700, fontSize: '1.25rem', color: '#1a56db', letterSpacing: '-0.02em' }}>
            DrivePass
          </span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['How it Works', 'Instructors', 'Pricing', 'Reviews'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="nav-link" style={{
                fontSize: '0.9rem', fontWeight: 500, color: '#374151',
                textDecoration: 'none', height: '64px', display: 'flex', alignItems: 'center',
                position: 'relative',
              }}>
                {item}
              </a>
            ))}
          </div>
        </div>
        <Link href="/sign-up" style={{
          background: '#1a56db', color: '#fff', padding: '10px 22px',
          borderRadius: '8px', fontWeight: 600, fontSize: '0.9rem',
          textDecoration: 'none', transition: 'background 0.2s',
        }}>
          Book a Lesson
        </Link>
      </nav>

      {/* Hero */}
      <section style={{
        minHeight: '580px', position: 'relative',
        display: 'flex', alignItems: 'center',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #1a56db 100%)',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'url("https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=1400&q=80") center/cover no-repeat',
          opacity: 0.18,
        }} />
        <div style={{ position: 'relative', zIndex: 1, padding: '5rem 2rem 5rem 6rem', maxWidth: '560px' }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800,
            lineHeight: 1.15, color: '#fff', margin: '0 0 1.25rem',
            letterSpacing: '-0.03em',
          }}>
            Your Journey to the{' '}
            <span style={{ color: '#60a5fa' }}>Driver&apos;s Seat</span>{' '}
            Starts Here
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: 1.7, margin: '0 0 2rem' }}>
            Connect with certified local instructors tailored to your schedule and learning style.
            Guided progress from your first turn to your final test.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              background: 'rgba(255,255,255,0.97)', borderRadius: '10px',
              padding: '10px 16px', flex: '1', minWidth: '180px',
            }}>
              <span style={{ fontSize: '1rem', color: '#9ca3af' }}>📍</span>
              <input
                placeholder="Enter your suburb"
                style={{
                  border: 'none', outline: 'none', background: 'transparent',
                  fontSize: '0.95rem', color: '#111827', width: '100%',
                }}
              />
            </div>
            <Link href="/sign-up" style={{
              background: '#1a56db', color: '#fff',
              padding: '12px 24px', borderRadius: '10px',
              fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none',
              whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '8px',
            }}>
              Find Instructors →
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div style={{
        borderBottom: '1px solid #e5e7eb', padding: '1.25rem 2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3rem',
        flexWrap: 'wrap',
      }}>
        <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em', color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase' }}>
          Trusted by national driving associations
        </span>
        {['ADSA', 'SafetyCore', 'RoadEdu', 'StateDrive'].map(b => (
          <span key={b} style={{ fontSize: '0.9rem', fontWeight: 600, color: '#6b7280' }}>✦ {b}</span>
        ))}
      </div>

      {/* How it works */}
      <section id="how-it-works" style={{ padding: '5rem 2rem', textAlign: 'center', background: '#f9fafb' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0 0 0.5rem', letterSpacing: '-0.02em' }}>
          Master the Road in Three Simple Steps
        </h2>
        <p style={{ color: '#6b7280', margin: '0 0 3rem', fontSize: '1rem' }}>
          Everything you need to get your P&apos;s, in one place.
        </p>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem', maxWidth: '900px', margin: '0 auto',
        }}>
          {[
            { icon: '🔍', title: 'Search', desc: 'Enter your location and filter by transmission type, availability, and rating to find your perfect match.' },
            { icon: '⚖️', title: 'Compare', desc: 'Review instructor profiles, student testimonials, and pricing to choose the best guide for your journey.' },
            { icon: '📅', title: 'Book', desc: 'Schedule your lessons instantly through our secure platform with flexible payment options.' },
          ].map((step) => (
            <div key={step.title} style={{
              background: '#fff', border: '1px solid #e5e7eb', borderRadius: '16px',
              padding: '2rem 1.5rem', textAlign: 'center',
            }}>
              <div style={{
                width: '52px', height: '52px', borderRadius: '14px',
                background: step.icon === '🔍' ? '#eff6ff' : step.icon === '⚖️' ? '#f0fdf4' : '#faf5ff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem', margin: '0 auto 1rem',
              }}>
                {step.icon}
              </div>
              <h3 style={{ fontWeight: 700, fontSize: '1.1rem', margin: '0 0 0.5rem' }}>{step.title}</h3>
              <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Instructor cards */}
      <section id="instructors" style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '0.5rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, margin: 0, letterSpacing: '-0.02em' }}>
              Find Your Perfect Match
            </h2>
            <Link href="/sign-up" style={{ fontSize: '0.9rem', color: '#1a56db', textDecoration: 'none', fontWeight: 500 }}>
              View all instructors ↗
            </Link>
          </div>
          <p style={{ color: '#6b7280', margin: '0 0 2.5rem', fontSize: '0.95rem' }}>
            Choose between certified professionals or experienced community partners to help complete your logbook hours.
          </p>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem',
          }}>
            {instructors.map((ins) => (
              <div key={ins.name} style={{
                border: '1px solid #e5e7eb', borderRadius: '16px', overflow: 'hidden', background: '#fff',
              }}>
                {/* Card image area */}
                <div style={{
                  height: '160px', background: `linear-gradient(135deg, ${ins.color}22, ${ins.color}44)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute', top: '12px', right: '12px',
                    background: 'rgba(0,0,0,0.6)', color: '#fbbf24',
                    padding: '4px 10px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700,
                  }}>
                    ★ {ins.rating}
                  </div>
                  <div style={{
                    width: '72px', height: '72px', borderRadius: '50%',
                    background: ins.color, color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.4rem', fontWeight: 700,
                  }}>
                    {ins.initials}
                  </div>
                </div>
                {/* Card body */}
                <div style={{ padding: '1rem' }}>
                  <p style={{ fontWeight: 700, fontSize: '1rem', margin: '0 0 8px' }}>{ins.name}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
                    {ins.tags.map((tag, i) => (
                      <span key={tag} style={{
                        fontSize: '0.7rem', fontWeight: 600, padding: '3px 8px',
                        borderRadius: '6px', background: ins.tagColors[i] + '22',
                        color: ins.tagColors[i],
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontWeight: 700, fontSize: '1rem', color: '#111827' }}>${ins.price}/hr</span>
                    <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>{ins.lessons}+ Lessons</span>
                  </div>
                  <Link href="/sign-up" style={{
                    display: 'block', textAlign: 'center', border: '1px solid #d1d5db',
                    borderRadius: '8px', padding: '8px', fontSize: '0.875rem',
                    fontWeight: 500, color: '#374151', textDecoration: 'none',
                    transition: 'background 0.15s',
                  }}>
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" style={{ padding: '5rem 2rem', background: '#f9fafb' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, textAlign: 'center', margin: '0 0 2.5rem', letterSpacing: '-0.02em' }}>
            What Our Students Say
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {reviews.map((r) => (
              <div key={r.name} style={{
                background: '#fff', border: '1px solid #e5e7eb',
                borderRadius: '16px', padding: '1.5rem', position: 'relative',
              }}>
                <span style={{
                  position: 'absolute', top: '1rem', right: '1.25rem',
                  fontSize: '3rem', color: '#e5e7eb', lineHeight: 1, fontFamily: 'Georgia, serif',
                }}>
                  "
                </span>
                <p style={{ fontSize: '0.9rem', color: '#374151', lineHeight: 1.7, margin: '0 0 1.25rem' }}>
                  {r.text}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '50%',
                    background: r.color, color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.8rem', fontWeight: 700,
                  }}>
                    {r.initials}
                  </div>
                  <div>
                    <p style={{ margin: 0, fontWeight: 600, fontSize: '0.875rem' }}>{r.name}</p>
                    <p style={{ margin: 0, fontSize: '0.75rem', color: '#9ca3af' }}>{r.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{
        background: '#0f172a', padding: '4rem 2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '1.5rem',
      }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#fff', margin: '0 0 0.5rem', letterSpacing: '-0.02em' }}>
            Ready to hit the road?
          </h2>
          <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.95rem' }}>
            Join thousands of students who have successfully earned their licence.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link href="/sign-up" style={{
            background: '#fff', color: '#0f172a',
            padding: '12px 24px', borderRadius: '10px',
            fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none',
          }}>
            Start Learning Now
          </Link>
          <Link href="#how-it-works" style={{
            border: '1px solid rgba(255,255,255,0.3)', color: '#fff',
            padding: '12px 24px', borderRadius: '10px',
            fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none',
          }}>
            View Pricing
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#0f172a', borderTop: '1px solid #1e293b', padding: '3rem 2rem 2rem' }}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '2rem',
          marginBottom: '2rem',
        }}>
          <div>
            <p style={{ fontWeight: 700, fontSize: '1.1rem', color: '#fff', margin: '0 0 0.75rem' }}>DrivePass</p>
            <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.6, margin: '0 0 1rem' }}>
              Safety first on every road. We connect students with the world&apos;s best driving instructors.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {['◈', '◎', '▷'].map(icon => (
                <span key={icon} style={{ color: '#475569', fontSize: '1.1rem', cursor: 'pointer' }}>{icon}</span>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontWeight: 600, fontSize: '0.85rem', color: '#94a3b8', margin: '0 0 1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Product</p>
            {['How it Works', 'Pricing', 'Instructors'].map(l => (
              <p key={l} style={{ margin: '0 0 0.5rem' }}>
                <a href="#" style={{ color: '#64748b', fontSize: '0.875rem', textDecoration: 'none' }}>{l}</a>
              </p>
            ))}
          </div>
          <div>
            <p style={{ fontWeight: 600, fontSize: '0.85rem', color: '#94a3b8', margin: '0 0 1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Company</p>
            {['Privacy Policy', 'Terms of Service', 'Support'].map(l => (
              <p key={l} style={{ margin: '0 0 0.5rem' }}>
                <a href="#" style={{ color: '#64748b', fontSize: '0.875rem', textDecoration: 'none' }}>{l}</a>
              </p>
            ))}
          </div>
          <div>
            <p style={{ fontWeight: 600, fontSize: '0.85rem', color: '#94a3b8', margin: '0 0 1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Portals</p>
            {['Instructor Login', 'Partner Program'].map(l => (
              <p key={l} style={{ margin: '0 0 0.5rem' }}>
                <Link href="/sign-in" style={{ color: '#64748b', fontSize: '0.875rem', textDecoration: 'none' }}>{l}</Link>
              </p>
            ))}
          </div>
        </div>
        <div style={{ borderTop: '1px solid #1e293b', paddingTop: '1.5rem', textAlign: 'center' }}>
          <p style={{ color: '#475569', fontSize: '0.8rem', margin: 0 }}>
            © 2026 DrivePass. All rights reserved. Safety first on every road. &nbsp; v2.4.0-stable
          </p>
        </div>
      </footer>
    </div>
  );
}