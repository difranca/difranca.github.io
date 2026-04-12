---
keywords: [kubernetes, k8s, job, cronjob, batch, task, workload]
title: Jobs and CronJobs | Kubernetes | Cloud | Tech-Notes
sidebar_label: Jobs / CronJobs
---

# Jobs and CronJobs

## Jobs

A Job creates one or more Pods and ensures that a specified number of them successfully terminate.

- Pods are not restarted once they complete successfully
- If a Pod fails, the Job creates a new Pod to replace it
- When the specified number of completions is reached, the Job is complete
- Deleting a Job cleans up the Pods it created

:::note More Information

- https://kubernetes.io/docs/concepts/workloads/controllers/job/

:::

<br/>

### Example

```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: data-migration
spec:
  completions: 1
  backoffLimit: 3
  template:
    spec:
      containers:
      - name: migrate
        image: my-app:latest
        command: ["python", "migrate.py"]
      restartPolicy: Never
```

<br/>

### Configuration

- `completions`: number of Pods that must complete successfully (default: 1)
- `parallelism`: number of Pods that can run in parallel (default: 1)
- `backoffLimit`: number of retries before marking the Job as failed (default: 6)
- `activeDeadlineSeconds`: maximum time the Job can run before being terminated
- `restartPolicy`: must be `Never` or `OnFailure` (not `Always`)

<br/>

## CronJobs

A CronJob creates Jobs on a repeating schedule using cron syntax.

- Schedule format: `minute hour day-of-month month day-of-week`
- Useful for periodic tasks like backups, report generation, and cleanup

:::note More Information

- https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/

:::

<br/>

### Example

```yaml
apiVersion: batch/v1
kind: CronJob
metadata:
  name: nightly-backup
spec:
  schedule: "0 2 * * *"
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: backup
            image: backup-tool:latest
            command: ["backup.sh"]
          restartPolicy: OnFailure
```

<br/>

### Configuration

- `concurrencyPolicy`: how to handle concurrent Jobs
  - `Allow` (default): allows concurrent Jobs
  - `Forbid`: skips the new Job if the previous one is still running
  - `Replace`: cancels the current Job and starts a new one
- `startingDeadlineSeconds`: deadline for starting the Job if it misses the scheduled time
- `successfulJobsHistoryLimit`: number of completed Jobs to keep (default: 3)
- `failedJobsHistoryLimit`: number of failed Jobs to keep (default: 1)

:::note More Information

- https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/#cron-job-limitations

:::
