import { useState } from 'react';
import { Link } from 'react-router';
import { Footer } from './Footer';
import { MaterialIcon } from './MaterialIcon';

export function SkillsPage() {
  const [skillMdOpen, setSkillMdOpen] = useState(false);
  const skillBlocks = [
    {
      markdown: `---
## Step 1: Identify the error context

Capture the full error message and note:
- Resource being accessed (e.g., project, bucket, API)
- Identity making the request (user, service account)
- Action being attempted (read, write, deploy)

Example error:`,
      outside: `403 PERMISSION_DENIED: Caller does not have permission`
    },
    {
      markdown: `---
## Step 2: Verify the active identity

Check which identity is being used:
---`,
      outside: `gcloud auth list`
    },
    {
      markdown: `If using a service account:`,
      outside: `gcloud config get-value account`
    },
    {
      markdown: `Confirm this matches the identity in the error.

---

## Step 3: Inspect IAM permissions

Check IAM roles for the resource:`,
      outside: `gcloud projects get-iam-policy <PROJECT_ID>`
    },
    {
      markdown: `Or for more specific resources (e.g., Cloud Storage):`,
      outside: `gsutil iam get gs://<BUCKET_NAME>`
    },
    {
      markdown: `Look for:
- Missing roles
- Incorrect member bindings
- Conflicting policies

---

## Step 4: Add required role (if missing)

Grant the minimum required role:`,
      outside: `gcloud projects add-iam-policy-binding <PROJECT_ID>\n--member="user:<EMAIL>"\n--role="roles/<ROLE_NAME>"`
    },
    {
      markdown: `Common roles:
- roles/viewer
- roles/editor
- roles/storage.objectViewer
- roles/run.invoker

---

## Step 5: Validate API access

Ensure the required API is enabled:`,
      outside: `gcloud services enable <API_NAME>`
    },
    {
      markdown: `Example:`,
      outside: `gcloud services enable run.googleapis.com`
    },
    {
      markdown: `---

## Step 6: Re-test the action

Retry the original command or request.

If the error persists:
- Wait for IAM propagation (can take up to a few minutes)
- Double-check resource-level permissions

---

## Step 7: Apply least privilege

Once resolved:
- Remove overly broad roles (e.g., Editor)
- Replace with more specific roles

---

## Troubleshooting tips

- Use Policy Troubleshooter:
  https://cloud.google.com/iam/docs/troubleshooting-access

- Check audit logs for denied requests:
  Cloud Logging → Filter by \`status.code=7\`

- Confirm organization policies are not blocking access

---

## When to use this skill

Use the **fix-403-permission-error** skill when:
- You see \`403 PERMISSION_DENIED\`
- A deployment or API call fails due to access issues
- You’re unsure which IAM role is required

---

## Expected outcome

By the end of this skill, you will:
- Identify the missing permission
- Grant the correct IAM role
- Successfully complete your original task`,
      outside: null
    }
  ];

  return (
    <main className="flex-1 overflow-y-auto bg-white relative">
      <div className="mx-auto max-w-7xl px-6 pb-36 pt-12 lg:px-12">
        
        {/* Breadcrumbs */}
        <nav className="mb-12 flex text-sm text-gray-500" aria-label="Breadcrumb">
          <ol className="inline-flex items-center">
            <li className="inline-flex items-center">
              <a href="#" className="inline-flex items-center hover:text-blue-600 transition-colors">
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <MaterialIcon name="chevron_right" size={18} className="text-gray-400 mx-0.5" />
                <span className="text-gray-900 font-medium">Skills</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="relative flex flex-col items-stretch justify-between gap-12 lg:flex-row lg:items-start lg:gap-16">
          <div className="flex-1">
            {/* Header Section */}
            <div className="mb-28">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
                  GENAI-CONTENT SKILLS FOR GOOGLE
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight mb-6">
                Skills
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl">
                Skills transform Google Cloud Documentation from static information into actionable, reusable workflows that help users complete tasks faster and with more confidence.
              </p>

              {/* Go to library CTA pill */}
              <Link
                to="/skills/library"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: '#EAF2FD',
                  border: '1px solid #BDDAF9',
                  borderRadius: 9999,
                  padding: '12px 12px 12px 22px',
                  textDecoration: 'none',
                  marginTop: 32,
                  width: 'fit-content',
                  transition: 'background 120ms ease-out, box-shadow 120ms ease-out',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = '#D2E3FC';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(26,115,232,0.15)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = '#EAF2FD';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                <span style={{ fontSize: 15, color: '#1A73E8', lineHeight: '22px' }}>
                  <strong style={{ fontWeight: 600 }}>Go to library</strong>
                </span>
                <span style={{
                  width: 32, height: 32, borderRadius: 9999,
                  background: '#1A73E8',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, marginLeft: 16,
                }}>
                  <MaterialIcon name="arrow_forward" size={16} color="white" />
                </span>
              </Link>
            </div>

            <div className="flex flex-col gap-20 lg:flex-row lg:gap-32">
              {/* Left Column: Code Table & Landing Page Content */}
              <div className="flex min-w-0 flex-1 flex-col gap-36">
            
            {/* Introduction Section */}
            <div className="prose prose-lg max-w-none space-y-12 text-gray-600">
              <h2 className="text-xl font-medium text-gray-900 mb-4 mt-0">What's a skill</h2>
              <p className="mb-6">
                A skill is a structured bundle of guidance, steps, and resources designed to help users accomplish a specific goal—whether that's setting up a project, deploying a model, connecting services, or optimizing performance. Instead of navigating multiple pages and piecing together information, users can follow a skill to move from intent to execution in a clear, guided way.
              </p>
              
              <div className="mt-28 mb-28 rounded-2xl border border-blue-100 bg-blue-50/50 p-10">
                <h3 className="text-xl font-medium text-gray-900 mb-6 flex items-center gap-3">
                  <MaterialIcon name="smart_toy" size={24} className="text-blue-500" />
                  Empowering both Humans and AI Agents
                </h3>
                <p className="mb-6">
                  Skills can be used by both humans and AI agents (e.g., in Vertex AI), enabling:
                </p>
                <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <MaterialIcon name="bolt" size={20} className="text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span><strong className="font-medium text-gray-900">Faster task completion</strong> through step-by-step, goal-oriented workflows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MaterialIcon name="account_tree" size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
                    <span><strong className="font-medium text-gray-900">Reduced cognitive load</strong> by eliminating the need to reconstruct information across documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MaterialIcon name="shield" size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong className="font-medium text-gray-900">Consistent and reliable execution</strong> based on trusted, official sources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MaterialIcon name="auto_awesome" size={20} className="text-purple-500 flex-shrink-0 mt-0.5" />
                    <span><strong className="font-medium text-gray-900">Adaptive support</strong> that works for both beginners (structured guidance) and advanced users (efficient, direct actions)</span>
                  </li>
                </ul>
              </div>

              <h3 className="mt-0 mb-4 text-xl font-medium text-gray-900">Inside a Skill</h3>
              <p className="mb-6">Each skill focuses on a specific task or workflow and can include:</p>
              <div className="mb-0 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
                  <MaterialIcon name="check_circle" size={24} className="text-blue-500 mb-3" />
                  <h4 className="font-medium text-gray-900 mb-2">Clear instructions</h4>
                  <p className="text-sm text-gray-500">Step-by-step guidance and clear decision points.</p>
                </div>
                <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
                  <MaterialIcon name="search" size={24} className="text-green-500 mb-3" />
                  <h4 className="font-medium text-gray-900 mb-2">Relevant links</h4>
                  <p className="text-sm text-gray-500">Direct connections to required documentation and tools.</p>
                </div>
                <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
                  <MaterialIcon name="terminal" size={24} className="text-purple-500 mb-3" />
                  <h4 className="font-medium text-gray-900 mb-2">Examples</h4>
                  <p className="text-sm text-gray-500">Ready-to-use commands, configurations, or templates.</p>
                </div>
                <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
                  <MaterialIcon name="verified_user" size={24} className="text-orange-500 mb-3" />
                  <h4 className="font-medium text-gray-900 mb-2">Validation</h4>
                  <p className="text-sm text-gray-500">Steps to confirm successful completion of tasks.</p>
                </div>
              </div>

              <h3 className="mt-28 mb-4 text-xl font-medium text-gray-900">Example</h3>

              {/* Example SKILL.md — foldable, under Example */}
              <div className="mb-0 overflow-hidden rounded-xl border border-gray-200">
                <button
                  onClick={() => setSkillMdOpen(o => !o)}
                  className="w-full flex items-center justify-between px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                >
                  <span className="font-medium text-gray-900">Example SKILL.md</span>
                  <MaterialIcon
                    name="keyboard_arrow_down"
                    size={18}
                    className="text-gray-500 transition-transform duration-200"
                    style={{ transform: skillMdOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </button>

                {skillMdOpen && (
                  <div className="px-6 py-5 bg-white border-t border-gray-200">
                    <div className="space-y-4">
                      {skillBlocks.map((block, idx) => (
                        <div key={idx}>
                          <div className="relative group bg-blue-50/50 border border-blue-100 rounded-xl p-5 mb-2">
                            <button className="absolute top-3 right-3 text-gray-400 hover:text-blue-600 transition-colors opacity-0 group-hover:opacity-100" title="Copy code">
                              <MaterialIcon name="content_copy" size={16} />
                            </button>
                            <pre className="font-mono text-sm text-gray-800 whitespace-pre-wrap m-0 leading-relaxed">{block.markdown}</pre>
                          </div>
                          {block.outside && (
                            <div className="px-2 py-1 font-mono text-sm text-gray-600 whitespace-pre-wrap">
                              {block.outside}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Remove old standalone Example SKILL.md section — replaced above */}
            {/* <div className="mb-16">
              <h3 className="text-xl font-medium text-gray-900 mt-12 mb-6">Example SKILL.md</h3>
              
              <div className="space-y-4">
                {skillBlocks.map((block, idx) => (
                  <div key={idx}>
                    <div className="relative group bg-blue-50/50 border border-blue-100 rounded-xl p-5 mb-2">
                      <button className="absolute top-3 right-3 text-gray-400 hover:text-blue-600 transition-colors opacity-0 group-hover:opacity-100" title="Copy code">
                        <Copy className="w-4 h-4" />
                      </button>
                      <pre className="font-mono text-sm text-gray-800 whitespace-pre-wrap m-0 leading-relaxed">{block.markdown}</pre>
                    </div>
                    {block.outside && (
                      <div className="px-2 py-1 font-mono text-sm text-gray-600 whitespace-pre-wrap">
                        {block.outside}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div> */}

            {/* Use Cases Section */}
            <div className="mb-0">
              <h2 className="mb-6 text-xl font-medium text-gray-900">What can you do with skills?</h2>
              <p className="mb-14 text-lg text-gray-600">
                Skills support a wide range of common actions across Google Cloud, including:
              </p>

              <div className="grid gap-12 md:grid-cols-2">
                {[
                  {
                    title: "Getting started",
                    links: ["Set up projects", "Configure environments", "Enable services"],
                    icon: <MaterialIcon name="bolt" size={20} className="text-blue-500" />
                  },
                  {
                    title: "Building and deploying",
                    links: ["Launch applications", "Models", "Infrastructure"],
                    icon: <MaterialIcon name="database" size={20} className="text-green-500" />
                  },
                  {
                    title: "Connecting systems",
                    links: ["Integrate services", "APIs", "Data pipelines"],
                    icon: <MaterialIcon name="account_tree" size={20} className="text-purple-500" />
                  },
                  {
                    title: "Configuring and customizing",
                    links: ["Adjust settings", "Parameters", "Environments"],
                    icon: <MaterialIcon name="code" size={20} className="text-orange-500" />
                  },
                  {
                    title: "Automating workflows",
                    links: ["Create repeatable processes", "Scale operations"],
                    icon: <MaterialIcon name="smart_toy" size={20} className="text-indigo-500" />
                  },
                  {
                    title: "Monitoring and improving",
                    links: ["Track performance", "Optimize systems"],
                    icon: <MaterialIcon name="search" size={20} className="text-teal-500" />
                  },
                  {
                    title: "Exploring capabilities",
                    links: ["Learn features", "Guided workflows", "Hands-on workflows"],
                    icon: <MaterialIcon name="auto_awesome" size={20} className="text-rose-500" />
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition-colors">
                    <div className="flex-shrink-0 mt-1">{item.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 mb-1">{item.title}</h4>
                      {item.links && (
                        <ul className="text-sm space-y-0 mt-2">
                          {item.links.map((link, i) => (
                            <li key={i} className="leading-tight">
                              <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">{link}</a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary Section */}
            <div className="rounded-3xl border border-blue-100 bg-blue-50/50 p-12 text-gray-900 md:p-16">
              <div className="max-w-3xl">
                <h2 className="mb-8 text-3xl font-medium">How skills help</h2>
                <p className="mb-12 text-lg text-gray-600">
                  By turning documentation into modular, task-oriented experiences, skills allow users to:
                </p>
                <ul className="space-y-6">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <span className="text-lg text-gray-800">Start from a clear goal instead of searching for information</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <span className="text-lg text-gray-800">Stay in their workflow without unnecessary context switching</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold">3</span>
                    </div>
                    <span className="text-lg text-gray-800">Execute tasks with confidence using trusted, structured guidance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Outline Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="pl-4 border-l border-gray-200 sticky top-24 pt-2">
              <h2 className="font-semibold text-gray-900 mb-4 text-xs uppercase tracking-wider text-left">On this page</h2>
              <nav className="space-y-4 text-left">
                <a href="#" className="block text-sm text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  What's a skill
                </a>
                <a href="#" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors pl-4">
                  Inside a Skill
                </a>
                <a href="#" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors pl-4">
                  Example
                </a>
                <a href="#" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors pl-4">
                  Example SKILL.md
                </a>
                <a href="#" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  What can you do with skills?
                </a>
                <a href="#" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  How skills help
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}