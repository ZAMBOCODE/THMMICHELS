import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../../components/SEO';

interface ProjectData {
  title: string;
  category: string;
  image: string;
  specs: string[];
  client: string;
  duration: string;
  location: string;
  story: {
    intro: string;
    sections: { heading: string; text: string }[];
  };
}

const projects: Record<string, ProjectData> = {
  'rooftop-gin-bar': {
    title: 'The Rooftop Gin Bar',
    category: 'Event-Container',
    image: '/csm_Gruenbeck_Roadshow_Deutschland_02_7a30455b9f.jpg',
    specs: ['6m x 2m', 'Hydraulik', 'LED-Beleuchtung'],
    client: 'Privater Gastronom',
    duration: '6 Wochen',
    location: 'Stuttgart',
    story: {
      intro: 'Eine mobile Gin-Bar, die auf Rooftop-Events und Festivals gleichermaßen funktioniert – das war die Vision unseres Kunden. Das Ergebnis: ein Container, der in unter 30 Minuten einsatzbereit ist.',
      sections: [
        {
          heading: 'Die Anfrage',
          text: 'Der Kunde kam mit einer klaren Idee zu uns: Eine hochwertige Bar, die auf Dachterrassen-Events ebenso überzeugt wie auf Open-Air-Festivals. Wichtig waren ihm ein Premium-Look, einfacher Transport und schneller Auf- und Abbau. Nach einem ersten Beratungsgespräch in unserer Werkstatt in Waiblingen haben wir gemeinsam das Konzept entwickelt.',
        },
        {
          heading: 'Planung & Design',
          text: 'In der Planungsphase haben wir den Container komplett in 3D modelliert. Die größte Herausforderung: Auf nur 6 x 2 Metern mussten eine vollwertige Theke, Kühlschränke, eine Spüle, Stauraum und das Hydraulik-System für die Seitenklappe untergebracht werden. Jeder Zentimeter wurde optimiert.',
        },
        {
          heading: 'Der Bau',
          text: 'In unserer Werkstatt haben wir den Container von Grund auf aufgebaut. Die Stahlkonstruktion wurde geschweißt, die Hydraulik-Klappen montiert und die komplette Elektrik mit LED-Ambientebeleuchtung verlegt. Die Thekenoberfläche wurde aus massivem Eichenholz gefertigt und mit einer wetterfesten Beschichtung versiegelt.',
        },
        {
          heading: 'Das Ergebnis',
          text: 'Nach 6 Wochen Bauzeit wurde die Rooftop Gin Bar ausgeliefert. Die hydraulische Seitenklappe öffnet sich per Knopfdruck und verwandelt sich in ein beleuchtetes Vordach. Der Container ist auf einem SARIS-Anhänger montiert und kann mit jedem PKW mit Anhängerkupplung transportiert werden. Seitdem ist die Bar auf Events in ganz Süddeutschland im Einsatz.',
        },
      ],
    },
  },
  'mobile-office-unit': {
    title: 'Mobile Office Unit',
    category: 'Office-Container',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    specs: ['8m x 2m', 'Klimaanlage', 'Vollausstattung'],
    client: 'Tech-Startup',
    duration: '8 Wochen',
    location: 'Stuttgart',
    story: {
      intro: 'Ein Stuttgarter Startup brauchte schnell zusätzliche Bürofläche – ohne Mietvertrag, ohne Umbau. In 8 Wochen haben wir einen vollständig ausgestatteten Office-Container geliefert.',
      sections: [
        {
          heading: 'Die Anfrage',
          text: 'Das Team wuchs schneller als erwartet. Neue Büroräume zu mieten hätte Monate gedauert und langfristige Verpflichtungen bedeutet. Der Gründer suchte eine flexible Lösung, die auf dem eigenen Firmenparkplatz stehen kann – und bei einem Umzug einfach mitgenommen wird.',
        },
        {
          heading: 'Planung & Design',
          text: 'Auf 8 x 2 Metern haben wir vier Arbeitsplätze, eine Küchennische, einen separaten WC-Bereich und einen kleinen Meetingraum untergebracht. Die Wände erhielten schallabsorbierende Paneele, der Boden hochwertiges Vinyl in Eichenoptik. Jeder Arbeitsplatz hat eigene Strom- und Netzwerkanschlüsse.',
        },
        {
          heading: 'Der Bau',
          text: 'Die Klimaanlage und Fußbodenheizung sorgen ganzjährig für angenehme Temperaturen. Die komplette Elektrik wurde nach VDE-Standard installiert, inklusive Sicherungskasten und FI-Schutzschalter. Große Fenster an beiden Längsseiten sorgen für Tageslicht und machen den Raum optisch größer.',
        },
        {
          heading: 'Das Ergebnis',
          text: 'Der Container wurde per Kran auf dem Parkplatz platziert und war nach Anschluss an Strom und Wasser sofort nutzbar. Das Team arbeitet dort seit über einem Jahr – und der Container sieht noch aus wie am ersten Tag. Bei einem zukünftigen Standortwechsel wird er einfach mitgenommen.',
        },
      ],
    },
  },
  'street-food-trailer': {
    title: 'Street Food Trailer',
    category: 'Event-Container',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
    specs: ['4m x 2m', 'Küche', 'SARIS Trailer'],
    client: 'Streetfood-Unternehmer',
    duration: '5 Wochen',
    location: 'Region Stuttgart',
    story: {
      intro: 'Ein kompakter Food-Trailer, der alles bietet, was man für professionelles Streetfood braucht – auf nur 4 x 2 Metern. Gebaut für den täglichen Einsatz auf Märkten und Festivals.',
      sections: [
        {
          heading: 'Die Anfrage',
          text: 'Unser Kunde wollte sich mit asiatischem Streetfood selbstständig machen. Er brauchte einen Trailer, der auf jedem Wochenmarkt Platz findet, alle Hygiene-Vorschriften erfüllt und trotzdem professionell aussieht. Wichtig war auch, dass er den Trailer alleine bedienen und transportieren kann.',
        },
        {
          heading: 'Planung & Design',
          text: 'Die kompakten Maße waren Fluch und Segen zugleich: Jedes Gerät musste genau geplant werden. Wir haben einen Grundriss entwickelt mit Wok-Station, Fritteuse, Kühlschrank, Handwaschbecken und Ausgabetheke. Die Verkaufsklappe öffnet sich zur Seite und bietet dem Kunden direkten Blickkontakt mit den Gästen.',
        },
        {
          heading: 'Der Bau',
          text: 'Die Küche wurde komplett aus Edelstahl gefertigt – leicht zu reinigen und lebensmittelkonform. Die Gas- und Elektroinstallation wurde von zertifizierten Fachbetrieben abgenommen. Außen haben wir den Trailer mit einer matten Anthrazit-Lackierung und dem Logo des Kunden versehen.',
        },
        {
          heading: 'Das Ergebnis',
          text: 'Der Street Food Trailer ist seit der Übergabe fast jedes Wochenende im Einsatz. Der Kunde bedient damit Wochenmärkte in der Region Stuttgart und ist regelmäßig auf Streetfood-Festivals vertreten. Die kompakte Bauweise hat sich bewährt – aufgebaut und einsatzbereit in unter 20 Minuten.',
        },
      ],
    },
  },
  'pop-up-store': {
    title: 'Pop-up Store',
    category: 'Nudie-Container',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    specs: ['3m x 2m', 'Custom Branding', 'Schaufenster'],
    client: 'Fashion-Label',
    duration: '4 Wochen',
    location: 'München',
    story: {
      intro: 'Ein minimalistischer Nudie-Container als Pop-up-Store für ein aufstrebendes Fashion-Label. Rohstahl trifft auf hochwertiges Branding – ein echter Hingucker in der Münchner Innenstadt.',
      sections: [
        {
          heading: 'Die Anfrage',
          text: 'Das Fashion-Label wollte seine neue Kollektion nicht in einem klassischen Laden präsentieren, sondern in einem ungewöhnlichen Format, das Aufmerksamkeit erzeugt. Ein Nudie-Container – also ein Container im industriellen Rohzustand mit sichtbarer Stahlstruktur – passte perfekt zur Markenidentität.',
        },
        {
          heading: 'Planung & Design',
          text: 'Der Fokus lag auf dem Kontrast: raue Containerästhetik außen, hochwertiges Shopping-Erlebnis innen. Wir haben ein großes Schaufenster in die Seitenwand geschnitten, Kleiderstangen aus Rohrstahl gefertigt und eine gezielte Spot-Beleuchtung geplant. Das Branding wurde als großflächiger Print auf der Außenwand angebracht.',
        },
        {
          heading: 'Der Bau',
          text: 'Der Container wurde bewusst im Rohzustand belassen – Schweißnähte sichtbar, Stahl nur mit Klarlack versiegelt. Innen haben wir den Boden mit hellem Eichenholz verlegt, um einen warmen Kontrast zum Stahl zu schaffen. Das Schaufenster erhielt eine Doppelverglasung für optimale Produktpräsentation.',
        },
        {
          heading: 'Das Ergebnis',
          text: 'Der Pop-up-Store stand 3 Monate in der Münchner Innenstadt und hat für enormes Interesse gesorgt. Das Konzept ging in den sozialen Medien viral. Nach dem Einsatz in München wurde der Container nach Berlin transportiert – für den nächsten Pop-up. Genau diese Flexibilität macht Container-Lösungen so attraktiv.',
        },
      ],
    },
  },
  'eiswagen-deluxe': {
    title: 'Eiswagen Deluxe',
    category: 'Event-Container',
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=800',
    specs: ['4m x 2m', 'Kühlung', 'Retro-Design'],
    client: 'Eiscafé-Betreiber',
    duration: '5 Wochen',
    location: 'Ludwigsburg',
    story: {
      intro: 'Ein Eiswagen im Retro-Design mit professioneller Kühltechnik – gebaut für heiße Sommertage auf Stadtfesten, in Parks und vor Eisdielen.',
      sections: [
        {
          heading: 'Die Anfrage',
          text: 'Der Besitzer eines Eiscafés in Ludwigsburg wollte sein Geschäft mobil erweitern. Ein klassischer Eiswagen war ihm zu langweilig – er wollte etwas Besonderes: einen Container im Retro-Look der 50er Jahre, der trotzdem modernste Kühltechnik bietet.',
        },
        {
          heading: 'Planung & Design',
          text: 'Das Retro-Design war die kreative Herausforderung: Pastellfarben, abgerundete Kanten, Vintage-Schriftzüge und eine nostalgische Markise. Gleichzeitig musste die Technik stimmen: Zwei professionelle Eisvitrinen, ein Tiefkühlbereich für Nachschub und ein separates Kühlaggregat, das auch bei 35°C Außentemperatur zuverlässig arbeitet.',
        },
        {
          heading: 'Der Bau',
          text: 'Die Außenhülle wurde in Mintgrün und Cremeweiß lackiert, die Schriftzüge von Hand aufgemalt. Die Ausgabeklappe erhielt eine gestreifte Markise. Innen ist alles auf Effizienz getrimmt: Die Eisvitrinen sind so positioniert, dass eine Person den kompletten Betrieb alleine stemmen kann.',
        },
        {
          heading: 'Das Ergebnis',
          text: 'Der Eiswagen ist der absolute Hingucker auf jedem Event. Im Sommer ist er fast täglich im Einsatz – auf dem Ludwigsburger Wochenmarkt, bei Firmenfeiern und auf Stadtfesten. Die Retro-Optik sorgt dafür, dass sich regelmäßig Schlangen bilden. Der Kunde plant bereits einen zweiten Wagen.',
        },
      ],
    },
  },
  'festival-bar': {
    title: 'Festival Bar',
    category: 'Anhänger mieten',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=800',
    specs: ['6m x 2m', 'Zapfanlage', 'Outdoor-Ready'],
    client: 'Festival-Veranstalter',
    duration: '7 Wochen',
    location: 'Süddeutschland',
    story: {
      intro: 'Eine robuste Festival-Bar mit professioneller Zapfanlage, gebaut für den Dauereinsatz unter härtesten Bedingungen. Regen, Matsch, tausende Gäste – kein Problem.',
      sections: [
        {
          heading: 'Die Anfrage',
          text: 'Ein Veranstalter mehrerer Musikfestivals in Süddeutschland brauchte eine mobile Barlösung, die mehr aushält als klassische Festzelt-Theken. Der Container sollte wetterfest sein, eine professionelle Zapfanlage mit 8 Leitungen haben und in einem robusten Industrial-Design daherkommen.',
        },
        {
          heading: 'Planung & Design',
          text: 'Für den Festival-Einsatz haben wir besonderen Wert auf Robustheit gelegt: verstärkte Bodenplatte, Spritzwasserschutz an allen Öffnungen und eine rutschfeste Bodenbeschichtung. Die 8-Leitungs-Zapfanlage mit Durchlaufkühler kann bis zu 500 Liter pro Stunde ausschenken. Außen sorgt eine großflächige LED-Beleuchtung für Sichtbarkeit auch nachts.',
        },
        {
          heading: 'Der Bau',
          text: 'Der Container wurde auf einem verstärkten Anhänger-Chassis montiert. Die Seitenklappen öffnen sich hydraulisch und bilden ein Regendach über dem Thekenbereich. Hinter der Theke ist Platz für drei Mitarbeiter, mit direktem Zugang zu Fässern, Kühlschrank und Spüle. Alles ist auf schnellen Service bei großem Andrang ausgelegt.',
        },
        {
          heading: 'Das Ergebnis',
          text: 'Die Festival Bar hat ihre erste Saison mit über 20 Einsätzen hinter sich – von kleinen Open-Airs bis zu Festivals mit 10.000+ Besuchern. Der Container wird mittlerweile auch an andere Veranstalter vermietet und ist während der Festivalsaison praktisch durchgängig gebucht.',
        },
      ],
    },
  },
};

