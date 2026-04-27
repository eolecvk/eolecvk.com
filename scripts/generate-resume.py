#!/usr/bin/env python3
"""Generate two resume PDFs (designed two-column + ATS-safe single-column) from a shared content source."""

from dataclasses import dataclass, field
from pathlib import Path

from weasyprint import HTML


# ============================================================================
# CONTENT — single source of truth for both templates
# ============================================================================

NAME = "Eole Cervenka"
SUBTITLE = "Machine Learning Engineer · Production AI / LLM Systems"

LINKS = [
    ("github.com/eolecvk", "https://github.com/eolecvk"),
    ("linkedin.com/in/eole-cervenka", "https://linkedin.com/in/eole-cervenka"),
    ("eolecvk.com", "https://eolecvk.com"),
]

AT_A_GLANCE = [
    "Cited by Google Research (Muse paper, 2023)",
    "7 years across production ML, LLM systems, and GenAI",
    "Shipped Hollywood VFX deepfake pipeline at Deep Voodoo",
    "Multi-agent LLM systems for legal-document analysis",
]

STACK = [
    "Python", "TypeScript", "PyTorch", "FastAPI", "Next.js",
    "Postgres", "Docker", "GCP / AWS", "LLMs", "RAG", "MCP", "agents",
]


@dataclass
class Role:
    title: str
    company: str
    dates: str
    stage: str = ""
    bullets: list = field(default_factory=list)
    blurb: str = ""
    nested: bool = False
    current: bool = False
    interstitial: bool = False
    highlights: list = field(default_factory=list)


EXPERIENCE = [
    Role(
        title="AI/ML Engineer",
        company="Constellation Finance",
        dates="Mar 2026 – Present",
        stage="Seed: $3.5M",
        current=True,
        highlights=["Multi-agent LLM systems"],
        bullets=[
            "Lead developer on the MCP (Model Context Protocol) product — AI agent access to financial data",
            "Multi-agent extraction pipeline for 200–400 page legal contracts, with Logfire-instrumented research loop",
        ],
    ),
    Role(
        title="AI/ML Engineer",
        company="Entrepreneurial experiments",
        dates="Oct 2024 – Dec 2025",
        bullets=["CreativeRush Media Lab — AI for filmmakers"],
        interstitial=True,
    ),
    Role(
        title="Machine Learning Engineer",
        company="lambda.ai",
        dates="Jun 2022 – Oct 2024",
        stage="Series B → C",
        highlights=["Cited by Google Research"],
        bullets=[
            "Stable Diffusion inference benchmark cited by Google Research (Muse paper, 2023)",
            "Built and optimized the LLM pipeline for news.lambda.ai (AI-generated ML news site)",
            "Published Stable Diffusion finetuning demos on Hugging Face",
        ],
    ),
    Role(
        title="Machine Learning Engineer",
        company="Deep Voodoo · via lambda.ai",
        dates="Jun 2022 – Dec 2023",
        highlights=["Hollywood VFX in production"],
        bullets=[
            "Transitioned a deepfake research pipeline to production",
            "Built reproducible GPU training environments for VFX delivery cycles",
            "R&amp;D in image restoration and controllable image generation",
        ],
    ),
    Role(
        title="AI Software Engineer",
        company="Boston Consulting Group",
        dates="Jun 2019 – Jul 2021",
        highlights=["Big 3 consulting"],
        bullets=[
            "Production data pipelines (PySpark / Pandas) across the major clouds",
            "Built a JFrog-based CI/CD frontend so consultants could self-deploy cloud coding environments",
        ],
    ),
]

EARLIER = [
    ("Pre-seed startup", "2018 – 2019", "Recommender system POC for e-commerce"),
    ("Orange Telecom", "2018", "time-series classification research"),
    ("Pre-seed startup", "2016 – 2017", "NLP analytics, graph community detection"),
]

EDUCATION_MAIN = [
    ("M.S. Machine Learning", "Université Paris Dauphine - PSL", "2017 – 2018"),
    ("MBA", "Bentley University", "2015 – 2016"),
    ("M.Sc. Management", "NEOMA Business School", "2011 – 2014"),
]
EDUCATION_ALSO = []


