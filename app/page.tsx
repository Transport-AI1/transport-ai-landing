
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  CheckCircle2,
  Globe2,
  Layers3,
  MessageSquare,
  MousePointer2,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Globe2,
    title: "Páginas web que convierten",
    description:
      "Diseños rápidos, modernos y adaptados a móvil, pensados para convertir visitas en oportunidades comerciales.",
  },
  {
    number: "02",
    icon: Bot,
    title: "Inteligencia artificial",
    description:
      "Asistentes inteligentes que responden preguntas, presentan tus servicios y ayudan a tus clientes a dar el siguiente paso.",
  },
  {
    number: "03",
    icon: Workflow,
    title: "Automatización de procesos",
    description:
      "Conecta tareas y herramientas para reducir el trabajo manual y dedicar más tiempo a hacer crecer tu negocio.",
  },
];

const benefits = [
  "Una propuesta de valor clara desde el primer segundo",
  "Diseño adaptado a móviles, tabletas y ordenadores",
  "Llamadas a la acción estratégicamente colocadas",
  "Contacto directo y sencillo por WhatsApp",
];

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b12] text-white selection:bg-cyan-300 selection:text-slate-950">
      <header className="relative z-20 border-b border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
              <Layers3 size={22} />
            </span>
            <span>
              <span className="block text-lg font-bold tracking-tight">
                TRANSPORT<span className="text-cyan-300"> AI</span>
              </span>
              <span className="block text-[9px] tracking-[0.28em] text-slate-500">
                DIGITAL GROWTH STUDIO
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            <a href="#servicios" className="transition hover:text-white">
              Servicios
            </a>
            <a href="#metodo" className="transition hover:text-white">
              Cómo trabajamos
            </a>
            <a href="#resultados" className="transition hover:text-white">
              Ventajas
            </a>
          </nav>

          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
          >
            Hablemos
            <ArrowUpRight
              size={16}
              className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </header>

      <section className="relative">
        <div className="pointer-events-none absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-cyan-500/[0.10] blur-[130px]" />
        <div className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-600/[0.12] blur-[130px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-32">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-4 py-2 text-xs font-medium text-cyan-200">
              <Sparkles size={14} />
              TECNOLOGÍA PARA EMPRESAS QUE QUIEREN CRECER
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.06] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Convierte más visitas en{" "}
              <span className="bg-gradient-to-r from-cyan-200 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                oportunidades reales.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              Creamos experiencias digitales que presentan mejor tu negocio,
              automatizan tareas y ayudan a transformar el interés de tus
              clientes en nuevas oportunidades comerciales.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contacto"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-cyan-300 px-7 py-4 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200"
              >
                Solicitar una propuesta
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 font-medium text-white transition hover:border-white/35 hover:bg-white/[0.04]"
              >
                Explorar soluciones
                <ArrowDown size={17} />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-white/10 pt-7 text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-cyan-300" />
                Soluciones a medida
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-cyan-300" />
                Diseño responsive
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-cyan-300" />
                Tecnología escalable
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-[36px] bg-gradient-to-br from-cyan-400/10 to-blue-500/10 blur-2xl" />

            <div className="relative rounded-[28px] border border-white/10 bg-[#101620]/95 p-4 shadow-2xl shadow-black/40 sm:p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200">
                    <Target size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Growth overview</p>
                    <p className="mt-1 text-xs text-slate-500">
                      Panel de captación · Vista conceptual
                    </p>
                  </div>
                </div>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] text-emerald-300">
                  DEMO
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4">
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="text-xs">Disponibilidad</span>
                    <Globe2 size={16} className="text-cyan-300" />
                  </div>
                  <p className="mt-4 text-2xl font-semibold">24/7</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Tu negocio online
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4">
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="text-xs">Automatización</span>
                    <Zap size={16} className="text-cyan-300" />
                  </div>
                  <p className="mt-4 text-2xl font-semibold">Smart</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Menos tareas manuales
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">
                      Experiencia del cliente
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      De la primera visita al contacto
                    </p>
                  </div>
                  <TrendingUp size={20} className="text-cyan-300" />
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    { label: "Descubre tu oferta", width: "100%" },
                    { label: "Comprende el valor", width: "78%" },
                    { label: "Solicita información", width: "58%" },
                  ].map((step, index) => (
                    <div key={step.label}>
                      <div className="mb-2 flex items-center justify-between text-xs">
                        <span className="text-slate-300">{step.label}</span>
                        <span className="text-slate-500">
                          0{index + 1}
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-blue-400"
                          style={{ width: step.width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.06] p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200">
                  <MessageSquare size={19} />
                </div>
                <div>
                  <p className="text-sm font-medium">
                    Cada visita tiene una oportunidad
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Una propuesta clara facilita el siguiente paso.
                  </p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="ml-auto shrink-0 text-cyan-300"
                />
              </div>
            </div>

            <div className="absolute -bottom-7 -left-3 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#131a25] p-4 shadow-xl sm:flex lg:-left-9">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-400/10 text-blue-300">
                <MousePointer2 size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold">
                  Diseñado para convertir
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Claridad en cada interacción
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.07] bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-7 sm:grid-cols-3 sm:px-8 lg:px-12">
          {[
            {
              icon: Target,
              title: "Objetivo claro",
              text: "Cada sección tiene una función.",
            },
            {
              icon: Sparkles,
              title: "Diseño diferencial",
              text: "Una imagen digital a la altura de tu negocio.",
            },
            {
              icon: Zap,
              title: "Menos fricción",
              text: "Facilita el contacto y el siguiente paso.",
            },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-cyan-200">
                <item.icon size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="mt-1 text-sm text-slate-500">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="servicios"
        className="scroll-mt-20 px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-bold tracking-[0.25em] text-cyan-300">
              SOLUCIONES DIGITALES
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Todo lo que necesitas para avanzar.
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              Combinamos diseño, tecnología e inteligencia artificial para
              crear herramientas que responden a las necesidades reales de tu
              empresa.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.045] sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-200 transition group-hover:bg-cyan-300/15">
                    <service.icon size={23} />
                  </div>
                  <span className="text-sm text-slate-600">
                    {service.number}
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-semibold">{service.title}</h3>
                <p className="mt-4 min-h-24 text-sm leading-7 text-slate-400">
                  {service.description}
                </p>
                <a
                  href="#contacto"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white"
                >
                  Consultar solución
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="metodo"
        className="scroll-mt-20 border-y border-white/[0.07] bg-[#0c111a] px-5 py-24 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.25em] text-cyan-300">
              UN PROCESO SENCILLO
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              De la idea a una solución útil.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-slate-400">
              Cada proyecto empieza por entender tu negocio y termina con una
              propuesta adaptada a tus objetivos, recursos y clientes.
            </p>

            <div className="mt-9 space-y-6">
              {[
                {
                  number: "01",
                  title: "Entendemos tu negocio",
                  text: "Analizamos tus necesidades, tus clientes y tus objetivos.",
                },
                {
                  number: "02",
                  title: "Diseñamos la solución",
                  text: "Definimos una propuesta clara, su estructura y las funcionalidades necesarias.",
                },
                {
                  number: "03",
                  title: "Construimos y mejoramos",
                  text: "Desarrollamos la experiencia y acordamos los siguientes pasos contigo.",
                },
              ].map((step) => (
                <div key={step.number} className="flex gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.06] text-sm font-bold text-cyan-200">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101722] p-7 sm:p-10">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/[0.08] blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <ShieldCheck size={25} className="text-cyan-200" />
                <p className="font-semibold">Una solución con sentido</p>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                No se trata de añadir tecnología porque sí. Se trata de
                identificar qué puede ayudar de verdad a tu empresa y construir
                una experiencia que lo haga sencillo.
              </p>
              <div className="mt-8 space-y-4">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex gap-3 text-sm text-slate-300"
                  >
                    <Check
                      size={18}
                      className="mt-0.5 shrink-0 text-cyan-300"
                    />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <a
                href="#contacto"
                className="mt-9 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-4 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
              >
                Cuéntanos tu proyecto
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="resultados"
        className="scroll-mt-20 px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[32px] border border-cyan-300/15 bg-gradient-to-br from-cyan-300/[0.08] via-[#111925] to-blue-500/[0.08] p-8 sm:p-12 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-2xl">
                <p className="mb-4 text-xs font-bold tracking-[0.25em] text-cyan-300">
                  TU PRÓXIMO PASO
                </p>
                <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                  Tu negocio tiene potencial. Hagamos que se vea.
                </h2>
                <p className="mt-5 max-w-xl leading-7 text-slate-400">
                  Cuéntanos qué quieres mejorar y estudiaremos contigo qué
                  solución digital puede encajar mejor.
                </p>
              </div>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-cyan-300 px-7 py-4 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200"
              >
                Empezar una conversación
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className="scroll-mt-20 border-t border-white/[0.08] bg-[#0c111a] px-5 py-24 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.25em] text-cyan-300">
              CONTACTO
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Hablemos de lo que necesitas.
            </h2>
            <p className="mt-5 max-w-lg leading-7 text-slate-400">
              Cuéntanos brevemente tu idea y envíanosla directamente por
              WhatsApp. Así podremos hablar de tu proyecto sin complicaciones.
            </p>

            <div className="mt-9 space-y-5">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-cyan-200">
                  <MessageSquare size={19} />
                </div>
                <div>
                  <p className="font-medium">Contacto directo</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Tu consulta se prepara en WhatsApp.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-cyan-200">
                  <Layers3 size={19} />
                </div>
                <div>
                  <p className="font-medium">Soluciones a medida</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Diseño web, software e inteligencia artificial.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-white/[0.08] px-5 py-7 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <a href="#" className="flex items-center gap-2 text-sm font-bold">
            <Layers3 size={19} className="text-cyan-300" />
            TRANSPORT <span className="text-cyan-300">AI</span>
          </a>
          <p className="text-xs text-slate-500">
            Demostración conceptual de una landing page de captación.
          </p>
          <a
            href="#"
            className="text-xs text-slate-400 transition hover:text-white"
          >
            Volver arriba ↑
          </a>
        </div>
      </footer>
    </main>
  );
}

function ContactForm() {
  const whatsappNumber = "34659980603";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    const message = String(data.get("message") || "").trim();

    const whatsappMessage = [
      "Hola, quiero solicitar información sobre Transport AI.",
      "",
      `Nombre: ${name}`,
      `Email: ${email}`,
      `Empresa: ${company || "No indicada"}`,
      "",
      "Mi proyecto:",
      message,
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-[#101722] p-6 sm:p-9"
    >
      <div className="mb-7">
        <h3 className="text-xl font-semibold">Cuéntanos tu proyecto</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Completa tus datos y envíanos tu consulta por WhatsApp.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Nombre *
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Tu nombre"
            className="w-full rounded-xl border border-white/10 bg-[#080d15] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="tu@empresa.com"
            className="w-full rounded-xl border border-white/10 bg-[#080d15] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="company"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Empresa (opcional)
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            placeholder="Nombre de tu empresa"
            className="w-full rounded-xl border border-white/10 bg-[#080d15] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            ¿Qué necesitas mejorar? *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Cuéntanos brevemente qué tienes en mente..."
            className="w-full resize-y rounded-xl border border-white/10 bg-[#080d15] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60"
          />
        </div>
      </div>

      <label className="mt-5 flex items-start gap-3 text-xs leading-5 text-slate-400">
        <input
          type="checkbox"
          required
          className="mt-1 accent-cyan-300"
        />
        He leído la política de privacidad y acepto que se utilicen mis datos
        para responder a esta consulta.
      </label>

      <button
        type="submit"
        className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-4 font-bold text-slate-950 transition hover:bg-[#48e080]"
      >
        Enviar por WhatsApp
        <Send size={17} />
      </button>

      <p className="mt-4 text-center text-xs leading-5 text-slate-500">
        WhatsApp se abrirá con el mensaje preparado. Tendrás que pulsar
        enviar para recibirlo.
      </p>
    </form>
  );
}
