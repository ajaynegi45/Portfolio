---
title: 'Docker Architecture'
description: 'Docker has revolutionized how applications are built, shipped, and run by using a technology called “containerization.” Instead of running a whole separate operating system like a virtual machine, Docker runs your application in a container—a lightweight, isolated environment that shares the host’s OS kernel.'
pubDate: 'Apr 21 2025'
heroImage: '/blog/Docker-Architecture.svg'
substack: 'https://codiescoder.substack.com/p/docker-architecture'
---

Docker has revolutionized how applications are built, shipped, and run by using a technology called “containerization.”
Instead of running a whole separate operating system like a virtual machine, Docker runs your application in a
container—a lightweight, isolated environment that shares the host’s OS kernel.

What is Docker and Containerization?
------------------------------------

### The Big Picture

* **Docker** is a platform that helps you package an application along with everything it needs—like libraries and
  settings—so it can run reliably in any environment.

* **Containers** are like small, portable mini-computers inside your computer. They run as isolated processes, but they
  don’t require an entire operating system on their own.

### Containers vs. Virtual Machines

* **Virtual Machines (VMs):** These emulate complete hardware systems and run separate operating systems. They are heavy
  and require more resources.

* **Containers:** These share the host’s operating system kernel and are much lighter, making them faster to start and
  more resource-efficient.

![Virtual Machines vs Containers ](https://substack-post-media.s3.amazonaws.com/public/images/19c2a713-44c2-483d-8974-ecc71da86989_1163x772.webp "Virtual Machines vs Containers ")


Docker Architecture
-------------------

#### Docker Client

* The Docker Client is the part you use. When you type something like `docker run myapp`, it sends that command to the
  Docker Host using a **REST API**. It doesn’t run containers itself — it just tells the **Docker engine** what to do.

#### Docker Host/Server

* When the client says “run this app,” the Docker **Daemon** (also called Docker Engine) starts working.

* Checks if the image is available

    * If not present, it pulls the image from the **Docker Registry**.

    * If available, it uses the image to **create a container**.

* Docker Engine uses several internal components to manage containers:

    * **containerd**: A background service that manages the full container lifecycle (start, stop, delete, etc.)

    * **runc**: lightweight tool used by `containerd` to run containers. It talks directly to the **Linux kernel** using
      **namespaces** (for isolation) and **cgroups** (for resource limits), following the OCI runtime spec.

    * **OCI** (Open Container Initiative): A global standard that Docker, containerd, and runc all follow, so everything
      works smoothly and is compatible.

* An image is a read-only template that includes your application code, libraries, and dependencies. Images are built in
  **Layered Structure** using a mechanism called a union file system.

* A container is an instance of an image. When you run an image, Docker creates a container. Containers share the host’s
  OS kernel but run as isolated processes, so they don’t interfere with each other.

#### Docker Registry

* A **registry** is like a big online storage center for Docker images. The most common one is **Docker Hub**, but you
  can also use private registries.

* You can pull images from a registry to run them or push your own images to share with others.

How Docker Works at a Low Level
-------------------------------

Let’s understand **how containers share the host’s OS kernel**, yet run in completely **isolated environments**, using
the Linux kernel.

Starting around **Docker 1.0 (2014)**, Docker moved away from depending on LXC and introduced its own execution driver
called `libcontainer` (which later became `runc`, the OCI runtime).

After getting instructions from Docker (via `containerd`), `runc` uses **Linux system calls** to set up a container.
These system calls are like direct messages to the Linux kernel. It creates a new container process with:

* **New namespaces** (for isolation)

* **New cgroup assignments** (for resource control)

#### A. Namespaces: The Isolation Tool

* Namespaces are a Linux kernel feature that creates isolated environments. They ensure that a process in one container
  cannot see or affect processes in another container or on the host. To isolate the container from the rest of the
  system, `runc` uses the system call with special flags.

* Namespaces are created for the container via the `unshare` system call

* **Types of Namespaces:**

    * **PID Namespace:** Isolates process IDs so each container thinks it is the only one running.

    * **Network Namespace:** Gives each container its own network stack.

    * **Mount Namespace:** Provides isolated file system views.

    * **Others:** There are additional namespaces for user IDs, inter-process communication (IPC), etc.

#### B. Cgroups (Control Groups): Managing Resources

* After setting up namespaces, `runc` assigns the process to a **cgroup**. It does this by writing to special files in
  `/sys/fs/cgroup/`.

* Cgroups allow Docker to limit, prioritize, and isolate the resources (like CPU, memory, and disk I/O) each container
  can use.

* This ensures that no single container can hog all the resources, making the system more stable and efficient.

#### C. Union File Systems: Layering Made Easy

* Docker sets up the **container’s file system** using a union file system (like OverlayFS, AUFS).

* Each Docker image is made of layers — and Docker doesn’t copy all files. Instead, it mounts the layers together and
  uses **copy-on-write**:

    * Read-only base image layers are shared

    * A writable layer is added on top just for this container

* This is done using system calls like `mount()` and union mount options.

<br/>

_Do you know someone who loves engineering or has a curiosity for tech? 🤔  
Why not share the joy of simplifying complex ideas with them? Forward this newsletter and spread the
knowledge—**learning is always better when it’s shared!** 🚀_

[Share Codies coder](https://codiescoder.substack.com/?utm_source=substack&utm_medium=email&utm_content=share&action=share)

Thanks for reading **Codies coder!** **[Subscribe](https://codiescoder.substack.com/subscribe)** for free to receive new
posts and support my work.