const ProjectStory: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projects[slug] : null;

  if (!project) {
    return <Navigate to="/galerie" replace />;
  }

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 bg-[#0F0F0F] min-h-screen">
      <SEO
        title={`${project.title} | ${project.category} Projekt`}
        description={project.story.intro}
        ogImage={project.image.startsWith('http') ? project.image : `https://thm-michels.de${project.image}`}
      />
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Link */}
        <Link
          to="/galerie"
          className="inline-flex items-center gap-2 font-mono text-xs text-[#9CA3AF] uppercase tracking-widest hover:text-[#D97706] transition-colors mb-10"
        >
          <svg className="w-3.5 h-3.5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          Zurück zur Galerie
        </Link>

        {/* Category */}
        <span className="font-mono text-[#D97706] text-xs font-bold uppercase tracking-[0.3em]">[ {project.category} ]</span>

        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-display font-black uppercase mt-4 mb-6 leading-tight">
          {project.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-4 mb-8">
          {[
            ['Kunde', project.client],
            ['Bauzeit', project.duration],
            ['Standort', project.location],
          ].map(([label, value]) => (
            <div key={label} className="flex items-center gap-2 px-3 py-2 border border-white/10">
              <span className="font-mono text-[10px] text-[#9CA3AF] uppercase tracking-widest">{label}:</span>
              <span className="font-mono text-xs text-white">{value}</span>
            </div>
          ))}
        </div>

        {/* Specs */}
        <div className="flex gap-2 flex-wrap mb-10">
          {project.specs.map((spec, i) => (
            <span key={i} className="px-3 py-1.5 bg-[#D97706]/10 border border-[#D97706]/30 text-xs font-mono text-[#D97706]">
              {spec}
            </span>
          ))}
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-64 md:h-[28rem] mb-12 overflow-hidden border border-white/10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Intro */}
        <p className="font-mono text-[#C0C0C0] text-base md:text-lg leading-relaxed mb-12">
          {project.story.intro}
        </p>

        {/* Story Sections */}
        <div className="space-y-10">
          {project.story.sections.map((section, i) => (
            <div key={i}>
              <div className="flex items-center gap-4 mb-4">
                <span className="font-mono text-[#D97706] text-xs font-bold">0{i + 1}</span>
                <h2 className="text-lg md:text-xl font-display font-black uppercase">{section.heading}</h2>
              </div>
              <p className="font-mono text-[#9CA3AF] text-sm md:text-base leading-relaxed pl-10">
                {section.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 pt-10 border-t border-white/10 text-center">
          <h3 className="text-xl font-display font-black uppercase mb-3">Dein Container – deine Story</h3>
          <p className="font-mono text-[#9CA3AF] text-sm mb-8">Erzähl uns von deiner Idee und wir bauen sie.</p>
          <Link
            to="/kontakt"
            className="inline-block bg-[#D97706] hover:bg-[#B45309] text-white px-8 py-4 font-black text-sm uppercase tracking-widest transition-all"
          >
            Jetzt Projekt anfragen
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectStory;
