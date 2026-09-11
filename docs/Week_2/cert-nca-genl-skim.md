# Cert skim — NVIDIA-Certified Associate: Generative AI LLMs (NCA-GENL)

Official page:
https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-associate/

## Exam facts

- Duration: 1 hour
- Cost: $125
- Questions: 50-60, multiple choice
- Valid: 2 years from issuance, recertify by retaking
- Level: Associate
- Prerequisite: basic understanding of generative AI and LLMs (no other cert
  required first)

## Topic list 

1. **Core Machine Learning and AI Knowledge — 30%**
   Fundamental techniques for training deep learning models; ML algorithms
   and neural network concepts.
2. **Software Development — 24%**
   Python libraries for LLMs; LLM integration and deployment; common deep
   learning frameworks and data types.
3. **Experimentation — 22%**
   Experiment design and execution; model evaluation and comparison;
   transfer learning applications.
4. **Data Analysis and Visualization — 14%**
   Data preprocessing and feature engineering; GPU-accelerated data
   manipulation; dataset preparation.
5. **Trustworthy AI — 10%**
   Alignment concepts; responsible AI practices; safety in generative AI
   applications.

## Compared against my current stats

### 1. Core Machine Learning and AI Knowledge — 30% — GAP

- **Covers:** fundamental techniques for training deep learning models; ML
  algorithms and neural network concepts.
- **Evidence:** DeepLearning.AI cert (ML, LLMs, GenAI systems); applied
  LangChain/LangGraph agent work. MS coursework listed is Distributed
  Systems/Databases/Data Engineering, not ML theory.
- **Gap:** weakest area against the heaviest exam weight — no evidence of
  how a deep learning model is actually trained (backprop, loss,
  optimization), only applied/API-level LLM use.

### 2. Software Development — 24% — STRONG

- **Covers:** Python libraries for LLMs; LLM integration and deployment;
  common deep learning frameworks and data types.
- **Evidence:** Python, LangChain, LangGraph, Inngest, Docker, CI,
  structured outputs, tool calling — across four shipped projects.
- **Gap:** none significant.

### 3. Experimentation — 22% — PARTIAL

- **Covers:** experiment design and execution; model evaluation and
  comparison; transfer learning applications.
- **Evidence:** DeepEval pipelines in CI (Brand Guardian AI) cover model
  evaluation/comparison directly.
- **Gap:** transfer learning is not evidenced anywhere — no project or
  cert mentions fine-tuning or adapting a pretrained model.

### 4. Data Analysis and Visualization — 14% — GAP

- **Covers:** data preprocessing and feature engineering; GPU-accelerated
  data manipulation; dataset preparation.
- **Evidence:** PySpark, Databricks, ETL/ELT, PostgreSQL/RDS cover
  general data preprocessing.
- **Gap:** GPU-accelerated data manipulation specifically (e.g. RAPIDS,
  cuDF, cuML) is not evidenced — resume's GPU/infra exposure is
  Docker/Azure/AWS/GCP, not NVIDIA's own data-science stack.

### 5. Trustworthy AI — 10% — PARTIAL

- **Covers:** alignment concepts; responsible AI practices; safety in
  generative AI applications.
- **Evidence:** guardrails, hallucination detection, DeepEval checks
  (Brand Guardian AI) map conceptually to safety/responsible-AI
  practices.
- **Gap:** "alignment" as a named concept is not used anywhere; the
  resume's safety work is detection-after-generation, not
  alignment-during-training.

## What to work on before sitting this exam

1. Core ML fundamentals — how a deep learning model actually trains
   (backprop, loss functions, optimizers), not just calling one via an API.
   Highest-weight area (30%) and the current thinnest spot.
2. Transfer learning — fine-tuning or adapting a pretrained model at least
   once, even a small example, to have real grounding for that 22%-weight
   subtopic.
3. NVIDIA's GPU-accelerated data stack (RAPIDS/cuDF/cuML) — resume's data
   tooling is all CPU-side (PySpark, Databricks, Postgres); this exam
   specifically names GPU-accelerated manipulation.
4. Alignment/responsible-AI terminology — resume already does the practical
   work (guardrails, hallucination detection); just needs the vocabulary
   NVIDIA uses (alignment, trustworthy AI) tied to it explicitly.
