import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../../components/SEO';

const posts: Record<string, {
  tag: string;
  title: string;
  description: string;
  date: string;
  image: string;
  content: string[];
}> = {
  'event-container-festival': {
    tag: 'REFERENZ',
    title: 'Mobile Bar für Streetfood-Festival',
    description: 'Voll ausgestatteter Bar-Container auf SARIS-Anhänger für Streetfood-Festivals. 6x2m mit Hydraulik, LED-Beleuchtung und Kühlanlage – gebaut in Waiblingen.',
    date: '2025-01-15',
    image: '/csm_Gruenbeck_Roadshow_Deutschland_02_7a30455b9f.jpg',
    content: [
      'Für eines der größten Streetfood-Festivals Deutschlands haben wir einen voll ausgestatteten Bar-Container auf einem SARIS-Anhänger realisiert. Das Ziel: eine mobile Cocktailbar, die innerhalb von 30 Minuten einsatzbereit ist – egal wo.',
      'Der Container wurde komplett in unserer Werkstatt in Waiblingen gefertigt. Auf 6 x 2 Metern haben wir eine professionelle Theke mit LED-Beleuchtung, ein Hydraulik-System zum Ausklappen der Seitenwände und eine integrierte Kühlanlage verbaut.',
      'Besonders wichtig war dem Kunden die Flexibilität: Der gesamte Container ist straßenzugelassen und kann von einem normalen PKW gezogen werden. Die hydraulische Klappe verwandelt sich im geöffneten Zustand in ein Vordach, das sowohl Schutz als auch zusätzliche Präsentationsfläche bietet.',
      'Nach 6 Wochen Bauzeit wurde der Container auf seinem ersten Festival eingesetzt – mit vollem Erfolg. Der Kunde setzt den Container seitdem auf verschiedenen Events in ganz Deutschland ein.',
    ],
  },
  'office-container-startup': {
    tag: 'REFERENZ',
    title: 'Office-Container für Tech-Startup',
    description: 'Vollausgestatteter Office-Container für ein Stuttgarter Tech-Startup: 20m² mit Klimaanlage, Küche und WC. Schlüsselfertig in nur 8 Wochen.',
    date: '2024-11-20',
    image: '/Prefabricated-Office-Container.webp',
    content: [
      'Ein Stuttgarter Tech-Startup benötigte kurzfristig zusätzliche Bürofläche – ohne langfristige Mietverträge oder teure Umbauten. Die Lösung: ein vollständig ausgestatteter Office-Container von THM Michels.',
      'Auf 20m² haben wir einen kompletten Arbeitsplatz für 4 Personen realisiert. Inklusive Klimaanlage, Fußbodenheizung, Netzwerk-Verkabelung, Küchennische und einem separaten WC-Bereich. Die Wände wurden mit schallabsorbierenden Materialien verkleidet.',
      'Die größte Herausforderung war die Integration von Highspeed-Internet und einem modernen Beleuchtungskonzept in die kompakte Containerstruktur. Durch maßgefertigte Kabelkanäle und eine durchdachte Raumaufteilung wirkt der Container deutlich größer als seine tatsächlichen Maße.',
      'Vom ersten Gespräch bis zur schlüsselfertigen Übergabe vergingen nur 8 Wochen. Der Container steht auf dem Firmenparkplatz und kann bei Bedarf jederzeit umgesetzt werden.',
    ],
  },
  'warum-container-statt-festbau': {
    tag: 'RATGEBER',
    title: 'Container vs. Festbau: Was lohnt sich mehr?',
    description: 'Container oder Festbau? Wir vergleichen Kosten, Flexibilität und Genehmigungen. Erfahre, wann sich modulare Container-Lösungen lohnen.',
    date: '2024-10-05',
    image: '/pro-spacecube-nudie-lg01.webp',
    content: [
      'Immer mehr Unternehmen entscheiden sich für modulare Container-Lösungen statt klassischem Festbau. Doch wann lohnt sich welche Variante? Wir vergleichen die wichtigsten Faktoren.',
      'Kosten: Ein individuell ausgebauter Container kostet in der Regel 40-60% weniger als ein vergleichbarer Festbau. Durch die Fertigung in der Werkstatt entfallen Wetterverzögerungen und teure Baustellenlogistik. Außerdem kann ein Container bei Bedarf weiterverkauft werden – ein Festbau nicht.',
      'Flexibilität: Der größte Vorteil eines Containers ist seine Mobilität. Er kann versetzt, erweitert oder umgebaut werden. Ein Event-Container fährt heute auf ein Festival und steht morgen vor dem Firmengelände. Diese Flexibilität ist bei einem Festbau schlicht nicht möglich.',
      'Genehmigungen: Container auf Anhängern brauchen in der Regel keine Baugenehmigung, solange sie mobil bleiben. Für fest aufgestellte Container gelten je nach Bundesland unterschiedliche Regelungen. Wir beraten dich gerne zu den Anforderungen in deiner Region.',
      'Unser Fazit: Für temporäre, mobile oder flexible Einsatzzwecke ist ein Container die klare Empfehlung. Für dauerhafte, große Gebäude bleibt der Festbau die bessere Wahl.',
    ],
  },
  'container-genehmigungen-deutschland': {
    tag: 'RATGEBER',
    title: 'Container-Genehmigungen in Deutschland',
    description: 'Welche Genehmigungen brauchst du für einen Container? Von Straßenzulassung bis Baugenehmigung – alles was du in Deutschland wissen musst.',
    date: '2024-09-12',
    image: '/11.jpg',
    content: [
      'Eine der häufigsten Fragen unserer Kunden: „Brauche ich eine Genehmigung für meinen Container?" Die Antwort hängt von mehreren Faktoren ab.',
      'Mobile Container auf Anhängern: Wenn dein Container auf einem zugelassenen Anhänger steht und regelmäßig bewegt wird, gilt er als Fahrzeug – nicht als Gebäude. In diesem Fall brauchst du keine Baugenehmigung, sondern nur eine gültige Straßenzulassung und TÜV.',
      'Fest aufgestellte Container: Sobald ein Container dauerhaft an einem Ort steht, kann er als bauliche Anlage gelten. Dann ist in den meisten Bundesländern eine Baugenehmigung erforderlich. Die Anforderungen variieren je nach Gemeinde, Nutzungsart und Größe.',
      'Gewerbliche Nutzung: Für Gastronomie-Container gelten zusätzliche Vorschriften der Lebensmittelhygiene. Dazu gehören unter anderem Handwaschbecken, leicht zu reinigende Oberflächen und ausreichende Belüftung. Auch die Gewerbeaufsicht kann Auflagen machen.',
      'Unser Tipp: Kläre vor der Bestellung mit deinem zuständigen Bauamt die lokalen Anforderungen. Wir unterstützen dich gerne mit den technischen Unterlagen und Zeichnungen, die du für den Antrag brauchst.',
    ],
  },
  'nachhaltigkeit-container-bau': {
    tag: 'EINBLICK',
    title: 'Nachhaltigkeit im Container-Bau',
    description: 'Upcycling, regionale Fertigung, langlebige Materialien – wie THM Michels nachhaltig Container baut und den ökologischen Fußabdruck minimiert.',
    date: '2024-08-01',
    image: '/Shipping-container-bar-landing.webp',
    content: [
      'Nachhaltigkeit ist für uns kein Marketing-Buzzword, sondern gelebte Praxis. Container-Bau ist von Natur aus ressourcenschonend – und wir gehen noch einen Schritt weiter.',
      'Upcycling: Viele unserer Projekte basieren auf gebrauchten Seecontainern. Statt eingeschmolzen zu werden, bekommen sie ein zweites Leben als Bar, Büro oder Pop-up-Store. Das spart bis zu 3,5 Tonnen Stahl pro Container.',
      'Regionale Fertigung: Alle unsere Container werden in Waiblingen gefertigt. Kurze Transportwege, lokale Zulieferer und persönliche Beziehungen zu unseren Partnern reduzieren den CO₂-Fußabdruck und stärken die regionale Wirtschaft.',
      'Langlebige Materialien: Wir setzen auf hochwertige Materialien, die jahrelang halten. Marinebeschichtungen gegen Rost, wetterfeste Holzverkleidungen und energieeffiziente Isolierung sorgen dafür, dass unsere Container auch nach Jahren noch wie neu aussehen.',
      'Unser Ziel: Jeder Container, der unsere Werkstatt verlässt, soll mindestens 20 Jahre im Einsatz sein. Das ist echte Nachhaltigkeit – langlebig, flexibel und mit minimalem Abfall.',
    ],
  },
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? posts[slug] : null;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 bg-[#0F0F0F] min-h-screen">
      <SEO
        title={post.title}
        description={post.description}
        ogType="article"
        ogImage={`https://thm-michels.de${post.image}`}
      />
      <div className="max-w-3xl mx-auto px-6">
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 font-mono text-xs text-[#9CA3AF] uppercase tracking-widest hover:text-[#D97706] transition-colors mb-10"
        >
          <svg className="w-3.5 h-3.5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          Zurück zum Blog
        </Link>

        {/* Tag + Date */}
        <div className="flex items-center gap-4 mb-6">
          <span className="bg-[#D97706] px-3 py-1 font-mono text-[10px] text-white uppercase tracking-widest">
            {post.tag}
          </span>
          <time className="font-mono text-[10px] text-[#9CA3AF] uppercase tracking-widest">
            {new Date(post.date).toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' })}
          </time>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-display font-black uppercase mb-8 leading-tight">
          {post.title}
        </h1>

        {/* Hero Image */}
        <div className="relative w-full h-64 md:h-96 mb-10 overflow-hidden border border-white/10">
          <img
            src={post.image}
            alt={`${post.title} – THM Michels`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-6">
          {post.content.map((paragraph, i) => (
            <p key={i} className="font-mono text-[#C0C0C0] text-sm md:text-base leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <h3 className="font-display font-black uppercase text-lg mb-3">Du hast ein ähnliches Projekt?</h3>
          <p className="font-mono text-[#9CA3AF] text-sm mb-6">Erzähl uns von deiner Idee – wir setzen sie um.</p>
          <Link
            to="/kontakt"
            className="inline-block bg-[#D97706] hover:bg-[#B45309] text-white px-8 py-4 font-black text-sm uppercase tracking-widest transition-all"
          >
            Jetzt anfragen
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
