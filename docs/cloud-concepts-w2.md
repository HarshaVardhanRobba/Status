# Cloud Concepts - Week 2

Written from own understanding, not from a console tour.

## IaaS, PaaS, SaaS

- **IaaS (Infrastructure as a Service).** Rent raw compute — a Virtual
  Machine, disk, network — and manage the OS, runtime, and everything
  above it yourself. Provider owns the hardware; you own patching and
  scaling. Example shape: an EC2 instance you SSH into and configure by
  hand.
- **PaaS (Platform as a Service).** Rent a place to run code — push a
  repo or a container, the platform handles the OS, scaling, and
  networking. You own the app and its config; provider owns the runtime
  underneath it. This project's Next.js host and Trigger.dev worker are
  both this shape: deploy a build, platform runs it.
- **SaaS (Software as a Service).** Rent the finished application —
  nothing to deploy, no runtime to think about, just an account and a
  UI or API. Clerk (auth) and the DB host's dashboard are consumed this
  way: use the product, do not run it.

## Region, account, IAM identity

- **Region.** A physical location a cloud provider runs infrastructure
  in (e.g. us-east-1). Picking one is a tradeoff between latency to
  users, data-residency rules, and which services are available there.
- **Account.** The billing and isolation boundary a provider gives one
  tenant — resources inside one account do not leak into another by
  default. Same shape as this project's own Organization concept
  (docs/Week_2/glossary.md), one level up the stack.
- **IAM identity.** A named actor (user, service, or role) a cloud
  provider can attach permissions to. Nothing gets access by being
  "logged in" alone — a policy has to name the identity and the action
  it may take on a resource.

## Deployment model by Week 10

Leaning PaaS: Vercel for the Next.js app plus Trigger.dev Cloud for
workers — closest to current setup. Alternative in the same PaaS shape:
Railway or Fly.io, different vendor, same rent-a-platform tradeoff.
Falls back to raw IaaS (e.g. AWS EC2) only if a specific control need
shows up before Week 10. Still undecided which, no commitment yet.
