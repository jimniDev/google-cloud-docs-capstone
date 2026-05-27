---
name: google-cloud-fix-403-forbidden-access
description: Diagnose and resolve a 403 permission error when calling a Gemini Enterprise endpoint on Vertex AI, including identity detection, IAM role inspection, and role binding.
---

## Clarifying Questions

Before proceeding, the agent should clarify the user's current context:

1.  Is the error occurring when calling the endpoint from **user credentials**
    (e.g., a local script authenticated via `gcloud auth login`) or from a
    **service account** (e.g., a Cloud Run service or a Compute Engine VM)?
2.  What is the **Project ID** where the Vertex AI endpoint is deployed?
3.  What is the **region** of the endpoint (e.g., `us-central1`)?
4.  Are you running the call from **Cloud Shell**, a **local terminal**, or from
    within a deployed service?
5.  Do you have access to the
    [IAM & Admin](https://console.cloud.google.com/iam-admin) console, or do
    you need to use the `gcloud` CLI only?

## Prerequisites

-   **Owner** or **IAM Admin** role
    ([`roles/iam.securityAdmin`](https://docs.cloud.google.com/iam/docs/understanding-roles#iam.securityAdmin)
    or higher) on the project.
-   [Google Cloud CLI](https://docs.cloud.google.com/sdk/docs/install-sdk)
    installed and authenticated, or access to
    [Cloud Shell](https://cloud.google.com/shell/docs).
-   A script or command that reproduces the error (e.g., `test_endpoint.py`).

## Steps

### 1. Identify Which Identity Is Calling the Endpoint

Before changing any permissions, confirm which identity is actually making the
request. A 403 error is tied to a specific principal, and granting the role to
the wrong identity will not resolve the issue.

Run the following to check the currently active identity in your environment:

```bash
gcloud config list account
```

For a **service account** running on Cloud Run or Compute Engine, retrieve the
attached service account instead:

```bash
gcloud run services describe SERVICE_NAME \
  --region=REGION \
  --format="value(spec.template.spec.serviceAccountName)"
```

Note the **email address** of the identity shown. This is the principal that
needs the role binding in the next step.

### 2. Check Current IAM Roles on the Project

Inspect the existing [IAM
policy](https://docs.cloud.google.com/iam/docs/policies) for the project to
confirm whether the identity from Step 1 already has a relevant binding.

```bash
gcloud projects get-iam-policy PROJECT_ID \
  --flatten="bindings[].members" \
  --filter="bindings.members:PRINCIPAL_EMAIL" \
  --format="table(bindings.role)"
```

Replace `PROJECT_ID` with your project ID and `PRINCIPAL_EMAIL` with the
identity email from Step 1.

If the output is **empty**, or does not include `roles/aiplatform.user` or a
broader role such as `roles/aiplatform.admin`, the identity lacks permission to
call Vertex AI endpoints. Proceed to Step 3.

If a relevant role is already present, the error may have a different cause —
for example, a
[VPC Service Controls](https://cloud.google.com/vpc-service-controls/docs/overview)
restriction or an
[Organization Policy](https://cloud.google.com/resource-manager/docs/organization-policy/overview).
Contact your platform team before proceeding.

### 3. Grant Vertex AI User Role to the Identity

Grant the
[`roles/aiplatform.user`](https://docs.cloud.google.com/vertex-ai/docs/general/access-control#aiplatform.user)
role to the principal identified in Step 1. This role provides the minimum
permissions required to call prediction endpoints.

For a **user account**:

```bash
gcloud projects add-iam-policy-binding PROJECT_ID \
  --member="user:USER_EMAIL" \
  --role="roles/aiplatform.user"
```

For a **service account**:

```bash
gcloud projects add-iam-policy-binding PROJECT_ID \
  --member="serviceAccount:SA_EMAIL" \
  --role="roles/aiplatform.user"
```

IAM policy changes propagate within **60 seconds** in most cases, though
occasionally up to 7 minutes. Wait at least one minute before proceeding to
Step 4.

Note: If your organization enforces
[least privilege](https://docs.cloud.google.com/iam/docs/using-iam-securely#least_privilege),
consider creating a
[custom IAM role](https://docs.cloud.google.com/iam/docs/creating-custom-roles)
scoped to only `aiplatform.endpoints.predict` instead of granting the full
`aiplatform.user` role.

### 4. Re-run test_endpoint.py to Verify Access

Re-run your test script or the command that originally triggered the error to
confirm that the permission change has taken effect.

```bash
python3 test_endpoint.py
```

**Expected output:**

```
Endpoint access successful!
{'predictions': [...]}
```

If the error persists after waiting 2–3 minutes, re-verify the identity with:

```bash
gcloud config list
```

Confirm the `account` and `project` fields match the principal and project where
the role was granted. If they do not match, re-authenticate with:

```bash
gcloud auth login
gcloud config set project PROJECT_ID
```

Then re-run the test script.

## Validation Logic

Use this logic to determine if the 403 error has been successfully resolved:

-   **Correct identity confirmed:** Does `gcloud config list` show the account
    and project that match the endpoint's project?
-   **Role binding present:** Does `gcloud projects get-iam-policy PROJECT_ID`
    include `roles/aiplatform.user` (or higher) for the calling principal?
-   **Endpoint access restored:** Does `test_endpoint.py` (or equivalent) return
    a successful prediction response without a `PERMISSION_DENIED` error?
