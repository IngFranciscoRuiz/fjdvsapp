export default function LandingFabrikApp() {
  const features = [
    {
      title: "100% Offline",
      desc: "Funciona sin internet. Tus datos se quedan en tu dispositivo.",
      icon: OfflineIcon,
    },
    {
      title: "Importar / Exportar / Restablecer",
      desc: "Control total de tus datos con un par de toques.",
      icon: SyncIcon,
    },
    {
      title: "Producción con checklist",
      desc: "Calcula cantidades por lote y marca ingredientes agregados.",
      icon: ChecklistIcon,
    },
    {
      title: "Inventario con semáforo",
      desc: "Alertas visuales de stock bajo para no detener producción.",
      icon: GaugeIcon,
    },
    {
      title: "Sincronización interna de costos",
      desc: "Si cambias el precio de un ingrediente, las fórmulas se actualizan automáticamente.",
      icon: SyncIcon,
    }
  ];

  const faqs = [
    {
      q: "¿La app funciona sin internet?",
      a: "Sí. FabrikApp es 100% offline. Puedes respaldar e importar tus datos cuando quieras.",
    },
    {
      q: "¿Cuánto cuesta?",
      a: "300 MXN al año (precio de introducción) con 7 días de prueba gratis (versión completa).",
    },
    {
      q: "¿Pierdo mis datos si reinstalo?",
      a: "No si exportas tu respaldo antes. Luego puedes importar el archivo en el nuevo dispositivo.",
    },
    {
      q: "¿Para quién está pensada?",
      a: "Para pequeños y medianos fabricantes de productos de limpieza, químicos y manufactura.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="text-lg font-semibold tracking-tight">FabrikApp</span>
          </div>
          <nav className="hidden gap-8 md:flex text-sm text-slate-200">
            <a href="#features" className="hover:text-white">Funciones</a>
            <a href="#screens" className="hover:text-white">Vistas</a>
            <a href="#pricing" className="hover:text-white">Precio</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#download" className="rounded-xl bg-white/10 px-3 py-2 text-sm hover:bg-white/20">Descargar</a>
            <a href="#cta" className="rounded-xl bg-emerald-500 px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-emerald-400">Prueba gratis 7 días</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Controla tu fábrica de limpieza y producción
              <span className="block text-emerald-400">sin hojas de cálculo.</span>
            </h1>
            <p className="mt-4 text-slate-300">
              FabrikApp te ayuda a gestionar fórmulas, inventario, producción y costos de manera automática. 100% offline, con importar/exportar y restablecer datos cuando lo necesites.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a id="cta" href="#download" className="rounded-2xl bg-emerald-500 px-5 py-3 font-semibold text-slate-900 hover:bg-emerald-400">Empieza tu prueba de 7 días</a>
              <a href="#features" className="rounded-2xl border border-white/20 px-5 py-3 font-semibold hover:bg-white/5">Ver funciones</a>
            </div>
            <p className="mt-3 text-xs text-slate-400">Sin tarjeta • Sin internet • Puedes exportar tus datos</p>
          </div>
          <div>
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-1 rounded-[32px] bg-emerald-500/20 blur-2xl" />
              <div className="relative rounded-[32px] border border-white/10 bg-slate-900/60 p-4 shadow-2xl">
                <PhoneMock />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-t border-white/10 bg-slate-900/40">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-8 md:grid-cols-3">
          <TrustItem title="+100L por lote sin errores" subtitle="Checklist de producción" icon={ChecklistIcon} />
          <TrustItem title="Nunca más te quedas sin insumo" subtitle="Semáforo de inventario" icon={GaugeIcon} />
          <TrustItem title="Tus costos siempre actualizados" subtitle="Sincronización interna" icon={SyncIcon} />
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold md:text-4xl">Todo lo que necesitas para producir sin pausas</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-300">
          Diseñado para fabricantes de productos de limpieza, químicos y manufactura que quieren control total y simplicidad.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
              <div className="mb-3 inline-flex rounded-xl bg-emerald-500/15 p-3">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SCREENS */}
      <section id="screens" className="bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Así se ve trabajar con FabrikApp</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-300">Mockups de las pantallas clave. Sustituye estas imágenes por capturas reales de tu app.</p>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <ScreenCard title="Inventario con semáforo" />
            <ScreenCard title="Producción por lotes" />
            <ScreenCard title="Fórmulas y costos" />
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
            <h3 className="text-2xl font-bold">Prueba gratis</h3>
            <p className="mt-2 text-slate-300">Acceso completo por 7 días. Sin tarjeta.</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>• Todas las funciones desbloqueadas</li>
              <li>• Importar y exportar datos</li>
              <li>• Restablecer cuando quieras</li>
            </ul>
            <a href="#download" className="mt-6 inline-block rounded-2xl bg-white/10 px-5 py-3 font-semibold hover:bg-white/20">Empezar prueba</a>
          </div>
          <div className="relative rounded-3xl border border-emerald-400/30 bg-emerald-500/10 p-8 ring-1 ring-inset ring-emerald-400/20">
            <div className="absolute right-6 top-6 rounded-full bg-emerald-400 px-3 py-1 text-xs font-bold text-slate-900">Precio de introducción</div>
            <h3 className="text-2xl font-bold">Plan anual</h3>
            <div className="mt-2 flex items-end gap-2">
              <span className="text-5xl font-extrabold">$300</span>
              <span className="mb-1 text-sm text-slate-300">MXN / año</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>• 100% offline, datos en tu dispositivo</li>
              <li>• Producción sin límites</li>
              <li>• Soporte por email</li>
            </ul>
            <a href="#download" className="mt-6 inline-block rounded-2xl bg-emerald-500 px-5 py-3 font-semibold text-slate-900 hover:bg-emerald-400">Comprar ahora</a>
            <p className="mt-2 text-xs text-slate-400">Menos de $0.85 MXN al día.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold md:text-4xl">Preguntas frecuentes</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-300">
          Todo lo que necesitas saber sobre FabrikApp antes de empezar.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <h3 className="text-lg font-semibold text-white">{faq.q}</h3>
              <p className="mt-2 text-sm text-slate-300">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="download" className="border-t border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h3 className="text-3xl font-bold">Listo para producir sin pausas</h3>
          <p className="mx-auto mt-2 max-w-2xl text-slate-300">Descarga FabrikApp desde la Play Store y empieza tu prueba gratuita de 7 días.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <StoreBadge kind="play" />
            <a href="#" className="rounded-2xl border border-white/15 px-4 py-2 text-sm hover:bg-white/5">Ver video demo</a>
          </div>
          <p className="mt-3 text-xs text-slate-400">¿No tienes Play Store? Escríbenos para obtener el APK.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Logo />
              <span className="font-semibold">FabrikApp</span>
            </div>
            <p className="mt-2 text-sm text-slate-300">Gestión de inventario, fórmulas y producción. 100% offline.</p>
          </div>
          <div className="text-sm text-slate-300">
            <div className="font-semibold text-white">Producto</div>
            <ul className="mt-2 space-y-1">
              <li><a href="#features" className="hover:underline">Funciones</a></li>
              <li><a href="#screens" className="hover:underline">Vistas</a></li>
              <li><a href="#pricing" className="hover:underline">Precio</a></li>
            </ul>
          </div>
          <div className="text-sm text-slate-300">
            <div className="font-semibold text-white">Legal</div>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="hover:underline">Términos</a></li>
              <li><a href="#" className="hover:underline">Privacidad</a></li>
              <li><a href="#" className="hover:underline">Soporte</a></li>
            </ul>
          </div>
        </div>
        <div className="pb-10 text-center text-xs text-slate-400">© {new Date().getFullYear()} FabrikApp. Todos los derechos reservados.</div>
      </footer>
    </div>
  );
}

