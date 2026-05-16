---
title: 'Getting Started with Laravel 11'
slug: 'getting-started-laravel-11'
excerpt: 'A comprehensive guide to setting up your first Laravel 11 project with best practices, new directory structure, and powerful features.'
date: '2024-03-20'
tags: ['Laravel', 'PHP', 'Backend', 'Tutorial']
published: true
coverImage: '/assets/tour-package-engine.png'
---

# Getting Started with Laravel 11

Laravel 11 brings exciting new features and a streamlined developer experience. In this guide, we'll set up a project from scratch, explore the new directory structure, and build a simple API endpoint.

## Prerequisites

Before diving in, make sure you have the following installed:

- **PHP 8.2+** — Laravel 11 requires PHP 8.2 as the minimum version
- **Composer** — PHP dependency manager
- **Node.js 18+** — For frontend asset compilation
- **MySQL 8.0+** or **PostgreSQL 15+** — Database

## Installation

Create a new Laravel 11 project using Composer:

```bash
composer create-project laravel/laravel my-app
cd my-app
php artisan serve
```

Your application will be running at `http://localhost:8000`.

## The New Directory Structure

Laravel 11 introduced a significantly simplified directory structure. The `app/Http/Middleware` directory is gone — middleware is now registered in `bootstrap/app.php`:

```php
// bootstrap/app.php
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->alias([
            'admin' => \App\Http\Middleware\EnsureIsAdmin::class,
        ]);
    })
    ->create();
```

## Building a Simple API

Let's create a Task API with a model, migration, and controller.

### Step 1: Generate the Model

```bash
php artisan make:model Task -mcr
```

This creates the model, migration, and resource controller in one command.

### Step 2: Define the Migration

```php
// database/migrations/xxxx_create_tasks_table.php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();
            $table->enum('status', ['pending', 'in_progress', 'completed'])->default('pending');
            $table->timestamp('due_date')->nullable();
            $table->timestamps();
        });
    }
};
```

### Step 3: Create the Controller

```php
// app/Http/Controllers/TaskController.php
namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class TaskController extends Controller
{
    public function index(): JsonResponse
    {
        $tasks = Task::orderBy('created_at', 'desc')->paginate(15);
        return response()->json($tasks);
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'status' => 'in:pending,in_progress,completed',
            'due_date' => 'nullable|date|after:today',
        ]);

        $task = Task::create($validated);
        return response()->json($task, 201);
    }

    public function show(Task $task): JsonResponse
    {
        return response()->json($task);
    }

    public function update(Request $request, Task $task): JsonResponse
    {
        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'status' => 'in:pending,in_progress,completed',
        ]);

        $task->update($validated);
        return response()->json($task);
    }

    public function destroy(Task $task): JsonResponse
    {
        $task->delete();
        return response()->json(null, 204);
    }
}
```

### Step 4: Register Routes

```php
// routes/api.php
use App\Http\Controllers\TaskController;

Route::apiResource('tasks', TaskController::class);
```

## Key Improvements in Laravel 11

| Feature             | Laravel 10 | Laravel 11           |
| ------------------- | ---------- | -------------------- |
| Min PHP Version     | 8.1        | 8.2                  |
| Directory Structure | Full       | Simplified           |
| Middleware          | Kernel.php | bootstrap/app.php    |
| Config Files        | 15+ files  | On-demand publish    |
| Health Check        | Manual     | Built-in `/up` route |

## What's Next?

- Add authentication with **Laravel Sanctum**
- Implement **Queues** for background jobs
- Set up **Laravel Reverb** for real-time features

Stay tuned for Part 2 where we'll add authentication and deploy to production!
