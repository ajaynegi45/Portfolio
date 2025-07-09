---
title: 'Ever Wonder Why Your Containers Just Work Everywhere?'
description: 'Imagine shipping a product worldwide. Boxes go by boat, train, and truck—each designed for one transport method. Chaos, right? Now picture standardized shipping containers fitting seamlessly on any vehicle. That’s exactly what the Open Container Initiative (OCI) did for software.'
pubDate: 'July 09 2025'
heroImage: '/blog/OCI-Example.avif'
substack: 'https://codiescoder.substack.com/p/ever-wonder-why-your-containers-just'
---

Imagine shipping a product worldwide. Boxes go by boat, train, and truck—each designed for one transport method. Chaos, right? Now picture standardized shipping containers fitting seamlessly on any vehicle. That’s exactly what the **Open Container Initiative (OCI)** did for software.

![](https://ajaynegi.web.app/blog/OCI-Example.avif)

### **Why Containers Needed Standardization**

Before 2015, containers were exploding in popularity—thanks largely to Docker. But every platform used its own image format and runtime tools. Want to move a container from Docker to CoreOS? Good luck. This "Babel tower" of incompatible formats stifled innovation and tied users to specific vendors .

Thanks for reading Codies Coder Newsletter! Subscribe for free to receive new posts and support my work.

Enter the OCI. Founded in June 2015 by Docker, CoreOS, and industry leaders like Google and Microsoft, its mission was simple:

> "Create open, vendor-neutral standards so containers run anywhere, regardless of who built them."

Docker kickstarted it by donating its core container format and runtime code— proving this wasn’t just theory, but a practical shift.

### **What is OCI, Really?**

Think of OCI as the "rulebook" for containers. It defines three critical standards:

1. **Runtime Specification (runtime-spec)**

    * Governs how a container runs.

    * Defines setup, execution, and isolation using Linux features like `cgroups` and namespaces.

    * Tools like `runc` (the reference implementation) use this to start/stop containers.

2. **Image Specification (image-spec)**

    * The blueprint for container images.

    * Images are built in **layers** (like a cake). Each layer adds files or changes (e.g., installing Python, then your app).

    * A manifest file stitches layers together, while a config file sets environment variables or commands.

3. **Distribution Specification (distribution-spec)**

    * Rules for pushing/pulling images to registries (like Docker Hub).

    * Uses a standardized HTTP API — so any registry works with any client.

### **OCI Real-World Impact**

OCI standards freed containers from Docker’s orbit. Today, they’re the invisible backbone of modern tech:

* **Kubernetes Compatibility:** Tools like CRI-O (a lightweight Docker alternative) use OCI runtimes to launch Kubernetes pods. No Docker needed.

* **Innovation in Runtimes:**

    * **gVisor:** Adds security "sandboxes" (Google Cloud).

    * **Kata Containers:** Uses lightweight VMs for hardware-level isolation.

    * **Firecracker:** Powers AWS Lambda with micro-VMs.

* **Multi-Architecture Support:**  
  OCI images include manifests for ARM, x86, and more. Build once, run on any chip

### Why Should You Care?

1. **No More Vendor Lock-in**  
   Build an image with Google `kaniko`, store it in AWS ECR, run it on Azure with `runc`—all seamlessly.

2. **Security by Default**  
   Standards ensure images are scanned, signed, and run in isolated environments. OCI `config.json` even controls permissions.

3. **The Innovation Engine**  
   New runtimes (like WebAssembly-based `wasmEdge`) plug into OCI ecosystems. No reinventing the wheel.

### The Future: What’s Next for OCI?

Recent updates hint at where OCI is headed:

* **2024:** Image and Distribution Specs v1.1 improved artifact references (e.g., linking Helm charts to containers).

* **Security Focus:** Projects like `ocicy` verify image signatures before pulling.

* **Beyond Linux:** Runtimes like `runj` now support FreeBSD Jails.

Hungry for more? Dive into the specs at  **[opencontainers.org](https://opencontainers.org/)**

<br/>

_Do you know someone who loves engineering or has a curiosity for tech? 🤔  
Why not share the joy of simplifying complex ideas with them? Forward this newsletter and spread the
knowledge— learning is always better when it’s shared! 🚀_

[Share Codies Coder Newsletter](https://codiescoder.substack.com/?utm_source=substack&utm_medium=email&utm_content=share&action=share)

Thanks for reading **Codies coder!** **[Subscribe](https://codiescoder.substack.com/subscribe)** for free to receive new
posts and support my work.