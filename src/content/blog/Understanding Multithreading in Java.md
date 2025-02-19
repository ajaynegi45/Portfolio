---
title: 'Understanding Multithreading in Java'
description: 'When it comes to running multiple tasks on a computer, the terms multitasking and multithreading often pop up. But what do they really mean, and how do they relate to the Java programming language? Before we dive into the intricacies of multithreading, let’s first understand a few foundational concepts.'
pubDate: 'Feb 19 2025'
heroImage: '/blog/Multithreading.svg'
substack: 'https://codiescoder.substack.com/p/understanding-multithreading-in-java'
---

When it comes to running multiple tasks on a computer, the terms **multitasking** and **multithreading** often pop up.
But what do they really mean, and how do they relate to the Java programming language? Before we dive into the
intricacies of **multithreading**, let’s first understand a few foundational concepts.

* * *

### The Building Blocks of a Computer's Task Management

At the heart of every computer is the **CPU** (Central Processing Unit)—often called the brain of the computer. It’s
responsible for executing instructions, performing calculations, and managing everything that runs on your system. In
other words, the CPU handles all the tasks your computer needs to perform.

#### What is a Core?

Modern CPUs aren’t just single-task processors; they have **cores**. Think of each core as a mini-brain that can handle
its own set of tasks. For example, a quad-core processor can run **four** different tasks simultaneously. Imagine this:
one core manages your web browser, another plays music, another handles a download, and the fourth manages background
system updates—all at the same time!

#### Program vs. Process

A **program** is a set of instructions that tell your computer what to do. For example, Microsoft Word is a program
designed to help you create and edit documents.

When you open a program, it doesn’t just run by itself. The operating system creates a **process** to handle its
execution. So, when you launch Microsoft Word, it becomes a running process in the operating system—essentially **an
active instance of the program**.

#### What is a Thread?

Inside each process, there are smaller units of execution called **threads**. Think of a thread as a line of activity
within a program. A process can have multiple threads, all working together but able to perform different tasks
independently.

For instance, in a web browser like **Google Chrome**, each tab might run in its own thread, allowing you to browse
different websites simultaneously without interruptions.

> Each thread requires an allocation of stack memory whose default size ranges from 64 KB to 1 MB, depending on the OS.