// ===== Mock components & icons (sin dependencias externas) =====
function Logo() {
  return (
    <div className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-500 text-slate-900 font-black">
      F
    </div>
  );
}

function TrustItem({ title, subtitle, icon: Icon }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-5">
      <div className="rounded-xl bg-white/10 p-3"><Icon className="h-6 w-6" /></div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-slate-300">{subtitle}</div>
      </div>
    </div>
  );
}

function ScreenCard({ title }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
      <div className="aspect-[4/7] w-full rounded-xl bg-gradient-to-br from-slate-800 to-slate-700" />
      <div className="mt-3 font-semibold">{title}</div>
      <div className="text-sm text-slate-300">Coloca aquí tu captura real.</div>
    </div>
  );
}

function StoreBadge({ kind }) {
  return (
    <a href="#" className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-black/40 px-4 py-2">
      <svg viewBox="0 0 512 512" className="h-6 w-6" aria-hidden>
        <path fill="currentColor" d="M325.3 234.3L104.6 13.6C97 6 84.7 11.3 84.7 22.3V490c0 11 12.3 16.3 19.9 8.7l220.7-220.7c4.7-4.7 4.7-12.3 0-17z"/>
        <path fill="currentColor" d="M357.3 202.3l34.5-34.5c7.6-7.6 20.5-2.2 20.5 8.5v159.4c0 10.7-12.9 16.1-20.5 8.5l-34.5-34.5-32-32c-4.7-4.7-4.7-12.3 0-17l32-32z"/>
      </svg>
      <div className="text-left">
        <div className="text-[10px] leading-none text-slate-300">Disponible en</div>
        <div className="-mt-0.5 text-sm font-semibold">Google Play</div>
      </div>
    </a>
  );
}

