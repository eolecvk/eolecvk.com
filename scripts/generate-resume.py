#!/usr/bin/env python3
"""Generate resume PDF from HTML template using WeasyPrint."""

import base64
import io
from pathlib import Path

import qrcode
import qrcode.image.svg
from weasyprint import HTML


def make_qr_data_uri(url: str) -> str:
    """Generate a small QR code and return as a base64 data URI PNG."""
    qr = qrcode.QRCode(version=1, box_size=4, border=1, error_correction=qrcode.constants.ERROR_CORRECT_L)
    qr.add_data(url)
    qr.make(fit=True)
    img = qr.make_image(fill_color="black", back_color="white")
    buf = io.BytesIO()
    img.save(buf, format="PNG")
    b64 = base64.b64encode(buf.getvalue()).decode()
    return f"data:image/png;base64,{b64}"


def build_html() -> str:
    qr_github = make_qr_data_uri("https://github.com/eolecvk")
    qr_linkedin = make_qr_data_uri("https://linkedin.com/in/eole-cervenka")
    qr_website = make_qr_data_uri("https://eolecvk.com")
    return (RESUME_HTML
            .replace("{qr_github}", qr_github)
            .replace("{qr_linkedin}", qr_linkedin)
            .replace("{qr_website}", qr_website))