![](https://substack-post-media.s3.amazonaws.com/public/images/d6fd63be-e557-415e-892d-7bbe6a456090_1448x836.jpeg)


* * *

### What is Multitasking?

Now, let’s talk about **multitasking**—the ability to run multiple tasks at once. If you’re on a **single-core CPU**,
multitasking works by switching between tasks so rapidly that you feel like everything is running at the same time. This
process is known as **time-sharing**.

In **multi-core CPUs**, real multitasking happens. The operating system can assign each task to a different core,
allowing them to run truly in parallel, which results in better performance.

For example, you might be listening to music, downloading a file, and browsing the web all at once. Each of these tasks
can be distributed across different cores, improving efficiency.

* * *

### Introduction to Multithreading

Here’s where things get interesting—**multithreading**.

At a high level, multithreading refers to executing **multiple threads** within a single process **concurrently**. This
allows a single application to perform several tasks at once. For example, in a web browser, separate threads may handle
things like rendering the page, processing JavaScript, and managing user input all at the same time. This makes the
application more responsive and efficient.

#### **Why is Multithreading Important?**

The main benefit of multithreading is **efficiency**. By breaking tasks into smaller, manageable threads, your computer
can utilize its CPU resources better, especially in multi-core systems.

* * *

How Does Multithreading Work in Java?
-------------------------------------

In Java, multithreading is built into the language. **Every thread in Java** is controlled by an object of the
`java.lang.Thread` class. This class helps the thread know what tasks it should perform and when to stop.

When you run a program in Java, there’s always a special thread called the **main thread** that starts the program. This
thread runs the `main()` method, which is where your program begins. Here’s a simple illustration:

1. **Main Thread**: When you run a Java application, a thread is automatically created to execute the `main()` method.
   This is your **main thread**.

2. **Additional Threads**: If you want to do other things in parallel, you can create new threads.

### How Do We Create Threads in Java?

There are two main ways to create threads in Java:

1. **By implementing the** `Runnable` **interface**

2. **By extending the** `Thread` **class**

Let’s dive deeper into each method and understand why and when you might choose one over the other.

### 1\. Creating Threads by Implementing the `Runnable` Interface

The `Runnable` interface is a simple way to create threads in Java. It’s like writing a to-do list, where you define the
tasks you want the thread to do. When a thread is created using `Runnable`, it doesn’t directly extend the `Thread`
class. Instead, it implements the `Runnable` interface and overrides the `run()` method to specify the code that will
run on the thread.

```java
class MyTask implements Runnable {
    public void run() {
        // Code that you want the thread to execute
        System.out.println("Task is running!...");
    }
}

// You can then create a new thread and pass an instance of MyTask to it
public class Main {
    public static void main(String[] args) {
        MyTask task = new MyTask();
        Thread thread = new Thread(task);
        thread.start(); // Starts a new thread to run the task
    }
}  
```


#### Why Use `Runnable`?

* **No Multiple Inheritance**: Java doesn’t support multiple inheritance. If you extend the `Thread` class, your class
  can’t extend any other class. But if you use `Runnable`, your class can still extend another class and do other things
  as well. So, if your class needs to inherit from another class, **using** `Runnable` **is a better choice**.

* **Flexibility**: If you only care about making your code run in a thread, implementing `Runnable` is often more
  lightweight and doesn’t add unnecessary overhead.

### 2\. Creating Threads by Extending the `Thread` Class

Another way to create a thread is by directly extending the `Thread` class. This is the more traditional way of working
with threads in Java. You create a new class that extends `Thread`, and override the `run()` method to define the tasks
you want the thread to perform.

```java
class MyTask extends Thread {
    public void run() {
        // Code that you want the thread to execute
        System.out.println("Task is running!");
    }
}

// Create a new instance of MyTask and start the thread
public class Main {
    public static void main(String[] args) {
        MyTask task = new MyTask();
        task.start(); // Starts a new thread to run the task
    }
}
 ```

#### Why Use `Thread`?

* **Simple and Direct**: If your class doesn't need to inherit from any other class, extending `Thread` is a simpler
  approach. It’s direct, and all thread-related methods (like `start()`, `sleep()`, etc.) are already available.

* **Slightly Overhead**: If your class needs to do more than just run a thread (i.e., extend another class), then this
  method might not be the best choice because it forces your class to extend `Thread`.

### Why Choose One Over the Other?

Now that you know how to create threads in Java, you might wonder, “Which method should I use?” Here’s the basic rule of
thumb:

* **Use** `Runnable` **when** you want flexibility. For example, if your class needs to extend another class or if you
  don’t want the overhead of the `Thread` class.

* **Use** `Thread` **when** you need a simple solution and don’t need to extend any other class.

**Thread Lifecycle**
--------------------

A Java thread goes through several states as it is created, executed, and eventually ends. Here’s how it works:

* **New:** When you create a thread (for example, by calling a constructor of `Thread` or implementing `Runnable`), it
  is in the “new” state. At this point, the thread exists in your program’s memory but is not yet scheduled for
  execution by the Java Virtual Machine (JVM).

* **Runnable:** Once you call the `start()` method, the thread becomes runnable. This means it is ready to run and is
  waiting in a queue for the CPU to pick it up. Note that “runnable” does not necessarily mean the thread is running at
  that exact moment. The thread scheduler, which is part of the JVM and underlying operating system, decides which
  runnable thread gets CPU time. This scheduling can vary by platform and by thread priority.

* **Running:** When the thread scheduler picks your thread from the runnable queue, it starts executing the code in its
  `run()` method. In many cases, “running” is considered a subset of “runnable”—only one thread can actually be
  executing on a given CPU core at any moment. If your machine has multiple cores, several threads may truly run
  simultaneously.

* **Blocked/Waiting/Timed Waiting:** A thread is in this state when it is waiting for a resource or for another thread
  to perform an action. While running, a thread may need to pause for various reasons:

    * **Blocked:** The thread is waiting to acquire a lock (for example, when entering a synchronized block).

    * **Waiting:** The thread is waiting indefinitely for a specific condition to occur, typically because it called
      `wait()` and is waiting for a notification (using `notify()` or `notifyAll()`).

    * **Timed Waiting:** The thread is paused for a specified amount of time (for example, when calling
      `sleep(long millis)` or `join(long millis)`).

* **Terminated:** Once a thread completes its task—whether it reaches the end of the `run()` method or is interrupted—it
  enters the terminated state. A terminated thread cannot be restarted. Proper cleanup and resource management (such as
  closing files or releasing locks) should be handled before a thread finishes.

![](/blog/Thread-Lifecycle.svg "Thread Lifecycle")

_Thread Lifecycle_


**Thread methods**
------------------

1. **start( ):** This method tells the JVM to schedule your thread for execution. It creates a new call stack for the
   thread and then calls the `run()` method. (Tip: Never call `run()` directly if you want concurrent execution.)

2. **run( )**: The entry point for the thread. When the thread is started, the `run()` method is invoked. If the thread
   was created using a class that implements `Runnable`, the `run()` method will execute the `run()` method of that
   `Runnable` object. Override this method to define what the thread should do when it runs. Although it contains your
   code, calling it directly executes the code in the current thread rather than in a new one.

3. **sleep(long millis):** Pauses the current thread for a specified number of milliseconds. This is useful for delaying
   execution or simulating time-consuming tasks. Always be prepared to handle an `InterruptedException`.

4. **join():** Makes one thread wait for another to finish. For example, if you have a main thread that must wait for a
   background thread to complete, you call `join()` on the background thread.

5. **yield():** A hint to the scheduler that the current thread is willing to pause and let other threads run. However,
   the scheduler may ignore this hint, so its behavior is platform-dependent. `Thread.yield()` is a static method

6. **interrupt():** Sets an internal flag that tells the thread it should stop what it’s doing—especially useful if the
   thread is sleeping or waiting. Many blocking methods will throw an `InterruptedException` when this flag is set.

7. **setPriority(int newPriority):** Assigns a priority (from 1 to 10) to the thread. Higher-priority threads are more
   likely to be chosen by the scheduler, but thread priority is only a hint and may not strictly control execution order
   on all systems.

8. **setDaemon(boolean):** Marks a thread as a daemon thread. Daemon threads run in the background (for example, for
   tasks like garbage collection) and do not prevent the JVM from exiting when all non-daemon threads have finished.

```java
public class ThreadDemo {

    static class MyThread extends Thread {
        public MyThread(String name) {
            super(name); // Sets the thread's name
        }
        
        @Override
        public void run() {
            System.out.println("[" + getName() + "] Starting. Priority: " + getPriority());
            
            // Display current thread info using currentThread()
            Thread current = Thread.currentThread();
            System.out.println("[" + current.getName() + "] is running (via currentThread()).");
            
            // Loop to simulate work, using sleep() and yield()
            for (int i = 1; i <= 5; i++) {
                System.out.println("[" + getName() + "] Loop iteration " + i);
                try {
                    // Pause for 500 milliseconds
                    Thread.sleep(500);
                } catch (InterruptedException e) {
                    System.out.println("[" + getName() + "] Interrupted during sleep");
                    return; // Exit if interrupted
                }
                // Yield gives a hint to the scheduler to switch to another thread
                Thread.yield();
            }
            System.out.println("[" + getName() + "] Finished.");
        }
    }

    // A runnable task that demonstrates interruption.
    static class InterruptibleTask implements Runnable {
        @Override
        public void run() {
            System.out.println("[" + Thread.currentThread().getName() + "] Starting Interruptible Task");
            try {
                // Sleep for 3000ms to simulate a long task.
                Thread.sleep(3000);
                System.out.println("[" + Thread.currentThread().getName() + "] Completed without interruption");
            } catch (InterruptedException e) {
                System.out.println("[" + Thread.currentThread().getName() + "] Interrupted during sleep");
            }
            System.out.println("[" + Thread.currentThread().getName() + "] Task finished");
        }
    }

    public static void main(String[] args) throws InterruptedException {
        // Display main thread info using currentThread()
        System.out.println("Main thread starting. Name: " + Thread.currentThread().getName());
        
        // 1. Create and start a custom thread (MyThread)
        MyThread thread1 = new MyThread("Worker-1");
        thread1.setPriority(Thread.MAX_PRIORITY); // Set high priority (10)
        thread1.start();
        
        // 2. Create and start an interruptible thread using Runnable
        Thread thread2 = new Thread(new InterruptibleTask(), "Worker-2");
        thread2.setPriority(Thread.MIN_PRIORITY); // Set low priority (1)
        thread2.start();
        
        // 3. Use join() to wait for thread1 to finish
        System.out.println("Main thread waiting for " + thread1.getName() + " to finish.");
        thread1.join();
        System.out.println(thread1.getName() + " has finished. Current state: " + thread1.getState());
        
        // 4. Check if thread2 is alive using isAlive()
        System.out.println(thread2.getName() + " is alive: " + thread2.isAlive());
        
        // 5. Interrupt thread2 after a short pause (to demonstrate interrupt())
        Thread.sleep(1000);
        System.out.println("Main thread interrupting " + thread2.getName());
        thread2.interrupt();
        
        // Wait for thread2 to finish
        thread2.join();
        System.out.println(thread2.getName() + " has finished. Current state: " + thread2.getState());
        
        // 6. Create and start a daemon thread
        Thread daemonThread = new Thread(() -> {
            while (true) {
                System.out.println("[" + Thread.currentThread().getName() + "] Daemon thread running in background...");
                try {
                    Thread.sleep(700);
                } catch (InterruptedException e) {
                    System.out.println("[" + Thread.currentThread().getName() + "] Daemon thread interrupted");
                    break;
                }
            }
        }, "Daemon-Thread");
        daemonThread.setDaemon(true); // Mark this thread as daemon (must be set before start)
        daemonThread.start();
        
        // Let the daemon run for a short period
        Thread.sleep(2000);
        System.out.println("Main thread ending. Daemon thread will terminate automatically when main finishes.");
    }
}
```

Output: 

```java
Main thread starting. Name: main
Main thread waiting for Worker-1 to finish.
[Worker-2] Starting Interruptible Task
[Worker-1] Starting. Priority: 10
[Worker-1] is running (via currentThread()).
[Worker-1] Loop iteration 1
[Worker-1] Loop iteration 2
[Worker-1] Loop iteration 3
[Worker-1] Loop iteration 4
[Worker-1] Loop iteration 5
[Worker-1] Finished.
Worker-1 has finished. Current state: TERMINATED
Worker-2 is alive: true
[Worker-2] Completed without interruption
[Worker-2] Task finished
Main thread interrupting Worker-2
Worker-2 has finished. Current state: TERMINATED
[Daemon-Thread] Daemon thread running in background...
[Daemon-Thread] Daemon thread running in background...
[Daemon-Thread] Daemon thread running in background...
Main thread ending. Daemon thread will terminate automatically when main finishes.
```


Thread Pools: Managing Multiple Threads Efficiently
---------------------------------------------------

While creating individual threads in Java can be straightforward, there’s a better way to manage threads when you have a
lot of tasks to handle. This is where **thread pools** come into play.

A **thread pool** is essentially a collection of pre-created threads that are available for use. Instead of creating a
new thread each time a task needs to be executed, you can reuse threads from the pool, which can greatly improve
performance, reduce overhead, and simplify thread management.

#### Why Use Thread Pools?

1. **Resource Efficiency**: Creating and destroying threads is expensive in terms of system resources. A thread pool
   allows you to reuse threads, which helps avoid the overhead of thread creation and destruction each time a task is
   executed.

2. **Improved Performance**: Thread pools allow you to control the number of threads running concurrently, preventing
   your system from becoming overloaded with too many threads. You can set the pool size based on your system’s
   capabilities, optimizing CPU usage.

3. **Simplified Management**: Managing individual threads can quickly become complex, especially as your program scales.
   A thread pool abstracts much of this complexity, providing a simple interface for handling tasks concurrently.

4. **Avoiding Thread Exhaustion**: Without a thread pool, you risk creating more threads than your system can handle.
   This can lead to thread exhaustion, where the system runs out of resources to allocate new threads. Thread pools let
   you set maximum limits, ensuring the system doesn’t get overloaded.

#### How Do Thread Pools Work in Java?

In Java, thread pools are managed through the **Executor framework**, specifically through the `ExecutorService`
interface. The `ExecutorService` provides a higher-level replacement for using the `Thread` class directly and makes it
easy to submit tasks for execution without managing threads manually.

Here’s how you can use a thread pool in Java:

1. **Create a Thread Pool**: You can create a thread pool using the `Executors` class, which provides several methods
   for creating different types of thread pools.

2. **Submit Tasks**: You submit tasks to the thread pool using the `submit()` method, and the tasks will be executed by
   available threads in the pool.

3. **Shutdown**: Once all tasks are finished, you can shut down the pool using `shutdown()` to clean up resources.

Let’s take a look at a simple example:

```java
import java.util.concurrent.*;

class MyTask implements Runnable {
    public void run() { 
        System.out.println("Task is running!"); 
    } 
}

public class Main { 
    public static void main(String[] args) { 
        
        // Create a thread pool with 3 threads 
        ExecutorService executor = Executors.newFixedThreadPool(3); 
        
        // Submit tasks to the thread pool 
        for (int i = 0; i < 5; i++) { 
            executor.submit(new MyTask()); 
        } 
        
        // Shut down the executor after the tasks are completed 
        executor.shutdown(); 
    } 
}
```

### Types of Thread Pools in Java

Java’s `Executors` class provides several types of thread pools, each suited to different scenarios:

1. **Fixed Thread Pool**: A fixed-size pool where a specific number of threads are available. If all threads are busy, new tasks will wait in a queue until a thread becomes available. Useful when you have a predictable load of tasks that require a constant number of threads.

    ```java
   // Pool of 4 threads
   ExecutorService executor = Executors.newFixedThreadPool(4);
   ```

2. **Cached Thread Pool**: A pool that creates new threads as needed but reuses previously constructed threads when they’re available. It’s ideal for applications with a large number of short-lived tasks. Ideal for handling a large number of short-lived tasks where you don’t know how many threads you’ll need upfront.

    ```java
    // Threads are created as needed
    ExecutorService executor = Executors.newCachedThreadPool();
    ```

3. **Single-Threaded Pool**: A pool with a single thread that executes tasks sequentially. This is useful when you need tasks to be executed in a specific order or when shared resources need to be synchronized.

    ```java
    // Only one thread
    ExecutorService executor = Executors.newSingleThreadExecutor();
    ```

4. **Scheduled Thread Pool**: A pool designed for tasks that need to be executed periodically or with a delay. It’s useful for scheduling recurring tasks, such as backups or maintenance jobs.

    ```java
    ScheduledExecutorService executor = Executors.newScheduledThreadPool(2); 
    
    // Execute every 10 seconds
    executor.scheduleAtFixedRate(new MyTask(), 0, 10, TimeUnit.SECONDS);
    ```

### Why Use a Thread Pool Over Individual Threads?

* **Performance**: Reusing threads from a pool is generally faster than creating new threads for each task.

* **Resource Management**: Thread pools allow you to set limits on the number of concurrent threads, avoiding system
  resource exhaustion.

* **Scalability**: Thread pools make it easier to scale your application, especially when dealing with a large number of
  tasks or requests.

* **Simpler Code**: Managing threads manually can be complex. A thread pool abstracts much of the work, making your code
  cleaner and easier to maintain.

### When Should You Use a Thread Pool?

* You have a large number of tasks that are independent of each other (like processing a bunch of files).

* Tasks are short-lived and frequent, making thread creation and destruction too costly.

* You want to limit the number of concurrent threads running to avoid overwhelming the system.

On the flip side, if you only have a handful of long-running tasks, or if thread management is complex for your specific
case, managing threads manually or with custom synchronization might be better suited to your needs.

#### Thread Pool Best Practices

* **Don’t Overload the Pool:** If you create too many threads in your pool, you can exhaust your system resources.
  Always size your pool based on the hardware and the expected workload.

* **Graceful Shutdown:** Always make sure to properly shut down your `ExecutorService` by calling `shutdown()` or
  `shutdownNow()` to allow any pending tasks to finish and clean up resources.

* **Handling Exceptions:** Thread pools can throw exceptions if tasks fail, so it’s important to handle exceptions
  within your tasks or use appropriate exception handling mechanisms like `Future.get()` to catch any issues.

* * *

### Key Takeaways on Thread Pools

* Thread pools help manage and reuse threads, which is much more efficient than creating a new thread for every task.

* Java provides several types of thread pools via the `Executors` class to match different use cases and workloads.

* When using thread pools, always ensure proper pool sizing and graceful shutdown to maintain optimal performance and
  resource usage.

* * *

### Final Thoughts

Whether you’re just getting started or you’re an experienced software engineer, understanding multithreading is key to
writing high-performance applications. From efficient task management to making the most of CPU resources,
multithreading has a lot to offer. But like any tool, it’s essential to understand the underlying principles first to
avoid potential pitfalls when implementing it in your code.

<br/>

_Do you know someone who loves engineering or has a curiosity for tech? 🤔  
Why not share the joy of simplifying complex ideas with them? Forward this newsletter and spread the
knowledge— learning is always better when it’s shared! 🚀_

[Share Codies coder](https://codiescoder.substack.com/?utm_source=substack&utm_medium=email&utm_content=share&action=share)

Thanks for reading **Codies coder!** **[Subscribe](https://codiescoder.substack.com/subscribe)** for free to receive new posts and support my work.