function OfflineIcon(props) {
  return (
    <svg viewBox="0 0 24 24" className="text-emerald-400" {...props}>
      <path fill="currentColor" d="M12 3a9 9 0 109 9h-2a7 7 0 11-7-7V3z"/>
      <path fill="currentColor" d="M12 7a5 5 0 105 5h-2a3 3 0 11-3-3V7z"/>
    </svg>
  );
}

function SyncIcon(props) {
  return (
    <svg viewBox="0 0 24 24" className="text-emerald-400" {...props}>
      <path fill="currentColor" d="M12 6V3L8 7l4 4V8a4 4 0 014 4h2a6 6 0 00-6-6zm-6 6a6 6 0 006 6v3l4-4-4-4v3a4 4 0 01-4-4H6z"/>
    </svg>
  );
}

function ChecklistIcon(props) {
  return (
    <svg viewBox="0 0 24 24" className="text-emerald-400" {...props}>
      <path fill="currentColor" d="M9 11l3 3L22 4l-2-2-8 8-3-3-2 2zm-5 3h8v2H4v-2zm0 4h12v2H4v-2z"/>
    </svg>
  );
}

function GaugeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" className="text-emerald-400" {...props}>
      <path fill="currentColor" d="M12 4a9 9 0 00-9 9h2a7 7 0 1114 0h2a9 9 0 00-9-9zm-1 9V8h2v5h-2zm-6 5h14v2H5v-2z"/>
    </svg>
  );
}

function PhoneMock() {
  return (
    <div className="relative mx-auto w-64">
      {/* Phone frame */}
      <div className="relative rounded-[32px] border-8 border-slate-800 bg-slate-900 p-2 shadow-2xl">
        {/* Screen */}
        <div className="aspect-[9/19.5] w-full rounded-[24px] bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 p-4">
          {/* Status bar */}
          <div className="flex items-center justify-between text-xs text-white">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <div className="h-1 w-4 rounded-full bg-white/80"></div>
              <div className="h-1 w-4 rounded-full bg-white/60"></div>
              <div className="h-1 w-4 rounded-full bg-white/40"></div>
            </div>
          </div>
          
          {/* App content mock */}
          <div className="mt-4 space-y-3">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="h-6 w-20 rounded bg-emerald-500/20"></div>
              <div className="h-6 w-6 rounded-full bg-emerald-500"></div>
            </div>
            
            {/* Search bar */}
            <div className="h-8 w-full rounded-lg bg-white/10"></div>
            
            {/* Cards */}
            <div className="space-y-2">
              <div className="h-12 rounded-lg bg-white/5 border border-white/10"></div>
              <div className="h-12 rounded-lg bg-white/5 border border-white/10"></div>
              <div className="h-12 rounded-lg bg-emerald-500/20 border border-emerald-500/30"></div>
            </div>
            
            {/* Bottom nav */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-around">
              <div className="h-1 w-8 rounded-full bg-emerald-500"></div>
              <div className="h-1 w-8 rounded-full bg-white/20"></div>
              <div className="h-1 w-8 rounded-full bg-white/20"></div>
              <div className="h-1 w-8 rounded-full bg-white/20"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Home indicator */}
      <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-white/60"></div>
    </div>
  );
}