RESUME_HTML = """\
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  @page {
    size: letter;
    margin: 0.4in 0.5in;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'Inter', -apple-system, sans-serif;
    font-size: 8.5pt;
    line-height: 1.35;
    color: #1a1a1a;
  }

  /* Header */
  .header {
    text-align: center;
    margin-bottom: 8pt;
    padding-bottom: 6pt;
    border-bottom: 2px solid #00CC7D;
  }
  .header h1 {
    font-size: 20pt;
    font-weight: 700;
    letter-spacing: -0.5pt;
    margin-bottom: 1pt;
  }
  .header .title {
    font-size: 10pt;
    color: #555;
    font-weight: 500;
    margin-bottom: 3pt;
  }
  .header .links {
    font-size: 8pt;
    color: #444;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8pt;
  }
  .header .links a {
    color: #444;
    text-decoration: none;
  }
  .header .link-item {
    display: inline-flex;
    align-items: center;
    gap: 2pt;
    white-space: nowrap;
  }
  .header .link-item img {
    width: 22pt;
    height: 22pt;
  }
  .header .links .sep {
    margin: 0;
    color: #ccc;
  }

  /* Section */
  h2 {
    font-size: 9pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1pt;
    color: #00AA66;
    margin-top: 7pt;
    margin-bottom: 3pt;
    padding-bottom: 2pt;
    border-bottom: 1px solid #e0e0e0;
  }

  /* Skills */
  .skills .row {
    margin-bottom: 1pt;
  }
  .skills .label {
    font-weight: 600;
    color: #333;
  }
  .skills .value {
    color: #555;
  }

  /* Experience */
  .job {
    margin-bottom: 5pt;
  }
  .job-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 1pt;
  }
  .job-title {
    font-weight: 700;
    font-size: 9pt;
  }
  .job-company {
    font-weight: 500;
    color: #555;
  }
  .job-dates {
    font-size: 8pt;
    color: #777;
    white-space: nowrap;
  }
  .job ul {
    padding-left: 14pt;
    margin-top: 2pt;
  }
  .job li {
    margin-bottom: 1pt;
    color: #333;
  }

  /* Education */
  .edu {
    margin-bottom: 3pt;
  }
  .edu-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .edu-degree {
    font-weight: 700;
    font-size: 9pt;
  }
  .edu-school {
    font-weight: 500;
    color: #555;
  }
  .edu-dates {
    font-size: 8pt;
    color: #777;
  }

  /* Projects */
  .project {
    margin-bottom: 2pt;
  }
  .project-title {
    font-weight: 600;
    color: #1a1a1a;
    text-decoration: none;
  }
  a.project-title:hover {
    color: #00AA66;
  }
  .project-desc {
    color: #555;
  }
</style>
</head>
<body>

<div class="header">
  <h1>Eole Cervenka</h1>
  <div class="title">Machine Learning Engineer</div>
  <div class="links">
    <span class="link-item"><img src="{qr_github}" alt="GitHub QR"/><a href="https://github.com/eolecvk">github.com/eolecvk</a></span>
    <span class="sep">|</span>
    <span class="link-item"><img src="{qr_linkedin}" alt="LinkedIn QR"/><a href="https://linkedin.com/in/eole-cervenka">linkedin.com/in/eole-cervenka</a></span>
    <span class="sep">|</span>
    <span class="link-item"><img src="{qr_website}" alt="Website QR"/><a href="https://eolecvk.com">eolecvk.com</a></span>
  </div>
</div>

<h2>Skills</h2>
<div class="skills">
  <div class="row"><span class="label">Languages &amp; Frameworks:</span> <span class="value">Python, TypeScript, PyTorch, TensorFlow, FastAPI, Flask, React, Next.js</span></div>
  <div class="row"><span class="label">AI / ML:</span> <span class="value">LLMs, RAG, MCP, AI agents, LangChain, Stable Diffusion, fine-tuning, model benchmarking, NLP</span></div>
  <div class="row"><span class="label">Infrastructure:</span> <span class="value">Docker, Kubernetes, GCP, AWS, Azure, CI/CD, PySpark</span></div>
  <div class="row"><span class="label">Data:</span> <span class="value">PostgreSQL, Neo4j, vector databases, data pipelines</span></div>
</div>

<h2>Experience</h2>

<div class="job">
  <div class="job-header">
    <div><span class="job-title">AI/ML Engineer</span> <span class="job-company">— Constellation Finance</span></div>
    <span class="job-dates">Mar 2025 – Present</span>
  </div>
  <ul>
    <li>Full-stack application development for an AI-powered financial platform</li>
    <li>Lead developer on the MCP (Model Context Protocol) product, enabling AI agent integrations with financial data</li>
  </ul>
</div>

<div class="job">
  <div class="job-header">
    <div><span class="job-title">Independent ML Engineer</span> <span class="job-company">— CreativeRush &amp; Projects</span></div>
    <span class="job-dates">Oct 2024 – Present</span>
  </div>
  <ul>
    <li>Co-founded CreativeRush Media Lab, designing AI experiments with film creators</li>
    <li>Built AI-powered applications including a legal CRM system and financial analyst chatbot</li>
  </ul>
</div>

<div class="job">
  <div class="job-header">
    <div><span class="job-title">Machine Learning Engineer</span> <span class="job-company">— lambda.ai</span></div>
    <span class="job-dates">Jun 2022 – Oct 2024</span>
  </div>
  <ul>
    <li>Built and optimized the LLM pipeline for an AI-generated news site (news.lambda.ai)</li>
    <li>Developed GenAI model benchmarks, including an inference benchmark for Stable Diffusion cited by Google Research in the Muse paper</li>
    <li>Published Stable Diffusion finetuning demos on Hugging Face</li>
    <li>Conducted 8 technical interviews, contributing to hiring decisions for ML engineering team growth</li>
    <li>Contracted to Deep Voodoo (Jun 2022 – Dec 2023): led transition of deepfake research pipeline to production for Hollywood VFX, containerized model training, R&amp;D in image restoration and controllable generation</li>
  </ul>
</div>

<div class="job">
  <div class="job-header">
    <div><span class="job-title">AI Software Engineer</span> <span class="job-company">— Boston Consulting Group</span></div>
    <span class="job-dates">Jun 2019 – Jul 2021</span>
  </div>
  <ul>
    <li>Built end-to-end data pipelines using PySpark, Pandas</li>
    <li>Productionized and deployed data applications across diverse client infrastructures (bare-metal, GCP, AWS, Azure)</li>
    <li>Built a CI/CD pipeline using JFrog to let consultants self-deploy cloud-based coding environments via a Dockerfile frontend</li>
  </ul>
</div>

<div class="job">
  <div class="job-header">
    <div><span class="job-title">Data Scientist</span> <span class="job-company">— Prazely</span></div>
    <span class="job-dates">Oct 2018 – Apr 2019</span>
  </div>
  <ul>
    <li>Built a content-based recommender system using Neo4j graph database for an e-commerce platform</li>
  </ul>
</div>

<div class="job">
  <div class="job-header">
    <div><span class="job-title">Research Scientist</span> <span class="job-company">— Orange Telecom</span></div>
    <span class="job-dates">May – Sep 2018</span>
  </div>
  <ul>
    <li>Benchmarked a parameter-free time series classifier against existing models</li>
  </ul>
</div>

<div class="job">
  <div class="job-header">
    <div><span class="job-title">Python Developer</span> <span class="job-company">— Freelance</span></div>
    <span class="job-dates">Jul 2016 – Sep 2017</span>
  </div>
  <ul>
    <li>Built a Twitter analytics web app (Flask) with unsupervised NLP and graph-based community detection</li>
  </ul>
</div>

<h2>Education</h2>

<div class="edu">
  <div class="edu-header">
    <div><span class="edu-degree">M.S. in Mathematics and Computer Science</span> <span class="edu-school">— Université Paris Dauphine - PSL</span></div>
    <span class="edu-dates">2017 – 2018</span>
  </div>
</div>

<div class="edu">
  <div class="edu-header">
    <div><span class="edu-degree">M.B.A.</span> <span class="edu-school">— Bentley University</span></div>
    <span class="edu-dates">2015 – 2016</span>
  </div>
</div>

<div class="edu">
  <div class="edu-header">
    <div><span class="edu-degree">M.S. in Management</span> <span class="edu-school">— NEOMA Business School</span></div>
    <span class="edu-dates">2011 – 2014</span>
  </div>
</div>

<h2>Selected Projects</h2>

<div class="project">
  <a class="project-title" href="https://eolecvk.com/projects/stable-diffusion-benchmark/">All You Need Is One GPU</a> — <span class="project-desc">Inference benchmark for Stable Diffusion, cited by Google Research (2022)</span>
</div>
<div class="project">
  <a class="project-title" href="https://eolecvk.com/projects/stable-diffusion-finetuning/">Text-to-Naruto</a> — <span class="project-desc">Stable Diffusion finetuning demo published on Hugging Face (2022)</span>
</div>
<div class="project">
  <a class="project-title" href="https://eolecvk.com/projects/llm-pipeline/">AI-Powered News Site</a> — <span class="project-desc">Automated LLM pipeline for news aggregation and article generation at news.lambda.ai</span>
</div>

</body>
</html>
"""


def main():
    output = Path(__file__).resolve().parent.parent / "public" / "resume.pdf"
    HTML(string=build_html()).write_pdf(str(output))
    size_kb = output.stat().st_size / 1024
    print(f"Generated {output} ({size_kb:.0f}KB)")


if __name__ == "__main__":
    main()