# ============================================================================
# DESIGN TEMPLATE — two-column sidebar + main, charcoal + restrained green
# ============================================================================

def render_design_html() -> str:
    links_html = '<span class="sep">·</span>'.join(
        f'<a href="{url}">{label}</a>' for label, url in LINKS
    )

    glance_html = "".join(f"<li>{item}</li>" for item in AT_A_GLANCE)
    chips_html = "".join(f'<span class="chip">{tag}</span>' for tag in STACK)

    earlier_html = "".join(
        f'<div class="earlier-row">'
        f'<span class="earlier-name"><strong>{name}</strong> '
        f'<span class="dim">— {desc}</span></span>'
        f'<span class="earlier-dates">{dates}</span>'
        f'</div>'
        for name, dates, desc in EARLIER
    )

    edu_main_rows_html = "".join(
        f'<div class="edu-row">'
        f'<span class="edu-school"><strong>{deg}</strong> · {school}</span>'
        f'<span class="edu-dates">{dates}</span>'
        f'</div>'
        for deg, school, dates in EDUCATION_MAIN
    )
    edu_also_html = " · ".join(
        f"{deg}, {school} · {dates}" for deg, school, dates in EDUCATION_ALSO
    )
    edu_also_block = (
        f'<p class="edu-also">also: {edu_also_html}</p>' if EDUCATION_ALSO else ""
    )

    roles_html = []
    for role in EXPERIENCE:
        if role.interstitial:
            continue  # design PDF: skip; ATS PDF keeps as a normal role
        classes = ["role"]
        if role.nested:
            classes.append("nested")
        if role.current:
            classes.append("current")
        cls = " ".join(classes)
        bullets_html = ""
        if role.bullets:
            bullets_html = "<ul>" + "".join(f"<li>{b}</li>" for b in role.bullets) + "</ul>"
        elif role.blurb:
            bullets_html = f'<p class="blurb">{role.blurb}</p>'
        title_html = role.title
        if role.current:
            title_html = f'<span class="current-dot"></span>{role.title}'
        highlight_html = ""
        if role.highlights:
            pills = "".join(f'<span class="highlight-pill">{h}</span>' for h in role.highlights)
            highlight_html = f'<div class="highlight-pills">{pills}</div>'
        # Combined head row: title + company inline left (with optional stage), dates right
        head_title = (
            f'{title_html}'
            f'<span class="role-company-inline"> — {role.company}</span>'
        )
        if role.stage:
            head_title += f'<span class="role-stage-inline"> · {role.stage}</span>'
        # Tags row: capability/achievement highlights only
        tags_html = ""
        if role.highlights:
            pills = "".join(f'<span class="highlight-pill">{h}</span>' for h in role.highlights)
            tags_html = f'<div class="role-tags">{pills}</div>'
        roles_html.append(
            f'<article class="{cls}">'
            f'  <div class="role-head">'
            f'    <h3 class="role-title">{head_title}</h3>'
            f'    <span class="role-dates">{role.dates}</span>'
            f'  </div>'
            f'  {tags_html}'
            f'  {bullets_html}'
            f'</article>'
        )

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

  @page {{
    size: letter;
    margin: 0.45in 0.5in;
  }}

  * {{ margin: 0; padding: 0; box-sizing: border-box; }}

  body {{
    font-family: 'Inter', -apple-system, sans-serif;
    font-size: 8.5pt;
    line-height: 1.35;
    color: #0E0E12;
  }}

  /* Header */
  .header {{
    padding-bottom: 12pt;
    border-bottom: 1pt solid #0E0E12;
  }}
  .name {{
    font-size: 22pt;
    font-weight: 700;
    letter-spacing: -0.5pt;
    color: #0E0E12;
    line-height: 1.1;
  }}
  .subtitle {{
    font-size: 10pt;
    color: #555;
    margin-top: 2pt;
  }}
  .header-links {{
    margin-top: 5pt;
    font-family: 'JetBrains Mono', monospace;
    font-size: 7.5pt;
    color: #555;
  }}
  .header-links a {{
    color: #555;
    text-decoration: none;
  }}
  .header-links .sep {{
    color: #bbb;
    margin: 0 5pt;
  }}

  /* Single-column body — mirrors the web /resume hero + section flow */
  .body {{
    margin-top: 16pt;
  }}
  .body > section {{
    margin-bottom: 20pt;
  }}
  .body > section:last-child {{
    margin-bottom: 0;
  }}

  /* Hero augments */
  .secondary-role {{
    color: #0E0E12;
    font-weight: 500;
  }}
  .positioning {{
    margin-top: 6pt;
    font-size: 9pt;
    color: #2a2a2e;
    line-height: 1.5;
    max-width: 60em;
  }}
  .pills {{
    display: flex;
    flex-wrap: wrap;
    gap: 3pt;
    margin-top: 6pt;
  }}
  .pill {{
    font-size: 7pt;
    font-weight: 500;
    color: #2a2a2e;
    background: transparent;
    border: 0.5pt solid #C7C7CC;
    padding: 1pt 5pt;
    border-radius: 99pt;
    white-space: nowrap;
  }}

  /* Section labels — same in both columns */
  .section-label {{
    font-size: 8pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8pt;
    color: #0E0E12;
    margin-bottom: 9pt;
    display: flex;
    align-items: center;
    gap: 5pt;
  }}
  .section-label::before {{
    content: "";
    display: inline-block;
    width: 4pt;
    height: 4pt;
    background: #0E0E12;
    border-radius: 0.5pt;
  }}
  /* Demoted section label (Earlier, Selected projects) — no dot, lighter */
  .section-label.demoted {{
    font-size: 7pt;
    font-weight: 600;
    color: #888;
    letter-spacing: 0.6pt;
    margin-bottom: 4pt;
  }}
  .section-label.demoted::before {{
    display: none;
  }}

  /* At-a-glance list */
  .glance {{
    list-style: none;
    padding: 0;
  }}
  .glance li {{
    position: relative;
    padding-left: 10pt;
    margin-bottom: 3pt;
    font-size: 8.5pt;
    color: #2a2a2e;
    line-height: 1.4;
  }}
  .glance li::before {{
    content: "›";
    position: absolute;
    left: 0;
    color: #0E0E12;
    font-weight: 600;
  }}

  /* Stack chips */
  .chips {{
    display: flex;
    flex-wrap: wrap;
    gap: 3pt;
  }}
  .chip {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 7pt;
    font-weight: 500;
    color: #2a2a2e;
    background: #F4F4F6;
    border: 0.5pt solid #E0E0E5;
    padding: 1.5pt 4pt;
    border-radius: 2pt;
    white-space: nowrap;
  }}

  /* Education strip (bottom of main column) */
  .edu-strip {{
    margin-top: 14pt;
    padding-top: 8pt;
    border-top: 0.5pt solid #E5E5E8;
  }}
  .edu-row {{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 8pt;
    margin-bottom: 1pt;
  }}
  .edu-row strong {{
    font-weight: 600;
    color: #0E0E12;
  }}
  .edu-row .edu-school {{
    font-size: 9pt;
    color: #2a2a2e;
  }}
  .edu-row .edu-dates {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 7.5pt;
    color: #888;
    white-space: nowrap;
    flex-shrink: 0;
  }}
  .edu-also {{
    font-size: 7.5pt;
    color: #777;
    line-height: 1.5;
    margin-top: 3pt;
  }}

  /* Selected projects — compact single-line rows */
  .projects-rail {{
    list-style: none;
    padding: 0;
  }}
  .projects-rail li {{
    margin-bottom: 1pt;
    font-size: 8.5pt;
    line-height: 1.4;
  }}
  .projects-rail .proj-title {{
    font-weight: 600;
    color: #0E0E12;
  }}
  .projects-rail .proj-desc {{
    color: #777;
  }}

  /* Earlier roles — compact one-line rows appended to Experience */
  .earlier-block {{
    margin-top: 14pt;
    padding-top: 9pt;
    border-top: 0.5pt dashed #E0E0E5;
  }}
  .earlier-block-label {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 6.5pt;
    text-transform: uppercase;
    letter-spacing: 0.6pt;
    color: #999;
    margin-bottom: 3pt;
  }}
  .earlier-row {{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 8pt;
    margin-bottom: 1pt;
    font-size: 8pt;
    line-height: 1.4;
  }}
  .earlier-row .earlier-name {{
    color: #2a2a2e;
    flex: 1 1 auto;
    min-width: 0;
  }}
  .earlier-row strong {{
    font-weight: 600;
    color: #0E0E12;
  }}
  .earlier-row .dim {{
    color: #777;
  }}
  .earlier-row .earlier-dates {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 7pt;
    color: #888;
    white-space: nowrap;
    flex-shrink: 0;
  }}

  /* Interstitial — bridges chronological gap without taking a role block */
  .interstitial {{
    font-size: 8pt;
    font-style: italic;
    color: #888;
    margin: -3pt 0 7pt 0;
    line-height: 1.4;
  }}
  .interstitial-dates {{
    font-family: 'JetBrains Mono', monospace;
    font-style: normal;
    font-size: 7.5pt;
    color: #555;
  }}

  /* Roles */
  .role {{
    margin-bottom: 11pt;
  }}
  .role:last-child {{
    margin-bottom: 0;
  }}
  .role .current-dot {{
    display: inline-block;
    width: 5pt;
    height: 5pt;
    background: #0E0E12;
    border-radius: 50%;
    margin-right: 5pt;
    vertical-align: middle;
    transform: translateY(-1pt);
  }}
  .role .highlight-pill {{
    display: inline-block;
    font-size: 7pt;
    font-weight: 500;
    color: #2a2a2e;
    background: transparent;
    border: 0.5pt solid #C7C7CC;
    padding: 1pt 5pt;
    border-radius: 99pt;
  }}
  .role-head {{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 8pt;
  }}
  .role-title {{
    font-size: 10.5pt;
    font-weight: 600;
    color: #0E0E12;
  }}
  .role-dates {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 7.5pt;
    color: #888;
    white-space: nowrap;
    flex-shrink: 0;
  }}
  .role-company-inline {{
    font-weight: 400;
    color: #555;
  }}
  .role-stage-inline {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 6.5pt;
    font-weight: 400;
    color: #999;
    margin-left: 3pt;
  }}
  .role-tags {{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 3pt;
    margin-top: 2pt;
    margin-bottom: 2pt;
  }}
  .role ul {{
    list-style: none;
    padding: 0;
    margin-top: 2pt;
  }}
  .role li {{
    position: relative;
    padding-left: 11pt;
    margin-bottom: 2pt;
    color: #2a2a2e;
    line-height: 1.45;
  }}
  .role li::before {{
    content: "—";
    position: absolute;
    left: 0;
    color: #0E0E12;
    font-weight: 600;
  }}
  .role .blurb {{
    color: #2a2a2e;
    line-height: 1.45;
    margin-top: 1pt;
  }}

  /* Nested role (Deep Voodoo) */
  .role.nested {{
    margin-left: 14pt;
    padding-left: 10pt;
    border-left: 1.5pt solid #E0E0E5;
    margin-top: -3pt;
  }}
  .role.nested .role-title {{
    font-size: 9.5pt;
    font-weight: 500;
    color: #555;
  }}
  .role.nested .role-company {{
    font-size: 8.5pt;
    color: #888;
  }}
