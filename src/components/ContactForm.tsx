import { useEffect, useState, type FormEvent } from "react";

interface Props {
  formKey?: string;
}

const serviceList = [
  "Image-Film",
  "FPV-Drone",
  "Social-Media-Content",
  "Cinematic-Video",
];

type Toast = { kind: "ok" | "error"; message: string } | null;

export default function ContactForm({ formKey }: Props) {
  const [services, setServices] = useState<string[]>(["Image-Film"]);
  const [timeline, setTimeline] = useState<string>("In 1–3 Monaten");
  const [toast, setToast] = useState<Toast>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3200);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setToast(null);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
    };
  }, [toast]);

  const toggleService = (s: string) =>
    setServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (busy) return;
    setBusy(true);

    const form = e.currentTarget;
    const fd = new FormData(form);

    if (!formKey) {
      setToast({
        kind: "error",
        message:
          "Kontaktformular ist noch nicht konfiguriert — schreiben Sie uns direkt an ehbfilmworks@gmail.com",
      });
      setBusy(false);
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: formKey,
          subject: "Neue Anfrage — EHB Filmworks",
          vorname: fd.get("vorname"),
          nachname: fd.get("nachname"),
          email: fd.get("email"),
          telefon: fd.get("telefon"),
          firma: fd.get("firma"),
          services: services.join(", "),
          message: fd.get("message"),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message ?? `HTTP ${res.status}`);
      setToast({
        kind: "ok",
        message: "Nachricht gesendet — wir melden uns innerhalb von 24 Stunden.",
      });
      form.reset();
      setServices(["Image-Film"]);
      setTimeline("In 1–3 Monaten");
    } catch {
      setToast({
        kind: "error",
        message:
          "Etwas ist schiefgelaufen — schreiben Sie uns direkt an ehbfilmworks@gmail.com",
      });
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <form onSubmit={submit} className="contact-form" noValidate={false}>
        <div className="field-row">
          <div className="field">
            <label htmlFor="vorname">
              Vorname <span className="req">*</span>
            </label>
            <input id="vorname" name="vorname" required placeholder="Max" />
          </div>
          <div className="field">
            <label htmlFor="nachname">
              Nachname <span className="req">*</span>
            </label>
            <input id="nachname" name="nachname" required placeholder="Muster" />
          </div>
        </div>

        <div className="field-row">
          <div className="field">
            <label htmlFor="email">
              Email <span className="req">*</span>
            </label>
            <input
              id="email"
              name="email"
              required
              type="email"
              placeholder="max@firma.ch"
            />
          </div>
          <div className="field">
            <label htmlFor="telefon">Telefon</label>
            <input id="telefon" name="telefon" placeholder="+41 77 527 52 46" />
          </div>
        </div>

        <div className="field">
          <label htmlFor="firma">Firma</label>
          <input id="firma" name="firma" placeholder="Beispiel AG" />
        </div>

        <div className="field">
          <label>Welche Leistung interessiert Sie?</label>
          <div className="chips" role="group" aria-label="Leistungen">
            {serviceList.map((s) => (
              <button
                key={s}
                type="button"
                aria-pressed={services.includes(s)}
                className={"chip" + (services.includes(s) ? " is-on" : "")}
                onClick={() => toggleService(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="field">
          <label htmlFor="message">
            Erzählen Sie uns von Ihrem Projekt <span className="req">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Worum geht's? Welche Geschichte wollen Sie erzählen, welches Publikum erreichen, welches Format? Je konkreter, desto besser unser erster Vorschlag."
          />
        </div>

        <div className="contact-submit">
          <button className="btn" type="submit" disabled={busy}>
            {busy ? "Wird gesendet…" : "Nachricht senden"}{" "}
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </button>
          <small>
            <i
              className="fa-solid fa-shield-halved"
              style={{ color: "var(--accent)", marginRight: 6 }}
              aria-hidden="true"
            ></i>
            Wir antworten innerhalb von 24 Stunden. Keine Newsletter, keine Drittparteien.
          </small>
        </div>
      </form>

      {toast && (
        <div
          className={"toast" + (toast.kind === "error" ? " is-error" : "")}
          role="status"
          aria-live="polite"
        >
          <i
            className={
              toast.kind === "ok"
                ? "fa-solid fa-circle-check"
                : "fa-solid fa-triangle-exclamation"
            }
            aria-hidden="true"
          ></i>
          <span>{toast.message}</span>
          <button type="button" aria-label="Schliessen" onClick={() => setToast(null)}>
            ×
          </button>
        </div>
      )}
    </>
  );
}