</style>
</head>
<body>

<header class="header">
  <div class="name">{NAME}</div>
  <div class="header-links">{links_html}</div>
  <p class="positioning">7 years building production AI — LLM systems, generative AI, Hollywood VFX. Currently: legal and financial documents.</p>
</header>

<div class="body">
  <section>
    <h2 class="section-label">Experience</h2>
    {''.join(roles_html)}
    <div class="earlier-block">
      <div class="earlier-block-label">Earlier</div>
      {earlier_html}
    </div>
  </section>

  <section>
    <h2 class="section-label">Education</h2>
    {edu_main_rows_html}
    {edu_also_block}
  </section>
</div>

</body>
</html>
"""


# ============================================================================
# ATS TEMPLATE — single column, semantic HTML, parser-friendly
# ============================================================================

def render_ats_html() -> str:
    links_text = " · ".join(label for label, _ in LINKS)

    skills_text = ", ".join(STACK)

    glance_html = "".join(f"<li>{item}</li>" for item in AT_A_GLANCE)

    earlier_html = "".join(
        f"<li><strong>{name} — {desc}</strong> · {dates}</li>"
        for name, dates, desc in EARLIER
    )

    edu_main_html = "".join(
        f'<h3>{deg} — {school}</h3><p class="dates">{dates}</p>'
        for deg, school, dates in EDUCATION_MAIN
    )

    edu_also_html = "".join(
        f"<li><strong>{deg}</strong> — {school} · {dates}</li>"
        for deg, school, dates in EDUCATION_ALSO
    )
    edu_also_block = f"<ul>{edu_also_html}</ul>" if EDUCATION_ALSO else ""

    roles_html = []
    for role in EXPERIENCE:
        company = role.company
        if role.nested:
            company = f"{company}"  # already includes 'via lambda.ai'
        body_html = ""
        if role.bullets:
            body_html = "<ul>" + "".join(f"<li>{b}</li>" for b in role.bullets) + "</ul>"
        elif role.blurb:
            body_html = f"<p>{role.blurb}</p>"
        roles_html.append(
            f"<h3>{role.title} — {company}</h3>"
            f"<p class=\"dates\">{role.dates}</p>"
            f"{body_html}"
        )

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  @page {{
    size: letter;
    margin: 0.45in 0.55in;
  }}

  * {{ margin: 0; padding: 0; box-sizing: border-box; }}

  body {{
    font-family: 'Inter', -apple-system, sans-serif;
    font-size: 9pt;
    line-height: 1.35;
    color: #1a1a1a;
  }}

  h1 {{
    font-size: 17pt;
    font-weight: 700;
    margin-bottom: 1pt;
  }}

  .subtitle {{
    font-size: 9.5pt;
    color: #444;
    margin-bottom: 2pt;
  }}

  .contact {{
    font-size: 8.5pt;
    color: #444;
    margin-bottom: 6pt;
  }}

  h2 {{
    font-size: 10pt;
    font-weight: 700;
    margin-top: 14pt;
    margin-bottom: 5pt;
    border-bottom: 0.5pt solid #ccc;
    padding-bottom: 2pt;
  }}

  h3 {{
    font-size: 9.5pt;
    font-weight: 600;
    margin-top: 8pt;
    margin-bottom: 0pt;
  }}

  .dates {{
    font-size: 8.5pt;
    color: #555;
    margin-bottom: 1pt;
  }}

  ul {{
    padding-left: 14pt;
    margin-top: 1pt;
    margin-bottom: 2pt;
  }}

  li {{
    margin-bottom: 0.5pt;
  }}

  p {{
    margin-bottom: 2pt;
  }}

  .skills-line {{
    margin-bottom: 2pt;
  }}
</style>
</head>
<body>

<h1>{NAME}</h1>
<p class="subtitle">{SUBTITLE}</p>
<p class="contact">{links_text}</p>

<h2>Summary</h2>
<ul>{glance_html}</ul>

<h2>Skills</h2>
<p class="skills-line">{skills_text}</p>

<h2>Experience</h2>
{''.join(roles_html)}

<h2>Education</h2>
{edu_main_html}
{edu_also_block}

<h2>Earlier Roles</h2>
<ul>{earlier_html}</ul>

</body>
</html>
"""


# ============================================================================
# Entry point
# ============================================================================

def main():
    public_dir = Path(__file__).resolve().parent.parent / "public"

    design_path = public_dir / "resume.pdf"
    HTML(string=render_design_html()).write_pdf(str(design_path))
    print(f"Generated {design_path} ({design_path.stat().st_size / 1024:.0f}KB) — designed two-column")

    ats_path = public_dir / "resume-ats.pdf"
    HTML(string=render_ats_html()).write_pdf(str(ats_path))
    print(f"Generated {ats_path} ({ats_path.stat().st_size / 1024:.0f}KB) — ATS single-column")


if __name__ == "__main__":
    main()
